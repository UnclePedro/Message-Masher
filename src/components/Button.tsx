interface Props {
  title: string;
}

const Button = ({ title }: Props) => {
  return (
    <>
      <button className={'text-2xl font-mono text-lime-400 bg-black p-4 w-fit'}>{title}</button>
    </>
  );
};

export default Button;
