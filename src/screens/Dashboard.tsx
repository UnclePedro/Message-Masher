import Button from '../components/Button';

function Dashboard() {
  return (
    <>
      <Button title={'Encrypt'} onClick={() => (window.location.pathname = 'encrypt')} />
      <Button title={'Decrypt'} onClick={() => (window.location.pathname = 'decrypt')} />
    </>
  );
}

export default Dashboard;
