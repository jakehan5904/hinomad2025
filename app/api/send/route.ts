// app/api/send/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Resend API 키 (나중에 발급받아 .env 파일에 넣어야 함)
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, topic, budget, message } = body;

    const data = await resend.emails.send({
      from: 'Hinomad Web <onboarding@resend.dev>', // 나중에 도메인 연결하면 info@hinomad.net으로 변경 가능
      to: ['대표님_이메일@gmail.com'], // 문의 받을 이메일 주소
      subject: `[문의] ${name}님의 프로젝트 제안 (${topic})`,
      html: `
        <h1>새로운 프로젝트 문의가 도착했습니다.</h1>
        <p><strong>이름:</strong> ${name}</p>
        <p><strong>이메일:</strong> ${email}</p>
        <p><strong>주제:</strong> ${topic}</p>
        <p><strong>예산:</strong> ${budget}</p>
        <hr />
        <p><strong>상세 내용:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}