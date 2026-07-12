import type { Metadata } from 'next';
import CoupangAds from '@/components/CoupangAds';

type Match = {
  time: string;
  group: string;
  teams: string;
  city: string;
  korea?: boolean;
};

type MatchDay = {
  date: string;
  matches: Match[];
};

const groups = [
  { name: 'A조', teams: ['멕시코', '남아공', '대한민국', '체코'], korea: true },
  { name: 'B조', teams: ['캐나다', '보스니아', '카타르', '스위스'] },
  { name: 'C조', teams: ['브라질', '모로코', '아이티', '스코틀랜드'] },
  { name: 'D조', teams: ['미국', '파라과이', '호주', '튀르키예'] },
  { name: 'E조', teams: ['독일', '퀴라소', '코트디부아르', '에콰도르'] },
  { name: 'F조', teams: ['네덜란드', '일본', '스웨덴', '튀니지'] },
  { name: 'G조', teams: ['벨기에', '이집트', '이란', '뉴질랜드'] },
  { name: 'H조', teams: ['스페인', '카보베르데', '사우디아라비아', '우루과이'] },
  { name: 'I조', teams: ['프랑스', '세네갈', '이라크', '노르웨이'] },
  { name: 'J조', teams: ['아르헨티나', '알제리', '오스트리아', '요르단'] },
  { name: 'K조', teams: ['포르투갈', 'DR콩고', '우즈베키스탄', '콜롬비아'] },
  { name: 'L조', teams: ['잉글랜드', '크로아티아', '가나', '파나마'] },
];

