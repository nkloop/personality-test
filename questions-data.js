// ===== 15 道情景题 =====
const questionsData = [
  {
    id: 1,
    question: "朋友深夜emo找你倾诉，你会？",
    options: [
      { text: "发三段长文分析原因，从原生家庭讲到社会压力", type: "A", points: 3 },
      { text: "甩20个表情包逗笑TA，顺便发几个搞笑视频", type: "B", points: 3 },
      { text: "先问'具体发生了什么？'，然后耐心听TA讲完", type: "C", points: 3 },
      { text: "默默点个外卖送到TA家，附赠一杯热奶茶", type: "D", points: 3 }
    ]
  },
  {
    id: 2,
    question: "公司团建要表演节目，你的反应是？",
    options: [
      { text: "主动请缨表演，顺便把PPT和流程都安排好了", type: "E", points: 3 },
      { text: "提议玩'击鼓传花'，谁输谁表演，公平又刺激", type: "B", points: 3 },
      { text: "观察大家的反应，等有人带头再跟着参与", type: "C", points: 3 },
      { text: "主动承担后勤工作，帮大家拍照买饮料", type: "D", points: 3 }
    ]
  },
  {
    id: 3,
    question: "看到朋友圈里有人在晒奢侈品，你会？",
    options: [
      { text: "默默截图发给闺蜜吐槽：'又在凡尔赛了'", type: "A", points: 3 },
      { text: "评论：'富婆贴贴！'然后继续刷下一个", type: "B", points: 3 },
      { text: "分析一下这个品牌的定位和目标客群", type: "C", points: 3 },
      { text: "点个赞表示看到了，内心毫无波澜", type: "H", points: 3 }
    ]
  },
  {
    id: 4,
    question: "周末一个人在家，你最可能做什么？",
    options: [
      { text: "整理房间，把衣柜按颜色分类，顺便断舍离", type: "A", points: 3 },
      { text: "打开B站看鬼畜视频，笑到肚子疼", type: "B", points: 3 },
      { text: "泡杯茶，看一本买了半年都没动的书", type: "C", points: 3 },
      { text: "给阳台的植物浇水，顺便做点烘焙", type: "D", points: 3 }
    ]
  },
  {
    id: 5,
    question: "同事经常迟到影响团队进度，你会？",
    options: [
      { text: "私下找TA聊聊，分析迟到原因并给出建议", type: "E", points: 3 },
      { text: "在群里发'谁能保证明天9点准时到？有奖！'", type: "B", points: 3 },
      { text: "观察一段时间，收集数据再找合适时机沟通", type: "C", points: 3 },
      { text: "主动帮TA分担一些工作，减轻TA的压力", type: "G", points: 3 }
    ]
  },
  {
    id: 6,
    question: "网恋对象想见面，但你觉得发展太快了，你会？",
    options: [
      { text: "直接说明感觉太快了，建议再多了解一段时间", type: "A", points: 3 },
      { text: "提议先视频聊天，看看真人再说", type: "B", points: 3 },
      { text: "分析利弊，制定详细的见面安全计划", type: "C", points: 3 },
      { text: "虽然紧张但还是同意，毕竟对方很真诚", type: "H", points: 3 }
    ]
  },
  {
    id: 7,
    question: "朋友聚会玩狼人杀，你通常是什么角色？",
    options: [
      { text: "法官，因为我能记住所有人的发言和逻辑", type: "A", points: 3 },
      { text: "狼人，忽悠村民太有意思了哈哈哈", type: "B", points: 3 },
      { text: "预言家，喜欢收集信息分析局势", type: "C", points: 3 },
      { text: "平民，跟着大家投票就好，不想太突出", type: "D", points: 3 }
    ]
  },
  {
    id: 8,
    question: "看到有人在地铁上晕倒，你的第一反应是？",
    options: [
      { text: "立即上前查看情况，指挥周围人帮忙叫救护车", type: "E", points: 3 },
      { text: "大声喊'有人晕倒了！'引起更多人注意", type: "B", points: 3 },
      { text: "先观察情况，判断是否需要专业救助", type: "C", points: 3 },
      { text: "马上拨打120，然后轻声安慰晕倒的人", type: "H", points: 3 }
    ]
  },
  {
    id: 9,
    question: "工作压力大到失眠，你会怎么调节？",
    options: [
      { text: "制定详细的时间管理计划，从根源解决问题", type: "A", points: 3 },
      { text: "刷短视频看搞笑内容，让自己笑到忘记烦恼", type: "B", points: 3 },
      { text: "分析问题所在，寻找最高效的解决方案", type: "C", points: 3 },
      { text: "请几天假出去散心，给自己充充电", type: "D", points: 3 }
    ]
  },
  {
    id: 10,
    question: "朋友送你一个你不喜欢的礼物，你会？",
    options: [
      { text: "礼貌感谢，然后仔细研究这个礼物的特点", type: "A", points: 3 },
      { text: "夸张地说'哇！这正是我需要的！'然后拍照发圈", type: "B", points: 3 },
      { text: "思考朋友为什么选这个礼物，背后的用心", type: "C", points: 3 },
      { text: "真诚感谢，告诉朋友你很感动TA的用心", type: "H", points: 3 }
    ]
  },
  {
    id: 11,
    question: "理想的工作环境是什么样的？",
    options: [
      { text: "有明确的目标和流程，能发挥专业能力", type: "A", points: 3 },
      { text: "氛围轻松活跃，同事都像朋友一样", type: "B", points: 3 },
      { text: "有挑战性但有意义，能学到新东西", type: "E", points: 3 },
      { text: "和谐友善的环境，大家互相支持帮助", type: "D", points: 3 }
    ]
  },
  {
    id: 12,
    question: "在朋友圈看到前任有了新恋情，你会？",
    options: [
      { text: "仔细分析他们的合照，判断新欢哪里比我好", type: "A", points: 3 },
      { text: "截图发给闺蜜群：'你们看！TA新男/女朋友！'", type: "B", points: 3 },
      { text: "思考一下这段感情教会了我什么", type: "C", points: 3 },
      { text: "真心祝福TA，然后关掉手机去运动", type: "H", points: 3 }
    ]
  },
  {
    id: 13,
    question: "旅行时最吸引你的是什么？",
    options: [
      { text: "了解当地历史文化，参观博物馆古迹", type: "A", points: 3 },
      { text: "体验刺激的项目，认识有趣的陌生人", type: "B", points: 3 },
      { text: "观察当地人的生活方式和文化差异", type: "C", points: 3 },
      { text: "享受美食，给亲友带纪念品", type: "D", points: 3 }
    ]
  },
  {
    id: 14,
    question: "遇到人生重大抉择时，你通常？",
    options: [
      { text: "列出所有可能性的优缺点，理性分析", type: "A", points: 3 },
      { text: "听从直觉，选择当下最心动的选项", type: "B", points: 3 },
      { text: "咨询信任的人意见，综合考虑", type: "C", points: 3 },
      { text: "相信自己的选择，勇敢承担责任", type: "E", points: 3 }
    ]
  },
  {
    id: 15,
    question: "你希望自己的墓志铭上写什么？",
    options: [
      { text: "'这里躺着一位理性思考者，用逻辑照亮世界'", type: "A", points: 3 },
      { text: "'TA来过，笑过，让周围的人更快乐'", type: "B", points: 3 },
      { text: "'一个永远保持好奇心的探索者'", type: "C", points: 3 },
      { text: "'用温暖的心对待每一个人'", type: "H", points: 3 }
    ]
  }
];

