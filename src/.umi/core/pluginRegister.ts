// @ts-nocheck
import { plugin } from './plugin';
import * as Plugin_0 from '/Users/wangcheng/Desktop/myreact/umi/src/app.tsx';
import * as Plugin_1 from '../plugin-initial-state/runtime';
import * as Plugin_2 from '/Users/wangcheng/Desktop/myreact/umi/src/.umi/plugin-locale/runtime.tsx';
import * as Plugin_3 from '@@/plugin-layout/runtime.tsx';
import * as Plugin_4 from '../plugin-model/runtime';

  plugin.register({
    apply: Plugin_0,
    path: '/Users/wangcheng/Desktop/myreact/umi/src/app.tsx',
  });
  plugin.register({
    apply: Plugin_1,
    path: '../plugin-initial-state/runtime',
  });
  plugin.register({
    apply: Plugin_2,
    path: '/Users/wangcheng/Desktop/myreact/umi/src/.umi/plugin-locale/runtime.tsx',
  });
  plugin.register({
    apply: Plugin_3,
    path: '@@/plugin-layout/runtime.tsx',
  });
  plugin.register({
    apply: Plugin_4,
    path: '../plugin-model/runtime',
  });
