import { useState } from 'react';
import { encrypt } from '../helpers/encryption';
import InputSection from '../components/InputSection';

function EncryptPage() {
  const [userInput, setUserInput] = useState('');
  return (
    <InputSection title="Encrypt" onChange={(updatedInput) => setUserInput(updatedInput)} output={encrypt(userInput)} />
  );
}

export default EncryptPage;
