import { ReactNode, useEffect, useRef, useState } from 'react';
import hljs from 'highlight.js';
import styles from './CodeBlock.module.scss'

interface IProps {
  children?: ReactNode;
  code: string;
  language: 'javascript' | 'js' | 'typescript' | 'ts' | 'tsx' | 'css' | 'scss' | 'xml' | 'html' | 'xhtml' | 'plaintext';
}

const CodeBlock = ({ children, code, language }: IProps) => {
  const codeRef = useRef(null);
  const [isCopy, setIsCopy] = useState(false);

  useEffect(() => {
    if (codeRef && codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [code]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const copy = (e: any) => {
    navigator.clipboard.writeText(code);
    e.target.focus();
    setIsCopy(true);
    setTimeout(() => setIsCopy(false), 2000)
  }

  return (
    <div className="mb-2">
      {children && (
        <div className="border rounded-top rounded-top-4 border-bottom-0 p-3">
        {children}
      </div>
      )}
      <pre className={`m-0 w-100 position-relative ${children ? 'rounded-bottom rounded-bottom-4' : 'rounded rounded-4'}`}>
        <button
          className={`btn border-0 text-light ${styles.copyBtn}`}
          onClick={copy}
          onBlur={() => setIsCopy(false)}
        >
          <span className="material-icons-round">{isCopy ? 'check_circle' : 'content_copy'}</span>
        </button>
        <code className={`language-${language} bg-dark p-3`} ref={codeRef}>
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
