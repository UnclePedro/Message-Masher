interface Props {
  input: string;
}

const TextLineFormat = ({ input }: Props) => {
  return (
    <p className="bg-black text-green-600 placeholder-green-600 w-full">
      {'>'}
      {input}
    </p>
  );
};

export default TextLineFormat;
