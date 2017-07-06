import Mock from 'mockjs';

const news = Mock.mock('/news', {
	code:200,
	msg:'request ok',
	data:{
		top:{
			title:'习近平向世界展示“中国名片”',
			commentNum:153,
			time:1
		},
		content:[
			{
				title:'我叫王大锤,万万没想到这200行代码竟然让我找到一份月薪5K的工作',
				img:[
					'http://p1.pstatp.com/large/2c460003be6dae170dd9','http://p9.pstatp.com/large/2c470000769fcb2ecb98','http://p1.pstatp.com/large/2c3a0003c60d0e5f0c91'
				],
				author:'web前端学习',
				commentNum:6,
				time:1
			},
			{
				title:'SKT这样搞怕是要翻车! Faker带头除了吃就是玩',
				img:[
					'http://p3.pstatp.com/large/2c3c00035d58b3562f18','http://p1.pstatp.com/large/2c4500034609edf1c07c','http://p3.pstatp.com/large/2c3c00035d5a0e880f36'
				],
				author:'梦里游戏知多少',
				commentNum:37,
				time:5
			},
			{
				title:'课本上难以找到的这几个冷知识,第一个特别冷',
				img:[
					'http://p1.pstatp.com/large/2c340003fb3c3239f3ae','http://p9.pstatp.com/large/2c3800023077720a3732','http://p1.pstatp.com/large/2c380002309d7c58a087'
				],
				author:'独行客',
				commentNum:84,
				time:6
			},
			{
				title:'海贼王大妈称王野心暴露,路飞大败而归,四皇角逐时代来临!',
				img:[
					'http://p3.pstatp.com/large/2c3a000359f94403ade1','http://p1.pstatp.com/large/2c3c000398e31d2580a1','http://p3.pstatp.com/large/2c380003590eeda2317b'
				],
				author:'晓说动漫',
				commentNum:89,
				time:14
			}
		]
	}

});


export default {
	news
};