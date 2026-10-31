import type { HomeCopy } from "./home";

// Homepage, Simplified Chinese for Malaysian readers. Written from docs/18 §3
// (slots and primary queries) and §6 (FAQ phrased as people ask it). Head term
// 医美诊所 / 皮肤医美诊所; never 皮肤科 (implies a dermatology specialist), never
// 雷射 / 价格 / 美容院 (Taiwan usage or salon). Status: DRAFT until a Chinese-
// reading doctor signs it (content/i18n/pages.ts).
export const homeZh: HomeCopy = {
  meta: {
    title: "Kaiteki 皮肤医美诊所｜吉隆坡、雪兰莪、新山、亚庇 9间分店",
    // ~80 CJK characters: Google cuts Chinese snippets at roughly half the
    // Latin character budget (docs/18 §3 note 1).
    description:
      "Kaiteki 皮肤医美诊所在吉隆坡、雪兰莪、新山和亚庇设有9间分店。先由MMC注册医生评估你的皮肤问题，再建议合适的疗程，不推销配套。WhatsApp 预约免费咨询。",
  },
  hero: {
    kicker: "皮肤 · 医美 · 激光",
    h1: { pre: "日式细致的", em: "皮肤医美护理", post: "" },
    sub: "不急着推疗程，先由医生看清楚你的皮肤。全马9间分店、{n}位医生，每一个疗程都从评估开始。",
    cta: "WhatsApp 预约免费咨询",
    explore: "查看医美疗程",
    branchesLine: "全马9间分店：吉隆坡、雪兰莪、柔佛、沙巴。",
    findNearest: "找附近的分店",
    imageAlt: "一位皮肤状态平稳、面带微笑的女士，双手托着下巴",
    spotCta: "医生评估后的选择",
    spotAria: "{name}，阅读皮肤问题指南",
    spots: {
      "fine-lines-wrinkles": "抬头纹、表情纹，先评估清楚，再谈要不要处理。",
      "dark-eye-circles": "黑眼圈和眼袋，成因不同，处理方式也不同。",
      pigmentation: "晒斑、黄褐斑、肤色不均，按斑的类型选择合适的激光。",
      "enlarged-pores": "毛孔粗大和肤质粗糙，通常会配合补水护理一起规划。",
      "face-contouring": "下颌线和脸型轮廓，由医生和你一起规划。",
    },
  },
  // No badges: "the most … in Malaysia" is a superlative, and 全马最多 would
  // double it (docs/18 §8.1). Restore as a stated count once one is verified.
  concerns: {
    h2: "你想改善哪一个皮肤问题？",
    sub: "告诉我们你的困扰，医生会先评估，再建议是否需要疗程。",
    viewAll: "查看所有皮肤问题",
    explore: "了解处理方式",
    cardAria: "{name}，阅读皮肤问题指南",
    imageAlt: "{name}，Kaiteki 皮肤医美诊所处理的皮肤问题",
    summaries: {
      acne: "正在发作的暗疮和留下的痘疤，处理方式完全不同。医生会先分清类型和成因，再建议方案。",
      "body-slimming": "局部顽固脂肪可以用非手术方式处理。这是身体塑形，不是减肥方案。",
      "fine-lines-wrinkles": "做表情才出现的纹和静止时也在的纹，需要不同的方法。医生先判断你属于哪一种。",
      "tattoo-removal": "墨水颜色、深浅和肤色都会影响洗纹身的过程。医生评估后，才告诉你大概会是怎样。",
      "hair-loss": "变薄、发际线后退、斑秃，成因各不相同。医生先看你的脱发类型，再说疗程能不能帮上忙。",
      "face-contouring": "下颌线、脸颊饱满度和五官比例，可以不动手术调整。医生会按你的脸部结构来规划。",
    },
  },
  treatments: {
    h2: "医美疗程：做什么、怎么做",
    sub: "激光、提拉紧致、水光针与身体塑形。每一项都由医生评估，全部非手术。",
    viewAll: "查看所有疗程",
    learnMore: "了解更多",
    cardAria: "{name}，阅读疗程介绍",
    imageAlt: "Kaiteki 皮肤医美诊所的{name}疗程",
    summaries: {
      "pico-laser": "皮秒级激光，用于色斑、肤色暗沉和洗纹身，适合不同深浅的亚洲肤色。",
      hifu: "聚焦超声波，用于非手术的皮肤提拉与紧致。",
      ultherapy: "聚焦超声波平台，用于脸部和颈部的提拉紧致。",
      "fotona-4d": "多用途 Nd:YAG / Er:YAG 激光平台，在 Kaiteki 最常用于 Fotona 4D 面部紧致疗程。",
      radiofrequency: "以射频能量改善皮肤松弛和肤质问题。",
      microneedling: "射频微针（也有人叫黄金微针），用于肤质、痘坑和毛孔问题。",
    },
  },
  how: {
    kicker: "就诊流程",
    h2: "第一次来 Kaiteki，流程是这样的",
    sub: "在 Kaiteki，每一个疗程都从一次对话开始。以下是从咨询到疗后的完整过程。",
    steps: [
      {
        title: "免费咨询",
        kicker: "聊一聊，不是推销",
        body: "在 WhatsApp 预约附近分店的免费咨询。医生会了解你的皮肤问题、过往状况和期望，让你清楚知道有哪些可能、需要做什么、是不是真的需要疗程。不推配套，不必马上决定。",
      },
      {
        title: "你的疗程计划",
        kicker: "医生评估，清楚说明",
        body: "如果适合做疗程，医生会针对你的问题制定计划：用哪一种疗程、大概几次、需要多长时间，以及实际可以期待什么。所有细节都先说清楚，你再决定。",
      },
      {
        title: "疗程当天",
        kicker: "由同一位医生亲自进行",
        body: "疗程由为你评估的同一位注册医生亲自进行。视疗程而定，一般需要15到90分钟。过程中医生会讲解每个步骤，并随时确认你是否舒适。",
      },
      {
        title: "疗后护理与跟进",
        kicker: "疗程结束，照顾没有结束",
        body: "你会收到针对该疗程的护理说明。医生团队会跟进你的恢复情况。如果计划包含多次疗程，每一次开始前都会重新评估。",
      },
    ],
  },
  doctors: {
    h2: "认识为你看诊的医生",
    body: "{n}位持有LCP认证、MMC注册的医美医生，分布在全马9间分店。每个疗程页面都写明负责医生，我们宁愿你看资历，而不是看见证。",
    teamLabel: "医疗团队",
    teamValue: "{n}位医美医生",
    credLabel: "资历",
    credValue: "LCP认证 · MMC注册",
    meetAll: "认识整个医生团队",
    imageAlt: "Kaiteki 的三位医生 Dr Chew、Dr Jessie 和 Dr Yeong Bin，身穿黑色诊所制服",
    roles: {
      "dr-chew-yuhhui": "联合创办人",
      "dr-jessie-lim": "创办人兼首席执行官",
      "dr-yeong-bin": "联合创办人",
    },
    profileAria: "{name}，{role}，查看简介",
  },
  why: {
    h2: "不一样的医美诊所",
    sub: "用平和、医疗的方式看待皮肤与医美。由医生评估你的问题，建议真正适合的做法。每一间分店都是同一个标准。",
    reasons: [
      {
        title: "医生主导，始终如一",
        body: "每一个计划都由MMC注册医生评估和执行，不会交给销售人员。",
      },
      {
        title: "9间分店，同一个标准",
        body: "吉隆坡、雪兰莪、柔佛和沙巴，每一间都是同样的医生团队、同样的流程。",
      },
      {
        title: "获仪器与产品品牌认可",
        body: "来自我们所用仪器和产品品牌的业绩奖项。",
      },
    ],
  },
  recognition: {
    h2: "获你所用疗程背后的品牌认可",
    body: "我们所用仪器和针剂的厂商，会审核使用它们的诊所：培训、使用量，以及每一件产品是否经授权渠道采购。以下是审核后颁发的奖项，完整记录在此，作为我们执业方式的纪录。",
    partnersLabel: "合作品牌",
    onRecordLabel: "奖项纪录",
    onRecordValue: "{n}项合作品牌奖项",
    yearsLabel: "年份",
    link: "认识获得这些奖项的医生",
    alsoOnRecord: "其他奖项纪录",
  },
  reviews: {
    heading: "患者怎么说",
    count: "{n} 则 Google 评价",
    countAll: "9间分店共 {n} 则 Google 评价",
    byBranch: "按分店查看评价",
    note: "评价按原文展示，截至{date}。完整、未筛选的评价请到 Google 页面查看。",
    viewOnGoogle: "在 Google 查看",
    intl: "zh-CN",
  },
  branches: {
    h2: "找一间离你近的分店",
    sub: "9间分店，遍布吉隆坡、雪兰莪、柔佛和沙巴。每间分店都是同样的医生团队、同样的标准。",
    all: "所有分店",
    allTab: "全部分店",
  },
  closing: {
    kicker: "免费咨询 · 没有购买压力",
    h2: { pre: "不知道", em: "从哪里开始？" },
    body: "先和医生聊一聊。WhatsApp 预约免费咨询，我们帮你找合适的分店和合适的方案，不必马上决定。",
    branchesLine: "全马9间分店：吉隆坡、雪兰莪、柔佛、沙巴",
  },
  faq: {
    h2: "常见问题",
    items: [
      {
        q: "医美咨询要钱吗？Kaiteki 的咨询真的免费吗？",
        a: "是的。第一次咨询免费，也没有任何购买义务。医生会评估你的皮肤问题，说明有哪些选择，并给你诚实的建议。你可以慢慢考虑，不必当场决定。",
      },
      {
        q: "不知道自己适合什么疗程，可以先来咨询吗？",
        a: "可以。大部分人是带着皮肤问题来的，而不是疗程名称。咨询时医生会评估你的皮肤，再建议比较合适的选择。你不需要事先研究疗程。",
      },
      {
        q: "Kaiteki 的疗程是医生亲自做，还是美容师做？",
        a: "每一个疗程都由注册医生评估和执行。我们的医生持有LCP认证，并在MMC注册。我们不会把疗程交给美容师或非医疗人员。",
      },
      {
        q: "亚洲人或肤色较深，做激光会反黑吗？",
        a: "我们的许多疗程，包括皮秒激光，适用于不同深浅的亚洲肤色。不过，适不适合、反黑的风险高不高，要看你的肤质和具体问题。医生会在咨询时评估，并说明哪些疗程适合你、疗后要注意什么。",
      },
      {
        q: "Kaiteki 在吉隆坡、新山、亚庇有哪些分店？去哪一间比较方便？",
        a: "我们在吉隆坡、雪兰莪、柔佛和沙巴共有9间分店。每间分店提供相同的疗程、遵循相同的流程，并由注册医生看诊。选离你近的那间就可以，或者在 WhatsApp 问我们，我们会建议有空档、离你近的分店，尽早为你安排。",
      },
      {
        q: "做医美要多少钱？价钱怎么算？",
        a: "价钱会因疗程种类、治疗部位和建议的次数而不同。开始任何疗程之前，医生会在咨询时把费用清楚列出来。我们不以配套方式推销。",
      },
      {
        q: "做完疗程有恢复期吗？要休息几天？",
        a: "要看是哪一种疗程。HIFU、Ultherapy、射频和水光针等非侵入性疗程，通常恢复期很短甚至没有。点阵 CO₂ 激光或射频微针等疗程，可能需要几天恢复。医生会在开始前说明你需要注意什么。",
      },
      {
        q: "疗程一般要做几次？多久做一次？",
        a: "这取决于你的皮肤问题、皮肤状况和建议的疗程。有些人做一次就看到变化，有些人则需要在几周或几个月内做一系列疗程。医生会在咨询时说明大概需要几次，你不必一开始就答应全部疗程。",
      },
      {
        q: "不同的医美疗程可以一起做吗？",
        a: "很多情况下可以，作为整体计划的一部分，一起做或按顺序做。例如医生可能建议激光配合水光针，或提拉疗程配合注射疗程。哪些组合适合、安全，医生会针对你的皮肤评估。",
      },
      {
        q: "如果医生说我不需要做疗程，怎么办？",
        a: "那就是医生的建议。如果你其实不需要疗程，或者用护肤品处理更合适，又或者预期效果不值得这笔费用，我们的医生会直接告诉你。我们宁愿给你诚实的答案，也不要你做不必要的疗程。",
      },
    ],
  },
  promo: {
    dialogLabel: "Skincare Mix & Match 护肤优惠",
    close: "关闭优惠",
    imageAlt: "Kaiteki Skincare Mix & Match 护肤优惠：RM699",
    enquire: "WhatsApp 询问",
    viewProducts: "查看护肤产品",
    waMessage: "你好 Kaiteki，我想了解 Skincare Mix & Match RM699 优惠。",
  },
  campaign: {
    slides: [
      {
        label: "7周年庆优惠（一）",
        alt: "Kaiteki 7周年庆 Positive Face Project，11月1日至30日。疗程配套：Happy Face Reset（39% 折扣）、Bye Bye Angry Face、Dull Out Glow On（48% 折扣）、BB Face Lift（节省 RM2,500）及 Tired Face Quickfix。另送限量版旅行香水、免费咨询、免费礼品袋及高达 RM5,000 现金抵用额。受条款与条件约束。",
      },
      {
        label: "7周年庆优惠（二）",
        alt: "Kaiteki 7周年庆 Positive Face Project，11月1日至30日。疗程配套：Face Sculpt & Slim、Clear Skin Glow（49% 折扣）、Sick/Fatigue No More、Blooming Scalp（节省 RM1,600）及加购优惠（50% 折扣）。另送限量版旅行香水、免费咨询、免费礼品袋及高达 RM5,000 现金抵用额。受条款与条件约束。",
      },
    ],
    waMessage: "你好 Kaiteki，我想了解 7周年庆 Positive Face Project 优惠。",
    next: "下一个优惠",
    prev: "上一个优惠",
  },
};
