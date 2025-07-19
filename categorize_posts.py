import json
import re

def categorize_posts():
    # 원본 데이터 읽기
    with open('word_filtered.json', 'r', encoding='utf-8') as f:
        posts = json.load(f)
    
    # 카테고리별 분류
    categorized_posts = {
        "support_benefits": [],  # 지원금/환급금 관련
        "information": [],       # 정보성 글
        "product_reviews": [],   # 제품 리뷰
        "lifestyle": [],         # 라이프스타일
        "health": [],           # 건강 관련
        "finance": [],          # 금융/투자
        "technology": [],       # 기술/IT
        "entertainment": [],    # 엔터테인먼트
        "food": [],            # 음식/요리
        "pets": []             # 반려동물
    }
    
    # 지원금/환급금 관련 키워드
    support_keywords = [
        '지원금', '환급', '지원', '혜택', '지급', '신청', '부담경감', '크레딧',
        '민생회복', '소비쿠폰', '양육비', '선지급제', '문화비', '소득공제',
        '활력보험지원금', '차상위계층', '출국납부금환급'
    ]
    
    # 제품 리뷰 키워드
    review_keywords = [
        '추천', '후기', '리뷰', 'TOP', '베스트', '장점', '단점', '구매',
        '실사용', '솔직', '비교', '인기상품', '내돈내산'
    ]
    
    # 건강 관련 키워드
    health_keywords = [
        '건강', '다이어트', '비타민', '보양식', '피부관리', '파킨슨병',
        '초기증상', '여름건강', '건강한'
    ]
    
    # 금융/투자 키워드
    finance_keywords = [
        '대출', '은행', '투자', 'ETF', 'ISA', '퇴직연금', '현금영수증',
        '계좌', '금융', '저축', '신용점수'
    ]
    
    # 기술/IT 키워드
    tech_keywords = [
        'iOS', '아이폰', '아이패드', '애플워치', '스마트폰', '케이스',
        '블루투스', '무선이어폰', '인증서', '네이버'
    ]
    
    # 엔터테인먼트 키워드
    entertainment_keywords = [
        '영화', '다큐멘터리', '동아시안컵', '박람회', '축제', '운세',
        '카카오톡', '선물하기', '티빙', '웨이브'
    ]
    
    # 음식/요리 키워드
    food_keywords = [
        '음식', '요리', '식단', '채소', '과일', '아이스크림', '떡볶이',
        '복숭아', '블루베리', '옥수수', '양배추', '바나듐쌀'
    ]
    
    # 반려동물 키워드
    pet_keywords = [
        '강아지', '고양이', '반려동물', '하임리히법', '목쿠션'
    ]
    
    # 라이프스타일 키워드
    lifestyle_keywords = [
        '여름', '가전', '패션', '비치웨어', '레인부츠', '에어컨', '선풍기',
        '제습기', '침구', '수납백', '쓰레기처리기'
    ]
    
    for post in posts:
        title = post['title']['rendered']
        link = post['link']
        
        # 지원금/환급금 카테고리 확인
        if any(keyword in title for keyword in support_keywords):
            categorized_posts["support_benefits"].append({
                "title": title,
                "link": link,
                "category": "지원금/환급금"
            })
            continue
            
        # 제품 리뷰 카테고리 확인
        if any(keyword in title for keyword in review_keywords):
            categorized_posts["product_reviews"].append({
                "title": title,
                "link": link,
                "category": "제품리뷰"
            })
            continue
            
        # 건강 관련 카테고리 확인
        if any(keyword in title for keyword in health_keywords):
            categorized_posts["health"].append({
                "title": title,
                "link": link,
                "category": "건강"
            })
            continue
            
        # 금융/투자 카테고리 확인
        if any(keyword in title for keyword in finance_keywords):
            categorized_posts["finance"].append({
                "title": title,
                "link": link,
                "category": "금융/투자"
            })
            continue
            
        # 기술/IT 카테고리 확인
        if any(keyword in title for keyword in tech_keywords):
            categorized_posts["technology"].append({
                "title": title,
                "link": link,
                "category": "기술/IT"
            })
            continue
            
        # 엔터테인먼트 카테고리 확인
        if any(keyword in title for keyword in entertainment_keywords):
            categorized_posts["entertainment"].append({
                "title": title,
                "link": link,
                "category": "엔터테인먼트"
            })
            continue
            
        # 음식/요리 카테고리 확인
        if any(keyword in title for keyword in food_keywords):
            categorized_posts["food"].append({
                "title": title,
                "link": link,
                "category": "음식/요리"
            })
            continue
            
        # 반려동물 카테고리 확인
        if any(keyword in title for keyword in pet_keywords):
            categorized_posts["pets"].append({
                "title": title,
                "link": link,
                "category": "반려동물"
            })
            continue
            
        # 라이프스타일 카테고리 확인
        if any(keyword in title for keyword in lifestyle_keywords):
            categorized_posts["lifestyle"].append({
                "title": title,
                "link": link,
                "category": "라이프스타일"
            })
            continue
            
        # 기본적으로 정보성 글로 분류
        categorized_posts["information"].append({
            "title": title,
            "link": link,
            "category": "정보"
        })
    
    # 결과를 JSON 파일로 저장
    with open('categorized_posts.json', 'w', encoding='utf-8') as f:
        json.dump(categorized_posts, f, ensure_ascii=False, indent=2)
    
    # 통계 출력
    print("=== 카테고리별 분류 결과 ===")
    for category, posts in categorized_posts.items():
        print(f"{category}: {len(posts)}개")
    
    return categorized_posts

if __name__ == "__main__":
    categorize_posts() 