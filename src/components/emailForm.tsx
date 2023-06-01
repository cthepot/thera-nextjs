import { useState, ChangeEvent } from 'react';
import axios from 'axios';

type MessageType = 'success' | 'error';

interface Message {
  content: string;
  type: MessageType;
}

const EmailForm = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState<Message | null>(null);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSendEmail = async () => {
    // Validate email format
    if (!email || !email.includes('@')) {
      setMessage({ content: 'Please input a valid email address', type: 'error' });
      return;
    }

    try {
      const response = await axios.post('/api/send-email', { email });
      setMessage({ content: response.data.message, type: response.data.status });
    } catch (error) {
      console.error('Error sending email:', error);
      setMessage({ content: 'Failed to process request', type: 'error' });
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
          className="border-2 border-purple-primary rounded-full py-4 px-6 w-80 focus:outline-none focus:ring-1 focus:ring-purple-500"
        />
        <button
          onClick={handleSendEmail}
          className="bg-purple-primary text-white py-4 px-6 rounded-full w-32 space-x-2.5"
        >
          Let&apos;s chat!
        </button>
      </div>
      {message && (
        <p className={`text-${message.type === 'success' ? 'green' : 'red'}-500`}>
          {message.content}
        </p>
      )}
    </div>
  );
};

export default EmailForm;
