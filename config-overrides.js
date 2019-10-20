const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
        '@btn-primary-bg': '#032685',
        '@btn-primary-color': '#ffe45a',
        '@btn-default-bg' : '#ffe45a',

        '@radio-button-color':'#020e2d',
        // '@primary-2':'#ffe45a',
        '@btn-default-color' : '#032685',
        '@btn-default-border' : '#020e2d',

        '@label-color' : '#ffe45a',
        '@radio-button-bg':'@component-background',



        'btn-shadow': '0 2 px 0 #ffe45a',
        // '@primary-2': '#ffe45a',
        // '@primary-3': '#ffe45a',


    },
  }),
);
