import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, topic, budget, message } = body;

    // 공통 스타일 (깔끔한 디자인)
    const summaryHtml = `
      <div style="background-color: #f4f4f4; padding: 20px; border-radius: 8px; margin: 20px 0; font-size: 14px; color: #333;">
        <p style="margin: 5px 0;"><strong>이름:</strong> ${name}</p>
        <p style="margin: 5px 0;"><strong>이메일:</strong> ${email}</p>
        <p style="margin: 5px 0;"><strong>관심 분야:</strong> ${topic}</p>
        <p style="margin: 5px 0;"><strong>예산 규모:</strong> ${budget}</p>
        <hr style="border: 0; border-top: 1px solid #ddd; margin: 15px 0;" />
        <p style="margin-bottom: 5px;"><strong>[상세 내용]</strong></p>
        <p style="white-space: pre-line; line-height: 1.6;">${message}</p>
      </div>
    `;

    // 1. [관리자 알림] 대표님들께 보내는 메일
    const adminEmail = await resend.emails.send({
      // ✅ [수정] 대문자 HINOMAD 적용
      from: 'HINOMAD Form <contact@hinomad.net>',
      
      // 관리자 수신용 (참조 이슈 해결을 위해 to에 배열로 입력)
      to: ['info@hinomad.net', 'maximilium@naver.com'], 
      
      // 관리자가 '답장' 누르면 바로 고객 이메일로 가도록 설정
      replyTo: email, 
      
      // 관리자용 제목에는 구분을 위해 [Inquiry] 같은 말머리를 두는 것이 관리하기 좋습니다.
      subject: `[Inquiry] ${name} - ${topic}`,
      html: `
        <h2>🚀 웹사이트에서 새로운 프로젝트 문의가 도착했습니다.</h2>
        <p>아래 내용을 확인하고 담당자를 배정해 주세요.</p>
        ${summaryHtml}
      `,
    });

    if (adminEmail.error) {
      throw new Error(adminEmail.error.message);
    }

    // 2. [고객 자동 회신] 접수 확인 메일
    try {
      await resend.emails.send({
        // ✅ [수정] 대문자 HINOMAD 적용
        from: 'HINOMAD <contact@hinomad.net>',
        
        to: [email],
        
        // 고객이 답장하면 실제 info 메일로 가도록 설정
        replyTo: 'info@hinomad.net', 
        
        // ✅ [수정] 제목에서 [HINOMAD] 제거 (보내는 사람 이름이 있으므로 중복 제거)
        subject: `${name}님, 문의가 정상적으로 접수되었습니다.`,
        
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #000; letter-spacing: -1px;">HINOMAD</h2>
            <p>안녕하세요, ${name}님.</p>
            <p>보내주신 프로젝트 문의가 정상적으로 시스템에 접수되었습니다.<br/>
            내용을 꼼꼼히 검토한 후, 24시간 이내에 담당자가 연락드리겠습니다.</p>
            
            <p style="margin-top: 30px; font-size: 14px; color: #666;">▼ 작성하신 내용 사본</p>
            ${summaryHtml}
            
            <br/>
            <p style="font-size: 14px; color: #888;">
              감사합니다.<br/>
              Strategic Digital Consultancy, HINOMAD
            </p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 30px 0;" />
            <small style="color: #aaa; font-size: 12px;">본 메일은 발신 전용입니다. 회신이 필요하시면 info@hinomad.net으로 연락해 주세요.</small>
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