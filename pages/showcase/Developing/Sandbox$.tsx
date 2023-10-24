/**
 * @title Sandbox
 */

import React from 'react';
import IFrame from '@/components/IFrame';

interface Props {}

const FirstExample: React.FC<Props> = (props) => {
  return (
    <IFrame
      url="https://codesandbox.io/embed/antd-reproduction-template-6e93z?autoresize=1&fontsize=14&hidenavigation=1&theme=dark"
      title="antd reproduction template"
    />
  )
}

export default FirstExample
