import React, { useEffect, useRef } from "react";
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
history.listen((response) => {
  console.log(response.location.pathname);
  ReactGA.set({ page: response.location.pathname });
  ReactGA.pageview(response.location.pathname);
});

const gaTrackingId = 'G-S0PX98DDKC';
ReactGA.initialize(gaTrackingId);
export default function GA() {
  return (
      <>
      </>
  );
}
