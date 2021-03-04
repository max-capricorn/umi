// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from '/Users/wangcheng/Desktop/myreact/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';
import LoadingComponent from '@/pages/about';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: '.umi__plugin-layout__Layout' */'/Users/wangcheng/Desktop/myreact/umi/src/.umi/plugin-layout/Layout.tsx'), loading: LoadingComponent}),
    "routes": [
      {
        "path": "/",
        "redirect": "/home",
        "exact": true
      },
      {
        "path": "/home",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__about' */'@/pages/about'), loading: LoadingComponent}),
        "name": "元数据管理",
        "title": "menu",
        "icon": "areaChart",
        "exact": true
      },
      {
        "path": "/welcome",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__home' */'@/pages/home'), loading: LoadingComponent}),
        "name": "股群管理",
        "title": "welcome",
        "icon": "apartment",
        "exact": true
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
