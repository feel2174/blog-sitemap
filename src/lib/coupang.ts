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
  
  const date = new Date().toISOString().split('.')[0].replace(/[-:]/g, '').slice(2, 10) + 'T' + 
               new Date().toISOString().split('T')[1].split('.')[0].replace(/[-:]/g, '') + 'Z';
  
  // Create signature
  const message = date + method + path + query;
  const signature = crypto.createHmac('sha256', SECRET_KEY)
    .update(message)
    .digest('hex');

  const authorization = `CEA algorithm=HmacSHA256, access-key=${ACCESS_KEY}, signed-date=${date}, signature=${signature}`;

  try {
    const response = await fetch(`${DOMAIN}${path}?${query}`, {
      method,
      headers: {
        "Authorization": authorization,
        "Content-Type": "application/json"
      }
    });

    const result = await response.json();
    return result.data?.productData || [];
  } catch (error) {
    console.error("Coupang API call failed", error);
    return [];
  }
}
