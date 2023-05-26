import React from 'react';
import 'mafs/core.css';
import { Mafs, Coordinates, Plot, Theme } from "mafs";
// import pkg from 'mafs';
// const { Coordinates, Plot, Mafs, Theme } = pkg;

interface Props {}

const HelloGraph: React.FC<Props> = (props) => {
  const sigmoid1 = (x: number) => 2 / (1 + Math.exp(-x)) - 1
  const ln = (x: number) => Math.exp(x)
  const identity = (x: number) => x
  return (
    <>
      <Mafs>
          <Coordinates.Cartesian />
          <Plot.OfX y={Math.sin} color={Theme.blue} />
          <Plot.OfY x={sigmoid1} color={Theme.pink} />
          <Plot.OfY x={ln} color={Theme.green} />
          <Plot.OfX y={identity} color={Theme.blue} />
          
      </Mafs>
    </>
  )
}

export default HelloGraph
