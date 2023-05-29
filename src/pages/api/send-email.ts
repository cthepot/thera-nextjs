import { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';

const API_KEY = process.env.SENDGRID_API_KEY || '';

sgMail.setApiKey(API_KEY);

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email } = req.body;

    // Validate email format
    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    try {
      const msg = {
        to: email,
        from: 'contact@thera.gg',
        subject: 'Hello from Thera!',
        text: 'Hi there, I am Christopher founder at Thera! You can book a call on my calendar here https://calendly.com/thepot-christopher/30min. We can have a chat about how to start selling health supplements produced in France, in either English or French',
      };

      await sgMail.send(msg);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};

export default sendEmail;
