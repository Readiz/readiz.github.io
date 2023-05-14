import React from 'react';
import { createTheme, defaultSideNavs, useThemeCtx } from 'vite-pages-theme-doc';
import Component404 from './404';

export default createTheme({
  logo: <div style={{ fontSize: '20px' }}><img src="/assets/readiz.jpg" width="28" style={{verticalAlign: "middle"}}/> Readiz</div>,
  topNavs: [
    { label: 'Home', path: '/' },
    {
      label: 'Blog',
      path: '/blog',
      activeIfMatch: '/blog',
    },
    {
      label: 'Showcase',
      path: '/showcase',
      activeIfMatch: '/showcase'
    },
    // { label: 'Users', path: '/users', activeIfMatch: '/users' },
    // { label: 'Vite', href: 'https://github.com/vitejs/vite' },
    // {
    //   label: 'GitHub',
    //   href: 'https://github.com/Readiz',
    // },
  ],
  sideNavs: (ctx) => {
    return defaultSideNavs(ctx, {
      groupConfig: {
        reference: {
          concepts: {
            label: 'Concepts',
            order: 1,
          },
          'cli-commands': {
            label: 'CLI Commands',
            order: 2,
          },
          'error-codes': {
            label: 'Error Codes',
            order: 3,
          },
        },
      },
    })
  },
  AppWrapper: ({ children }) => {
    const themeCtx = useThemeCtx()
    // console.log('themeCtx', themeCtx) // TODO: CTX로 제목 달기
    return <customCtx.Provider value={123}>{children}</customCtx.Provider>
  },
  // TopBarExtra: () => {
  //   // TopBarExtra is a component, you can call useThemeCtx hook in it
  //   const themeCtx = useThemeCtx()
  //   // console.log('themeCtx', themeCtx)
  //   return <button>Extra</button>
  // },
  Component404,
})
const customCtx = React.createContext<any>({})