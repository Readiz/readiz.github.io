import React from 'react';
import { createTheme, defaultSideNavs } from 'vite-pages-theme-doc';
import Component404 from './404';

export default createTheme({
  logo: <div style={{ fontSize: '20px' }}>📘 Readiz</div>,
  topNavs: [
    { label: 'Home', path: '/' },
    {
      label: 'Blog',
      path: '/blog',
      activeIfMatch: '/blog',
    },
    {
      label: 'Practice',
      path: '/practice',
      activeIfMatch: '/practice'
    },
    {
      label: 'Showcase',
      path: '/showcase',
      activeIfMatch: '/showcase'
    }
    // { label: 'Users', path: '/users', activeIfMatch: '/users' },
    // { label: 'Vite', href: 'https://github.com/vitejs/vite' },
    // {
    //   label: 'Vite Pages',
    //   href: 'https://github.com/vitejs/vite-plugin-react-pages',
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
  Component404,
})
