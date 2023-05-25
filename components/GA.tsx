import React, { useEffect, useRef } from "react";
import { ReactGAImplementation } from 'react-ga4';
import { useThemeCtx } from '../theme-doc/dist';


class ReactGA extends ReactGAImplementation {}
const reactGA = new ReactGA();
const gaTrackingId = 'G-S0PX98DDKC';
reactGA.initialize(gaTrackingId);

interface Props {
}

const GA: React.FC<Props> = (props) => {
  const themeCtx = useThemeCtx();
  const title = (themeCtx.staticData[themeCtx.loadState.routePath]?.main?.title) ? (themeCtx.staticData[themeCtx.loadState.routePath]?.main?.title) : 'Untitled';
  if(typeof(document) !== "undefined") document.title = '📘Readiz - ' + title; // to fix ssr error
  reactGA.set({ page: themeCtx.loadState.routePath });
  reactGA.send("pageview");
  return (
      <>
      </>
  );
};

export default GA;
