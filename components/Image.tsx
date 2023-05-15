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
      style={{
        maxWidth: '100%'
      }}
      />
    )
  } else {
    return (
      <img 
      src={"/assets/" + props.src} 
      style={{
        maxWidth: '100%'
      }}
      />
    )
  }
}
  
export default Image