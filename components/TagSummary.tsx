import React from 'react';
import { useThemeCtx } from '../theme-doc/dist';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';

interface Props {}

const TagBrowser: React.FC<Props> = (props) => {
  const themeCtx = useThemeCtx();
  const title = (themeCtx.staticData[themeCtx.loadState.routePath]?.main?.title) ? (themeCtx.staticData[themeCtx.loadState.routePath]?.main?.title) : 'Untitled';
  const writtendate = (themeCtx.staticData[themeCtx.loadState.routePath]?.main?.writtendate);
  const writings = (() => {
    let d = themeCtx.staticData;
    let r = new Map();
    for(let item of Object.keys(d)) {
        if (d[item]?.main?.tags) {
          for(let tag of d[item]?.main?.tags) {
            if (r.has(tag)) {
              r.get(tag).push(item);
            } else {
              r.set(tag, [item]);
            }
          }
        }
    }
    let res = [];
    for(let item of r) {
        res.push([item[0], String(item[0]).substring(0,1).toUpperCase() + String(item[0]).substring(1), item[1].length]);
    }
    res = res.sort((a, b) => {return b[2] - a[2]});
    if (res.length > 10) res = res.slice(0, 15);
    return res;
  })();
  return (
    <ul className="markdown-el">
    {
        writings.map((item) => (
          <li key={item[0]}><Link to={'/blog/tags/' + item[0]}>{item[1]}</Link> | 관련 글 수: {item[2]}</li>
        ))
    }
  </ul>
  )
}

export default TagBrowser
