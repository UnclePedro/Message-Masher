import Dashboard from './screens/Dashboard';
import EncryptPage from './screens/EncryptPage';
import DecryptPage from './screens/DecryptPage';
import PageWrapper from './components/PageWrapper';
import { ReactNode } from 'react';

function App() {
  // Return the relevant screen based on the path
  const renderScreen = (): ReactNode => {
    const pathname = window.location.pathname;
    if (pathname === '/encrypt') return <EncryptPage />;
    if (pathname === '/decrypt') return <DecryptPage />;
    return <Dashboard />;
  };

  return <PageWrapper>{renderScreen()}</PageWrapper>;
}

export default App;
