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
  const quote: Quote[0] = await response.json();
  return (
    <>
      <button
        className="text-white"
        onClick={async () => {
          const quote = await getQuote();
        }}
      >
        {quote}
      </button>
      <p className="text-white">{quote}</p>
    </>
  );
};
