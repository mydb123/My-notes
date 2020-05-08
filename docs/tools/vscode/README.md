---
 title: Visual Studio Code
---

## 简介
Visual Studio Code是一个轻量级但功能强大的源代码编辑器，可在您的桌面上运行，并且可用于Windows，macOS和Linux。它具有对JavaScript，TypeScript和Node.js的内置支持，并具有丰富的其他语言（例如C ++，C＃，Java，Python，PHP，Go）和运行时（例如.NET和Unity）扩展的生态系统。 。通过这些入门视频，从 VS Code开始您的旅程。

## 安装
傻瓜式安装
[安装](https://code.visualstudio.com/)


## vue代码块
```js
{
	// Place your snippets for vue here. Each snippet is defined under a snippet name and has a prefix, body and 
	// description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the 
	// same ids are connected.
	// Example:
	// "Print to console": {
	// 	"prefix": "log",
	// 	"body": [
	// 		"console.log('$1');",
	// 		"$2"
	// 	],
	// 	"description": "Log output to console"
	// }
	"Print to console": {
		"prefix": "vuec",
		"body": [
			"<template>",
			"  <div>",
			"    $0",
			"  </div>",
			"</template>",
			"",
			"<script>",
			"export default {",
			"",
			"  data () {",
			"    return {",
			"    }",
			"  },",
			"",
			"  methods: {},",
			"",
			"  created () {",
			"  }",
			"}",
			"</script>",
			"",
			"<style lang='less' scoped>",
			"",
			"</style>",
			""
		],
		"description": "Log output to console"
	}
}
```

## 需要安装的插件
1. Auto Close Tag
2. Bracket Pair Colorizer
3. Chinese
4. Vetur
5. Easy LESS