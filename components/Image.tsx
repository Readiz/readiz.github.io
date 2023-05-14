import React from 'react';

interface Props {
  src: string;
  width?: number;
}
const Image: React.FC<Props> = (props) => {
  if (props.width) {
    return (
      <img 
      src={"/assets/" + props.src} 
      width={props.width}
      />
    )
  } else {
    return (
      <img 
      src={"/assets/" + props.src} 
      />
    )
  }
}
  
export default Image