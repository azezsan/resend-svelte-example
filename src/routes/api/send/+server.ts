import { Resend } from "resend";
import { RESEND_API_KEY } from "$env/static/private";
import { json } from "@sveltejs/kit";

const resend = new Resend(RESEND_API_KEY);

export async function GET() {
    try {
        const data = await resend.emails.send({
          from: 'Acme <onboarding@resend.dev>',
          to: ['delivered@resend.dev'],
          subject: 'Hello world',
          html: '<strong>It works!</strong>',
        });
    
        return json(data);
      } catch (error) {
        return json(error);
      }
}