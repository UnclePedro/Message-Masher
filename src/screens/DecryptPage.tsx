import { useState } from 'react';
import { decrypt } from '../helpers/encryption';
import InputSection from '../components/InputSection';

function DecryptPage() {
  const [userInput, setUserInput] = useState('');
  return (
    <InputSection title="Decrypt" onChange={(updatedInput) => setUserInput(updatedInput)} output={decrypt(userInput)} />
  );
}

export default DecryptPage;
