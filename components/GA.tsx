import React, { useEffect, useRef, useState } from "react";
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
  const [lastTitle, setLastTitle] = useState('');
  const title = (themeCtx.staticData[themeCtx.loadState.routePath]?.main?.title) ? (themeCtx.staticData[themeCtx.loadState.routePath]?.main?.title) : 'Untitled';
  if(typeof(document) !== "undefined") document.title = '📘Readiz - ' + title; // to fix ssr error
  if (lastTitle != title) {
    reactGA.set({ page: themeCtx.loadState.routePath });
    reactGA.send("pageview");
    setLastTitle(title);
  }
  return (
      <>
      </>
  );
};

export default GA;
