import React from 'react';
import { useThemeCtx } from '../theme-doc/dist';
import { Link } from 'react-router-dom';

interface Props {
  all: boolean;
  filter?: string;
}

const RecentWritings: React.FC<Props> = (props) => {
  const themeCtx = useThemeCtx();
  const title = (themeCtx.staticData[themeCtx.loadState.routePath]?.main?.title) ? (themeCtx.staticData[themeCtx.loadState.routePath]?.main?.title) : 'Untitled';
  const writtendate = (themeCtx.staticData[themeCtx.loadState.routePath]?.main?.writtendate);
  const recentWritings = (() => {
    let d = themeCtx.staticData;
    let r = [];
    for(let item of Object.keys(d)) {
      if (!props.filter || (props.filter && String(item).indexOf(props.filter) > -1))
        if (d[item]?.main?.writtendate)
          r.push([item, new Date(d[item]?.main?.writtendate).toLocaleDateString(), new Date(d[item]?.main?.writtendate)]);
        else
          r.push([item, '-']);
    }
    r = r.sort((a,b) => {
      if (a[1] == '-' && b[1] != '-') return 1;
      if (b[1] == '-' && a[1] != '-') return -1;
      if (a[1] == '-' && b[1] == '-') return 1;
      return -(a[2] - b[2]);
    });
    if (!props.all) r = r.slice(0,15);
    r = r.map((_) => [themeCtx.staticData[_[0]]?.main?.title, _[0], _[1]]);
    return r;
  })();
  return (
    <ul className="markdown-el">
        {
            recentWritings.map((item) => (
                <li key={item[0]}><Link to={item[1]}>{String(item[1]).split('/')[3]} - {item[0]}</Link> | {item[2]}</li>
            ))
        }
    </ul>
  )
}

export default RecentWritings
