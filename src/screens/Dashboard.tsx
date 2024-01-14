import Button from '../components/Button';

function Dashboard() {
  return (
    <>
      <Button title={'Encrypt'} onClick={() => (window.location.pathname = 'encrypt')} />
      <Button title={'Decrypt'} onClick={() => (window.location.pathname = 'decrypt')} />

      {/* <InputSection
        title="Encrypt"
        output={encrypt(encryptUserInput)}
        onChange={(updatedInput) => setEncryptUserInput(updatedInput)}
      />
      <InputSection
        title="Decrypt"
        output={decrypt(decryptUserInput)}
        onChange={(updatedInput) => setDecryptUserInput(updatedInput)}
      /> */}
    </>
  );
}

export default Dashboard;
