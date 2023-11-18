import React from 'react';
import 'mafs/core.css';
import { Mafs, Coordinates, Plot, Theme, Text } from "mafs";

interface Props {}

const TimeComplexity: React.FC<Props> = (props) => {
  const ln = (x: number) => x > 0 ? Math.log2(x + 1): 0
  const xln = (x: number) => x > 0 ? x * Math.log2(x + 1): 0
  const square = (x: number) => x > 0 ? x * x: 0
  const root = (x: number) => x > 0 ? Math.sqrt(x): 0
  const identity = (x: number) => x > 0 ? x : 0
  return (
    <>
      <Mafs zoom={{min:1, max:100}} width={600} height={300} viewBox={{x: [-50, 1000], y:[-50, 700]}} preserveAspectRatio={false}>
          <Coordinates.Cartesian 
            xAxis={{
              lines: 100,
              labels: (n) => (n % 10 == 0 ? n : ""),
            }}
            yAxis={{
              lines: 100,
              labels: (n) => (n % 10 == 0 ? n : ""),
            }}
          />
          <Text x={270} y={200} color={Theme.blue} size={20}>O(n)</Text>
          <Plot.OfX y={identity} color={Theme.blue} />
          <Text x={200} y={50} color={Theme.pink} size={20}>O(log n)</Text>
          <Plot.OfX y={ln} color={Theme.pink} />
          <Text x={150} y={300} color={Theme.indigo} size={20}>O(n log n)</Text>
          <Plot.OfX y={xln} color={Theme.indigo} />
          <Text x={80} y={500} color={Theme.green} size={20}>O(n^2)</Text>
          <Plot.OfX y={square} color={Theme.green} />
          <Text x={350} y={60} color={Theme.orange} size={20}>O(n^0.5)</Text>
          <Plot.OfX y={root} color={Theme.orange} />
          
      </Mafs>
    </>
  )
}

export default TimeComplexity;
