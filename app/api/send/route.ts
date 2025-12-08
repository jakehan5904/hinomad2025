import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, topic, budget, message } = body;

    // 실제 메일 발송
    const data = await resend.emails.send({
      // ⚠️ 주의: 아직 도메인 인증을 안 했다면 'onboarding@resend.dev'만 쓸 수 있습니다.
      // 나중에 Resend 홈페이지에서 hinomad.net 도메인 인증을 하면 'info@hinomad.net' 등으로 바꿀 수 있습니다.
      from: 'Hinomad Web <onboarding@resend.dev>', 
      
      // 👇 메일 받을 대표님 주소를 여기에 적으세요!
      to: ['maximilium@naver.com'], 
      
      subject: `[HINOMAD 문의] ${name}님의 프로젝트 제안`,
      html: `
        <h2>새로운 프로젝트 문의가 접수되었습니다.</h2>
        <p><strong>이름:</strong> ${name}</p>
        <p><strong>이메일:</strong> ${email}</p>
        <p><strong>관심 분야:</strong> ${topic}</p>
        <p><strong>예산 규모:</strong> ${budget}</p>
        <hr />
        <h3>[상세 내용]</h3>
        <p>${message}</p>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error('Email Error:', error);
    return NextResponse.json({ error }, { status: 500 });
  }
}