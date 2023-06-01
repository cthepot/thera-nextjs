import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const API_KEY = process.env.SENDGRID_API_KEY || '';
const CONTACT_API_URL = 'https://api.sendgrid.com/v3/marketing/contacts';

const isEmailInList = async (email: string) => {
  try {
    const response = await axios.post(
      `${CONTACT_API_URL}/search`,
      { query: `email LIKE '${email}'` },
      { headers: { Authorization: `Bearer ${API_KEY}` } }
    );

    return response.data.contact_count > 0;
  } catch (error) {
    console.error('Error checking email in list:', error);
    throw error;
  }
};

const addEmailToList = async (email: string) => {
  try {
    await axios.put(
      `${CONTACT_API_URL}`,
      { list_ids: [], contacts: [{ email }] },  // Insert your list_id(s) in list_ids array
      { headers: { Authorization: `Bearer ${API_KEY}` } }
    );
  } catch (error) {
    console.error('Error adding email to list:', error);
    throw error;
  }
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body;

  try {
    const emailInList = await isEmailInList(email);
    if (emailInList) {
      return res.status(409).json({ error: 'Email already exists in the list' });
    }

    await addEmailToList(email);
    res.status(200).json({ message: 'Email added successfully to the list' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while processing your request' });
  }
};