const groupStageDays: MatchDay[] = [
  {
    date: '6월 12일 (금)',
    matches: [
      { time: '04:00', group: 'A', teams: '멕시코 vs 남아공 (개막전)', city: '멕시코시티' },
      { time: '11:00', group: 'A', teams: '대한민국 vs 체코', city: '과달라하라', korea: true },
    ],
  },
  {
    date: '6월 13일 (토)',
    matches: [
      { time: '04:00', group: 'B', teams: '캐나다 vs 보스니아', city: '토론토' },
      { time: '10:00', group: 'D', teams: '미국 vs 파라과이', city: '잉글우드' },
    ],
  },
  {
    date: '6월 14일 (일)',
    matches: [
      { time: '04:00', group: 'B', teams: '카타르 vs 스위스', city: '샌타클래라' },
      { time: '07:00', group: 'C', teams: '브라질 vs 모로코', city: '이스트러더퍼드' },
      { time: '10:00', group: 'C', teams: '아이티 vs 스코틀랜드', city: '폭스버러' },
      { time: '13:00', group: 'D', teams: '호주 vs 튀르키예', city: '밴쿠버' },
    ],
  },
  {
    date: '6월 15일 (월)',
    matches: [
      { time: '02:00', group: 'E', teams: '독일 vs 퀴라소', city: '휴스턴' },
      { time: '05:00', group: 'F', teams: '네덜란드 vs 일본', city: '알링턴' },
      { time: '08:00', group: 'E', teams: '코트디부아르 vs 에콰도르', city: '필라델피아' },
      { time: '11:00', group: 'F', teams: '스웨덴 vs 튀니지', city: '몬테레이' },
    ],
  },
  {
    date: '6월 16일 (화)',
    matches: [
      { time: '02:00', group: 'H', teams: '스페인 vs 카보베르데', city: '애틀랜타' },
      { time: '07:00', group: 'G', teams: '벨기에 vs 이집트', city: '시애틀' },
      { time: '07:00', group: 'H', teams: '사우디아라비아 vs 우루과이', city: '마이애미가든스' },
      { time: '13:00', group: 'G', teams: '이란 vs 뉴질랜드', city: '잉글우드' },
    ],
  },
  {
    date: '6월 17일 (수)',
    matches: [
      { time: '04:00', group: 'I', teams: '프랑스 vs 세네갈', city: '이스트러더퍼드' },
      { time: '07:00', group: 'I', teams: '이라크 vs 노르웨이', city: '폭스버러' },
      { time: '10:00', group: 'J', teams: '아르헨티나 vs 알제리', city: '캔자스시티' },
      { time: '13:00', group: 'J', teams: '오스트리아 vs 요르단', city: '샌타클래라' },
    ],
  },
  {
    date: '6월 18일 (목)',
    matches: [
      { time: '02:00', group: 'K', teams: '포르투갈 vs DR콩고', city: '휴스턴' },
      { time: '05:00', group: 'L', teams: '잉글랜드 vs 크로아티아', city: '알링턴' },
      { time: '08:00', group: 'L', teams: '가나 vs 파나마', city: '토론토' },
      { time: '11:00', group: 'K', teams: '우즈베키스탄 vs 콜롬비아', city: '멕시코시티' },
    ],
  },
  {
    date: '6월 19일 (금)',
    matches: [
      { time: '01:00', group: 'A', teams: '체코 vs 남아공', city: '애틀랜타' },
      { time: '04:00', group: 'B', teams: '스위스 vs 보스니아', city: '잉글우드' },
      { time: '07:00', group: 'B', teams: '캐나다 vs 카타르', city: '밴쿠버' },
      { time: '10:00', group: 'A', teams: '멕시코 vs 대한민국', city: '과달라하라', korea: true },
    ],
  },
  {
    date: '6월 20일 (토)',
    matches: [
      { time: '04:00', group: 'D', teams: '미국 vs 호주', city: '시애틀' },
      { time: '07:00', group: 'C', teams: '스코틀랜드 vs 모로코', city: '폭스버러' },
      { time: '10:00', group: 'C', teams: '브라질 vs 아이티', city: '필라델피아' },
      { time: '13:00', group: 'D', teams: '튀르키예 vs 파라과이', city: '샌타클래라' },
    ],
  },
  {
    date: '6월 21일 (일)',
    matches: [
      { time: '02:00', group: 'F', teams: '네덜란드 vs 스웨덴', city: '휴스턴' },
      { time: '05:00', group: 'E', teams: '독일 vs 코트디부아르', city: '토론토' },
      { time: '09:00', group: 'E', teams: '에콰도르 vs 퀴라소', city: '캔자스시티' },
      { time: '13:00', group: 'F', teams: '튀니지 vs 일본', city: '몬테레이' },
    ],
  },
  {
    date: '6월 22일 (월)',
    matches: [
      { time: '01:00', group: 'H', teams: '스페인 vs 사우디아라비아', city: '애틀랜타' },
      { time: '04:00', group: 'G', teams: '벨기에 vs 이란', city: '잉글우드' },
      { time: '07:00', group: 'H', teams: '우루과이 vs 카보베르데', city: '마이애미가든스' },
      { time: '10:00', group: 'G', teams: '뉴질랜드 vs 이집트', city: '밴쿠버' },
    ],
  },
  {
    date: '6월 23일 (화)',
    matches: [
      { time: '02:00', group: 'J', teams: '아르헨티나 vs 오스트리아', city: '알링턴' },
      { time: '06:00', group: 'I', teams: '프랑스 vs 이라크', city: '필라델피아' },
      { time: '09:00', group: 'I', teams: '노르웨이 vs 세네갈', city: '이스트러더퍼드' },
      { time: '12:00', group: 'J', teams: '요르단 vs 알제리', city: '샌타클래라' },
    ],
  },
  {
    date: '6월 24일 (수)',
    matches: [
      { time: '02:00', group: 'K', teams: '포르투갈 vs 우즈베키스탄', city: '휴스턴' },
      { time: '05:00', group: 'L', teams: '잉글랜드 vs 가나', city: '폭스버러' },
      { time: '08:00', group: 'L', teams: '파나마 vs 크로아티아', city: '토론토' },
      { time: '11:00', group: 'K', teams: '콜롬비아 vs DR콩고', city: '과달라하라' },
    ],
  },
  {
    date: '6월 25일 (목)',
    matches: [
      { time: '04:00', group: 'B', teams: '스위스 vs 캐나다', city: '밴쿠버' },
      { time: '04:00', group: 'B', teams: '보스니아 vs 카타르', city: '시애틀' },
      { time: '07:00', group: 'C', teams: '스코틀랜드 vs 브라질', city: '마이애미가든스' },
      { time: '07:00', group: 'C', teams: '모로코 vs 아이티', city: '애틀랜타' },
      { time: '10:00', group: 'A', teams: '체코 vs 멕시코', city: '멕시코시티' },
      { time: '10:00', group: 'A', teams: '남아공 vs 대한민국', city: '몬테레이', korea: true },
    ],
  },
  {
    date: '6월 26일 (금)',
    matches: [
      { time: '05:00', group: 'E', teams: '에콰도르 vs 독일', city: '이스트러더퍼드' },
      { time: '05:00', group: 'E', teams: '퀴라소 vs 코트디부아르', city: '필라델피아' },
      { time: '08:00', group: 'F', teams: '일본 vs 스웨덴', city: '알링턴' },
      { time: '08:00', group: 'F', teams: '튀니지 vs 네덜란드', city: '캔자스시티' },
      { time: '11:00', group: 'D', teams: '튀르키예 vs 미국', city: '잉글우드' },
      { time: '11:00', group: 'D', teams: '파라과이 vs 호주', city: '샌타클래라' },
    ],
  },
  {
    date: '6월 27일 (토)',
    matches: [
      { time: '04:00', group: 'I', teams: '노르웨이 vs 프랑스', city: '폭스버러' },
      { time: '04:00', group: 'I', teams: '세네갈 vs 이라크', city: '토론토' },
      { time: '09:00', group: 'H', teams: '카보베르데 vs 사우디아라비아', city: '휴스턴' },
      { time: '09:00', group: 'H', teams: '우루과이 vs 스페인', city: '과달라하라' },
      { time: '12:00', group: 'G', teams: '이집트 vs 이란', city: '시애틀' },
      { time: '12:00', group: 'G', teams: '뉴질랜드 vs 벨기에', city: '밴쿠버' },
    ],
  },
  {
    date: '6월 28일 (일)',
    matches: [
      { time: '06:00', group: 'L', teams: '파나마 vs 잉글랜드', city: '이스트러더퍼드' },
      { time: '06:00', group: 'L', teams: '크로아티아 vs 가나', city: '필라델피아' },
      { time: '08:30', group: 'K', teams: '콜롬비아 vs 포르투갈', city: '마이애미가든스' },
      { time: '08:30', group: 'K', teams: 'DR콩고 vs 우즈베키스탄', city: '애틀랜타' },
      { time: '11:00', group: 'J', teams: '알제리 vs 오스트리아', city: '캔자스시티' },
      { time: '11:00', group: 'J', teams: '요르단 vs 아르헨티나', city: '알링턴' },
    ],
  },
];

