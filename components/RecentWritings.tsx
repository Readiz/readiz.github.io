import React from 'react';
import { useThemeCtx } from '../theme-doc/dist';
import { Link } from 'react-router-dom';

interface Props {}

const RecentWritings: React.FC<Props> = (props) => {
  const themeCtx = useThemeCtx();
  const title = (themeCtx.staticData[themeCtx.loadState.routePath]?.main?.title) ? (themeCtx.staticData[themeCtx.loadState.routePath]?.main?.title) : 'Untitled';
  const writtendate = (themeCtx.staticData[themeCtx.loadState.routePath]?.main?.writtendate);
  const recentWritings = (() => {
    let d = themeCtx.staticData;
    let r = [];
    for(let item of Object.keys(d)) {
        if (d[item]?.main?.writtendate) {
            r.push([item, new Date(d[item]?.main?.writtendate)]);
        }
    }
    r = r.sort((a,b) => {
        return -(a[1] - b[1]);
    });
    r = r.slice(0,10);
    r = r.map((_) => [themeCtx.staticData[_[0]]?.main?.title, _[0], new Date(_[1]).toLocaleDateString()]);
    return r;
  })();
  return (
    <ul className="markdown-el">
        {
            recentWritings.map((item) => (
                <li key={item[0]}><Link to={item[1]}>{String(item[1]).split('/')[2]} - {item[0]}</Link> | {item[2]}</li>
            ))
        }
    </ul>
  )
}

export default RecentWritings
