import React from 'react';
import Comment from './Comment';

interface Props {
    children: any;
}
const AppWrapper: React.FC<Props> = (props) => {
    return (
      <>
        {props.children}
      </>
    )
}
  
export default AppWrapper