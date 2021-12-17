// 侧边栏
module.exports = {
	'/back/java/concurrency/': [{
		title: 'Java并发',
		collapsable: false,
		children: [{
				title: '介绍',
				path: '/back/java/concurrency/'
			},
			{
				title: '线程池',
				path: 'thread-pool'
			},
			{
				title: '基础',
				path: '1.java多线程-基础'
			},
			{
				title: 'JUC',
				path: '2.Java多线程-JUC'
			}
		]
	}]
}
