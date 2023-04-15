/**
 * @title BA Music Player
 */

import React from 'react';
import IFrame from '../components/IFrame';

interface Props {}

const BAMusicPlayer: React.FC<Props> = (props) => {
  return (
    <IFrame
      url="https://www.readiz.com/BA-music-player/"
      title="Coding Note"
    />
  )
}

export default BAMusicPlayer
