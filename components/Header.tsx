import React from 'react';
import { useThemeCtx } from '../theme-doc/dist';
import { Link } from 'react-router-dom';
import style from './index.module.css';

interface Props {
  title?: string;
}

const Header: React.FC<Props> = (props) => {
  const themeCtx = useThemeCtx();
  const title = (themeCtx.staticData[themeCtx.loadState.routePath]?.main?.title) ? (themeCtx.staticData[themeCtx.loadState.routePath]?.main?.title) : 'Untitled';
  const writtendate = (themeCtx.staticData[themeCtx.loadState.routePath]?.main?.writtendate);
  const crumb = (() => {
    let fullRoute = themeCtx.loadState.routePath;
    if (fullRoute == '/') {
      return [];
    }
    if (fullRoute.endsWith('/'))
      fullRoute = fullRoute.substring(0, fullRoute.length - 1);
    const items = fullRoute.split('/');
    const res = [['/', 'Home']];
    let curPath = '';
    for(let i = 1; i < items.length - 1; ++i) {
      curPath += '/' + items[i];
      res.push([curPath, items[i]]);
    }
    return res;
  })();
  const last = (() => {
    if (themeCtx.loadState.routePath == '/') {
      return '안녕하세요!';
    }
    const sp = themeCtx.loadState.routePath.split('/');
    if (String(sp[sp.length - 1]).startsWith(':')) { return 'Writings' }
    else return sp[sp.length - 1];
  })();
  return (
    <div style={{marginBottom: 20}}>
        <div style={
          {
            border: '1px solid',
            borderRadius: '5px',
            padding: 10,
            boxShadow: '2px 2px',
            margin: -15
          }
        }>
          <div style={
            {
              fontSize: 35,
              fontWeight: 700
            }
          }>
            {props.title? props.title : title}
          </div>
          <ul className={style.breadcrumb}>
            {
                crumb.map((item) => (
                    <li key={item[0]}><Link to={item[0]}>{item[1]}</Link></li>
                ))
            }
            {
                <li key={last}>{last}</li>
            }
          </ul>
        </div>
        <div style={
          {
            marginTop: -25,
            fontSize: 12,
            color: 'grey',
            textAlign: 'right'
          }
        }>
        &nbsp;
        {writtendate ? 'by Readiz / Last update: ' + String(writtendate).substring(0,10) : 'by Readiz'}
        </div>
    </div>
  )
}

export default Header
