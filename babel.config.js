module.exports = {
    // presets: ['@vue/app'],
    "presets": ["@vue/app",
        ["@babel/preset-env", {"modules": false}],
        "@vue/babel-preset-jsx"
    ],
    "plugins": ["@babel/plugin-transform-runtime" ],
}
