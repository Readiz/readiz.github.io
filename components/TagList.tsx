import React from 'react';
import { useThemeCtx } from 'vite-pages-theme-doc';
import { Link } from 'react-router-dom';
import style from './index.module.css';

interface Props {
}

const TagList: React.FC<Props> = (props) => {
  const themeCtx = useThemeCtx();
  const title = (themeCtx.staticData[themeCtx.loadState.routePath]?.main?.title) ? (themeCtx.staticData[themeCtx.loadState.routePath]?.main?.title) : 'Untitled';
  const tags = (themeCtx.staticData[themeCtx.loadState.routePath]?.main?.tags);
  if (!tags) return null;
  return (
    <div className="tagList" style={{marginTop: 30}}>
        🏷️ 태그 목록: {
            tags.map((item) => (
                <div key={item} className={style.tagItem}><Link className={style.tagLink} to={'/blog/tags/' + item}>#{item}</Link></div>
            ))
        }
    </div>
  )
}

export default TagList
