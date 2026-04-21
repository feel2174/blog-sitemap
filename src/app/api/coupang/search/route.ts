import { NextResponse } from 'next/server';
import { getCoupangProducts } from '@/lib/coupang';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const keyword = searchParams.get('keyword');

  if (!keyword) {
    return NextResponse.json({ error: "Keyword is required" }, { status: 400 });
  }

  const products = await getCoupangProducts(keyword);
  return NextResponse.json({ success: true, data: products });
}
