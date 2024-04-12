import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest): Promise<Response> {
  const data = await req.json();
  const buttonId = data.untrustedData.buttonIndex;

  let path: string;
  if (buttonId === 1) {
    path = 'Phenomenon';
  } else if (buttonId === 2) {
    path = 'Github';
  } else {
    path = '';
  }
  const headers = new Headers();
  headers.set('Location', `${process.env.NEXT_PUBLIC_BASE_URL}/`);
  if(path = 'Phenomenon'){
  const response = NextResponse.redirect(`https://phenomenon.vercel.app/`, {
    headers: headers,
    status: 302,
  });
  return response;
    }
    if(path = 'Github'){
        const response = NextResponse.redirect(`https://github.com/0xomen`, {
          headers: headers,
          status: 302,
        });
        return response;
          }
}

export const dynamic = 'force-dynamic';