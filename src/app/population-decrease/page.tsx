'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import data from './data.json';

const KoreaMap = ({ 
  activeProvince, 
  onProvinceClick 
}: { 
  activeProvince: string | null, 
  onProvinceClick: (province: string) => void
}) => {
  const provinces = [
    { name: '서울', d: "M100 100 L110 90 L120 100 L115 110 L105 115 Z", x: 105, y: 105 },
    { name: '경기', d: "M80 80 L120 70 L140 100 L130 130 L100 140 L80 120 Z", x: 95, y: 85 },
    { name: '강원', d: "M130 50 L180 60 L200 130 L160 160 L140 100 Z", x: 155, y: 90 },
    { name: '충북', d: "M130 140 L160 150 L170 190 L140 200 L120 170 Z", x: 140, y: 170 },
    { name: '충남', d: "M70 150 L110 160 L120 210 L80 220 L60 190 Z", x: 85, y: 185 },
    { name: '전북', d: "M80 230 L120 220 L140 250 L120 280 L80 270 Z", x: 100, y: 250 },
    { name: '전남', d: "M70 280 L120 290 L130 340 L80 350 L60 320 Z", x: 90, y: 320 },
    { name: '경북', d: "M170 160 L220 170 L230 250 L190 270 L160 220 Z", x: 190, y: 215 },
    { name: '경남', d: "M150 260 L210 270 L200 330 L140 340 L130 300 Z", x: 170, y: 300 },
    { name: '제주', d: "M100 380 L130 385 L120 405 L90 400 Z", x: 110, y: 395 },
    { name: '부산', d: "M205 320 L215 325 L210 335 L200 330 Z", x: 210, y: 330 },
    { name: '대구', d: "M185 240 L195 245 L190 255 L180 250 Z", x: 185, y: 250 },
    { name: '인천', d: "M75 95 L85 100 L80 110 L70 105 Z", x: 75, y: 105 }
  ];

  return (
    <div className="relative w-full h-[450px] sm:h-[550px] lg:h-[650px] bg-white rounded-3xl shadow-md border border-slate-100 p-4 flex flex-col justify-center">
      <svg viewBox="40 30 220 400" className="w-full h-full drop-shadow-sm">
        {provinces.map((p) => {
          const isActive = activeProvince === p.name;
          
          return (
            <path
              key={p.name}
              d={p.d}
              className={`transition-colors duration-300 cursor-pointer stroke-white stroke-[2] ${
                isActive 
                  ? 'fill-blue-500' 
                  : 'fill-slate-100 hover:fill-blue-100'
              }`}
              onClick={() => onProvinceClick(p.name)}
            />
          );
        })}
        {provinces.map((p) => {
          const isActive = activeProvince === p.name;
          return (
            <text
              key={`label-${p.name}`}
              x={p.x}
              y={p.y}
              className="text-[12px] font-black pointer-events-none text-center transition-colors"
              textAnchor="middle"
              alignmentBaseline="middle"
              stroke="white"
              strokeWidth="2.5"
              strokeLinejoin="round"
              paintOrder="stroke fill"
              fill={isActive ? '#1e3a8a' : '#475569'}
            >
              {p.name}
            </text>
          );
        })}
      </svg>
      <div className="absolute top-6 right-6 flex flex-col gap-1.5 bg-white/80 backdrop-blur p-2 rounded-xl">
         <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
            <span className="text-[10px] text-slate-500 font-bold pb-px">활성화된 지역</span>
         </div>
      </div>
    </div>
  );
};

