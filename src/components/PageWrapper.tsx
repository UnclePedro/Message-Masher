import { ReactNode } from 'react';
import Banner from './Banner';

interface Props {
  children: ReactNode;
}

const PageWrapper = ({ children }: Props) => {
  return (
    <>
      <div>
        <Banner />
      </div>
      <div className={'flex items-center justify-center gap-4 flex-col h-screen'}>{children}</div>
    </>
  );
};

export default PageWrapper;