const knockoutRounds = [
  {
    stage: '32강 토너먼트 (16경기)',
    kstDate: '6월 29일 (월) ~ 7월 4일 (토)',
    detail: '16경기 모두 종료 · 16강 진출 16개국 확정',
    status: '종료',
  },
  {
    stage: '16강 토너먼트 (8경기)',
    kstDate: '7월 5일 (일) ~ 7월 8일 (수)',
    detail: '8경기 모두 종료 · 노르웨이가 브라질 꺾는 이변 · 8강 진출 8개국 확정',
    status: '종료',
  },
  {
    stage: '8강 토너먼트 (4경기)',
    kstDate: '7월 10일 (금) ~ 7월 12일 (일)',
    detail: '4경기 모두 종료 · 프랑스·스페인·잉글랜드·아르헨티나 준결승 진출',
    status: '종료',
  },
  {
    stage: '준결승 (2경기)',
    kstDate: '7월 15일 (수) ~ 7월 16일 (목)',
    detail: '프랑스 vs 스페인(댈러스) · 잉글랜드 vs 아르헨티나(애틀랜타)',
    status: '대진 확정',
  },
  {
    stage: '3·4위전',
    kstDate: '7월 19일 (일) 오전 6:00',
    detail: '마이애미가든스(하드록 스타디움) / 대진 미정',
    status: '대진 미정',
  },
  {
    stage: '결승전',
    kstDate: '7월 20일 (월) 오전 4:00',
    detail: '이스트러더퍼드(메트라이프 스타디움) / 대진 미정',
    status: '대진 미정',
  },
];

const roundOf32Results = [
  { date: '6월 29일(월)', match: '캐나다 1 : 0 남아공', note: '캐나다 16강 진출' },
  { date: '6월 30일(화)', match: '파라과이 1 : 1 독일 (PK 4-3)', note: '파라과이 승부차기 승리' },
  { date: '6월 30일(화)', match: '모로코 1 : 1 네덜란드 (PK 3-2)', note: '모로코 승부차기 승리' },
  { date: '6월 30일(화)', match: '브라질 2 : 1 일본', note: '브라질 역전승' },
  { date: '7월 1일(수)', match: '프랑스 3 : 0 스웨덴', note: '프랑스 완승' },
  { date: '7월 1일(수)', match: '노르웨이 2 : 1 코트디부아르', note: '노르웨이 16강 진출' },
  { date: '7월 1일(수)', match: '멕시코 2 : 0 에콰도르', note: '개최국 멕시코 16강 진출' },
  { date: '7월 2일(목)', match: '잉글랜드 2 : 1 DR콩고', note: '해리 케인 활약, 잉글랜드 역전승' },
  { date: '7월 2일(목)', match: '미국 3 : 0 보스니아-헤르체고비나', note: '개최국 미국 완승' },
  { date: '7월 2일(목)', match: '벨기에 3 : 2 세네갈 (연장)', note: '연장 접전 끝 벨기에 승리' },
  { date: '7월 3일(금)', match: '포르투갈 2 : 1 크로아티아', note: '포르투갈 16강 진출' },
  { date: '7월 3일(금)', match: '스페인 3 : 0 오스트리아', note: '스페인 완승' },
  { date: '7월 3일(금)', match: '스위스 2 : 0 알제리', note: '스위스 16강 진출' },
  { date: '7월 4일(토)', match: '아르헨티나 3 : 2 카보베르데 (연장)', note: '디펜딩 챔피언 아르헨티나 진땀승' },
  { date: '7월 4일(토)', match: '콜롬비아 1 : 0 가나', note: '콜롬비아 16강 진출' },
  { date: '7월 4일(토)', match: '이집트 1 : 1 호주 (PK 4-2)', note: '모하메드 살라의 이집트, 승부차기 승리' },
];

const roundOf16Matches = [
  {
    no: 1,
    date: '7월 5일(일)',
    time: '오전 2:00',
    teams: '캐나다 vs 모로코',
    venue: '휴스턴',
    result: '모로코 3 : 0 캐나다',
    status: '종료',
  },
  {
    no: 2,
    date: '7월 5일(일)',
    time: '오전 6:00',
    teams: '파라과이 vs 프랑스',
    venue: '필라델피아',
    result: '프랑스 1 : 0 파라과이',
    status: '종료',
  },
  {
    no: 3,
    date: '7월 6일(월)',
    time: '오전 5:00',
    teams: '브라질 vs 노르웨이',
    venue: '이스트러더퍼드',
    result: '노르웨이 2 : 1 브라질',
    status: '종료',
    tag: '이변',
  },
  {
    no: 4,
    date: '7월 6일(월)',
    time: '오전 9:00',
    teams: '멕시코 vs 잉글랜드',
    venue: '멕시코시티',
    result: '잉글랜드 3 : 2 멕시코',
    status: '종료',
  },
  {
    no: 5,
    date: '7월 7일(화)',
    time: '오전 4:00',
    teams: '포르투갈 vs 스페인',
    venue: '댈러스',
    result: '스페인 1 : 0 포르투갈',
    status: '종료',
    tag: '이베리아 더비',
  },
  {
    no: 6,
    date: '7월 7일(화)',
    time: '오전 9:00',
    teams: '미국 vs 벨기에',
    venue: '시애틀',
    result: '벨기에 4 : 1 미국',
    status: '종료',
  },
  {
    no: 7,
    date: '7월 8일(수)',
    time: '오전 1:00',
    teams: '아르헨티나 vs 이집트',
    venue: '애틀랜타',
    result: '아르헨티나 3 : 2 이집트',
    status: '종료',
  },
  {
    no: 8,
    date: '7월 8일(수)',
    time: '오전 5:00',
    teams: '스위스 vs 콜롬비아',
    venue: '밴쿠버',
    result: '스위스 0 : 0 콜롬비아 (PK 4-3)',
    status: '종료',
  },
];

