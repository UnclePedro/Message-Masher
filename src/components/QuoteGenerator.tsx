interface Quote {
  quote: string;
  author: string;
  category: string;
  title: string;
}

export const getQuote = async ({ title, output }: Quote) => {
  const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=computers', {
    headers: { 'X-Api-Key': '8yIzgCc4+Yky9kfbdJAUSg==cxYK7TTNGPo1WAoe' },
  });
  const quotes: Quote[0] = await response.json();
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return (
    <>
      <button
        className="text-white"
        onClick={async () => {
          const quotes = await getQuote();
        }}
      >
        {randomQuote}
      </button>
      <p className="text-white">{randomQuote}</p>
    </>
  );
};
