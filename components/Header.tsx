import React from 'react';
import { useThemeCtx } from 'vite-pages-theme-doc';

interface Props {
  title?: string;
}

const Header: React.FC<Props> = (props) => {
  const themeCtx = useThemeCtx();
  const title = (themeCtx.staticData[themeCtx.loadState.routePath]?.main?.title) ? (themeCtx.staticData[themeCtx.loadState.routePath]?.main?.title) : 'Untitled';
  const writtendate = (themeCtx.staticData[themeCtx.loadState.routePath]?.main?.writtendate);
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
        </div>
        <div style={
          {
            marginTop: -25,
            fontSize: 12,
            color: 'grey',
            textAlign: 'right'
          }
        }>
          by Readiz {writtendate ? '/ Last update: ' + String(writtendate).substring(0,10) : ''}
        </div>
        {/* <div>{themeCtx.loadState.routePath}</div>
        <div>{themeCtx.staticData[themeCtx.loadState.routePath].main.title}</div>
        <pre>{JSON.stringify(themeCtx, null, 2)}</pre> */}
    </div>
  )
}

export default Header
