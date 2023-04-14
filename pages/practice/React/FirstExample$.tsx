/**
 * @title First Example
 */

import React from 'react';
import RFrame from '../../components/rframe';

interface Props {}

const FirstExample: React.FC<Props> = (props) => {
  return (
    <RFrame
      url="https://codesandbox.io/embed/antd-reproduction-template-6e93z?autoresize=1&fontsize=14&hidenavigation=1&theme=dark"
      title="antd reproduction template"
    />
  )
}

export default FirstExample
