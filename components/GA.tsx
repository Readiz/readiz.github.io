import React, { useEffect, useRef } from "react";
import ReactGA from "react-ga4";
import { useThemeCtx } from '../theme-doc/dist';

const gaTrackingId = 'G-S0PX98DDKC';
ReactGA.initialize(gaTrackingId);

interface Props {
}

const GA: React.FC<Props> = (props) => {
  const themeCtx = useThemeCtx();
  ReactGA.set({ page: themeCtx.loadState.routePath });
  ReactGA.send("pageview");
  return (
      <>
      </>
  );
};

export default GA;
