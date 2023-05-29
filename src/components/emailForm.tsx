import { useState, ChangeEvent } from 'react';
import axios from 'axios';

const EmailForm = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSendEmail = async () => {
    // Validate email format
    if (!email || !email.includes('@')) {
      setError('Please input a valid email address');
      return;
    }

    try {
      await axios.post('/api/send-email', { email });
      console.log('Email sent successfully');
      setError('');
    } catch (error) {
      console.error('Error sending email:', error);
      setError('Failed to send email');
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex md:flex-row flex-col align-center gap-2">
        <input
          type="email"
          placeholder="Enter your email..."
          value={email}
          onChange={handleEmailChange}
          className="border-2 border-purple-primary rounded-full py-4 px-6 w-70 focus:outline-none focus:ring-1 focus:ring-purple-500 flex-grow"
        />
        <button
          onClick={handleSendEmail}
          className="bg-purple-primary text-white py-4 px-6 rounded-full w-32 space-x-2.5"
        >
          Let's chat!
        </button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default EmailForm;
