import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import { MongoClient } from 'mongodb';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../../server/.env') });
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.MONGODB_DB || 'portfolio';
const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = process.env.SMTP_PORT;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const RECIPIENT = process.env.SMTP_RECIPIENT || 'mahnoorshahid2410@gmail.com';

let cachedClient = null;
let cachedDb = null;

async function getDb() {
  if (cachedDb) {
    return cachedDb;
  }

  if (!MONGODB_URI) {
    throw new Error('MONGODB_URI is not configured');
  }

  const client = new MongoClient(MONGODB_URI);
  await client.connect();
  cachedClient = client;
  cachedDb = client.db(MONGODB_DB);
  return cachedDb;
}

function createTransporter() {
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    throw new Error('SMTP configuration is incomplete');
  }

  return nodemailer.createTransport({
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
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body || {};

    if (!name || !email || !message) {
      return Response.json({ error: 'name, email and message are required' }, { status: 400 });
    }

    const db = await getDb();
    const collection = db.collection('contact_messages');

    await collection.insertOne({
      name: String(name).trim(),
      email: String(email).trim(),
      subject: subject ? String(subject).trim() : null,
      message: String(message).trim(),
      created_at: new Date(),
    });

    const transporter = createTransporter();
    const subjectLine = subject ? `New message from ${name}: ${subject}` : `New message from ${name}`;
    const text = `Name: ${name}\nEmail: ${email}\nSubject: ${subject || 'No subject'}\n\n${message}`;
    const html = `
      <div>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || 'No subject'}</p>
        <hr />
        <p>${String(message).replace(/\n/g, '<br/>')}</p>
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

    return Response.json({ status: 'ok' });
  } catch (error) {
    console.error('Contact submit failed:', error);
    return Response.json({ error: 'Unable to save message and send email', details: error instanceof Error ? error.message : String(error) }, { status: 500 });
  }
}
