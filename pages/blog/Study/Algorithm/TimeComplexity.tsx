import React from 'react';
import 'mafs/core.css';
import { Mafs, Coordinates, Plot, Theme } from "mafs";

interface Props {}

const TimeComplexity: React.FC<Props> = (props) => {
  const ln = (x: number) => Math.log2(x)
  const xln = (x: number) => Math.log2(x) * x
  const square = (x: number) => x * x
  const identity = (x: number) => x
  return (
    <>
      <Mafs>
          <Coordinates.Cartesian />
          <Plot.OfX y={identity} color={Theme.blue} />
          <Plot.OfX y={ln} color={Theme.pink} />
          <Plot.OfX y={xln} color={Theme.indigo} />
          <Plot.OfX y={square} color={Theme.green} />
          
      </Mafs>
    </>
  )
}

export default TimeComplexity;
