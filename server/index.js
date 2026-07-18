import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.MONGODB_DB || 'portfolio';
const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = process.env.SMTP_PORT;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const RECIPIENT = process.env.SMTP_RECIPIENT || 'mahnoorshahid2410@gmail.com';
const PORT = process.env.PORT || 4000;

if (!MONGODB_URI || !SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
  console.error('Missing required environment variables.');
  console.error('Required: MONGODB_URI, SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS');
  process.exit(1);
}

const client = new MongoClient(MONGODB_URI);
await client.connect();
const db = client.db(MONGODB_DB);
const collection = db.collection('contact_messages');

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: Number(SMTP_PORT),
  secure: false,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'name, email and message are required' });
  }

  try {
    await collection.insertOne({
      name: name.trim(),
      email: email.trim(),
      subject: subject?.trim() || null,
      message: message.trim(),
      created_at: new Date(),
    });

    const subjectLine = subject ? `New message from ${name}: ${subject}` : `New message from ${name}`;
    const text = `Name: ${name}\nEmail: ${email}\nSubject: ${subject || 'No subject'}\n\n${message}`;
    const html = `
      <div>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || 'No subject'}</p>
        <hr />
        <p>${message.replace(/\n/g, '<br/>')}</p>
      </div>
    `;

    await transporter.sendMail({
      from: `"Portfolio Contact" <${SMTP_USER}>`,
      replyTo: email,
      to: RECIPIENT,
      subject: subjectLine,
      text,
      html,
    });

    return res.status(200).json({ status: 'ok' });
  } catch (error) {
    console.error('Contact submit failed:', error);
    return res.status(500).json({ error: 'Unable to save message and send email' });
  }
});

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Backend server listening on http://localhost:${PORT}`);
});
