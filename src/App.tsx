import { useState } from 'react';
import { decrypt, encrypt } from './helpers/encryption';
//import TextLineFormat from './components/textLineFormat';

function App() {
  const [userInput1, encryptUserInput] = useState('');
  const [userInput2, decryptUserInput] = useState('');

  return (
    <>
      <div>
        <h2 className={'flex justify-center text-3xl font-mono text-lime-400 bg-black p-4 w-full fixed'}>
          Message Masher
        </h2>
      </div>
      <div className={'flex items-center justify-center gap-4 flex-col h-screen '}>
        <h2 className={'text-2xl font-mono text-lime-400 bg-black p-4 w-fit'}>Encrypt</h2>
        <div className="p-4 bg-black text-lime-400 flex gap-2 w-1/4 flex-col">
          <div className="flex flex-row gap-2">
            <p className="text-green-800">{'>'}</p>
            <input
              onChange={(pete) => encryptUserInput(pete.currentTarget.value)}
              placeholder="..."
              className="bg-black text-lime-400 placeholder-green-600 w-full"
            />
          </div>
          <div className="flex flex-row gap-2">
            <p className="text-green-800">{'>'}</p>
            <p>{encrypt(userInput1)}</p>
          </div>
        </div>
        <h2 className={'text-2xl font-mono text-lime-400 bg-black p-4 w-fit'}>Decrypt</h2>
        <div className="p-4 bg-black text-lime-400 flex gap-2 w-1/4 flex-col">
          <div className="flex flex-row gap-2">
            <p className="text-green-800">{'>'}</p>
            <input
              onChange={(decrypt) => decryptUserInput(decrypt.currentTarget.value)}
              placeholder="..."
              className="bg-black text-lime-400 placeholder-green-600 w-full"
            />
          </div>
          <div className="flex flex-row gap-2">
            <p className="text-green-800">{'>'}</p>
            <p>{decrypt(userInput2)}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
