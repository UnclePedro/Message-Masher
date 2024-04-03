interface Props {
  title: string;
  onChange: (updatedInput: string) => void;
  output: string;
}

const InputSection = ({ onChange, title, output }: Props) => {
  return (
    <>
      <h2 className={'text-2xl font-mono text-lime-400 bg-black p-4 w-fit rounded-lg'}>{title}</h2>
      <div className="w-[300px] md:w-[500px] p-4 bg-black text-lime-400 flex gap-2 flex-col border-lime-500 border-2 rounded-lg">
        <div className="flex flex-row gap-2">
          <p className="text-green-800 animate-pulse">{'>'}</p>
          <input
            onChange={(element) => onChange(element.currentTarget.value)}
            placeholder="..."
            className="bg-black text-lime-400 placeholder-green-600 w-full "
          />
        </div>
        <div className="flex flex-row gap-2">
          {output && <p className="text-green-800">{'>'}</p>}
          <p>{output}</p>
        </div>
      </div>{' '}
    </>
  );
};

export default InputSection;
