import React from 'react';
import { useThemeCtx } from '../theme-doc/dist';
import { Link, useParams } from 'react-router-dom';
import Header from '@/components/Header';

interface Props {}

const TagBrowser: React.FC<Props> = (props) => {
  const themeCtx = useThemeCtx();
  const { tagName } = useParams<{ tagName: string }>()
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
    let arr = r.get(tagName);
    let res = [];
    if (arr) {
      for(let item of arr) {
        if (themeCtx.staticData[item]?.main?.writtendate) {
          res.push([item, themeCtx.staticData[item]?.main?.title, String(themeCtx.staticData[item]?.main?.writtendate).substring(0, 10), String(item).split('/')[3]]);
        } else {
          res.push([item, themeCtx.staticData[item]?.main?.title, '-', String(item).split('/')[3]]);
        }
      }
    }
    return res;
  })();
  const tagNameUppercase = String(tagName).substring(0, 1).toUpperCase() + String(tagName).substring(1);
  return (
    <>
      <Header title={tagNameUppercase + '와 관련된 글 목록'} />
      <ul className="markdown-el">
        {
            writings.map((item) => (
              <li key={item[0]}><Link to={item[0]}>{item[3]} - {item[1]}</Link> | {item[2]}</li>
            ))
        }
      </ul>
    </>
  )
}

export default TagBrowser
