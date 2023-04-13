/**
 * @title Coding Note
 */

import React from 'react';
import style from './index.module.css';

interface Props {}

const CodingNote: React.FC<Props> = (props) => {
  return (
    <iframe
      className={style.example}
      src="https://www.readiz.com/CodingNote/"
      title="Coding Note"
      allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
      sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
    />
  )
}

export default CodingNote
