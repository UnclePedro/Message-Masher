interface Props {
  title: string;
  onClick: () => void;
}

const Button = ({ title, onClick }: Props) => {
  return (
    <>
      <button className={'text-2xl font-mono text-lime-400 bg-black p-4 w-fit'} onClick={() => onClick()}>
        {title}
      </button>
    </>
  );
};

export default Button;
