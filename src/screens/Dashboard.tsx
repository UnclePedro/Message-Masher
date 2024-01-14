import Button from '../components/Button';

function Dashboard() {
  return (
    <>
      <Button title={'Encrypt'} />
      <Button title={'Decrypt'} />

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
