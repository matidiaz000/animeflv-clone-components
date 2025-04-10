import { ReactNode, useEffect, useRef, useState } from 'react';
import hljs from 'highlight.js';
import styles from './index.module.scss'

interface IProps {
  children?: ReactNode;
  code: string;
  language: 'javascript' | 'js' | 'typescript' | 'ts' | 'tsx' | 'css' | 'scss' | 'xml' | 'html' | 'xhtml' | 'plaintext';
}

const CodeBlock = ({ children, code, language }: IProps) => {
  const codeRef = useRef(null);
  const [copySuccess, setCopySuccess] = useState('Copy');

  useEffect(() => {
    if (codeRef && codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [code]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const copy = (e: any) => {
    navigator.clipboard.writeText(code);
    e.target.focus();
    setCopySuccess('Copied!');
  }

  return (
    <div className="mb-2">
      {children && (
        <div className="border rounded-top rounded-top-4 border-bottom-0 p-3">
        {children}
      </div>
      )}
      <pre className={`m-0 w-100 position-relative ${children ? 'rounded-bottom rounded-bottom-4' : 'rounded rounded-4'}`}>
        <button className={styles.copyBtn} onClick={copy}>{copySuccess}</button>
        <code className={`language-${language} bg-dark p-3`} ref={codeRef}>
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
