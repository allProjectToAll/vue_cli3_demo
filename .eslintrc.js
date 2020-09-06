module.exports = {
    root: true,
    env: {
      node: true
    },
    'extends': [
      'plugin:vue/essential',
      'eslint:recommended'
    ],
    // rules: {
    //   'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    //   'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    //   "vue/no-unused-components": ["error", {
    //     "ignoreWhenBindingPresent": true
    //   }] //这个是去除组件不重用的规则
  
    // },
    parserOptions: {
      parser: 'babel-eslint'
    }
  }