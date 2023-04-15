/**
 * @title Coding Note
 */

import React from 'react';
import IFrame from '../../components/IFrame';

interface Props {}

const CodingNote: React.FC<Props> = (props) => {
  return (
    <IFrame 
      url="https://www.readiz.com/CodingNote/"
      title="Coding Note"
    />
  )
}

export default CodingNote
