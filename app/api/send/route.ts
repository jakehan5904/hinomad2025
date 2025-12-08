import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, topic, budget, message } = body;

    // 1. [관리자 알림] info 메일로 받기 (네이버는 참조로 껴두기)
    const adminEmail = await resend.emails.send({
      from: 'Hinomad Contact <info@hinomad.net>', // 발송자
      
      // ✅ 받는 사람: 실제 사용하는 info 메일로 변경
      to: ['info@hinomad.net'], 
      
      // ✅ 참조(CC): 알림을 놓치지 않게 대표님 개인 메일도 추가 (선택사항)
      cc: ['maximilium@naver.com'], 
      
      replyTo: email, // '답장' 누르면 바로 고객에게 써지도록 설정
      
      subject: `[HINOMAD 문의] ${name}님의 프로젝트 제안`,
      html: `
        <h2>🚀 새로운 프로젝트 문의가 도착했습니다.</h2>
        <hr style="border: 1px solid #eee; margin: 20px 0;" />
        <p><strong>이름:</strong> ${name}</p>
        <p><strong>이메일:</strong> ${email}</p>
        <p><strong>관심 분야:</strong> ${topic}</p>
        <p><strong>예산 규모:</strong> ${budget}</p>
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin-top: 20px;">
          <h3>[상세 내용]</h3>
          <p style="white-space: pre-line;">${message}</p>
        </div>
      `,
    });

    if (adminEmail.error) {
      throw new Error(adminEmail.error.message);
    }

    // 2. [고객 자동 회신] info 메일 이름으로 발송
    try {
      await resend.emails.send({
        from: 'Hinomad <info@hinomad.net>',
        to: [email],
        subject: `${name}님, 문의가 정상적으로 접수되었습니다.`,
        html: `
          <div style="font-family: sans-serif; padding: 20px;">
            <h2 style="color: #000;">HINOMAD</h2>
            <p>안녕하세요, ${name}님.</p>
            <p>보내주신 프로젝트 문의가 정상적으로 접수되었습니다.<br/>
            내용을 꼼꼼히 검토한 후, 담당자가 24시간 이내에 연락드리겠습니다.</p>
            <br/>
            <p>감사합니다.<br/>HINOMAD 팀 드림</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 30px 0;" />
            <small style="color: #888;">본 메일은 발신 전용입니다.</small>
          </div>
        `,
      });
    } catch (replyError) {
      console.error("자동 회신 실패 (무시됨):", replyError);
    }

    return NextResponse.json({ success: true });
    
  } catch (error) {
    console.error('Email Error:', error);
    return NextResponse.json({ error }, { status: 500 });
  }
}