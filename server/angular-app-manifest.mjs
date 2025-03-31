
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 10683, hash: '4665e0fcd946f42ec24cdf7cf4a4c8c657df4b3cd594943d0ae183215cc018be', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1056, hash: '0509ff2134e2f75433d0159209a92af66c505f439909385d8879f11e582daf53', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 56234, hash: '7e7221e9964d4658a9a23ef5d8d1c3ea3c8d4bda6814281780b2d46d9dc43e54', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-OLXEBCI3.css': {size: 402735, hash: '3bcIdaVnmTA', text: () => import('./assets-chunks/styles-OLXEBCI3_css.mjs').then(m => m.default)}
  },
};
