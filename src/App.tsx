import { useState } from 'react';
//import TextLineFormat from './components/textLineFormat';

const shift = 10;

const encrypt = (encryptInput: string) => {
  // Encrypted string will push to the encryptedString variable
  let encryptedString = '';
  // Convert string to uppercase in new variable
  const uppercaseString = encryptInput.toUpperCase();
  // for loop to iterate over each character in the string
  for (let i = 0; i < uppercaseString.length; i++) {
    // Variable for unicode of each character
    let charCode = uppercaseString.charCodeAt(i);
    // if unicode is uppercase letter
    if (charCode <= 90 && charCode >= 65) {
      // shift by determined shift number
      charCode += shift;
      // then if char code is over 90, loop around by 1 full alphabet
      if (charCode > 90) {
        charCode -= 26;
      }
    }
    // add encrypted letter to encrypted string, return encrypted string
    encryptedString += String.fromCharCode(charCode);
  }
  return encryptedString;
};

const decrypt = (decryptInput: string) => {
  // Decrypted string will push to this variable
  let decryptedString = '';
  // Convert string to lowercase in new variable
  const lowercaseString = decryptInput.toLowerCase();
  // for loop to iterate over each character in the string
  for (let i = 0; i < lowercaseString.length; i++) {
    // Variable for unicode of each character
    let charCode = lowercaseString.charCodeAt(i);
    // if unicode is uppercase letter
    if (charCode <= 122 && charCode >= 97) {
      // shift by determined shift number
      charCode -= shift;
      // then if char code is under 97, loop around by 1 full alphabet
      if (charCode < 97) {
        charCode += 26;
      }
    }
    // add decrypted letter to decrypted string, return decrypted string
    decryptedString += String.fromCharCode(charCode);
  }
  return decryptedString;
};

function App() {
  const [userInput1, encryptUserInput] = useState('');
  const [userInput2, decryptUserInput] = useState('');

  return (
    <>
      <div className={'flex gap-4 flex-col m-4'}>
        <h1 className={'text-2xl font-mono text-green-600 bg-black p-4 w-fit'}>Encrypt</h1>
        <div className="w-full p-4 bg-black text-green-600 flex gap-2 md:w-1/2 flex-col">
          <div className="flex flex-row gap-2">
            <p className="text-green-800">{'>'}</p>
            <input
              onChange={(pete) => encryptUserInput(pete.currentTarget.value)}
              placeholder="..."
              className="bg-black text-green-600 placeholder-green-600 w-full"
            />
          </div>
          <div className="flex flex-row gap-2">
            <p className="text-green-800">{'>'}</p>
            <p>{encrypt(userInput1)}</p>
          </div>
        </div>
      </div>
      <div className="w-full h-screen bg-green-900 absolute -z-40 top-0 left-0" />

      <div className={'flex gap-4 flex-col m-4'}>
        <h1 className={'text-2xl font-mono text-green-600 bg-black p-4 w-fit'}>Decrypt</h1>
        <div className="w-full p-4 bg-black text-green-600 flex gap-2 md:w-1/2 flex-col">
          <div className="flex flex-row gap-2">
            <p className="text-green-800">{'>'}</p>
            <input
              onChange={(decrypt) => decryptUserInput(decrypt.currentTarget.value)}
              placeholder="..."
              className="bg-black text-green-600 placeholder-green-600 w-full"
            />
          </div>
          <div className="flex flex-row gap-2">
            <p className="text-green-800">{'>'}</p>
            <p>{decrypt(userInput2)}</p>
          </div>
        </div>
      </div>
      <div className="w-full h-screen bg-green-900 absolute -z-40 top-0 left-0" />
    </>
  );
}

export default App;
