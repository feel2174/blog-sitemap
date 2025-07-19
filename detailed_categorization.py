import json
import re

def detailed_categorization():
    # 원본 데이터 읽기
    with open('word_filtered.json', 'r', encoding='utf-8') as f:
        posts = json.load(f)
    
    # 상세 카테고리 분류
    detailed_categories = {
        "government_support": {  # 정부 지원금/혜택
            "keywords": ["지원금", "민생회복", "소비쿠폰", "양육비", "선지급제", "활력보험지원금", "차상위계층"],
            "posts": []
        },
        "tax_refund": {  # 세금 환급
            "keywords": ["환급", "문화비", "소득공제", "출국납부금환급", "현금영수증"],
            "posts": []
        },
        "business_support": {  # 사업자 지원
            "keywords": ["소상공인", "부담경감", "크레딧", "으뜸효율", "가전제품환급"],
            "posts": []
        },
        "product_reviews": {  # 제품 리뷰
            "keywords": ["추천", "후기", "리뷰", "TOP", "베스트", "장점", "단점", "구매", "실사용", "솔직", "비교", "인기상품", "내돈내산"],
            "posts": []
        },
        "health_wellness": {  # 건강/웰빙
            "keywords": ["건강", "다이어트", "비타민", "보양식", "피부관리", "파킨슨병", "초기증상", "여름건강", "건강한"],
            "posts": []
        },
        "finance_investment": {  # 금융/투자
            "keywords": ["대출", "은행", "투자", "ETF", "ISA", "퇴직연금", "계좌", "금융", "저축", "신용점수"],
            "posts": []
        },
        "technology": {  # 기술/IT
            "keywords": ["iOS", "아이폰", "아이패드", "애플워치", "스마트폰", "케이스", "블루투스", "무선이어폰", "인증서", "네이버"],
            "posts": []
        },
        "entertainment": {  # 엔터테인먼트
            "keywords": ["영화", "다큐멘터리", "동아시안컵", "박람회", "축제", "운세", "카카오톡", "선물하기", "티빙", "웨이브"],
            "posts": []
        },
        "food_nutrition": {  # 음식/영양
            "keywords": ["음식", "요리", "식단", "채소", "과일", "아이스크림", "떡볶이", "복숭아", "블루베리", "옥수수", "양배추", "바나듐쌀"],
            "posts": []
        },
        "pets": {  # 반려동물
            "keywords": ["강아지", "고양이", "반려동물", "하임리히법", "목쿠션"],
            "posts": []
        },
        "lifestyle": {  # 라이프스타일
            "keywords": ["여름", "가전", "패션", "비치웨어", "레인부츠", "에어컨", "선풍기", "제습기", "침구", "수납백", "쓰레기처리기"],
            "posts": []
        },
        "information_guide": {  # 정보/가이드
            "keywords": ["가이드", "방법", "절차", "신청", "발급", "조회", "예약", "공유누리", "주4.5일제"],
            "posts": []
        },
        "seasonal": {  # 계절/시즌
            "keywords": ["복날", "초복", "중복", "말복", "여름철", "폭염", "더위", "보양식"],
            "posts": []
        }
    }
    
    # 각 포스트를 카테고리별로 분류
    for post in posts:
        title = post['title']['rendered']
        link = post['link']
        
        categorized = False
        
        # 각 카테고리별로 키워드 매칭
        for category_name, category_info in detailed_categories.items():
            if any(keyword in title for keyword in category_info["keywords"]):
                detailed_categories[category_name]["posts"].append({
                    "title": title,
                    "link": link,
                    "category": category_name,
                    "matched_keywords": [kw for kw in category_info["keywords"] if kw in title]
                })
                categorized = True
                break
        
        # 분류되지 않은 포스트는 정보/가이드로 분류
        if not categorized:
            detailed_categories["information_guide"]["posts"].append({
                "title": title,
                "link": link,
                "category": "information_guide",
                "matched_keywords": []
            })
    
    # 결과 정리
    result = {
        "summary": {},
        "categories": {}
    }
    
    # 요약 정보 생성
    for category_name, category_info in detailed_categories.items():
        result["summary"][category_name] = {
            "count": len(category_info["posts"]),
            "description": get_category_description(category_name)
        }
        result["categories"][category_name] = category_info["posts"]
    
    # JSON 파일로 저장
    with open('detailed_categorized_posts.json', 'w', encoding='utf-8') as f:
        json.dump(result, f, ensure_ascii=False, indent=2)
    
    # 통계 출력
    print("=== 상세 카테고리별 분류 결과 ===")
    for category_name, info in result["summary"].items():
        print(f"{category_name} ({info['description']}): {info['count']}개")
    
    return result

def get_category_description(category_name):
    descriptions = {
        "government_support": "정부 지원금/혜택",
        "tax_refund": "세금 환급",
        "business_support": "사업자 지원",
        "product_reviews": "제품 리뷰",
        "health_wellness": "건강/웰빙",
        "finance_investment": "금융/투자",
        "technology": "기술/IT",
        "entertainment": "엔터테인먼트",
        "food_nutrition": "음식/영양",
        "pets": "반려동물",
        "lifestyle": "라이프스타일",
        "information_guide": "정보/가이드",
        "seasonal": "계절/시즌"
    }
    return descriptions.get(category_name, category_name)

if __name__ == "__main__":
    detailed_categorization() 