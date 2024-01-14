import { useState } from 'react';
import { encrypt } from '../helpers/encryption';
import InputSection from '../components/InputSection';

function EncryptPage() {
  const [encryptUserInput, setEncryptUserInput] = useState('');
  return (
    <InputSection
      title="Encrypt"
      output={encrypt(encryptUserInput)}
      onChange={(updatedInput) => setEncryptUserInput(updatedInput)}
    />
  );
}

export default EncryptPage;
