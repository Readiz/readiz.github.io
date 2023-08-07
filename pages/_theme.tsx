import React from 'react';
import { createTheme, defaultSideNavs, useThemeCtx } from '../theme-doc/dist';
import Component404 from './404';
import { Link } from 'react-router-dom';;
import GA from '@/components/GA'

export default createTheme({
  logo: <div style={{ fontSize: '20px' }}><GA /><img src="/assets/readiz.jpg" width="20" style={{verticalAlign: "middle"}}/> Readiz</div>,
  topNavs: [
    { label: 'Home', path: '/' },
    {
      label: 'Blog',
      path: '/blog',
      activeIfMatch: '/blog',
    },
    {
      label: 'Code Snippet',
      path: '/code',
      activeIfMatch: '/code',
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
    return <customCtx.Provider value={123}>{children}</customCtx.Provider>
  },
  // TopBarExtra: () => {
  //   // TopBarExtra is a component, you can call useThemeCtx hook in it
  //   const themeCtx = useThemeCtx()
  //   // console.log('themeCtx', themeCtx)
  //   return <button>Extra</button>
  // },
  Component404,
  footer: () => {
    return {
      message: `This site is generated by vite-plugin-react-pages and customized by Readiz`,
      copyright: '글의 발췌는 자유이나 사용시에 방명록에 알려주세요.',
      columns: [
        {
          icon: '',
          title: <b>{'Internal'}</b>,
          items: [
            {
              icon: '',
              label: 'Links',
              url: '/link',
              openExternal: false
            },
            {
              icon: '',
              label: 'Jukebox',
              url: '/showcase/Demos/BAMusicPlayer',
              openExternal: false
            },
          ],
        },
        {
          icon: '',
          title: <b>{'External'}</b>,
          items: [
            {
              icon: <img src="/assets/readiz.jpg" />,
              label: 'Readiz Page',
              url: 'https://www.readiz.com/',
            },
            {
              icon: <img src="/assets/github-mark.png" />,
              label: 'GitHub',
              url: 'https://github.com/Readiz',
            },
          ],
        },
      ],
    }
  }
})
const customCtx = React.createContext<any>({})