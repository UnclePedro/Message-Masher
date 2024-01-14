import { useState } from 'react';
import Banner from './components/Banner';
import InputSection from './components/InputSection';
import Dashboard from './screens/Dashboard';
import { decrypt, encrypt } from './helpers/encryption';

function App() {
  console.log('window.location.pathname', window.location.pathname);
  const [userInput, setUserInput] = useState<string>('');
  const encryptedUserInput = encrypt(userInput);
  const decryptedUserInput = decrypt(userInput);

  // Return the relevant screen based on the path
  const renderScreen = () => {
    const pathname = window.location.pathname;

    if (pathname === '/encrypt') {
      return (
        <InputSection
          title={'Encrypt'}
          onChange={(updatedInput) => setUserInput(updatedInput)}
          output={encryptedUserInput}
        />
      );
    } else if (pathname === '/decrypt') {
      return (
        <InputSection
          title={'Decrypt'}
          onChange={(updatedInput) => setUserInput(updatedInput)}
          output={decryptedUserInput}
        />
      );
    } else {
      return <Dashboard />;
    }

    // switch (window.location.pathname) {
    //   case encrypt:
    //     url = window.location.pathname = '/encrypt'
    //     break;
    //   default:
    //     return <Dashboard />;
    // }
  };

  return (
    <>
      <div>
        <Banner />
      </div>
      <div className={'flex items-center justify-center gap-4 flex-col h-screen'}>{renderScreen()}</div>
    </>
  );
}

export default App;
