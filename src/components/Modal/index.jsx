import ReactDOM from 'react-dom';
import clsx from 'clsx';

import './modal.scss';

function Modal({ children, onClose, className }) {
  const ModalClass = clsx('modal_content', className);

  return (
    <div className="modal">
      <div className={ModalClass}>
        <button className="modal_close" onClick={onClose}>
          𝗫
        </button>
        {children}
      </div>
    </div>
  );
}

export default function ModalMirror({ children, onClose, size, className }) {
  return ReactDOM.createPortal(
    <Modal onClose={onClose} size={size} className={className}>
      {children}
    </Modal>,
    document.getElementById('modal-root')
  );
}
