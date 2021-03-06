const sidebarConf = require('./config/sidebarConf.js');
const navConf = require('./config/navConf.js');
const pluginsConf = require('./config/pluginsConf.js');
const headConf = require('./config/headConf.js');

module.exports = {
	title: 'xdd', // 设置网站标题
	description: 'XDD',
	head: headConf,
	smoothScroll: true,
	markdown: {
	    lineNumbers: true
	  },
	themeConfig: {
		logo: '/img/hero.png',
		sidebar: sidebarConf,
		nav: navConf,
		repo: 'dongdongxiao-git/vuepress-blog',
	},
	plugins: pluginsConf
}
