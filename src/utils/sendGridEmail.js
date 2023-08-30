import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function sendGridEmail(msgData) {
    try {
        const res = await sgMail.send(msgData);
        return res;

    } catch (e) {
        console.error("sendgrid email error:", e);

        if (e.response) {
            console.error("SendGrid response body:", e.response.body);
        }
    }
}
