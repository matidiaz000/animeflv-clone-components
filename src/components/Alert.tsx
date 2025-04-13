import { useRef } from "react";

export interface IAlert {
  id: string,
  message: string,
  type: 'success' | 'default' | 'danger' | 'warning' | 'info',
}

interface IProps {
  data: IAlert[],
}

export const Alert = ({ data }: IProps) => {
  const listRef = useRef(null);

  return (
    data.length > 0 && (
      <div
        className="toast-container position-fixed bottom-0 end-0 p-3"
        aria-live="assertive"
        ref={listRef}
      >
        {data.map((toast) => (
          <div
            key={toast.id}
            className={`toast show align-items-center bg-${toast.type} border-0 text-white cursor-pointer`}
          >
            <div className="d-flex align-items-center">
              <div className="toast-body">{toast.message}</div>
            </div>
          </div>
        ))}
      </div>
    )
  );
};