const quarterFinalMatches = [
  {
    no: 1,
    date: '7월 10일(금)',
    time: '오전 5:00',
    teams: '프랑스 vs 모로코',
    venue: '보스턴',
    result: '프랑스 2 : 0 모로코',
    status: '종료',
  },
  {
    no: 2,
    date: '7월 11일(토)',
    time: '오전 4:00',
    teams: '스페인 vs 벨기에',
    venue: '로스앤젤레스',
    result: '스페인 2 : 1 벨기에',
    status: '종료',
  },
  {
    no: 3,
    date: '7월 12일(일)',
    time: '오전 6:00',
    teams: '노르웨이 vs 잉글랜드',
    venue: '마이애미가든스',
    result: '잉글랜드 2 : 1 노르웨이',
    status: '종료',
  },
  {
    no: 4,
    date: '7월 12일(일)',
    time: '오전 10:00',
    teams: '아르헨티나 vs 스위스',
    venue: '캔자스시티',
    result: '아르헨티나 3 : 1 스위스 (연장)',
    status: '종료',
    tag: '메시 활약',
  },
];

const semiFinalMatches = [
  {
    no: 1,
    date: '7월 15일(수)',
    time: '오전 4:00',
    teams: '프랑스 vs 스페인',
    venue: '댈러스',
    result: null,
    status: '예정',
    tag: '유럽 빅매치',
  },
  {
    no: 2,
    date: '7월 16일(목)',
    time: '오전 4:00',
    teams: '잉글랜드 vs 아르헨티나',
    venue: '애틀랜타',
    result: null,
    status: '예정',
  },
];

const tournamentFlow = [
  ['32강', '6월 28일~7월 3일', '종료 · 16강 진출 16개국 확정'],
  ['16강', '7월 4일~7월 7일', '8경기 모두 종료 · 브라질 탈락 이변'],
  ['8강', '7월 9일~7월 11일', '4경기 모두 종료 · 준결승 4팀 확정'],
  ['4강', '7월 14일~7월 15일', '프랑스 vs 스페인 · 잉글랜드 vs 아르헨티나'],
  ['결승', '7월 19일', '메트라이프 스타디움에서 우승팀 결정'],
];

const worldcupFaq = [
  {
    q: '2026 월드컵 8강 결과는 어떻게 되나요?',
    a: '프랑스 2-0 모로코, 스페인 2-1 벨기에, 잉글랜드 2-1 노르웨이, 아르헨티나 3-1 스위스(연장)로 4경기가 모두 끝났습니다. 프랑스·스페인·잉글랜드·아르헨티나가 준결승에 진출했습니다.',
  },
  {
    q: '준결승 대진과 일정은 어떻게 되나요?',
    a: '준결승 1경기는 7월 15일(수) 오전 4시 프랑스 vs 스페인(댈러스), 2경기는 7월 16일(목) 오전 4시 잉글랜드 vs 아르헨티나(애틀랜타)입니다. 결승은 7월 20일(월) 오전 4시 메트라이프 스타디움에서 열립니다.',
  },
  {
    q: '16강 최대 이변은 무엇이었나요?',
    a: '우승 후보 브라질이 노르웨이에 1-2로 패해 탈락한 것이 가장 큰 이변이었습니다. 개최국 미국도 벨기에에 1-4로 대패하며 16강에서 짐을 쌌습니다.',
  },
];

const sources = [
  {
    label: 'FIFA 공식 경기 일정',
    href: 'https://www.fifa.com/ko/tournaments/mens/worldcup/canadamexicousa2026/scores-fixtures',
    desc: '2026 월드컵 전체 경기 결과 및 일정 공식 페이지',
  },
  {
    label: '머니투데이 - 8강 대진 완성',
    href: 'https://www.mt.co.kr/sports/2026/07/08/2026070808254113524',
    desc: '16강 결과와 8강 대진(유럽 6·남미 1·아프리카 1) 확정 소식',
  },
  {
    label: '경향신문 - 프랑스 2-0 모로코',
    href: 'https://www.khan.co.kr/article/202607100723001',
    desc: '프랑스의 3회 연속 준결승 진출, 음바페 8호골 보도',
  },
  {
    label: '이데일리 - 한국 32강 진출 무산',
    href: 'https://www.edaily.co.kr/News/Read?newsId=02482966645485984&mediaCodeNo=257',
    desc: '한국의 조별리그 탈락과 이란과의 순위 비교 보도',
  },
];

