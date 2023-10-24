import React from 'react';
import style from './index.module.css';

interface Props {
  url: string,
  title: string
}
const IFrame: React.FC<Props> = (props) => {
    return (
      <iframe
        className={style.example}
        src={props.url}
        title={props.url}
        allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      />
    )
}
  
export default IFrame