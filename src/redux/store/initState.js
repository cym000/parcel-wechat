export default {
    collapsed: false,
    set: {
        volume: 0,      // 未开启
        notice: 0,      // 未开启通知
    },
    socketObj: null,
    user: {              // 微信号
        name: "blank",
        avatar: require("../../../static/images/user.jpg"),
    },
    friends: [{          // 通讯录
        name: "崔玲",
        userName: "@123",
        lastTime: "14:09",
        lastMsg: "流浪~木子阳:[收到一条网页版微信暂不支持的消息类型，请在手机上查看]",
        avatar: require("../../../static/images/friend.jpg"),
        noRemind: true
    }, {
        name: "崔玲",
        userName: "@234",
        lastTime: "15:09",
        lastMsg: "下午好",
        avatar: require("../../../static/images/friend.jpg"),
        noRemind: true
    }],
    sessionFriend: {},  // 会话好友
    messages: {
        "@123": [{
            avatar: require("../../../static/images/user.jpg"),
            name: "blank",
            receiver: 0,
            msgType: 1,
            content: "你们发生什么事了",
            lastMsg: '17:01'
        }, {
            avatar: require("../../../static/images/lili.jpg"),
            name: "柯丽丽",
            receiver: 1,
            msgType: 1,
            content: "我是小仙女"
        }, {
            avatar: require("../../../static/images/user.jpg"),
            name: "blank",
            receiver: 0,
            msgType: 3,
            link: require("../../../static/images/dog.jpg")
        }, {
            avatar: require("../../../static/images/contact.jpg"),
            name: "陈雄韬",
            receiver: 1,
            msgType: 1,
            content: "身份证拿好了?"
        }, {
            avatar: require("../../../static/images/user.jpg"),
            name: "blank",
            receiver: 0,
            msgType: 1,
            content: "要一阵子不能玩了"
        }, {
            avatar: require("../../../static/images/contact.jpg"),
            name: "陈雄韬",
            receiver: 1,
            msgType: 1,
            content: "测试"
        }, {
            avatar: require("../../../static/images/contact.jpg"),
            name: "陈雄韬",
            receiver: 1,
            msgType: 1,
            content: "我是菜猫"
        }, {
            avatar: require("../../../static/images/tou.jpg"),
            name: "柯银森",
            receiver: 1,
            msgType: 1,
            content: "我是菜头"
        }, {
            avatar: require("../../../static/images/jiaming.jpg"),
            name: "方佳明",
            receiver: 1,
            msgType: 1,
            content: "晚上带你去吃快餐"
        }, {
            avatar: require("../../../static/images/contact.jpg"),
            name: "陈雄韬",
            receiver: 1,
            msgType: 1,
            content: "@所有人<br>狼杀报名表<br>时间：本周六 19：30 <br>地点：瑞景 乐萃咖啡<br>天气：降温注意保暖<br>板子：根据人数决定               <br>不到9人自动流局<br>法官：xx<br>1、平叔<br>2、22<br>3、Nash<br>4、<br>5、<br>6、6666<br>7、6667<br>8、海上霸主<br>9、Lin<br>10、lin+1<br>11、ling<br>12、鱼<br>13、<br><br>待定区<br>1、方志<br>2、凉白开<br>3、乌龟"
        }]
    }
};