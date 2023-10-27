import { useState, ChangeEvent } from 'react';
import axios from 'axios';

type MessageType = 'success' | 'error';

interface Message {
  content: string;
  type: MessageType;
}

interface EmailFormProps {
  isBlack?: boolean;
}

interface AxiosErrorResponse {
  response?: {
    data: {
      error: string;
    };
    status: number;
  };
  message: string;
}


const EmailForm = ({ isBlack = false }: EmailFormProps): JSX.Element => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState<Message | null>(null);
  const [isLoading, setIsLoading] = useState(false)

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSendEmail = async () => {
    // Validate email format
    if (!email || !email.includes('@')) {
      setMessage({ content: 'Please input a valid email address', type: 'error' });
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post('/api/send-email', { email });

      if (response.status === 200) {
        // Assume success if we get a 200 OK response
        setMessage({ content: response.data.message, type: 'success' });
      } else {
        // Any other status code is treated as an error
        setMessage({ content: response.data.message, type: 'error' });
      }
    } catch (error) {
      const axiosError = error as AxiosErrorResponse;
      console.error('Error sending email:', axiosError);

      // Check if a specific error message is returned from the server
      let errorMessage = axiosError.response?.data?.error || 'Failed to process request';
      setMessage({ content: errorMessage, type: 'error' });
    } finally {
      setIsLoading(false);
    }
  };

  const buttonClasses = isBlack
    ? 'bg-black hover:bg-gray-900 text-white py-4 px-6 rounded-full w-32 space-x-2.5'
    : 'bg-purple-primary hover:bg-purple-primary-hover text-white py-4 px-6 rounded-full w-32 space-x-2.5';

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
          className={buttonClasses}
          disabled={isLoading}
        >
          Let&apos;s chat!
        </button>
      </div>
      {isLoading && <p className="text-gray-500">Processing...</p>}
      {message && (
        <p className={message.type === 'success' ? 'text-green-500' : 'text-red-500'}>
          {message.content}
        </p>
      )}
    </div>
  );
};

export default EmailForm;
