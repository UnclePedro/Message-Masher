import { useState } from 'react';

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const getTotal = () => {
    return count1 + count2;
  };

  return (
    <div className={'flex gap-4 flex-col m-4'}>
      <h1 className={'text-2xl'}>Vite + React + TS + Tailwind</h1>
      <div className="flex gap-6">
        <button
          className={'outline'}
          onClick={() => {
            setCount1(count1 + 1);
          }}
        >
          count is {count1}
        </button>
        <button className={'outline'} onClick={() => setCount2(count2 + 1)}>
          count is {count2}
        </button>
        <p>Total is {getTotal()}</p>
      </div>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
  );
}

export default App;
