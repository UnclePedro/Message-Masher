import { useState } from 'react';
import { decrypt, encrypt } from './helpers/encryption';
import { InputSection } from './components/InputSection';

function App() {
  const [encryptUserInput, setEncryptUserInput] = useState('');
  const [decryptUserInput, setDecryptUserInput] = useState('');

  return (
    <>
      <div>
        <h2 className={'flex justify-center text-3xl font-mono text-lime-400 bg-black p-4 w-full fixed'}>
          Message Masher
        </h2>
      </div>
      <div className={'flex items-center justify-center gap-4 flex-col h-screen '}>
        <InputSection
          title="Encrypt"
          output={encrypt(encryptUserInput)}
          onChange={(updatedInput) => setEncryptUserInput(updatedInput)}
        />
        <InputSection
          title="Decrypt"
          output={decrypt(decryptUserInput)}
          onChange={(updatedInput) => setDecryptUserInput(updatedInput)}
        />
      </div>
    </>
  );
}

export default App;
