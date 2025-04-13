import { ReactNode, useEffect, useRef, useState } from 'react';
import hljs from 'highlight.js/lib/core';
import styles from './CodeBlock.module.scss'
import { Alert, IAlert } from '../components/Alert';
import typescript from 'highlight.js/lib/languages/typescript';
import scss from 'highlight.js/lib/languages/scss';
import xml from 'highlight.js/lib/languages/xml';
import bash from 'highlight.js/lib/languages/shell';

hljs.registerLanguage('command', bash);
hljs.registerLanguage('js', typescript);
hljs.registerLanguage('html', xml);
hljs.registerLanguage('css', scss);

interface IProps {
  children?: ReactNode;
  code: string;
  language: 'js' | 'css' | 'html' | 'command';
}

const CodeBlock = ({ children, code, language }: IProps) => {
  const codeRef = useRef(null);
  const [isCopy, setIsCopy] = useState<boolean>(false);
  const [toasts, setToasts] = useState<IAlert[]>([]);

  useEffect(() => {
    if (codeRef && codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [code]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const copy = (e: any) => {
    e.target.focus();
    navigator.clipboard.writeText(code);
    showToast("The code was copied to the clipboard", "success");
  }

  const showToast = (message: IAlert["message"], type: IAlert["type"]) => {
    const toast: IAlert = {
      id: Date.now().toString(),
      message,
      type,
    };

    setToasts((prevToasts) => [...prevToasts, toast]);
    setIsCopy(true)

    setTimeout(() => {
      setIsCopy(false)
      setToasts((prevToasts) => prevToasts.filter((t) => t.id !== toast.id));
    }, 2000);
  };

  return (
    <div className="mb-2">
      <Alert data={toasts} />
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
