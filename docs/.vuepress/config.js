const head = require('../../config/headconfig.js')
const nav = require('../../config/navconfig')
const plugins = require('../../config/pluginconfig.js')
module.exports = {
    title:"znote",
    description: 'znote',
    head: head,
    plugins: plugins,
    base:'/My-notes/',
    themeConfig: {
        repo: 'mydb123/My-notes',
        nav: nav,
        lastUpdated: '上次更新', // string | boolean
    }
  }