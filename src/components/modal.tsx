import { ReactNode } from 'react';

type Props = {
  show: boolean;
  handleModal: () => void;
  children: ReactNode;
};

export default function Modal({ show, handleModal, children }: Props) {
  return (
    <div
      className={
        show
          ? 'modal fixed inset-0 z-50 h-screen w-screen cursor-default bg-[#00000080]'
          : 'hidden'
      }
    >
      <div
        onClick={handleModal}
        className={
          show
            ? 'modal__overlay fixed inset-0 z-[199] h-screen w-screen'
            : 'hidden'
        }
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={
            show
              ? 'modal-content absolute left-[50%] top-[50%] z-[200] -translate-x-2/4 -translate-y-2/4 overflow-hidden rounded-3xl'
              : 'hidden'
          }
        >
          {children}
        </div>
      </div>
    </div>
  );
}