export const metadata: Metadata = {
  title: '2026 월드컵 8강 결과·준결승 대진·일정 총정리 (한국시간)',
  description:
    '2026 북중미 월드컵 8강 전체 결과와 준결승 대진, 결승 일정을 한국시간 기준으로 정리했습니다. 브라질 탈락 이변부터 프랑스·스페인·잉글랜드·아르헨티나 준결승 진출까지 확인하세요.',
  keywords: [
    '2026 월드컵 8강 결과',
    '월드컵 준결승 일정',
    '월드컵 준결승 대진',
    '월드컵 4강',
    '월드컵 결승 일정',
  ],
  alternates: {
    canonical: '/worldcup-2026-schedule',
  },
  openGraph: {
    title: '2026 월드컵 8강 결과·준결승 대진·일정 총정리 (한국시간)',
    description: '8강 전체 결과부터 준결승 대진, 결승 일정까지 한국시간 기준으로 확인하세요.',
    url: 'https://zucca100.com/worldcup-2026-schedule',
    type: 'article',
  },
};

function LiveButton({ label }: { label: string }) {
  return (
    <a
      href="https://zucca100.com/kingkongtv/"
      className="flex w-full items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-green-700 px-5 py-5 text-left text-white shadow-xl transition-transform hover:-translate-y-0.5 active:scale-[0.99]"
    >
      <span className="min-w-0">
        <span className="block text-xs font-black uppercase tracking-[0.18em] text-emerald-100">Live</span>
        <span className="mt-1 block text-lg font-black leading-snug sm:text-xl">{label}</span>
      </span>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-emerald-700">
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 12h14m-6-6 6 6-6 6" />
        </svg>
      </span>
    </a>
  );
}

