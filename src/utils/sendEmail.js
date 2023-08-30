import axios from "axios";

const API_KEY = process.env.SENDGRID_API_KEY;

export default async function sendEmail(data) {
    const res = await axios.post("/api/contact", data, {
        "headers": {
            Authorization: `Bearer ${API_KEY}`
        }
    });
    console.log("res", res);
    return res;
}