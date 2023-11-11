import React from 'react';
export enum StateName {
  AC = "AC",
  WA = "WA",
  TLE = "TLE",
  RE = "RE",
}
interface Props {
  state: StateName;
}
const AtCoderResult: React.FC<Props> = (props) => {
  const defaultStyle = { 
    display: 'inline',
    padding: '0.2em 0.6em 0.3em',
    fontSize: '75%',
    fontWeight: 'bold',
    lineHeight: 1,
    color: '#fff',
    verticalAlign: 'baseline',
    borderRadius: '0.25em',
    backgroundColor: 'black'
  }
  const style = JSON.parse(JSON.stringify(defaultStyle));
  switch(props.state) {
    case StateName.WA:
    case StateName.TLE:
    case StateName.RE:
      style.backgroundColor = '#f0ad4e';
      break;
    case StateName.AC:
      style.backgroundColor = '#5cb85c';
      break;
  }
  console.log(style);
  return (
    <div style={style}>
    {props.state}
    </div>
  )
}
  
export default AtCoderResult