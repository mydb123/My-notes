module.exports = [
    { text: 'Home', link: '/' },
    { text: 'Guide', link: '/guide/' },
    { 
        text: '前端', items: [
            { text: 'HtmlCss', link: '/front/htmlcss/' },
            { text: 'JavaScript', link: '/front/javascript/' },
            { text: 'WebAPI', link: '/front/webapi/' },
            { text: 'Vue', link: '/front/vue/' },
            { text: 'React', link: '/front/react/' }
            
        ]
    },
    { 
        text: '后端', items: [
            { text: 'Java', link: '/backend/java/' }
        ]
    },
    { 
        text: '移动端', items: [    
            { text: '小程序', link: '/mobile/applets/'},
            { text: 'uni-app', link: '/mobile/application/'}
        ]
    },
    { 
        text: '开发工具', items: [
            { text: 'Git', link: '/tools/git/' },
            { text: 'VSCode', link: '/tools/vscode/' },
        ]
    },
    { 
        text: '其它', items: [    
            { text: 'Utils', link: '/others/utils/' },
            { text: '面试宝典', link: '/others/interview/' },
        ]
    },
    { 
        text: '项目', items: [    
            { text: '项目', link: '/project/project/' },
        ]
    }

]