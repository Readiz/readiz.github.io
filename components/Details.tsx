import React, { ReactNode, useState } from 'react';

interface Props {
    children: ReactNode;
};

const Details: React.FC<Props> = (props) => {
  const [isShow, setIsShow] = useState(false);

  function toggleShow() {
    setIsShow(!isShow);
  }

  return (
    <>
    <div onClick={toggleShow} style={{fontWeight: 700, cursor: 'pointer'}}>
      {isShow ? '👆 닫기' : '👉 펼치기'}
    </div>
    <div style={{display: isShow ? 'block' : 'none'}}>
      {props.children}
    </div>
    </>
  )
}

export default Details
