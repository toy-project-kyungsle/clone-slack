import React, { CSSProperties, FC, useCallback } from "react";
import { CloseModalButton, CreateMenu } from "@components/Menu/styles";

interface props {
  show: boolean;
  onCloseModal: (e: any) => void;
  style:CSSProperties;
  closeButton?: boolean;
}

const Menu: FC<props> = ({children, style, show, onCloseModal, closeButton}) => {
  const stopPropagation = useCallback((e) => {
    e.stopPropagation();
  },[]);

  return(
    <CreateMenu onClick={onCloseModal}>
      <div onClick={stopPropagation} style={style}>
        {closeButton && <CloseModalButton onClick={onCloseModal}>&times;</CloseModalButton>}
        {children}
      </div>
    </CreateMenu>
  );
};

Menu.defaultProps = {
  closeButton: true,
}

export default Menu;