export default function PopulationDecreasePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) return null;

    const term = searchTerm.trim();
    
    // First, check for exact CITY match across both categories
    for (const item of data.preferential) {
      const match = item.cities.find(city => city.includes(term) || term.includes(city));
      if (match) {
        return { type: 'city', province: item.province, city: match, grade: 'preferential' as const };
      }
    }
    
    for (const item of data.special) {
      const match = item.cities.find(city => city.includes(term) || term.includes(city));
      if (match) {
        return { type: 'city', province: item.province, city: match, grade: 'special' as const };
      }
    }

    // Next, check for PROVINCE match
    const prefItem = data.preferential.find(item => item.province.includes(term) || term.includes(item.province));
    const specItem = data.special.find(item => item.province.includes(term) || term.includes(item.province));
    
    if (prefItem || specItem) {
      return { 
        type: 'province', 
        province: prefItem?.province || specItem?.province || term,
        prefCities: prefItem?.cities || [],
        specCities: specItem?.cities || []
      };
    }

    return { type: 'none' };
  }, [searchTerm]);

  const provinceData = useMemo(() => {
    if (!selectedProvince) return null;
    const pref = data.preferential.find(p => p.province === selectedProvince);
    const spec = data.special.find(p => p.province === selectedProvince);
    return { pref, spec };
  }, [selectedProvince]);

  const handleCityClick = (province: string, city: string) => {
    setSelectedProvince(province);
    setSelectedCity(city);
    // Smooth scroll to map
    const mapElement = document.getElementById('map-top');
    if (mapElement) {
       mapElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <div className="min-h-screen bg-[#F8FAFC] text-slate-900 pb-20">
        {/* Header Section */}
        <div className="bg-gradient-to-b from-blue-600 to-blue-700 text-white pt-16 pb-24 px-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/20 rounded-full -ml-24 -mb-24 blur-2xl"></div>
          
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <div className="inline-block bg-blue-500/30 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-white/20">
              인구감소지역 확인 서비스
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
              우리 동네는 <br className="md:hidden" />
              <span className="text-blue-100">위기 지역일까요?</span>
            </h1>
            <p className="text-blue-50/80 text-lg md:text-xl font-medium max-w-xl mx-auto leading-relaxed">
              내가 사는 지역의 인구감소 등급을 확인하고 <br className="hidden md:inline" /> 
              정부의 지원 혜택 대상을 조회해보세요.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 -mt-12 relative z-20">
          <div id="map-top" className="invisible -mt-24 h-24"></div>
          
          {/* Layout with Map and Search */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Side: Search and Results */}
            <div className="lg:col-span-12 xl:col-span-4 space-y-6">
              {/* Search Bar */}
              <div className="bg-white rounded-3xl shadow-xl p-3 border border-slate-100">
                <div className="flex items-center px-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input 
                    type="text" 
                    placeholder="지역 검색 (예: 거창, 강화)"
                    className="w-full py-4 px-4 text-lg font-medium outline-none placeholder:text-slate-300"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  {searchTerm && (
                    <button 
                      onClick={() => setSearchTerm('')}
                      className="p-2 hover:bg-slate-50 rounded-full transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-300" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>

              {/* Result Card (Search based) */}
              {searchTerm && searchResults && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  {searchResults.type === 'none' ? (
                    <div className="bg-slate-100 rounded-3xl p-8 text-center border border-slate-200">
                      <h3 className="text-lg font-bold text-slate-600 mb-1">검색 결과가 없습니다</h3>
                      <p className="text-slate-400 text-sm italic">&quot;{searchTerm}&quot; 지역은 대상 지역이 아닙니다.</p>
                    </div>
                  ) : searchResults.type === 'city' ? (
                    <div className="bg-white rounded-3xl border-2 border-blue-500 shadow-lg p-6 relative overflow-hidden">
                      <div className="flex flex-col gap-1 mb-4">
                        <span className="text-blue-500 font-black text-xs uppercase tracking-widest">분석 완료</span>
                        <h4 className="text-2xl font-black text-slate-900 truncate">
                          {searchResults.province} {searchResults.city}
                        </h4>
                      </div>

                      <div className="space-y-3">
                        <div className={`p-4 rounded-xl flex items-center gap-3 ${
                          searchResults.grade === 'preferential' ? 'bg-blue-50' : 'bg-indigo-50'
                        }`}>
                          <div className={`w-10 h-10 flex items-center justify-center rounded-lg text-lg ${
                            searchResults.grade === 'preferential' ? 'bg-blue-600 text-white' : 'bg-indigo-600 text-white'
                          }`}>{searchResults.grade === 'preferential' ? '✨' : '🔥'}</div>
                          <div>
                            <div className="text-[10px] font-bold text-slate-400 mb-0.5">판정</div>
                            <div className={`text-sm font-black ${
                              searchResults.grade === 'preferential' ? 'text-blue-700' : 'text-indigo-700'
                            }`}>인구감소지역 ({searchResults.grade === 'preferential' ? '우대' : '특별'})</div>
                          </div>
                        </div>

                        <div className="p-4 rounded-xl flex items-center gap-3 bg-emerald-50">
                          <div className="w-10 h-10 flex items-center justify-center rounded-lg text-lg bg-emerald-600 text-white">💰</div>
                          <div>
                            <div className="text-[10px] font-bold text-slate-400 mb-0.5">지원금</div>
                            <div className="text-sm font-black text-emerald-700"> {searchResults.grade === 'preferential' ? '20만원' : '25만원'}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-6 relative overflow-hidden">
                      <div className="flex flex-col gap-1 mb-6">
                        <span className="text-slate-500 font-black text-xs uppercase tracking-widest">분석 완료</span>
                        <h4 className="text-2xl font-black text-slate-900 truncate">
                          {searchResults.province} 검색결과
                        </h4>
                        <p className="text-slate-500 text-sm mt-1">해당 도 내의 구체적인 위기 지역은 아래를 클릭해서 확인하세요.</p>
                      </div>

                      <div className="space-y-5">
                        {searchResults.prefCities && searchResults.prefCities.length > 0 && (
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                               <span className="text-sm font-bold text-blue-600">✨ 우대지역 (20만원 지원)</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {searchResults.prefCities.map(city => (
                                 <button key={city} onClick={() => setSearchTerm(city)} className="bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 font-medium px-3 py-1.5 rounded-lg text-sm transition-colors border border-slate-100 hover:border-blue-200">
                                   {city}
                                 </button>
                              ))}
                            </div>
                          </div>
                        )}
                        {searchResults.specCities && searchResults.specCities.length > 0 && (
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                               <span className="text-sm font-bold text-indigo-600">🔥 특별지역 (25만원 지원)</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {searchResults.specCities.map(city => (
                                 <button key={city} onClick={() => setSearchTerm(city)} className="bg-slate-50 hover:bg-indigo-50 text-slate-700 hover:text-indigo-700 font-medium px-3 py-1.5 rounded-lg text-sm transition-colors border border-slate-100 hover:border-indigo-200">
                                   {city}
                                 </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Card shown when a city is selected from the list */}
              {selectedCity && (
                 <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-xl animate-in fade-in slide-in-from-left-4 duration-300">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="text-blue-400 text-xs font-bold uppercase">선택된 지역</span>
                        <h4 className="text-2xl font-black">{selectedProvince} {selectedCity}</h4>
                      </div>
                      <button onClick={() => setSelectedCity(null)} className="text-slate-500 hover:text-white">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                      </button>
                    </div>
                    <div className="flex items-center gap-2 mb-6">
                       <span className={`px-2 py-1 rounded text-[10px] font-bold ${
                         data.preferential.find(p => p.province === selectedProvince && p.cities.includes(selectedCity)) 
                         ? 'bg-blue-600' : 'bg-indigo-600'
                       }`}>
                         {data.preferential.find(p => p.province === selectedProvince && p.cities.includes(selectedCity)) 
                         ? '우대지역' : '특별지역'}
                       </span>
                       <span className="text-slate-400 text-xs">|</span>
                       <span className="text-emerald-400 font-bold text-lg">
                        {data.preferential.find(p => p.province === selectedProvince && p.cities.includes(selectedCity)) 
                         ? '20만원' : '25만원'}
                       </span>
                    </div>
                    <p className="text-slate-400 text-xs leading-relaxed">좌측 지도에서 해당 지역의 상세 위치를 확인할 수 있습니다. 인근 지역과의 거리를 확인해보세요.</p>
                 </div>
              )}
            </div>

            {/* Right Side: Visualizer */}
            <div className="lg:col-span-12 xl:col-span-8 flex flex-col gap-6">
              <KoreaMap 
                activeProvince={selectedProvince || searchResults?.province || null} 
                onProvinceClick={(p) => setSelectedProvince(p === selectedProvince ? null : p)}
              />
              <div className="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm">
                <div className="flex flex-wrap gap-4 mb-6">
                  {['전체', '강원', '경기', '부산', '대구', '인천', '충북', '충남', '전북', '전남', '경북', '경남'].map(p => (
                    <button 
                      key={p} 
                      onClick={() => setSelectedProvince(p === '전체' ? null : p)}
                      className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                        (selectedProvince === p || (p === '전체' && selectedProvince === null))
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>

                <div className="min-h-[200px]">
                  {!selectedProvince ? (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                       {/* Show summary or all cities briefly? Let's show provinces counts */}
                       {data.preferential.map(p => (
                         <div key={p.province} onClick={() => setSelectedProvince(p.province)} className="p-4 bg-slate-50 rounded-2xl hover:bg-blue-50 cursor-pointer border border-slate-100 group transition-all">
                            <div className="text-slate-900 font-bold mb-1 group-hover:text-blue-600">{p.province}</div>
                            <div className="text-[10px] text-slate-400">우대 {p.cities.length}곳</div>
                         </div>
                       ))}
                    </div>
                  ) : (
                    <div className="space-y-6 animate-in fade-in duration-300">
                       <h3 className="text-xl font-bold text-slate-900 flex items-center justify-between">
                         <span>{selectedProvince} 현황</span>
                         <span className="text-sm font-medium text-slate-400 italic">클릭하여 지도에서 보기</span>
                       </h3>
                       
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         {provinceData?.pref && (
                           <div>
                             <div className="text-xs font-black text-blue-600 mb-3 flex items-center gap-1.5 uppercase">
                               <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                               인구감소지역 (우대)
                             </div>
                             <div className="flex flex-wrap gap-2">
                               {provinceData.pref.cities.map(city => (
                                 <button 
                                   key={city} 
                                   onClick={() => handleCityClick(selectedProvince, city)}
                                   className={`px-3 py-1.5 text-xs font-bold rounded-xl border transition-all ${
                                      selectedCity === city 
                                      ? 'bg-blue-600 border-blue-600 text-white' 
                                      : 'bg-white border-slate-200 text-slate-600 hover:border-blue-300'
                                   }`}
                                 >
                                   {city}
                                 </button>
                               ))}
                             </div>
                           </div>
                         )}

                         {provinceData?.spec && (
                           <div>
                             <div className="text-xs font-black text-indigo-600 mb-3 flex items-center gap-1.5 uppercase">
                               <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                               인구감소지역 (특별)
                             </div>
                             <div className="flex flex-wrap gap-2">
                               {provinceData.spec.cities.map(city => (
                                 <button 
                                   key={city} 
                                   onClick={() => handleCityClick(selectedProvince, city)}
                                   className={`px-3 py-1.5 text-xs font-bold rounded-xl border transition-all ${
                                      selectedCity === city 
                                      ? 'bg-indigo-600 border-indigo-600 text-white' 
                                      : 'bg-white border-slate-200 text-slate-600 hover:border-indigo-300'
                                   }`}
                                 >
                                   {city}
                                 </button>
                               ))}
                             </div>
                           </div>
                         )}
                       </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Info Section */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1 p-8 bg-blue-600 text-white rounded-[32px] shadow-lg flex flex-col justify-between">
              <div>
                <div className="text-4xl mb-4">📢</div>
                <h4 className="text-xl font-bold mb-2">대상 자격 확인</h4>
                <p className="text-blue-100 text-sm leading-relaxed mb-6">
                  대상자 선정은 가구 소득 수준을 기준으로 합니다. 아래를 통해 본인의 기준을 확인하세요.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Link href="https://zucca100.com/2026-reference-median-income-table-100-150-200/" className="bg-white text-blue-600 text-center py-3.5 rounded-2xl text-sm font-bold hover:bg-blue-50 transition-all flex items-center justify-center gap-2">
                   <span>📊</span> 소득하위 70% 기준
                </Link>
                <Link href="https://zucca100.com/near-poverty/" className="bg-white/10 border border-white/20 text-white text-center py-3.5 rounded-2xl text-sm font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                   <span>🛡️</span> 차상위계층 기준
                </Link>
              </div>
            </div>

            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
               <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
                  <h5 className="font-bold text-slate-900 mb-2">우대지역이란?</h5>
                  <p className="text-slate-500 text-sm leading-relaxed">인구 감소 국면이나 회생 가능성이 높은 지역으로, 20만원 수준의 보상적 혜택이 주어집니다.</p>
               </div>
               <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
                  <h5 className="font-bold text-slate-900 mb-2">특별지역이란?</h5>
                  <p className="text-slate-500 text-sm leading-relaxed">인구 소멸 위험이 매우 심각하여 보다 공격적인 인구 유입 정책과 25만원의 강화된 지원을 제공합니다.</p>
               </div>
               <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm sm:col-span-2">
                  <h5 className="font-bold text-slate-900 mb-2">안내사항</h5>
                  <p className="text-slate-500 text-sm leading-relaxed">20~25만원의 혜택은 주거비 지원 등 지자체별 사업에 따라 다를 수 있습니다. 상세 모집 요강 및 신청은 해당 시·군·구청 홈페이지 또는 [복지로]를 이용해 주세요.</p>
               </div>
            </div>
          </div>

         

        </div>
      </div>
    </>
  );
}
