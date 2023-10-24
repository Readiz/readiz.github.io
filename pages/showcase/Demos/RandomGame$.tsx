/**
 * @title 운빨망겜
 */

import React from 'react';
import IFrame from '@/components/IFrame';

interface Props {}

const RandomGame: React.FC<Props> = (props) => {
  return (
    <IFrame
      url="https://www.readiz.com/RandomGame/"
      title="Random Game"
    />
  )
}

export default RandomGame
