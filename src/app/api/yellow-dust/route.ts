import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const authKey = process.env.NEXT_PUBLIC_KMA_API_KEY;
    
    if (!authKey) {
      return NextResponse.json({ error: "KMA API Key is missing" }, { status: 500 });
    }

    // KST 기준으로 현재 시간보다 2시간 전 (안정적인 데이터 확보 위해)
    const now = new Date();
    // KST (UTC+9)에서 2시간을 뺌 = UTC+7
    now.setHours(now.getHours() + 7);
    
    const formatTime = (date: Date) => {
      const pad = (n: number) => n.toString().padStart(2, '0');
      const yyyy = date.getUTCFullYear();
      const mm = pad(date.getUTCMonth() + 1);
      const dd = pad(date.getUTCDate());
      const hh = pad(date.getUTCHours());
      return `${yyyy}${mm}${dd}${hh}00`;
    };

    const tm2 = formatTime(now);

    // KMA APIHub URL (tm1 없이 tm2만 넣으면 tm2 기준 가장 최신 1회분 데이터를 반환)
    const url = `https://apihub.kma.go.kr/api/typ01/url/kma_pm10.php?tm2=${tm2}&stn=0&authKey=${authKey}`;
    
    // 타임아웃 15초 설정 (기상청 API 지연 가능성 고려)
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    let res;
    try {
      res = await fetch(url, { 
        cache: 'no-store',
        signal: controller.signal 
      });
    } catch (e: any) {
      if (e.name === 'AbortError') {
        return NextResponse.json({ error: "기상청 서버 응답 시간이 초과되었습니다. 잠시 후 다시 시도해주세요." }, { status: 504 });
      }
      throw e;
    } finally {
      clearTimeout(timeoutId);
    }
    
    const text = await res.text();

    if (!res.ok) {
      return NextResponse.json({ error: "Failed to fetch from KMA API" }, { status: res.status });
    }

    // 텍스트 파싱
    // Format: 202604202100,    90,   49,000000,,=
    const lines = text.split('\n');

    // 기상청 관측소 번호(stn)와 한국 지역명 및 좌표 매핑
    const STN_MAP: Record<string, { name: string, lat: number, lng: number }> = {
      '90': { name: '속초', lat: 38.2509, lng: 128.5647 },
      '93': { name: '북춘천', lat: 37.9026, lng: 127.7357 },
      '100': { name: '대관령', lat: 37.6771, lng: 128.7183 },
      '102': { name: '백령도', lat: 37.9661, lng: 124.6305 },
      '108': { name: '서울', lat: 37.5714, lng: 126.9658 },
      '112': { name: '인천', lat: 37.4777, lng: 126.6249 },
      '115': { name: '울릉도', lat: 37.4813, lng: 130.8986 },
      '116': { name: '관악산', lat: 37.4439, lng: 126.9443 },
      '119': { name: '수원', lat: 37.2723, lng: 126.9853 },
      '130': { name: '울진', lat: 36.9918, lng: 129.4128 },
      '132': { name: '안면도', lat: 36.5326, lng: 126.3201 },
      '135': { name: '추풍령', lat: 36.2203, lng: 127.9946 },
      '136': { name: '안동', lat: 36.5684, lng: 128.7296 },
      '140': { name: '군산', lat: 35.9868, lng: 126.7001 },
      '143': { name: '대구', lat: 35.8714, lng: 128.6014 },
      '146': { name: '전주', lat: 35.8202, lng: 127.1086 },
      '152': { name: '울산', lat: 35.5384, lng: 129.3114 },
      '156': { name: '광주', lat: 35.1595, lng: 126.8526 },
      '159': { name: '부산', lat: 35.1796, lng: 129.0756 },
      '160': { name: '부산(구)', lat: 35.1051, lng: 129.0326 },
      '169': { name: '흑산도', lat: 34.6872, lng: 125.4356 },
      '184': { name: '제주', lat: 33.5141, lng: 126.5297 },
      '185': { name: '고산', lat: 33.2938, lng: 126.1628 },
      '201': { name: '강화', lat: 37.7074, lng: 126.4468 },
      '268': { name: '진도', lat: 34.4735, lng: 126.2585 },
      '273': { name: '천안', lat: 36.8151, lng: 127.1139 },
      '121': { name: '영월', lat: 37.1813, lng: 128.4616 },
      '229': { name: '백령도(하)', lat: 37.9366, lng: 124.6346 },
      '232': { name: '천안(하)', lat: 36.8151, lng: 127.1139 },
      '501': { name: '연평도', lat: 37.6698, lng: 125.6983 }
    };
    
    // 가장 최근 데이터만 가져오기 (가장 마지막에 나오는 시점)
    const latestData: Record<string, any> = {};

    for (const line of lines) {
      if (line.startsWith('#') || line.trim() === '') continue;
      // 202604202100,    90,   49,000000,,=
      const parts = line.split(',');
      if (parts.length >= 3) {
        const time = parts[0].trim();
        const stn = parts[1].trim();
        const pm10 = parseInt(parts[2].trim(), 10);
        
        if (isNaN(pm10) || pm10 < 0) continue; // 유효하지 않은 데이터 건너뛰기

        const locInfo = STN_MAP[stn];
        if (locInfo) {
          const formattedTime = time.replace(/(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})/, '$1-$2-$3 $4:$5');
          const currentPm10 = pm10;
          
          latestData[stn] = {
            sidoName: locInfo.name,
            pm10Value: currentPm10,
            lat: locInfo.lat,
            lng: locInfo.lng,
            dataTime: formattedTime
          };
          
          // --- 지도 시각화를 위한 거점 도시 가상 마커 동기화 ---
          // 기상청 PM10 전용 관측소가 없는 광역시/거점도시들에 대해 가장 가까운 관측소 데이터를 복제하여 표시합니다.
          const addVirtual = (vStn: string, vName: string, vLat: number, vLng: number) => {
            latestData[vStn] = { sidoName: vName, pm10Value: currentPm10, lat: vLat, lng: vLng, dataTime: formattedTime };
          };

          // 충청권 (천안 232, 안면도 132 기준 보완)
          if (stn === '232' || stn === '273') {
            addVirtual('v_daejeon', '대전', 36.3504, 127.3845);
            addVirtual('v_sejong', '세종', 36.4800, 127.2890);
            addVirtual('v_cheongju', '청주', 36.6424, 127.4890);
          }
          if (stn === '132') {
            addVirtual('v_seosan', '서산', 36.7845, 126.4503);
            addVirtual('v_boryeong', '보령', 36.3333, 126.6122);
          }
          if (stn === '135') { // 추풍령
            addVirtual('v_gumi', '구미', 36.1194, 128.3445);
            addVirtual('v_gimcheon', '김천', 36.1398, 128.1136);
          }
          
          // 기타 결측 거점도시 보완
          if (stn === '119') { // 수원
            addVirtual('v_yongin', '용인', 37.2410, 127.1775);
            addVirtual('v_goyang', '고양', 37.6583, 126.8320);
          }
          if (stn === '93') { // 춘천
            addVirtual('v_wonju', '원주', 37.3441, 127.9201);
            addVirtual('v_gangneung', '강릉', 37.7518, 128.8760);
          }
          if (stn === '146') { // 전주
            addVirtual('v_iksan', '익산', 35.9483, 126.9578);
          }
          if (stn === '160') { // 부산
            addVirtual('v_changwon', '창원', 35.2280, 128.6811);
          }
          if (stn === '185' || stn === '184') { // 제주
            addVirtual('v_seogwipo', '서귀포', 33.2541, 126.5601);
          }
        }
      }
    }

    return NextResponse.json({
      success: true,
      data: Object.values(latestData),
      debugUrl: url
    });
  } catch (error: any) {
    console.error("API Route Error:", error);
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}
