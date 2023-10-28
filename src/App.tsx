import { useState } from 'react';
import TextLineFormat from './components/textLineFormat';

const SHIFT = 5;

const encrypt = (input: string) => {
  // Encrypted string will push to the encryptedString variable
  let encryptedString = '';
  // Convert string to uppercase in new variable
  const uppercaseString = input.toUpperCase();
  // for loop to iterate over each character in the string
  for (let i = 0; i < uppercaseString.length; i++) {
    // Variable for unicode of each character
    let charCode = uppercaseString.charCodeAt(i);
    // if unicode is uppercase letter
    if (charCode <= 90 && charCode >= 65) {
      // shift by determined shift number
      charCode += SHIFT;
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

function App() {
  const [userInput, setUserInput] = useState('');
  return (
    <>
      <div className={'flex gap-4 flex-col m-4'}>
        <h1 className={'text-2xl font-mono text-green-600 bg-black p-4 w-fit'}>Make a secret message!</h1>
        <div className="w-full p-4 bg-black text-green-600 flex gap-2 md:w-1/2 flex-col">
          {/* <p>{'>'}</p>
          <textarea
            onChange={(pete) => setUserInput(pete.currentTarget.value)}
            placeholder="Input your message here:"
            className="bg-black text-green-600 placeholder-green-600 w-full"
          />
          <p>{'>'}</p>
          <p>{encrypt(userInput)}</p> */}
          <TextLineFormat input={'input 1'} />
          <TextLineFormat input={'input 2'} />
        </div>
      </div>
      <div className="w-full h-screen bg-green-900 absolute -z-40 top-0 left-0" />
    </>
  );
}

export default App;
