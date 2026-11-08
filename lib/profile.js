// 全站内容配置：想改文字只改这一个文件即可
export const profile = {
  name: "陈欣媛",
  nameEn: "CHEN XINYUAN",
  tagline: "自动化 · 2026 级新生",
  role: "AUTOMATION · FRESHMAN 2026",
  school: "杭州电子科技大学",
  major: "自动化",
  grade: "2026 级",
  bio: [
    "杭电自动化 2026 级新生。喜欢一切「能被程序驱动的物理世界」——电机怎么转、传感器怎么读、控制律怎么写，这些比屏幕上的像素更让我着迷。",
    "目前在做的事：补数学与电路基础，啃 C 语言，用 STM32 点第一颗 LED。相信自动化是一门必须动手的学科，所以尽量把课本上的公式变成会转、会亮、会跑的东西。",
    "球场是另一块实验场。排球练配合与补位，羽毛球练反应和手上控制，最近开始学网球，底线对拉能来回十几个回合。这三项有个共同点：判断要比动作早半拍——和写控制律是一个道理。",
  ],
  // 联系方式（可留空，留空则自动隐藏）
  links: [
    { label: "GitHub", value: "github.com/yourname", href: "https://github.com/" },
    { label: "邮箱", value: "yourname@example.com", href: "mailto:yourname@example.com" },
  ],
};

export const majorInfo = {
  code: "AUTO-2026-HDU",
  summary:
    "自动化 = 控制理论 + 电子技术 + 计算机。核心是让系统自己感知、自己判断、自己调节，从一颗芯片到一个工厂都是它的战场。",
  facts: [
    { k: "专业", v: "自动化" },
    { k: "学院", v: "自动化学院" },
    { k: "年级", v: "2026 级" },
    { k: "学制", v: "四年 · 工学学士" },
  ],
  tracks: [
    {
      title: "控制理论",
      desc: "经典控制、现代控制、PID 与状态空间。给系统一个目标，让它稳稳地走到那里。",
      tag: "CORE",
    },
    {
      title: "嵌入式系统",
      desc: "单片机、实时操作系统、外设驱动。代码真正跑在硬件上，一个电平都不能错。",
      tag: "HARDWARE",
    },
    {
      title: "传感与检测",
      desc: "把温度、位移、电流变成可计算的数字。没有感知，就谈不上控制。",
      tag: "SENSE",
    },
    {
      title: "电机与运动控制",
      desc: "从 PWM 到伺服闭环，让机械按毫米和毫秒去执行。",
      tag: "MOTION",
    },
  ],
  // 技能清单：level 为 0-100，新生阶段如实写「学习中」
  skills: [
    { name: "C / C++", level: 45, note: "语法与指针打底，正在刷题" },
    { name: "Python", level: 55, note: "数据处理与脚本自动化" },
    { name: "MATLAB / Simulink", level: 25, note: "刚接触，跟着课程走" },
    { name: "嵌入式 (STM32)", level: 20, note: "GPIO 点灯阶段，目标：温控小车" },
    { name: "电路基础", level: 30, note: "模电数电同步自学" },
  ],
};

export const interests = [
  {
    icon: "◈",
    title: "机器人 & 硬件 DIY",
    desc: "从舵机到小车底盘，喜欢看零件在自己手里动起来。宿舍桌上常年堆着杜邦线和面包板。",
  },
  {
    icon: "◉",
    title: "排球",
    desc: "课后和院队一起打，二传、接应都试过。最喜欢六个人一起把球救回来的那种配合感。",
  },
  {
    icon: "◍",
    title: "羽毛球",
    desc: "以双打为主，偏好拉吊突击。球速快、回合短，最考验启动反应和手上的控制。",
  },
  {
    icon: "◎",
    title: "网球",
    desc: "最近刚开始学的项目。先练底线对拉，追求稳定的落点和节奏，一个人也能对着墙练。",
  },
  {
    icon: "◐",
    title: "长跑",
    desc: "每周三次，五公里。控制自己的配速，是最朴素的控制系统实践。",
  },
  {
    icon: "♪",
    title: "电子音乐 / Synthwave",
    desc: "写代码的背景音。复古合成器音色和赛博朋克美学，大概是我审美的源头。",
  },
  {
    icon: "▣",
    title: "城市夜景摄影",
    desc: "霓虹、雨后的路面、亮着灯的高楼。喜欢用长曝光把城市拍成一张电路板。",
  },
  {
    icon: "▤",
    title: "科幻与赛博朋克",
    desc: "《神经漫游者》《攻壳机动队》。技术与人性的边界，是比代码更难解的题。",
  },
  {
    icon: "⌘",
    title: "开源与折腾",
    desc: "装 Linux、改配置、给自己的项目写 README。折腾本身就是学习。",
  },
];
