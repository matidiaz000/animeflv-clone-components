import { ReactNode } from 'react';
import Highlight from 'react-highlight'

interface IProps {
  children: ReactNode;
  codeString: string;
}

const Code = ({ children, codeString }: IProps) => {
  return (
    <div className="mb-2">
      <div className="border rounded-top rounded-top-4 border-bottom-0 p-3">
        {children}
      </div>
      <div className="border rounded-bottom rounded-bottom-4">
        <Highlight className="language-html">
          {codeString}
        </Highlight>
      </div>
    </div>
  );
};

export default Code;