export default function Worldcup2026SchedulePage() {
  return (
    <main className="min-h-screen bg-[#f5f7fb] text-slate-950">
      <section className="bg-white px-4 pb-7 pt-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-3 flex flex-wrap gap-2 text-xs font-black">
            <span className="rounded-full bg-slate-950 px-3 py-1.5 text-white">한국시간 기준</span>
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-emerald-700">
              8강 결과 완료
            </span>
            <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-blue-700">준결승 대진 확정</span>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1fr_0.95fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-600">FIFA World Cup 26</p>
              <h1 className="mt-2 text-3xl font-black leading-tight sm:text-5xl">
                2026 월드컵 전체 경기 일정표
              </h1>
              <p className="mt-3 max-w-3xl text-base font-semibold leading-7 text-slate-600">
                8강까지 모두 끝나고 준결승 대진이 확정됐습니다. 프랑스·스페인·잉글랜드·아르헨티나가
                4강에 올랐고, 노르웨이가 브라질을 꺾는 이변도 나왔습니다. 32강부터 준결승까지 전체
                결과·일정을 한국시간 기준으로 정리했습니다. 대한민국은 조별리그 3위(1승 2패)로 32강
                진출에는 실패했습니다.
              </p>
            </div>

            <LiveButton label="월드컵 실시간 중계 바로가기" />
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <a href="#round-of-16" className="rounded-2xl bg-slate-950 px-4 py-4 text-sm font-black text-white shadow-sm transition hover:bg-slate-800">
              16강 전체 결과 보기
            </a>
            <a href="#quarter-final" className="rounded-2xl bg-emerald-600 px-4 py-4 text-sm font-black text-white shadow-sm transition hover:bg-emerald-700">
              8강 결과·대진 보기
            </a>
            <a href="#semi-final" className="rounded-2xl bg-blue-600 px-4 py-4 text-sm font-black text-white shadow-sm transition hover:bg-blue-700">
              준결승·결승 일정 보기
            </a>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <a
              href="https://zucca100.com/%ed%95%9c%ea%b5%ad-%ec%9b%94%eb%93%9c%ec%bb%b5-%ec%9d%bc%ec%a0%95-%ec%a4%91%ea%b3%84-%eb%b3%b4%eb%8a%94%eb%b2%95-%ec%8b%9c%ea%b0%84-%eb%ac%b4%eb%a3%8c-%ec%a4%91%ea%b3%84-%eb%b0%94%eb%a1%9c%ea%b0%80/"
              className="group flex items-center justify-between gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 p-4 text-white shadow-lg transition-transform hover:-translate-y-0.5 active:scale-[0.99]"
            >
              <span className="min-w-0">
                <span className="block text-xs font-black uppercase tracking-[0.16em] opacity-80">Korea Focus</span>
                <strong className="mt-1 block text-base font-black leading-snug">한국 경기 중심 일정 보러가기</strong>
              </span>
              <svg className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </a>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <strong className="block text-sm font-black text-slate-800">시차 안내</strong>
              <p className="mt-1 text-sm font-semibold leading-6 text-slate-600">
                미국·캐나다·멕시코 현지 저녁 경기가 한국시간 새벽~오후에 열립니다. 한국 경기는 모두 오전
                10~11시입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="round-of-32" className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-blue-700">Round of 32 · 종료</p>
            <h2 className="mt-1 text-3xl font-black">월드컵 32강 전체 결과 정리</h2>
            <p className="mt-3 text-base font-semibold leading-7 text-slate-600">
              6월 29일부터 7월 4일까지(한국시간) 열린 32강 16경기가 모두 끝났습니다. 승부차기 3경기, 연장전
              2경기가 나올 만큼 접전이 많았고, 16강 진출 16개국이 모두 확정됐습니다.
            </p>

            <div className="mt-5 grid gap-3 md:grid-cols-3">
              <div className="rounded-2xl bg-slate-950 p-4 text-white">
                <strong className="block text-2xl font-black">16경기 종료</strong>
                <span className="mt-1 block text-sm font-semibold text-slate-300">승부차기 3회 · 연장 2회</span>
              </div>
              <div className="rounded-2xl bg-emerald-50 p-4 text-emerald-950 ring-1 ring-emerald-200">
                <strong className="block text-2xl font-black">16개국</strong>
                <span className="mt-1 block text-sm font-semibold">16강 진출 확정</span>
              </div>
              <div className="rounded-2xl bg-blue-50 p-4 text-blue-950 ring-1 ring-blue-200">
                <strong className="block text-2xl font-black">7월 19일</strong>
                <span className="mt-1 block text-sm font-semibold">결승전</span>
              </div>
            </div>
          </div>

          <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-slate-950 text-white">
                <tr>
                  <th className="px-4 py-3">날짜</th>
                  <th className="px-4 py-3">경기 결과</th>
                  <th className="px-4 py-3">비고</th>
                </tr>
              </thead>
              <tbody>
                {roundOf32Results.map((row) => (
                  <tr key={row.match}>
                    <td className="border-t border-slate-200 px-4 py-3 font-black">{row.date}</td>
                    <td className="border-t border-slate-200 px-4 py-3 font-bold text-slate-800">{row.match}</td>
                    <td className="border-t border-slate-200 px-4 py-3 font-semibold text-slate-500">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="round-of-16" className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-blue-200 bg-white p-5 shadow-sm sm:p-6">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-blue-700">Round of 16 · 종료</p>
            <h2 className="mt-1 text-3xl font-black">16강 전체 결과 (한국시간)</h2>
            <p className="mt-3 text-base font-semibold leading-7 text-slate-600">
              16강 8경기가 7월 5일부터 8일까지(한국시간) 모두 끝났습니다. 최대 이변은 노르웨이가 우승
              후보 브라질을 2-1로 꺾은 경기였고, 스페인은 &lsquo;이베리아 더비&rsquo;에서 포르투갈을
              1-0으로 눌렀습니다. 개최국 미국은 벨기에에 1-4로 대패하며 탈락했습니다.
            </p>
          </div>

          <div className="mt-4 space-y-2">
            {roundOf16Matches.map((match) => (
              <article
                key={match.no}
                className={`grid gap-2 rounded-2xl border p-4 shadow-sm sm:grid-cols-[110px_1fr_auto] sm:items-center ${
                  match.status === '종료' ? 'border-emerald-200 bg-emerald-50' : 'border-slate-200 bg-white'
                }`}
              >
                <div className="text-sm font-black text-slate-800">
                  {match.date}
                  <div className="text-xs font-semibold text-slate-500">{match.time}</div>
                </div>
                <div>
                  <p className="text-base font-black text-slate-900">
                    {match.teams}
                    {match.tag && (
                      <span className="ml-2 rounded-full bg-blue-600 px-2 py-0.5 text-[10px] font-black text-white align-middle">
                        {match.tag}
                      </span>
                    )}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-slate-500">
                    {match.venue}
                    {match.result && <span className="ml-2 font-black text-emerald-700">{match.result}</span>}
                  </p>
                </div>
                <span
                  className={`inline-block rounded-full px-2.5 py-1 text-xs font-black ${
                    match.status === '종료'
                      ? 'border border-emerald-200 bg-white text-emerald-700'
                      : 'border border-amber-200 bg-amber-50 text-amber-800'
                  }`}
                >
                  {match.status}
                </span>
              </article>
            ))}
          </div>

          <p className="mt-4 rounded-2xl border border-blue-200 bg-blue-50 p-4 text-sm font-bold leading-6 text-blue-900">
            16강을 통과한 8개국(프랑스·모로코·스페인·벨기에·노르웨이·잉글랜드·아르헨티나·스위스)이
            8강에서 맞붙습니다. 유럽 6팀, 남미 1팀(아르헨티나), 아프리카 1팀(모로코) 구도입니다.
          </p>
        </div>
      </section>

      <section id="quarter-final" className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-emerald-200 bg-white p-5 shadow-sm sm:p-6">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-emerald-700">Quarter Final · 종료</p>
            <h2 className="mt-1 text-3xl font-black">8강 전체 결과 (한국시간)</h2>
            <p className="mt-3 text-base font-semibold leading-7 text-slate-600">
              8강 4경기가 7월 10일부터 12일까지(한국시간) 모두 끝났습니다. 프랑스가 모로코를 2-0으로
              완파하고, 스페인은 벨기에를 2-1, 잉글랜드는 노르웨이를 2-1로 꺾었으며, 아르헨티나는
              스위스를 연장 접전 끝에 3-1로 눌러 4강 4팀이 모두 확정됐습니다.
            </p>
          </div>

          <div className="mt-4 space-y-2">
            {quarterFinalMatches.map((match) => (
              <article
                key={match.no}
                className={`grid gap-2 rounded-2xl border p-4 shadow-sm sm:grid-cols-[110px_1fr_auto] sm:items-center ${
                  match.status === '종료' ? 'border-emerald-200 bg-emerald-50' : 'border-slate-200 bg-white'
                }`}
              >
                <div className="text-sm font-black text-slate-800">
                  {match.date}
                  <div className="text-xs font-semibold text-slate-500">{match.time}</div>
                </div>
                <div>
                  <p className="text-base font-black text-slate-900">
                    {match.teams}
                    {match.tag && (
                      <span className="ml-2 rounded-full bg-blue-600 px-2 py-0.5 text-[10px] font-black text-white align-middle">
                        {match.tag}
                      </span>
                    )}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-slate-500">
                    {match.venue}
                    {match.result && <span className="ml-2 font-black text-emerald-700">{match.result}</span>}
                  </p>
                </div>
                <span
                  className={`inline-block rounded-full px-2.5 py-1 text-xs font-black ${
                    match.status === '종료'
                      ? 'border border-emerald-200 bg-white text-emerald-700'
                      : 'border border-amber-200 bg-amber-50 text-amber-800'
                  }`}
                >
                  {match.status}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="semi-final" className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-blue-200 bg-white p-5 shadow-sm sm:p-6">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-blue-700">Semi Final · 대진 확정</p>
            <h2 className="mt-1 text-3xl font-black">준결승·결승 일정 (한국시간)</h2>
            <p className="mt-3 text-base font-semibold leading-7 text-slate-600">
              준결승 1경기는 7월 15일 프랑스 vs 스페인(댈러스), 2경기는 7월 16일 잉글랜드 vs
              아르헨티나(애틀랜타)로 확정됐습니다. 이후 3·4위전(7월 19일)과 결승전(7월 20일)이
              이어집니다.
            </p>
          </div>

          <div className="mt-4 space-y-2">
            {semiFinalMatches.map((match) => (
              <article
                key={match.no}
                className="grid gap-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:grid-cols-[110px_1fr_auto] sm:items-center"
              >
                <div className="text-sm font-black text-slate-800">
                  {match.date}
                  <div className="text-xs font-semibold text-slate-500">{match.time}</div>
                </div>
                <div>
                  <p className="text-base font-black text-slate-900">
                    {match.teams}
                    {match.tag && (
                      <span className="ml-2 rounded-full bg-blue-600 px-2 py-0.5 text-[10px] font-black text-white align-middle">
                        {match.tag}
                      </span>
                    )}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-slate-500">{match.venue}</p>
                </div>
                <span className="inline-block rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-black text-amber-800">
                  {match.status}
                </span>
              </article>
            ))}
          </div>

          <p className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm font-bold leading-6 text-amber-900">
            3·4위전은 7월 19일(일) 오전 6시 마이애미가든스, 결승전은 7월 20일(월) 오전 4시
            이스트러더퍼드(메트라이프 스타디움)에서 열립니다. 준결승 결과에 따라 대진이 확정됩니다.
          </p>
        </div>
      </section>

      <section id="korea-round-of-32" className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-3xl bg-gradient-to-br from-slate-800 to-slate-950 p-5 text-white shadow-xl sm:p-6">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-emerald-200">Korea Recap</p>
          <h2 className="mt-1 text-3xl font-black">한국, 조별리그 3위로 32강 진출 실패</h2>
          <p className="mt-3 text-base font-semibold leading-7 text-emerald-50">
            대한민국은 A조에서 1승 2패(승점 3, 골득실 -1)로 조 3위를 기록했습니다. 조 3위 12개 팀 중
            상위 8팀만 32강에 오르는 규정 아래 한국은 10위에 그쳐 진출에 실패했습니다. 동률이었던 이란이
            골득실에서 앞서며 6위로 32강에 올라간 것과 대조적인 결과였습니다. 한국의 조별리그 탈락은
            2018 러시아 대회 이후 8년 만입니다.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/15">
              <strong className="block text-lg font-black">1승 2패</strong>
              <span className="mt-1 block text-sm font-semibold text-emerald-100">A조 3위 · 승점 3</span>
            </div>
            <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/15">
              <strong className="block text-lg font-black">전체 34위</strong>
              <span className="mt-1 block text-sm font-semibold text-emerald-100">조 3위 팀 중 10위</span>
            </div>
            <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/15">
              <strong className="block text-lg font-black">8년 만의 탈락</strong>
              <span className="mt-1 block text-sm font-semibold text-emerald-100">2018 러시아 이후 처음</span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-black">조 편성 (A조 ~ L조)</h2>
          <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {groups.map((group) => (
              <article
                key={group.name}
                className={`rounded-2xl border p-4 shadow-sm ${
                  group.korea ? 'border-emerald-300 bg-emerald-50' : 'border-slate-200 bg-white'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-base font-black">{group.name}</h3>
                  {group.korea && (
                    <span className="rounded-full bg-emerald-600 px-2 py-0.5 text-[10px] font-black text-white">
                      대한민국
                    </span>
                  )}
                </div>
                <ul className="mt-2 space-y-1">
                  {group.teams.map((team) => (
                    <li
                      key={team}
                      className={`text-sm font-bold ${
                        team === '대한민국' ? 'text-emerald-700' : 'text-slate-600'
                      }`}
                    >
                      {team}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-black">조별리그 전체 일정 (한국시간)</h2>
          <p className="mt-2 text-sm font-semibold text-slate-600">
            한국시간 6월 12일부터 28일까지 열린 72경기 전체 일정입니다(종료). 초록색으로 표시된 경기가
            대한민국 경기이며, 한국은 1승 2패로 조 3위에 그쳐 32강 진출에 실패했습니다.
          </p>

          <div className="mt-4 space-y-4">
            {groupStageDays.map((day) => (
              <article key={day.date} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <h3 className="text-base font-black">{day.date}</h3>
                <div className="mt-3 grid gap-2">
                  {day.matches.map((match) => (
                    <div
                      key={`${day.date}-${match.teams}`}
                      className={`flex flex-wrap items-center gap-x-3 gap-y-1 rounded-xl px-3 py-2.5 ${
                        match.korea ? 'bg-emerald-50 ring-1 ring-emerald-300' : 'bg-slate-50'
                      }`}
                    >
                      <span className="w-12 shrink-0 text-sm font-black text-blue-700">{match.time}</span>
                      <span className="shrink-0 rounded-full bg-slate-950 px-2 py-0.5 text-[10px] font-black text-white">
                        {match.group}조
                      </span>
                      <span
                        className={`min-w-0 flex-1 text-sm font-bold ${
                          match.korea ? 'text-emerald-800' : 'text-slate-700'
                        }`}
                      >
                        {match.teams}
                      </span>
                      <span className="shrink-0 text-xs font-semibold text-slate-400">{match.city}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="knockout-flow" className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-black">토너먼트 진행 상황 (32강 ~ 결승)</h2>
          <p className="mt-2 text-sm font-semibold text-slate-600">
            32강·16강·8강은 종료, 준결승 대진까지 확정됐습니다. 3·4위전과 결승 대진은 준결승 결과에
            따라 확정되며, 확정 전 경기는 일정만 기재하고 대진은 미정으로 표기했습니다.
          </p>

          <div className="mt-4 space-y-3">
            {knockoutRounds.map((round) => (
              <article
                key={round.stage}
                className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:grid-cols-[200px_1fr_auto] sm:items-center"
              >
                <div>
                  <h3 className="text-base font-black">{round.stage}</h3>
                  <span
                    className={`mt-1.5 inline-block rounded-full px-2.5 py-1 text-xs font-black ${
                      round.status === '종료'
                        ? 'border border-emerald-200 bg-emerald-50 text-emerald-700'
                        : round.status === '진행중'
                          ? 'border border-blue-200 bg-blue-50 text-blue-700'
                          : 'border border-amber-200 bg-amber-50 text-amber-800'
                    }`}
                  >
                    {round.status}
                  </span>
                </div>
                <div className="text-sm font-semibold leading-6 text-slate-600">
                  <p>
                    <strong className="font-black text-slate-800">한국시간</strong> {round.kstDate}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-slate-500">{round.detail}</p>
                </div>
                <div className="hidden sm:block">
                  <svg className="h-5 w-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-5">
            {tournamentFlow.map(([stage, date, detail]) => (
              <article key={stage} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <h3 className="text-lg font-black text-slate-950">{stage}</h3>
                <p className="mt-2 text-sm font-black text-blue-700">{date}</p>
                <p className="mt-2 text-xs font-semibold leading-5 text-slate-500">{detail}</p>
              </article>
            ))}
          </div>

          <p className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm font-bold leading-6 text-amber-900">
            8강 이후 개별 경기의 킥오프 시간은 대진 확정 후 FIFA 공식 일정에서 발표될 예정입니다. 방송
            편성과 현지 사정에 따라 일정이 변경될 수 있으니 시청 전 최신 일정을 확인하세요.
          </p>
        </div>
      </section>

      <section className="px-4 pb-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-2xl font-black">월드컵 8강 결과·준결승 일정 FAQ</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {worldcupFaq.map((item) => (
              <article key={item.q} className="rounded-2xl bg-slate-50 p-4">
                <h3 className="text-base font-black">{item.q}</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-[1fr_0.9fr]">
          <article className="rounded-3xl border border-slate-200 bg-slate-950 p-5 text-white">
            <h2 className="text-2xl font-black">출처</h2>
            <div className="mt-4 grid gap-2">
              {sources.map((source) => (
                <a key={source.href} href={source.href} className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <strong className="block text-sm font-black">{source.label}</strong>
                  <span className="mt-1 block text-xs font-semibold leading-5 text-slate-300">{source.desc}</span>
                </a>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-2xl font-black">확인 사항</h2>
            <p className="mt-4 text-sm font-semibold leading-7 text-slate-600">
              본 페이지는 FIFA 공식 일정과 국내외 보도를 바탕으로 한국시간 기준으로 변환해 정리한
              안내입니다. 토너먼트 대진과 킥오프 시간은 경기 결과에 따라 변경·확정될 수 있으므로, 시청 전
              FIFA 공식 페이지의 최신 일정을 함께 확인하세요.
            </p>
            <div className="mt-5">
              <LiveButton label="월드컵 실시간 중계 바로가기" />
            </div>
          </article>
        </div>
      </section>

      <CoupangAds
        keyword="월드컵 응원용품"
        title="월드컵 응원과 시청 준비 아이템"
        hookText="조별리그 일정과 중계 시간을 확인했다면, 집관과 응원에 필요한 간식, 응원용품, 시청 아이템도 함께 준비해보세요."
      />
    </main>
  );
}
