/**
 * @title JSPlaygrounds
 */

import React from 'react';
import IFrame from '@/components/IFrame';

interface Props {}

const JSPlaygrounds: React.FC<Props> = (props) => {
  return (
    <IFrame
      url="http://www.readiz.com/JSPlaygrounds/"
      title="JS Playgrounds"
    />
  )
}

export default JSPlaygrounds
