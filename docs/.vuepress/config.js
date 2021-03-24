// .vuepress/config.js
module.exports = {
    plugins: [
        ['mermaidjs'],
        ['@vuepress/back-to-top'],
        ['@vuepress/last-updated'],
        ['@vuepress/active-header-links', {
            sidebarLinkSelector: '.sidebar-link',
            headerAnchorSelector: '.header-anchor'
        }],
        ['@vuepress/search', {
            searchMaxSuggestions: 10
        }]
    ],
    themeConfig: {
        lastUpdated: '最近更新时间',
        nav: [
            { text: '主页', link: '/' },
            { text: '战士', link: '/warrior/' },
            { text: '猿起', link: '/develop/' },
            { text: '哪一站', link: 'https://www.sunjishu.com' },
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                    { text: 'foo', link: '/foo/' },
                    { text: 'bar', link: '/bar/' },
                    { text: 'test', link: '/test/' }
                ]
            }
        ],
        sidebarDepth: 3,
        sidebar: {
            '/bar/': [{
                title: 'BAR Title',
                collapsable: false,
                children: [
                    { title: 'one', path: '/bar/one.md' },
                    { title: 'two', path: '/bar/two.md' }
                ]
            }],
            '/foo/': [{
                title: 'SS Title',
                collapsable: false,
                children: [
                    { title: 'one', path: '/foo/one.md' },
                    { title: 'two', path: '/foo/two.md' }
                ]
            }],
            '/test/': [{
                title: 'TEST Title',
                collapsable: false,
                children: [
                    { title: '1A1', path: '/test/test1/1A1.md' },
                    { title: '1A2', path: '/test/test1/1A2.md' }
                ]
            }, {
                title: 'TEST 2B Title',
                collapsable: false,
                children: [
                    { title: '2B1', path: '/test/test2/testB/2B1.md' },
                    { title: '2B2', path: '/test/test2/testB/2B2.md' }
                ]
            }, {
                title: 'TEST 2C Title',
                collapsable: false,
                children: [
                    { title: '2C1', path: '/test/test2/testC/2C1.md' },
                    { title: '2C2', path: '/test/test2/testC/2C2.md' }
                ]
            }]
        }
    }
}