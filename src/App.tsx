import Banner from './components/Banner';
import Dashboard from './screens/Dashboard';
import EncryptPage from './screens/EncryptPage';
import DecryptPage from './screens/DecryptPage';

function App() {
  console.log('window.location.pathname', window.location.pathname);

  // Return the relevant screen based on the path
  const renderScreen = (): JSX.Element => {
    const pathname = window.location.pathname;
    if (pathname === '/encrypt') return <EncryptPage />;
    if (pathname === '/decrypt') return <DecryptPage />;
    return <Dashboard />;
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
