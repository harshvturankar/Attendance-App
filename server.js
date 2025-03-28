const express = require("express");
const cors = require("cors");
const twilio = require("twilio");

const app = express();
app.use(express.json());
app.use(cors());

const accountSid = "AC6a048d61e2f2e23ac3eb34b2e6281b68";
const authToken = "45f1f856d0aeb2f74cdfad131b621fb4";
const client = new twilio(accountSid, authToken);

const WHATSAPP_NUMBER = "whatsapp:+14155238886";  // Twilio's sandbox number
const RECIPIENT_NUMBER = "whatsapp:+918459708569"; // Your WhatsApp number

app.post("/send-whatsapp", (req, res) => {
    const { message } = req.body;

    client.messages.create({
        from: 'whatsapp:+14155238886', // Twilio Sandbox number
        to: 'whatsapp:+918459708569', // Your verified number
        body: 'Here is your attendance report.',
        mediaUrl: ['https://your-public-url.com/attendance.pdf'] // MUST be publicly accessible!
      })
      
    .then(() => res.json({ success: true }))
    .catch(error => res.status(500).json({ error }));
});

app.listen(3000, () => console.log("Server running on port 3000"));