// ===== 8 种人格类型（完整） =====
const personalityTypes = {
  A: {
    name: "外冷内热",
    title: "冰山型",
    description: "你像一座火山，平时是冰山，熟了是岩浆",
    characters: [
      { name: "瑞克", source: "《瑞克和莫蒂》", image: "resources/characters/rick.jpg" },
      { name: "宇智波鼬", source: "《火影忍者》", image: "resources/characters/itachi.jpg" },
      { name: "罗辑", source: "《三体》", image: "resources/characters/luoji.jpg" }
    ],
    traits: [
      { icon: "📸", title: "朋友圈三天可见", description: "但深夜会发小作文（3小时内必删）" },
      { icon: "💬", title: "打字喜欢一口气发三段", description: "怕说不清楚，必须把逻辑讲明白" },
      { icon: "😶", title: "表情包收藏2000+", description: "但日常聊天只用5个经典款" }
    ],
    count: 12847
  },
  B: {
    name: "抽象乐子人",
    title: "快乐型",
    description: "人生苦短，及时行乐，你是大家的开心果",
    characters: [
      { name: "死侍", source: "《死侍》", image: "resources/characters/deadpool.jpg" },
      { name: "路飞", source: "《海贼王》", image: "resources/characters/luffy.jpg" },
      { name: "星爵", source: "《银河护卫队》", image: "resources/characters/starlord.jpg" }
    ],
    traits: [
      { icon: "🎭", title: "群聊里的气氛担当", description: "一句话能让冷群瞬间活跃起来" },
      { icon: "🤪", title: "表情包制造机", description: "手机里有专门分类的表情包文件夹" },
      { icon: "🎪", title: "聚会C位出道", description: "没有你在的聚会总觉得少了点什么" }
    ],
    count: 15623
  },
  C: {
    name: "人间观察者",
    title: "洞察型",
    description: "你有一双看透本质的眼睛，是生活的分析师",
    characters: [
      { name: "夏洛克·福尔摩斯", source: "《神探夏洛克》", image: "resources/characters/sherlock.jpg" },
      { name: "L", source: "《死亡笔记》", image: "resources/characters/l.jpg" },
      { name: "蝙蝠侠", source: "《蝙蝠侠》", image: "resources/characters/batman.jpg" }
    ],
    traits: [
      { icon: "👁️", title: "细节捕捉大师", description: "别人注意不到的细节你都能发现" },
      { icon: "🔍", title: "信息收集癖", description: "喜欢搜集各种信息然后综合分析" },
      { icon: "📝", title: "观察笔记达人", description: "会把观察和思考记录下来整理成笔记" }
    ],
    count: 9876
  },
  D: {
    name: "温柔守护者",
    title: "治愈型",
    description: "你是温暖的小太阳，默默照亮身边的人",
    characters: [
      { name: "夏目贵志", source: "《夏目友人帐》", image: "resources/characters/natsume.jpg" },
      { name: "宫水三叶", source: "《你的名字》", image: "resources/characters/mitsuha.jpg" },
      { name: "哈尔", source: "《哈尔的移动城堡》", image: "resources/characters/howl.jpg" }
    ],
    traits: [
      { icon: "🌱", title: "植物养护专家", description: "家里的绿植都养得很好，还会送人小盆栽" },
      { icon: "🍪", title: "烘焙小能手", description: "经常做点心分享给朋友和同事" },
      { icon: "🤗", title: "倾听者体质", description: "朋友有心事都会第一时间找你倾诉" }
    ],
    count: 11234
  },
  E: {
    name: "理想主义战士",
    title: "信念型",
    description: "你心中有光，为了理想可以奋不顾身",
    characters: [
      { name: "艾伦", source: "《进击的巨人》", image: "resources/characters/eren.jpg" },
      { name: "钢铁侠", source: "《复仇者联盟》", image: "resources/characters/ironman.jpg" },
      { name: "悟空", source: "《龙珠》", image: "resources/characters/goku.jpg" }
    ],
    traits: [
      { icon: "⚡", title: "行动派代表", description: "想到什么就立即去做，从不拖延" },
      { icon: "🎯", title: "目标导向型", description: "设定目标后就会全力以赴去实现" },
      { icon: "🔥", title: "激情燃烧者", description: "对自己热爱的事物有无穷的热情" }
    ],
    count: 8765
  },
  F: {
    name: "赛博游吟诗人",
    title: "文艺型",
    description: "你是数字时代的浪漫主义者，用文字和音乐治愈世界",
    characters: [
      { name: "梵高", source: "《至爱梵高》", image: "resources/characters/vangogh.jpg" },
      { name: "莫扎特", source: "《莫扎特传》", image: "resources/characters/mozart.jpg" },
      { name: "莎士比亚", source: "《莎士比亚情史》", image: "resources/characters/shakespeare.jpg" }
    ],
    traits: [
      { icon: "🎨", title: "艺术创作爱好者", description: "喜欢写诗、画画或者弹奏乐器" },
      { icon: "📚", title: "文艺作品收藏家", description: "家里有大量书籍、唱片或者艺术品" },
      { icon: "🌙", title: "深夜灵感迸发者", description: "经常在深夜有创作灵感并立即记录下来" }
    ],
    count: 6543
  },
  G: {
    name: "混沌善良",
    title: "自由型",
    description: "你遵循内心的道德准则，不受规则束缚",
    characters: [
      { name: "杰克船长", source: "《加勒比海盗》", image: "resources/characters/jack.jpg" },
      { name: "哈莉·奎茵", source: "《自杀小队》", image: "resources/characters/harley.jpg" },
      { name: "孙悟空", source: "《西游记》", image: "resources/characters/sunyukong.jpg" }
    ],
    traits: [
      { icon: "🎲", title: "随机决策者", description: "经常靠抛硬币或者骰子来做决定" },
      { icon: "🌪️", title: "规则破坏者", description: "不喜欢被条条框框束缚，喜欢按自己的方式做事" },
      { icon: "🃏", title: "惊喜制造者", description: "经常给朋友制造意想不到的惊喜" }
    ],
    count: 7890
  },
  H: {
    name: "治愈系小太阳",
    title: "温暖型",
    description: "你是行走的正能量，用笑容温暖整个世界",
    characters: [
      { name: "小埋", source: "《干物妹小埋》", image: "resources/characters/umaru.jpg" },
      { name: "小樱", source: "《魔卡少女樱》", image: "resources/characters/sakura.jpg" },
      { name: "大雄", source: "《哆啦A梦》", image: "resources/characters/nobita.jpg" }
    ],
    traits: [
      { icon: "☀️", title: "正能量传播者", description: "总是能看到事物美好的一面，感染身边的人" },
      { icon: "😊", title: "笑容治愈师", description: "笑容很有感染力，能让心情不好的人开心起来" },
      { icon: "💝", title: "善意传递者", description: "经常做小小的善事，相信善意会传递" }
    ],
    count: 13579
  }
};

// 让 node 环境也能 require
if (typeof module !== "undefined" && module.exports) {
  module.exports = { questionsData, personalityTypes };
}