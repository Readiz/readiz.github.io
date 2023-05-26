import React from 'react';
import 'mafs/core.css';
import { Mafs, Coordinates, Plot, Theme, Text } from "mafs";

interface Props {}

const TimeComplexity: React.FC<Props> = (props) => {
  const ln = (x: number) => Math.log2(x)
  const xln = (x: number) => x * Math.log2(x)
  const square = (x: number) => x * x
  const identity = (x: number) => x
  return (
    <>
      <Mafs viewBox={{x: [1, 30], y:[-3, 10]}}>
          <Coordinates.Cartesian />
          <Text x={11.5} y={10} color={Theme.blue} size={20}>O(n)</Text>
          <Plot.OfX y={identity} color={Theme.blue} />
          <Text x={11.5} y={3} color={Theme.pink} size={20}>O(log n)</Text>
          <Plot.OfX y={ln} color={Theme.pink} />
          <Text x={7.5} y={12} color={Theme.indigo} size={20}>O(n * log n)</Text>
          <Plot.OfX y={xln} color={Theme.indigo} />
          <Text x={2.5} y={14} color={Theme.green} size={20}>O(n^2)</Text>
          <Plot.OfX y={square} color={Theme.green} />
          
      </Mafs>
    </>
  )
}

export default TimeComplexity;
