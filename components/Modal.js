import React from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

const Modal = () => {
  const [open, setOpen] = useRecoilState(modalState);

  return (
    <div>
      <h1>I am a modal</h1>
    </div>
  );
};

export default Modal;
