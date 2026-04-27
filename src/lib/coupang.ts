import crypto from 'crypto';

const ACCESS_KEY = process.env.NEXT_PUBLIC_COUPANG_ACCESS_KEY;
const SECRET_KEY = process.env.NEXT_PUBLIC_COUPANG_SECRET_KEY;
const DOMAIN = "https://api-gateway.coupang.com";
const BASE_URL = "/v2/providers/affiliate_open_api/apis/openapi/v1";

export async function getCoupangProducts(keyword: string) {
  if (!ACCESS_KEY || !SECRET_KEY) {
    console.error("Coupang API keys are missing");
    return [];
  }

  const method = "GET";
  const path = `${BASE_URL}/products/search`;
  const query = `keyword=${encodeURIComponent(keyword)}&limit=4`;
  
  const now = new Date();
  const date = now.toISOString().split('.')[0].replace(/[-:]/g, '').slice(2) + 'Z';
  // Example: 2024-04-21T04:01:20.000Z -> 240421T040120Z
  
  // Create signature
  const message = date + method + path + query;
  const signature = crypto.createHmac('sha256', SECRET_KEY)
    .update(message)
    .digest('hex');

  const authorization = `CEA algorithm=HmacSHA256, access-key=${ACCESS_KEY}, signed-date=${date}, signature=${signature}`;

  try {
    const fullUrl = `${DOMAIN}${path}?${query}`;
    const response = await fetch(fullUrl, {
      method,
      headers: {
        "Authorization": authorization,
        "Content-Type": "application/json"
      }
    });

    const result = await response.json();
    
    if (!response.ok) {
      console.error("Coupang API Error Response:", result);
      return [];
    }

    // Search API returns products in the data array
    // Some other APIs might return data as an object containing productData
    let productList = [];
    if (Array.isArray(result.data)) {
      productList = result.data;
    } else if (result.data && Array.isArray(result.data.productData)) {
      productList = result.data.productData;
    }

    console.log(`Coupang API success: found ${productList.length} products for "${keyword}"`);
    return productList;
  } catch (error) {
    console.error("Coupang API call failed", error);
    return [];
  }
}
