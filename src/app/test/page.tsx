import Link from 'next/link';

export default function TestPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-600 mb-8">CSS 테스트 페이지</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">카드 1</h2>
            <p className="text-gray-600">이 카드가 제대로 스타일링되면 CSS가 작동하는 것입니다.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">카드 2</h2>
            <p className="text-gray-600">호버 효과도 확인해보세요.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">카드 3</h2>
            <p className="text-gray-600">반응형 그리드도 테스트됩니다.</p>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">그라데이션 배경</h2>
          <p>이 그라데이션이 보이면 Tailwind CSS가 정상 작동하는 것입니다.</p>
        </div>
        
        <div className="mt-8">
          <Link 
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            메인 페이지로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
} 