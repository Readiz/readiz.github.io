import React from 'react';
import { useThemeCtx } from '../theme-doc/dist';
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
        🏷️ 주제 목록: {
            tags.map((item) => (
                <div key={item} className={style.tagItem}><Link className={style.tagLink} to={'/blog/tags/' + item}>#{String(item).substring(0,1).toUpperCase() + String(item).substring(1)}</Link></div>
            ))
        }
    </div>
  )
}

export default TagList
