import Banner from './components/Banner';
import Dashboard from './screens/Dashboard';

function App() {
  return (
    <>
      <div>
        <Banner />
      </div>
      <div className={'flex items-center justify-center gap-4 flex-col h-screen '}>
        <Dashboard />
      </div>
    </>
  );
}

export default App;
