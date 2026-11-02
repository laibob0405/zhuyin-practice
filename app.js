const LESSONS=[
 {id:'1',name:'第一課',sub:'貓咪',sym:[['ㄅ','玻'],['ㄆ','坡'],['ㄇ','摸'],['ㄉ','得'],['ㄧ','衣'],['ㄠ','凹']]},
 {id:'2',name:'第二課',sub:'鵝寶寶',sym:[['ㄈ','佛'],['ㄏ','喝'],['ㄓ','知'],['ㄔ','吃'],['ㄨ','屋'],['ㄚ','啊'],['ㄜ','鵝']]},
 {id:'3',name:'第三課',sub:'河馬和河狸',sym:[['ㄌ','勒'],['ㄑ','期'],['ㄗ','資'],['ㄩ','迂'],['ㄛ','喔'],['ㄢ','安'],['ㄤ','骯']]},
 {id:'4',name:'第四課',sub:'小西西',sym:[['ㄒ','西'],['ㄕ','詩'],['ㄟ','欸'],['ㄡ','歐'],['ㄦ','兒'],['ㄧㄠ','腰'],['ㄨㄢ','彎']]},
 {id:'5',name:'第五課',sub:'翹翹板',sym:[['ㄋ','呢'],['ㄍ','哥'],['ㄞ','哀'],['ㄥ',null],['ㄧㄚ','呀'],['ㄧㄡ','優'],['ㄧㄤ','央']]},
 {id:'6',name:'第六課',sub:'謝謝老師',sym:[['ㄐ','機'],['ㄙ','思'],['ㄝ',null],['ㄧㄝ','耶'],['ㄨㄚ','挖'],['ㄨㄛ','窩'],['ㄨㄥ','翁']]},
 {id:'7',name:'第七課',sub:'龜兔賽跑',sym:[['ㄊ','特'],['ㄎ','科'],['ㄣ','恩'],['ㄧㄢ','煙'],['ㄧㄥ','英'],['ㄨㄞ','歪'],['ㄨㄟ','威']]},
 {id:'8',name:'第八課',sub:'拔蘿蔔',sym:[['ㄖ','日'],['ㄘ','雌'],['ㄧㄛ','唷'],['ㄨㄤ','汪'],['ㄩㄢ','冤'],['ㄩㄥ','庸']]},
 {id:'9',name:'第九課',sub:'動物狂歡會',sym:[['ㄧㄞ','崖'],['ㄧㄣ','音'],['ㄨㄣ','溫'],['ㄩㄝ','約'],['ㄩㄣ','暈']]}
];
// 句子的格式：每個字接注音和聲調（5 是輕聲），| 分開語詞。S(句子,圖,填空的語詞位置,錯誤選項,不適合重組)
const T=x=>[...x.matchAll(/(.)([ㄅ-ㄩ]+)([1-5])/g)].map(m=>({c:m[1],s:m[2],t:+m[3]}));
const S=(text,p,b,w,noOrder)=>({ch:text.split('|').map(T),p,b,w:w.map(T),noOrder:!!noOrder});
const R=(lines,q,opts)=>({lines:lines.map(x=>x.split('|').map(T)),q,opts:opts.map(T)});
const SENT={
 '1':{s:[S('貓ㄇㄠ1咪ㄇㄧ1|抱ㄅㄠ4|皮ㄆㄧ2包ㄅㄠ1','👜',1,['稻ㄉㄠ4米ㄇㄧ3','刀ㄉㄠ1']),S('貓ㄇㄠ1咪ㄇㄧ1|抱ㄅㄠ4|毛ㄇㄠ2筆ㄅㄧ3','🖌️',1,['皮ㄆㄧ2包ㄅㄠ1','毛ㄇㄠ2衣ㄧ1']),S('貓ㄇㄠ1咪ㄇㄧ1|抱ㄅㄠ4|稻ㄉㄠ4米ㄇㄧ3','🌾',1,['刀ㄉㄠ1','筆ㄅㄧ3'])],
  r:R(['貓ㄇㄠ1咪ㄇㄧ1|抱ㄅㄠ4|皮ㄆㄧ2包ㄅㄠ1','貓ㄇㄠ1咪ㄇㄧ1|抱ㄅㄠ4|稻ㄉㄠ4米ㄇㄧ3'],'誰抱著皮包？',['貓ㄇㄠ1咪ㄇㄧ1','毛ㄇㄠ2衣ㄧ1','稻ㄉㄠ4米ㄇㄧ3'])},
 '2':{s:[S('爸ㄅㄚ4爸ㄅㄚ5|喝ㄏㄜ1|茶ㄔㄚ2','🍵',1,['豬ㄓㄨ1','車ㄔㄜ1']),S('弟ㄉㄧ4弟ㄉㄧ5|抱ㄅㄠ4|豬ㄓㄨ1','🐷',1,['車ㄔㄜ1','叉ㄔㄚ1']),S('河ㄏㄜ2馬ㄇㄚ3|抱ㄅㄠ4|茶ㄔㄚ2壺ㄏㄨ2','🫖',1,['車ㄔㄜ1','爸ㄅㄚ4爸ㄅㄚ5'])],
  r:R(['爸ㄅㄚ4爸ㄅㄚ5|喝ㄏㄜ1|茶ㄔㄚ2','弟ㄉㄧ4弟ㄉㄧ5|抱ㄅㄠ4|豬ㄓㄨ1'],'誰喝茶？',['爸ㄅㄚ4爸ㄅㄚ5','弟ㄉㄧ4弟ㄉㄧ5','河ㄏㄜ2馬ㄇㄚ3'])},
 '3':{s:[S('鴨ㄧㄚ1子ㄗ5|吃ㄔ1|米ㄇㄧ3飯ㄈㄢ4','🍚',1,['旗ㄑㄧ2子ㄗ5','梨ㄌㄧ2子ㄗ5']),S('狐ㄏㄨ2狸ㄌㄧ2|抱ㄅㄠ4|包ㄅㄠ1子ㄗ5','🥟',1,['帽ㄇㄠ4子ㄗ5','蜘ㄓ1蛛ㄓㄨ1']),S('螞ㄇㄚ3蟻ㄧ3|吃ㄔ1|梨ㄌㄧ2子ㄗ5','🍐',2,['報ㄅㄠ4紙ㄓ3','旗ㄑㄧ2子ㄗ5']),S('巫ㄨ1婆ㄆㄛ2|抱ㄅㄠ4|玉ㄩ4米ㄇㄧ3','🌽',1,['房ㄈㄤ2屋ㄨ1','鯉ㄌㄧ3魚ㄩ2'])],
  r:R(['鴨ㄧㄚ1子ㄗ5|吃ㄔ1|米ㄇㄧ3飯ㄈㄢ4','狐ㄏㄨ2狸ㄌㄧ2|抱ㄅㄠ4|包ㄅㄠ1子ㄗ5'],'誰抱著包子？',['狐ㄏㄨ2狸ㄌㄧ2','鴨ㄧㄚ1子ㄗ5','巫ㄨ1婆ㄆㄛ2'])},
 '4':{s:[S('獅ㄕ1子ㄗ5|背ㄅㄟ1|書ㄕㄨ1包ㄅㄠ1','🎒',1,['耳ㄦ3朵ㄉㄨㄛ5','帆ㄈㄢ2船ㄔㄨㄢ2']),S('企ㄑㄧ3鵝ㄜ2|坐ㄗㄨㄛ4|帆ㄈㄢ2船ㄔㄨㄢ2','⛵',1,['手ㄕㄡ3','鼻ㄅㄧ2子ㄗ5']),S('媽ㄇㄚ1媽ㄇㄚ5|洗ㄒㄧ3|手ㄕㄡ3','✋',1,['書ㄕㄨ1包ㄅㄠ1','耳ㄦ3朵ㄉㄨㄛ5'])],
  r:R(['獅ㄕ1子ㄗ5|背ㄅㄟ1|書ㄕㄨ1包ㄅㄠ1','企ㄑㄧ3鵝ㄜ2|坐ㄗㄨㄛ4|帆ㄈㄢ2船ㄔㄨㄢ2'],'誰坐帆船？',['企ㄑㄧ3鵝ㄜ2','獅ㄕ1子ㄗ5','媽ㄇㄚ1媽ㄇㄚ5'])},
 '5':{s:[S('猴ㄏㄡ2子ㄗ5|愛ㄞ4|皮ㄆㄧ2球ㄑㄧㄡ2','⚽',1,['香ㄒㄧㄤ1菇ㄍㄨ1','燈ㄉㄥ1泡ㄆㄠ4']),S('山ㄕㄢ1羊ㄧㄤ2|吃ㄔ1|香ㄒㄧㄤ1菇ㄍㄨ1','🍄',1,['奶ㄋㄞ3奶ㄋㄞ5','男ㄋㄢ2生ㄕㄥ1']),S('小ㄒㄧㄠ3狗ㄍㄡ3|愛ㄞ4|奶ㄋㄞ3奶ㄋㄞ5','👵',1,['燈ㄉㄥ1泡ㄆㄠ4','皮ㄆㄧ2球ㄑㄧㄡ2'],1),S('蜜ㄇㄧ4蜂ㄈㄥ1|愛ㄞ4|燈ㄉㄥ1泡ㄆㄠ4','💡',1,['白ㄅㄞ2鵝ㄜ2','香ㄒㄧㄤ1菇ㄍㄨ1'])],
  r:R(['猴ㄏㄡ2子ㄗ5|愛ㄞ4|皮ㄆㄧ2球ㄑㄧㄡ2','山ㄕㄢ1羊ㄧㄤ2|吃ㄔ1|香ㄒㄧㄤ1菇ㄍㄨ1'],'誰吃香菇？',['山ㄕㄢ1羊ㄧㄤ2','猴ㄏㄡ2子ㄗ5','蜜ㄇㄧ4蜂ㄈㄥ1'])},
 '6':{s:[S('爺ㄧㄝ2爺ㄧㄝ5|吃ㄔ1|西ㄒㄧ1瓜ㄍㄨㄚ1','🍉',1,['時ㄕ2鐘ㄓㄨㄥ1','飛ㄈㄟ1機ㄐㄧ1']),S('廚ㄔㄨ2師ㄕ1|吃ㄔ1|花ㄏㄨㄚ1生ㄕㄥ1','🥜',1,['皮ㄆㄧ2鞋ㄒㄧㄝ2','鬧ㄋㄠ4鐘ㄓㄨㄥ1']),S('老ㄌㄠ3鼠ㄕㄨ3|坐ㄗㄨㄛ4|火ㄏㄨㄛ3車ㄔㄜ1','🚂',1,['氣ㄑㄧ4球ㄑㄧㄡ2','棒ㄅㄤ4球ㄑㄧㄡ2']),S('蝴ㄏㄨ2蝶ㄉㄧㄝ2|愛ㄞ4|紅ㄏㄨㄥ2花ㄏㄨㄚ1','🌺',1,['皮ㄆㄧ2鞋ㄒㄧㄝ2','飛ㄈㄟ1機ㄐㄧ1'])],
  r:R(['爺ㄧㄝ2爺ㄧㄝ5|吃ㄔ1|西ㄒㄧ1瓜ㄍㄨㄚ1','老ㄌㄠ3鼠ㄕㄨ3|坐ㄗㄨㄛ4|火ㄏㄨㄛ3車ㄔㄜ1'],'誰坐火車？',['老ㄌㄠ3鼠ㄕㄨ3','爺ㄧㄝ2爺ㄧㄝ5','廚ㄔㄨ2師ㄕ1'])},
 '7':{s:[S('烏ㄨ1龜ㄍㄨㄟ1|戴ㄉㄞ4|眼ㄧㄢ3鏡ㄐㄧㄥ4','👓',1,['水ㄕㄨㄟ3壺ㄏㄨ2','外ㄨㄞ4套ㄊㄠ4']),S('兔ㄊㄨ4子ㄗ5|吃ㄔ1|糖ㄊㄤ2果ㄍㄨㄛ3','🍬',1,['領ㄌㄧㄥ3帶ㄉㄞ4','項ㄒㄧㄤ4鍊ㄌㄧㄢ4']),S('小ㄒㄧㄠ3鹿ㄌㄨ4|穿ㄔㄨㄢ1|外ㄨㄞ4套ㄊㄠ4','🧥',1,['水ㄕㄨㄟ3餃ㄐㄧㄠ3','排ㄆㄞ2骨ㄍㄨ3'])],
  r:R(['烏ㄨ1龜ㄍㄨㄟ1|戴ㄉㄞ4|眼ㄧㄢ3鏡ㄐㄧㄥ4','小ㄒㄧㄠ3鹿ㄌㄨ4|穿ㄔㄨㄢ1|外ㄨㄞ4套ㄊㄠ4'],'誰穿外套？',['小ㄒㄧㄠ3鹿ㄌㄨ4','烏ㄨ1龜ㄍㄨㄟ1','老ㄌㄠ3鷹ㄧㄥ1'])},
 '8':{s:[S('大ㄉㄚ4象ㄒㄧㄤ4|拔ㄅㄚ2|蘿ㄌㄨㄛ2蔔ㄅㄛ5','🥕',1,['草ㄘㄠ3莓ㄇㄟ2','日ㄖ4曆ㄌㄧ4']),S('黃ㄏㄨㄤ2牛ㄋㄧㄡ2|吃ㄔ1|草ㄘㄠ3莓ㄇㄟ2','🍓',2,['磁ㄘ2鐵ㄊㄧㄝ3','日ㄖ4曆ㄌㄧ4']),S('松ㄙㄨㄥ1鼠ㄕㄨ3|吃ㄔ1|青ㄑㄧㄥ1菜ㄘㄞ4','🥬',2,['磁ㄘ2鐵ㄊㄧㄝ3','王ㄨㄤ2子ㄗ5'])],
  r:R(['大ㄉㄚ4象ㄒㄧㄤ4|拔ㄅㄚ2|蘿ㄌㄨㄛ2蔔ㄅㄛ5','黃ㄏㄨㄤ2牛ㄋㄧㄡ2|吃ㄔ1|草ㄘㄠ3莓ㄇㄟ2'],'誰吃草莓？',['黃ㄏㄨㄤ2牛ㄋㄧㄡ2','大ㄉㄚ4象ㄒㄧㄤ4','松ㄙㄨㄥ1鼠ㄕㄨ3'])},
 '9':{s:[S('孔ㄎㄨㄥ3雀ㄑㄩㄝ4|穿ㄔㄨㄢ1|裙ㄑㄩㄣ2子ㄗ5','👗',1,['白ㄅㄞ2雲ㄩㄣ2','椅ㄧ3子ㄗ5']),S('小ㄒㄧㄠ3熊ㄒㄩㄥ2|敲ㄑㄧㄠ1|大ㄉㄚ4鼓ㄍㄨ3','🥁',1,['金ㄐㄧㄣ1牌ㄆㄞ2','雨ㄩ3傘ㄙㄢ3']),S('老ㄌㄠ3虎ㄏㄨ3|吃ㄔ1|乳ㄖㄨ3酪ㄌㄨㄛ4','🧀',2,['白ㄅㄞ2雲ㄩㄣ2','椅ㄧ3子ㄗ5'])],
  r:R(['孔ㄎㄨㄥ3雀ㄑㄩㄝ4|穿ㄔㄨㄢ1|裙ㄑㄩㄣ2子ㄗ5','小ㄒㄧㄠ3熊ㄒㄩㄥ2|敲ㄑㄧㄠ1|大ㄉㄚ4鼓ㄍㄨ3'],'誰敲大鼓？',['小ㄒㄧㄠ3熊ㄒㄩㄥ2','孔ㄎㄨㄥ3雀ㄑㄩㄝ4','老ㄌㄠ3虎ㄏㄨ3'])}
};
// 課本練習頁出現的語詞，用於看圖選注音、看注音選圖、連連看。
const V=(text,p)=>{const ch=T(text);return {ch,p,c:ch.map(t=>t.c).join(''),s:ch.map(t=>t.s).join(''),t:ch.map(t=>t.t).join('')}};
const VOCAB={
 '1':[V('皮ㄆㄧ2包ㄅㄠ1','👜'),V('毛ㄇㄠ2衣ㄧ1','🧶'),V('稻ㄉㄠ4米ㄇㄧ3','🌾'),V('筆ㄅㄧ3','✏️'),V('刀ㄉㄠ1','🔪'),V('貓ㄇㄠ1咪ㄇㄧ1','🐱'),V('毛ㄇㄠ2筆ㄅㄧ3','🖌️'),V('帽ㄇㄠ4','🧢'),V('抱ㄅㄠ4','🤗')],
 '2':[V('牙ㄧㄚ2齒ㄔ3','🦷'),V('珠ㄓㄨ1寶ㄅㄠ3','💎'),V('喝ㄏㄜ1茶ㄔㄚ2','🍵'),V('馬ㄇㄚ3車ㄔㄜ1','🐴'),V('衣ㄧ1服ㄈㄨ2','👕'),V('茶ㄔㄚ2壺ㄏㄨ2','🫖'),V('叉ㄔㄚ1','🍴'),V('車ㄔㄜ1','🚗'),V('豬ㄓㄨ1','🐷'),V('盒ㄏㄜ2','🎁'),V('河ㄏㄜ2馬ㄇㄚ3','🦛'),V('爸ㄅㄚ4爸ㄅㄚ5','👨'),V('弟ㄉㄧ4弟ㄉㄧ5','👦'),V('烏ㄨ1鴉ㄧㄚ1','🐦')],
 '3':[V('魔ㄇㄛ2法ㄈㄚ3','🪄'),V('巫ㄨ1婆ㄆㄛ2','🧙'),V('梨ㄌㄧ2子ㄗ5','🍐'),V('鴨ㄧㄚ1子ㄗ5','🦆'),V('帽ㄇㄠ4子ㄗ5','🧢'),V('包ㄅㄠ1子ㄗ5','🥟'),V('狐ㄏㄨ2狸ㄌㄧ2','🦊'),V('房ㄈㄤ2屋ㄨ1','🏠'),V('玉ㄩ4米ㄇㄧ3','🌽'),V('米ㄇㄧ3飯ㄈㄢ4','🍚'),V('旗ㄑㄧ2子ㄗ5','🚩'),V('蠟ㄌㄚ4筆ㄅㄧ3','🖍️'),V('盤ㄆㄢ2子ㄗ5','🍽️'),V('螞ㄇㄚ3蟻ㄧ3','🐜'),V('鱷ㄜ4魚ㄩ2','🐊'),V('報ㄅㄠ4紙ㄓ3','📰'),V('蜘ㄓ1蛛ㄓㄨ1','🕷️'),V('章ㄓㄤ1魚ㄩ2','🐙'),V('鯉ㄌㄧ3魚ㄩ2','🐟'),V('孵ㄈㄨ1蛋ㄉㄢ4','🥚')],
 '4':[V('企ㄑㄧ3鵝ㄜ2','🐧'),V('獅ㄕ1子ㄗ5','🦁'),V('耳ㄦ3朵ㄉㄨㄛ5','👂'),V('書ㄕㄨ1包ㄅㄠ1','🎒'),V('手ㄕㄡ3','✋'),V('帆ㄈㄢ2船ㄔㄨㄢ2','⛵'),V('媽ㄇㄚ1媽ㄇㄚ5','👩'),V('鼻ㄅㄧ2子ㄗ5','👃')],
 '5':[V('皮ㄆㄧ2球ㄑㄧㄡ2','⚽'),V('小ㄒㄧㄠ3狗ㄍㄡ3','🐶'),V('山ㄕㄢ1羊ㄧㄤ2','🐐'),V('奶ㄋㄞ3奶ㄋㄞ5','👵'),V('蜜ㄇㄧ4蜂ㄈㄥ1','🐝'),V('牛ㄋㄧㄡ2','🐮'),V('白ㄅㄞ2鵝ㄜ2','🦢'),V('香ㄒㄧㄤ1菇ㄍㄨ1','🍄'),V('燈ㄉㄥ1泡ㄆㄠ4','💡'),V('男ㄋㄢ2生ㄕㄥ1','🧒'),V('猴ㄏㄡ2子ㄗ5','🐵')],
 '6':[V('紅ㄏㄨㄥ2花ㄏㄨㄚ1','🌺'),V('老ㄌㄠ3師ㄕ1','🧑‍🏫'),V('牛ㄋㄧㄡ2奶ㄋㄞ3','🥛'),V('積ㄐㄧ1木ㄇㄨ4','🧱'),V('氣ㄑㄧ4球ㄑㄧㄡ2','🎈'),V('西ㄒㄧ1瓜ㄍㄨㄚ1','🍉'),V('橘ㄐㄩ2子ㄗ5','🍊'),V('皮ㄆㄧ2鞋ㄒㄧㄝ2','👞'),V('螃ㄆㄤ2蟹ㄒㄧㄝ4','🦀'),V('龍ㄌㄨㄥ2蝦ㄒㄧㄚ1','🦞'),V('時ㄕ2鐘ㄓㄨㄥ1','🕰️'),V('蝸ㄍㄨㄚ1牛ㄋㄧㄡ2','🐌'),V('花ㄏㄨㄚ1生ㄕㄥ1','🥜'),V('火ㄏㄨㄛ3車ㄔㄜ1','🚂'),V('蝴ㄏㄨ2蝶ㄉㄧㄝ2','🦋'),V('爺ㄧㄝ2爺ㄧㄝ5','👴'),V('飛ㄈㄟ1機ㄐㄧ1','✈️'),V('老ㄌㄠ3鼠ㄕㄨ3','🐭'),V('南ㄋㄢ2瓜ㄍㄨㄚ1','🎃'),V('棒ㄅㄤ4球ㄑㄧㄡ2','⚾'),V('鬧ㄋㄠ4鐘ㄓㄨㄥ1','⏰'),V('廚ㄔㄨ2師ㄕ1','🧑‍🍳'),V('唱ㄔㄤ4歌ㄍㄜ1','🎤'),V('掃ㄙㄠ3把ㄅㄚ3','🧹'),V('瓢ㄆㄧㄠ2蟲ㄔㄨㄥ2','🐞')],
 '7':[V('兔ㄊㄨ4子ㄗ5','🐰'),V('烏ㄨ1龜ㄍㄨㄟ1','🐢'),V('糖ㄊㄤ2果ㄍㄨㄛ3','🍬'),V('水ㄕㄨㄟ3餃ㄐㄧㄠ3','🥟'),V('排ㄆㄞ2骨ㄍㄨ3','🍖'),V('眼ㄧㄢ3鏡ㄐㄧㄥ4','👓'),V('領ㄌㄧㄥ3帶ㄉㄞ4','👔'),V('項ㄒㄧㄤ4鍊ㄌㄧㄢ4','📿'),V('水ㄕㄨㄟ3壺ㄏㄨ2','🚰'),V('外ㄨㄞ4套ㄊㄠ4','🧥'),V('老ㄌㄠ3鷹ㄧㄥ1','🦅'),V('小ㄒㄧㄠ3鹿ㄌㄨ4','🦌')],
 '8':[V('蘿ㄌㄨㄛ2蔔ㄅㄛ5','🥕'),V('大ㄉㄚ4象ㄒㄧㄤ4','🐘'),V('黃ㄏㄨㄤ2牛ㄋㄧㄡ2','🐂'),V('王ㄨㄤ2子ㄗ5','🤴'),V('日ㄖ4曆ㄌㄧ4','📅'),V('磁ㄘ2鐵ㄊㄧㄝ3','🧲'),V('松ㄙㄨㄥ1鼠ㄕㄨ3','🐿️'),V('草ㄘㄠ3莓ㄇㄟ2','🍓'),V('青ㄑㄧㄥ1菜ㄘㄞ4','🥬'),V('旋ㄒㄩㄢ2轉ㄓㄨㄢ4木ㄇㄨ4馬ㄇㄚ3','🎠'),V('草ㄘㄠ3地ㄉㄧ4','🌱'),V('睡ㄕㄨㄟ4覺ㄐㄧㄠ4','😴')],
 '9':[V('孔ㄎㄨㄥ3雀ㄑㄩㄝ4','🦚'),V('青ㄑㄧㄥ1蛙ㄨㄚ1','🐸'),V('小ㄒㄧㄠ3熊ㄒㄩㄥ2','🐻'),V('金ㄐㄧㄣ1魚ㄩ2','🐠'),V('白ㄅㄞ2雲ㄩㄣ2','☁️'),V('雨ㄩ3傘ㄙㄢ3','☂️'),V('椅ㄧ3子ㄗ5','🪑'),V('樹ㄕㄨ4木ㄇㄨ4','🌳'),V('放ㄈㄤ4鞭ㄅㄧㄢ1炮ㄆㄠ4','🧨'),V('變ㄅㄧㄢ4魔ㄇㄛ2術ㄕㄨ4','🎩'),V('金ㄐㄧㄣ1牌ㄆㄞ2','🥇'),V('裙ㄑㄩㄣ2子ㄗ5','👗'),V('乳ㄖㄨ3酪ㄌㄨㄛ4','🧀'),V('游ㄧㄡ2泳ㄩㄥ3','🏊'),V('老ㄌㄠ3虎ㄏㄨ3','🐯'),V('敲ㄑㄧㄠ1大ㄉㄚ4鼓ㄍㄨ3','🥁')]
};
LESSONS.forEach((l,n)=>{l.vocab=VOCAB[l.id];l.sents=SENT[l.id].s;l.reads=[SENT[l.id].r];l.pool=LESSONS.slice(0,n+1).flatMap(x=>x.sym)});
LESSONS.push({id:'all',name:'期中測驗',sub:'九課混合 36 題',sym:LESSONS.flatMap(l=>l.sym),vocab:LESSONS.flatMap(l=>l.vocab),sents:LESSONS.flatMap(l=>l.sents),reads:LESSONS.flatMap(l=>l.reads),pool:LESSONS.flatMap(l=>l.sym)});
// 介面文字的注音對照：先比對句子裡的語詞（才能標對輕聲），再查單字。
const UI_ZY='小ㄒㄧㄠ3一ㄧ1國ㄍㄨㄛ2語ㄩ3互ㄏㄨ4動ㄉㄨㄥ4學ㄒㄩㄝ2習ㄒㄧ2卷ㄐㄩㄢ4姓ㄒㄧㄥ4名ㄇㄧㄥ2年ㄋㄧㄢ2級ㄐㄧ2上ㄕㄤ4期ㄑㄧ2注ㄓㄨ4音ㄧㄣ1符ㄈㄨ2號ㄏㄠ4第ㄉㄧ4到ㄉㄠ4九ㄐㄧㄡ3課ㄎㄜ4對ㄉㄨㄟ4應ㄧㄥ4康ㄎㄤ1軒ㄒㄩㄢ1版ㄅㄢ3進ㄐㄧㄣ4度ㄉㄨ4二ㄦ4三ㄙㄢ1四ㄙ4五ㄨ3六ㄌㄧㄡ4七ㄑㄧ1八ㄅㄚ1十ㄕ2咪ㄇㄧ1鵝ㄜ2寶ㄅㄠ3河ㄏㄜ2馬ㄇㄚ3和ㄏㄢ4狸ㄌㄧ2嘻ㄒㄧ1翹ㄑㄧㄠ4板ㄅㄢ3龜ㄍㄨㄟ1兔ㄊㄨ4賽ㄙㄞ4物ㄨ4狂ㄎㄨㄤ2歡ㄏㄨㄢ1會ㄏㄨㄟ4中ㄓㄨㄥ1測ㄘㄜ4驗ㄧㄢ4混ㄏㄨㄣ4合ㄏㄜ2題ㄊㄧ2最ㄗㄨㄟ4高ㄍㄠ1分ㄈㄣ1出ㄔㄨ1打ㄉㄚ3亂ㄌㄨㄢ4本ㄅㄣ3型ㄒㄧㄥ2順ㄕㄨㄣ4序ㄒㄩ4聽ㄊㄧㄥ1選ㄒㄩㄢ3這ㄓㄜ4是ㄕ4哪ㄋㄚ3類ㄌㄟ4看ㄎㄢ4圖ㄊㄨ2拼ㄆㄧㄣ1聲ㄕㄥ1調ㄉㄧㄠ4連ㄌㄧㄢ2詞ㄘ2填ㄊㄧㄢ2句ㄐㄩ4子ㄗ5把ㄅㄚ3排ㄆㄞ2好ㄏㄠ3樣ㄧㄤ4嗎ㄇㄚ5讀ㄉㄨ2短ㄉㄨㄢ3文ㄨㄣ2回ㄏㄨㄟ2答ㄉㄚ2問ㄨㄣ4共ㄍㄨㄥ4念ㄋㄧㄢ4給ㄍㄟ3我ㄨㄛ3介ㄐㄧㄝ4韻ㄩㄣ4結ㄐㄧㄝ2不ㄅㄨ4先ㄒㄧㄢ1點ㄉㄧㄢ3張ㄓㄤ1再ㄗㄞ4它ㄊㄚ1請ㄑㄧㄥ3想ㄒㄧㄤ3換ㄏㄨㄢ4個ㄍㄜ5試ㄕ4重ㄔㄨㄥ2新ㄒㄧㄣ1了ㄌㄜ5就ㄐㄧㄡ4案ㄢ4全ㄑㄩㄢ2部ㄅㄨ4下ㄒㄧㄚ4成ㄔㄥ2績ㄐㄧ1練ㄌㄧㄢ4次ㄘ4太ㄊㄞ4棒ㄅㄤ4步ㄅㄨ4更ㄍㄥ4熟ㄕㄡ2慢ㄇㄢ4來ㄌㄞ2幾ㄐㄧ3多ㄉㄨㄛ1要ㄧㄠ4複ㄈㄨ4目ㄇㄨ4各ㄍㄜ4數ㄕㄨ4判ㄆㄢ4斷ㄉㄨㄢ4台ㄊㄞ2裝ㄓㄨㄤ1置ㄓ4無ㄨ2法ㄈㄚ3播ㄅㄛ1放ㄈㄤ4家ㄐㄧㄚ1長ㄓㄤ3著ㄓㄜ5誰ㄕㄟ2什ㄕㄣ2麼ㄇㄜ5別ㄅㄧㄝ2的ㄉㄜ5程ㄔㄥ2還ㄏㄞ2沒ㄇㄟ2名ㄇㄧㄥ2射ㄕㄜ4接ㄐㄧㄝ1住ㄓㄨ4移ㄧ2園ㄩㄢ2挑ㄊㄧㄠ1貼ㄊㄧㄝ1紙ㄓ3布ㄅㄨ4泡ㄆㄠ4找ㄓㄠ3從ㄘㄨㄥ2去ㄑㄩ4快ㄎㄨㄞ4在ㄗㄞ4首ㄕㄡ3頁ㄧㄝ4論ㄌㄨㄣ4記ㄐㄧ4牢ㄌㄠ2越ㄩㄝ4又ㄧㄡ4做ㄗㄨㄛ4每ㄇㄟ3算ㄙㄨㄢ4得ㄉㄜ5考ㄎㄠ3字ㄗ4行ㄏㄤ2搶ㄑㄧㄤ3開ㄎㄞ1始ㄕ3離ㄌㄧ2時ㄕ2間ㄐㄧㄢ1正ㄓㄥ4確ㄑㄩㄝ4錯ㄘㄨㄛ4榜ㄅㄤ3功ㄍㄨㄥ1謝ㄒㄧㄝ4跑ㄆㄠ3圈ㄑㄩㄢ1有ㄧㄡ3很ㄏㄣ3玩ㄨㄢ2面ㄇㄧㄢ4後ㄏㄡ4起ㄑㄧ3都ㄉㄡ1完ㄨㄢ2翻ㄈㄢ1牌ㄆㄞ2配ㄆㄟ4找ㄓㄠ3往ㄨㄤ3前ㄑㄧㄢ2走ㄗㄡ3幫ㄅㄤ1已ㄧ3經ㄐㄧㄥ1隻ㄓ1拿ㄋㄚ2地ㄉㄧ4鼠ㄕㄨ3單ㄉㄢ1贏ㄧㄥ2顆ㄎㄜ1你ㄋㄧ3星ㄒㄧㄥ1戲ㄒㄧ4遊ㄧㄡ2先ㄒㄧㄢ1';
const ZY_WORD=new Map(),ZY_ONE=new Map();
T(UI_ZY).forEach(t=>ZY_ONE.set(t.c,t));
T('做ㄗㄨㄛ4得ㄉㄜ5很ㄏㄣ3好ㄏㄠ3').forEach((t,n,a)=>{if(n===0)ZY_WORD.set('做得',a.slice(0,2))});
ZY_WORD.set('寶寶',T('寶ㄅㄠ3寶ㄅㄠ5'));
ZY_WORD.set('謝謝',T('謝ㄒㄧㄝ4謝ㄒㄧㄝ5'));
ZY_WORD.set('做得',T('做ㄗㄨㄛ4得ㄉㄜ5'));
const addZy=ch=>{if(ch.length>1)ZY_WORD.set(ch.map(t=>t.c).join(''),ch);ch.forEach(t=>{if(t.t!==5&&!ZY_ONE.has(t.c))ZY_ONE.set(t.c,t)})};
LESSONS.forEach(l=>{
  l.vocab.forEach(v=>addZy(v.ch));
  l.sents.forEach(s=>{s.ch.forEach(addZy);s.w.forEach(addZy)});
  l.reads.forEach(r=>{r.lines.flat().forEach(addZy);r.opts.forEach(addZy)});
});
const ANSWER_SEL='.cell,.ktile,.card,.hole,.bubble,.fallstar';
const CLOSERS=/[，。！？、：；」）]/;
const zh=(text,withChar)=>{
  let out='',n=0;
  while(n<text.length){
    let hit=null;
    for(let len=5;len>1&&!hit;len--)hit=ZY_WORD.get(text.slice(n,n+len));
    const toks=hit||(ZY_ONE.has(text[n])?[ZY_ONE.get(text[n])]:null);
    if(toks){out+=toks.map(t=>withChar?zyHan(t):'<span class="rc" role="img" aria-label="'+t.c+'">'+zy(t)+'</span>').join('');n+=toks.length}
    else if(withChar&&CLOSERS.test(text[n])&&out.endsWith('</span>')){out=out.slice(0,-7)+'<span class="p">'+text[n]+'</span></span>';n++}
    else{out+=text[n].replace(/[<>&]/,c=>({'<':'&lt;','>':'&gt;','&':'&amp;'})[c]);n++}
  }
  return out;
};
const HAN=/[一-鿿]/;
function annotate(root){
  const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
  const nodes=[];
  while(walker.nextNode())nodes.push(walker.currentNode);
  nodes.forEach(n=>{
    if(!HAN.test(n.nodeValue)||!n.parentElement||n.parentElement.closest('.zy,.zn,.rc,.rz,footer,details.parent,[data-noz]'))return;
    const span=document.createElement('span');
    span.className='rz';span.innerHTML=zh(n.nodeValue,!n.parentElement.closest(ANSWER_SEL));
    n.replaceWith(span);
  });
}
const SECTIONS={listen:'聽一聽，選符號',pick:'看圖，選注音',zypic:'看注音，選圖',spell:'拼一拼',tone:'選聲調',match:'連連看',combine:'拼音練習',missing:'看圖填語詞',linkword:'連成語詞',pair:'把對的音選出來',circle:'圈一圈',fill:'選詞填句子',order:'把句子排好',listenS:'聽句子，選圖',tf:'圖和句子一樣嗎？',reading:'讀短文，回答問題'};
const NUM=['一','二','三','四','五','六','七','八','九','十','十一','十二','十三','十四','十五','十六','十七'];
const txt=ch=>ch.map(t=>t.c).join('');
const sentText=s=>s.ch.map(txt).join('')+'。';
const ru=ch=>'<span class="ru">'+ch.map(t=>'<span class="rc" role="img" aria-label="'+t.c+'">'+zy(t)+'</span>').join('')+'</span>';
const ruDuo=ch=>'<span class="ru">'+ch.map(zyHan).join('')+'</span>';
const sentHtml=(chunks,blank)=>'<span class="sent">'+chunks.map((c,n)=>n===blank?'<span class="blank" id="blank"></span>':ruDuo(c)).join('')+'<span class="stop">。</span></span>';
const TONES=[[1,'一聲',''],[2,'二聲','ˊ'],[3,'三聲','ˇ'],[4,'四聲','ˋ']];
const SPEAKER='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4zm12.5 3a4 4 0 0 0-2-3.5v7a4 4 0 0 0 2-3.5zm-2-7.8v2.1a7 7 0 0 1 0 11.4v2.1a9 9 0 0 0 0-15.6z"/></svg>';
const $=id=>document.getElementById(id);
const store={get(k){try{return localStorage.getItem(k)}catch(e){return null}},set(k,v){try{localStorage.setItem(k,v)}catch(e){}}};
const shuffle=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const take=(a,n)=>shuffle(a).slice(0,n);
const key=w=>w.s+w.t;
const toneMark=t=>(TONES.find(x=>x[0]===t)||[])[2]||'';
function zy(w){
  const mark=toneMark(w.t);
  return '<span class="zn"><span class="s">'+(w.t===5?'˙':'')+w.s+'</span>'+(mark?'<span class="t">'+mark+'</span>':'')+'</span>';
}
const zyHan=t=>{
  const mark=toneMark(t.t);
  return '<span class="zy">'+t.c+'<span class="b" aria-hidden="true"><span class="s">'+(t.t===5?'˙':'')+t.s+'</span>'+(mark?'<span class="t">'+mark+'</span>':'')+'</span></span>';
};
const zyw=w=>w.ch?'<span class="zyrow'+(w.ch.length>2?' long':'')+'">'+w.ch.map(zy).join('')+'</span>':zy(w);
function build(l){
  const voc=[];l.vocab.forEach(v=>{if(!voc.some(u=>key(u)===key(v)))voc.push(v)});
  const vOthers=(w,n)=>{const seen=[w.p],out=[];shuffle(voc).forEach(u=>{if(out.length<n&&key(u)!==key(w)&&!seen.includes(u.p)){seen.push(u.p);out.push(u)}});return out};
  const qs=[];
  const pics=l.sents.map(s=>s.p);
  take(l.sym.filter(x=>x[1]),2).forEach(([s,r])=>qs.push({type:'listen',s,read:r,opts:shuffle([s,...take(l.sym.map(x=>x[0]).filter(x=>x!==s),3)]),answer:s,label:'聽音選符號'}));
  take(voc,2).forEach(w=>qs.push({type:'pick',w,opts:shuffle([w,...vOthers(w,3)]),label:'看圖「'+w.c+'」選注音',ans:w.c}));
  take(voc,2).forEach(w=>{const opts=shuffle([w,...vOthers(w,3)]);qs.push({type:'zypic',w,opts,good:opts.indexOf(w),label:'看注音選「'+w.c+'」',ans:w.c,say:'答對了！這是「'+w.c+'」。'})});
  take(voc.filter(w=>[...w.s].length>1&&w.ch.length<4),2).forEach(w=>{
    const need=[...new Set(w.s)];
    const pool=[...new Set(l.pool.flatMap(x=>[...x[0]]))].filter(c=>!need.includes(c));
    qs.push({type:'spell',w,tiles:shuffle([...need,...take(pool,Math.max(1,4-need.length))]),filled:0,label:'拼「'+w.c+'」',ans:w.c});
  });
  take(voc.filter(w=>w.ch.some(t=>t.t<5)),2).forEach(w=>{
    const idx=take(w.ch.map((t,n)=>t.t<5?n:-1).filter(n=>n>=0),1)[0];
    qs.push({type:'tone',w,idx,tt:w.ch[idx].t,label:'「'+w.c+'」的聲調',ans:w.c+' '+TONES[w.ch[idx].t-1][1]});
  });
  const pairs=[];shuffle(voc).forEach(w=>{if(pairs.length<4&&!pairs.some(p=>p.p===w.p||key(p)===key(w)))pairs.push(w)});
  qs.push({type:'match',pairs,right:shuffle(pairs),done:0,sel:null,label:'圖和注音連連看',ans:pairs.map(p=>p.c).join('、')});
  take(l.sents,2).forEach(s=>{const opts=shuffle([s.ch[s.b],...s.w]);qs.push({type:'fill',s,opts,good:opts.indexOf(s.ch[s.b]),label:'填句子：'+sentText(s),ans:txt(s.ch[s.b]),say:'答對了！'+sentText(s)})});
  take(l.sents.filter(s=>!s.noOrder),2).forEach(s=>{
    let t=shuffle(s.ch.map((c,n)=>n));if(t.every((v,n)=>v===n))t=[...t].reverse();
    qs.push({type:'order',s,tiles:t,filled:0,label:'排句子：'+sentText(s),ans:sentText(s)});
  });
  take(l.sents,1).forEach(s=>{const opts=shuffle([s.p,...take([...new Set([...pics,...voc.map(w=>w.p)])].filter(p=>p!==s.p),3)]);qs.push({type:'listenS',s,opts,good:opts.indexOf(s.p),label:'聽句子：'+sentText(s),ans:s.p,say:'答對了！'+sentText(s)})});
  take(l.sents,1).forEach(s=>{const same=Math.random()<.5;const shown=same?s.p:take(pics.filter(p=>p!==s.p),1)[0];qs.push({type:'tf',s,shown,good:same?0:1,label:'圖文判斷：'+sentText(s),ans:same?'一樣':'不一樣',say:'答對了！'})});
  take(l.reads,1).forEach(r=>{const opts=shuffle(r.opts);qs.push({type:'reading',r,opts,good:opts.indexOf(r.opts[0]),label:'短文：'+r.q,ans:txt(r.opts[0]),say:'答對了！答案是「'+txt(r.opts[0])+'」。'})});
  const twos=voc.filter(w=>w.ch.length===2);
  const toks=[];voc.forEach(w=>w.ch.forEach(t=>{if(!toks.some(u=>u.s===t.s&&u.t===t.t))toks.push({...t})}));
  const taught=new Set(l.pool.flatMap(x=>[...x[0]]));
  // 拼音練習：前後兩部分合起來，選出拼好的音。
  take(toks.filter(t=>[...t.s].length>1&&t.t<5),1).forEach(t=>{
    const cs=[...t.s],otherTone={s:t.s,t:t.t%4+1};
    const opts=shuffle([t,otherTone,...take(toks.filter(u=>u.s!==t.s&&[...u.s].length>1),2)]);
    qs.push({type:'combine',t,head:cs[0],rest:cs.slice(1).join(''),opts,good:opts.indexOf(t),label:'拼音練習',ans:t.s,say:'拼對了！'});
  });
  // 看圖填語詞：語詞少一個音，選出來。
  take(twos,1).forEach(w=>{
    const idx=Math.random()<.5?0:1,t=w.ch[idx];
    const opts=shuffle([t,...take(toks.filter(u=>u.s!==t.s),2)]);
    qs.push({type:'missing',w,idx,opts,good:opts.indexOf(t),label:'看圖填「'+w.c+'」',ans:w.c,say:'答對了！這是「'+w.c+'」。'});
  });
  // 連成語詞：前一個音連到後一個音。
  const links=[];shuffle(twos).forEach(w=>{if(links.length<3&&!links.some(u=>key(u.ch[0])===key(w.ch[0])||key(u.ch[1])===key(w.ch[1])))links.push(w)});
  qs.push({type:'linkword',links,right:shuffle(links),sel:null,done:0,label:'連成語詞',ans:links.map(w=>w.c).join('、')});
  // 把對的音選出來：音相近的兩個選一個。
  const CONF={'ㄅ':'ㄆ','ㄆ':'ㄅ','ㄉ':'ㄊ','ㄊ':'ㄉ','ㄋ':'ㄌ','ㄌ':'ㄋ','ㄍ':'ㄎ','ㄎ':'ㄍ','ㄐ':'ㄑ','ㄑ':'ㄐ','ㄓ':'ㄔ','ㄔ':'ㄓ','ㄕ':'ㄙ','ㄙ':'ㄕ','ㄗ':'ㄘ','ㄘ':'ㄗ','ㄈ':'ㄏ','ㄏ':'ㄈ','ㄇ':'ㄋ','ㄒ':'ㄕ'};
  take(voc,1).forEach(w=>{
    const idx=take(w.ch.map((t,n)=>t.t<5?n:-1).filter(n=>n>=0),1)[0],t=w.ch[idx];
    const swap=CONF[[...t.s][0]];
    const wrong=swap&&taught.has(swap)?{s:swap+[...t.s].slice(1).join(''),t:t.t}:{s:t.s,t:t.t%4+1};
    const opts=shuffle([t,wrong]);
    qs.push({type:'pair',w,idx,opts,good:opts.indexOf(t),label:'選出「'+w.c+'」的音',ans:w.c,say:'答對了！'});
  });
  // 圈一圈：把含有指定符號的音都點出來。
  const circleFrom=[...l.sym,...l.pool].map(x=>x[0]);
  const target=circleFrom.find(s=>{const n=toks.filter(t=>t.s.includes(s)).length;return n>=2&&n<toks.length-3})||circleFrom[0];
  const yes=take(toks.filter(t=>t.s.includes(target)),3),no=take(toks.filter(t=>!t.s.includes(target)),8-yes.length);
  qs.push({type:'circle',target,items:shuffle([...yes,...no]),found:0,need:yes.length,label:'圈出有「'+target+'」的音',ans:target});
  const order=Object.keys(SECTIONS);
  qs.sort((a,b)=>order.indexOf(a.type)-order.indexOf(b.type));
  return qs;
}
// 期中測驗：九課各出 4 題，12 種題型各出 3 題，再全部打散。
function buildExam(){
  const types=shuffle(Object.keys(SECTIONS));
  const exam=[];
  LESSONS.filter(l=>l.id!=='all').forEach((l,n)=>{
    const bank=build(l);
    for(let k=0;k<4;k++){
      const type=types[(n*4+k)%types.length];
      const q=take(bank.filter(x=>x.type===type),1)[0];
      exam.push({...q,from:l});
    }
  });
  return shuffle(exam);
}
let page='home',mode='quiz',lesson=LESSONS[0],qs=[],i=0,mixed=store.get('mixed')==='1';
function say(text){
  const hint=$('hint');
  const show=()=>{if(hint)hint.textContent='這台裝置無法播放中文語音，請家長念出：'+text};
  if(!('speechSynthesis' in window))return show();
  const v=speechSynthesis.getVoices();
  const voice=v.find(x=>/zh[-_]TW/i.test(x.lang))||v.find(x=>/^zh/i.test(x.lang));
  if(v.length&&!voice)return show();
  try{
    speechSynthesis.cancel();
    const u=new SpeechSynthesisUtterance(text);
    u.lang='zh-TW';u.rate=.8;if(voice)u.voice=voice;
    u.onerror=e=>{if(e.error!=='canceled'&&e.error!=='interrupted')show()};
    speechSynthesis.speak(u);
  }catch(e){show()}
}
function renderTabs(){applyTheme();updateStars()}
function renderProg(){
  $('prog').innerHTML=qs.map((q,n)=>'<i class="'+(n<i?(q.missed?'miss':'on'):n===i?'now':'')+'"></i>').join('');
}
function start(l){
  stopGame();sheetEl().classList.remove('playing');lesson=l;
  if(mode==='live'){qs=[];i=0;renderTabs();renderModes();$('mixrow').hidden=true;$('prog').innerHTML='';liveLobby();return}
  if(mode==='game'){qs=[];i=0;renderTabs();renderModes();$('mixrow').hidden=true;$('prog').innerHTML='';gameMenu();return}
  renderModes();qs=l.id==='all'?buildExam():mixed?shuffle(build(l)):build(l);i=0;renderTabs();
  $('mixrow').hidden=l.id==='all';renderQ();
}
function renderQ(){
  renderProg();
  const q=qs[i];
  let body='';
  const speakBtn=(t,label)=>'<button class="speak" type="button" data-say="'+t+'">'+SPEAKER+label+'</button>';
  if(q.type==='listen'){
    body='<div class="ask">'+speakBtn(q.read,'聽聲音')+'</div><p class="hint" id="hint"></p><div class="opts four">'+q.opts.map(o=>'<button class="cell" type="button" data-opt="'+o+'">'+o+'</button>').join('')+'</div>';
  }else if(q.type==='pick'){
    body='<div class="ask"><span class="pic" role="img" aria-label="'+q.w.c+'">'+q.w.p+'</span>'+speakBtn(q.w.c,'念給我聽')+'</div><p class="hint" id="hint"></p><div class="opts four">'+q.opts.map(o=>'<button class="cell" type="button" data-opt="'+key(o)+'">'+zyw(o)+'</button>').join('')+'</div>';
  }else if(q.type==='zypic'){
    body='<div class="ask"><span class="word big">'+zyw(q.w)+'</span></div><div class="opts four">'+q.opts.map((o,n)=>'<button class="cell emoji" type="button" data-ans="'+n+'" aria-label="第 '+(n+1)+' 張圖">'+o.p+'</button>').join('')+'</div>';
  }else if(q.type==='match'){
    body='<p class="hint">先點一張圖，再點它的注音。</p><div class="matchgrid"><div class="col">'+q.pairs.map((p,n)=>'<button class="cell emoji" type="button" data-ml="'+n+'" aria-label="'+p.c+'">'+p.p+'</button>').join('')+'</div><div class="col">'+q.right.map(p=>'<button class="cell" type="button" data-mr="'+key(p)+'">'+zyw(p)+'</button>').join('')+'</div></div>';
  }else if(q.type==='combine'){
    body='<div class="ask"><span class="word big">'+q.head+'</span><span class="word big">＋</span><span class="word big">'+zy({s:q.rest,t:q.t.t})+'</span></div><div class="opts four">'+q.opts.map((o,n)=>'<button class="cell" type="button" data-ans="'+n+'">'+zy(o)+'</button>').join('')+'</div>';
  }else if(q.type==='missing'||q.type==='pair'){
    const row=q.w.ch.map((t,n)=>n===q.idx?'<span class="blank small"></span>':zy(t)).join('');
    body='<div class="ask"><span class="pic" role="img" aria-label="'+q.w.c+'">'+q.w.p+'</span><span class="word toneword">'+row+'</span>'+speakBtn(q.w.c,'念給我聽')+'</div><p class="hint" id="hint"></p><div class="opts'+(q.type==='missing'?' three':'')+'">'+q.opts.map((o,n)=>'<button class="cell" type="button" data-ans="'+n+'">'+zy(o)+'</button>').join('')+'</div>';
  }else if(q.type==='linkword'){
    body='<p class="hint">先點前面的音，再點後面的音。</p><div class="matchgrid"><div class="col">'+q.links.map((w,n)=>'<button class="cell" type="button" data-ll="'+n+'">'+zy(w.ch[0])+'</button>').join('')+'</div><div class="col">'+q.right.map(w=>'<button class="cell" type="button" data-lr="'+w.c+'">'+zy(w.ch[1])+'</button>').join('')+'</div></div>';
  }else if(q.type==='circle'){
    body='<div class="ask slim"><span class="say">有「'+q.target+'」的音都點起來</span></div><div class="opts four">'+q.items.map((t,n)=>'<button class="cell" type="button" data-circ="'+n+'">'+zy(t)+'</button>').join('')+'</div>';
  }else if(q.type==='fill'){
    body='<div class="ask">'+sentHtml(q.s.ch,q.s.b)+'</div><div class="opts three">'+q.opts.map((o,n)=>'<button class="cell chunk" type="button" data-ans="'+n+'">'+ru(o)+'</button>').join('')+'</div>';
  }else if(q.type==='order'){
    body='<div class="ask">'+speakBtn(sentText(q.s),'聽句子')+'</div><p class="hint" id="hint"></p><div class="ordrow" id="ordrow">'+q.s.ch.map((c,n)=>'<span class="oslot'+(n===0?' cur':'')+'"></span>').join('')+'<span class="stop">。</span></div><div class="opts three">'+q.tiles.map(n=>'<button class="cell chunk" type="button" data-ord="'+n+'">'+ru(q.s.ch[n])+'</button>').join('')+'</div>';
  }else if(q.type==='listenS'){
    body='<div class="ask">'+speakBtn(sentText(q.s),'聽句子')+'</div><p class="hint" id="hint"></p><div class="opts four">'+q.opts.map((p,n)=>'<button class="cell emoji" type="button" data-ans="'+n+'" aria-label="第 '+(n+1)+' 張圖">'+p+'</button>').join('')+'</div>';
  }else if(q.type==='tf'){
    body='<div class="ask"><span class="pic" role="img" aria-label="圖片">'+q.shown+'</span>'+sentHtml(q.s.ch,-1)+'</div><div class="opts"><button class="cell tone" type="button" data-ans="0">一樣</button><button class="cell tone" type="button" data-ans="1">不一樣</button></div>';
  }else if(q.type==='reading'){
    const all=q.r.lines.map(c=>c.map(txt).join('')+'。').join('');
    body='<div class="passage">'+q.r.lines.map(c=>sentHtml(c,-1)).join('')+'</div><div class="ask slim"><span class="say qline">'+q.r.q+'</span>'+speakBtn(all+q.r.q,'念給我聽')+'</div><p class="hint" id="hint"></p><div class="opts three">'+q.opts.map((o,n)=>'<button class="cell chunk" type="button" data-ans="'+n+'">'+ru(o)+'</button>').join('')+'</div>';
  }else if(q.type==='spell'){
    const ch=[...q.w.s];
    body='<div class="ask"><span class="pic" role="img" aria-label="'+q.w.c+'">'+q.w.p+'</span><div class="slots" id="slots">'+(()=>{let n=0;return q.w.ch.map(t=>'<span class="sgroup">'+[...t.s].map(()=>'<span class="slot'+(n++===0?' cur':'')+'"></span>').join('')+'</span>').join('')})()+'</div>'+speakBtn(q.w.c,'念給我聽')+'</div><p class="hint" id="hint"></p><div class="opts four tiles">'+q.tiles.map(c=>'<button class="cell" type="button" data-tile="'+c+'">'+c+'</button>').join('')+'</div>';
  }else{
    body='<div class="ask"><span class="pic" role="img" aria-label="'+q.w.c+'">'+q.w.p+'</span><span class="word toneword">'+q.w.ch.map((t,n)=>n===q.idx?'<span class="target">'+zy({s:t.s,t:1})+'</span>':zy(t)).join('')+'</span>'+speakBtn(q.w.c,'念給我聽')+'</div><p class="hint" id="hint"></p><div class="opts four">'+TONES.map(t=>'<button class="cell tone" type="button" data-tone="'+t[0]+'">'+t[1]+(t[2]?' <b>'+t[2]+'</b>':'')+'</button>').join('')+'</div>';
  }
  $('main').innerHTML='<div class="qhead"><div class="sec">'+(mixed||lesson.id==='all'?'':NUM[Object.keys(SECTIONS).indexOf(q.type)]+'、')+SECTIONS[q.type]+'</div><div class="count">第 '+(i+1)+' 題／共 '+qs.length+' 題</div></div>'+body+'<div class="fb" id="fb"></div>';
}
function miss(btn){
  qs[i].missed=true;renderProg();
  btn.classList.add('bad');btn.disabled=true;
  $('fb').innerHTML='<p class="say">再想想，換一個試試看。</p>';
}
function done(btn,text){
  document.querySelectorAll('#main button.cell').forEach(b=>b.disabled=true);
  if(btn)btn.classList.add('good');
  const last=i===qs.length-1;
  $('fb').innerHTML='<p class="say ok">'+text+'</p><button class="next" type="button" id="next">'+(last?'看成績':'下一題')+'</button>';
  $('next').focus({preventScroll:true});
}
function result(){
  i=qs.length;renderProg();
  const right=qs.filter(q=>!q.missed).length;
  const score=Math.round(right/qs.length*100);
  const prev=Number(store.get('best-'+lesson.id));
  if(store.get('best-'+lesson.id)===null||score>prev)store.set('best-'+lesson.id,String(score));
  renderTabs();
  const who=$('name').value.trim();
  const wrong=qs.filter(q=>q.missed);
  const msg=score===100?'全部答對了，太棒了！':score>=80?'做得很好！':score>=60?'有進步，再練一次會更熟。':'慢慢來，先聽聲音多念幾次。';
  const ans=q=>q.ans?q.ans:q.type==='listen'?q.s:q.w.s+((TONES.find(t=>t[0]===q.w.t)||[])[2]||'');
  $('main').innerHTML='<div class="result"><div class="sec">'+lesson.name+' '+lesson.sub+(who?'．'+who.replace(/[<>&"]/g,''):'')+'</div><div class="score" role="img" aria-label="'+score+' 分">'+score+'<small>分</small></div><p class="say">答對 '+right+' 題，共 '+qs.length+' 題。'+msg+'</p>'+
   (lesson.id==='all'?'<div class="review"><h2>各課答對題數</h2><ul class="bylesson">'+LESSONS.filter(l=>l.id!=='all').map(l=>{const own=qs.filter(q=>q.from===l);return '<li><span>'+l.name+' '+l.sub+'</span><span>'+own.filter(q=>!q.missed).length+'／'+own.length+'</span></li>'}).join('')+'</ul></div>':'')+
   (wrong.length?'<div class="review"><h2>要再複習的題目</h2><ul>'+wrong.map(q=>'<li><span>'+(q.from?q.from.name+'．':'')+q.label+'</span><span>'+ans(q)+'</span></li>').join('')+'</ul></div>':'')+
   '<button class="next" style="margin:0" type="button" id="again">再練一次</button></div>';
}
$('main').addEventListener('click',e=>{
  const b=e.target.closest('button');if(!b||b.disabled)return;
  if(b.dataset.say){say(b.dataset.say);return}
  if(b.id==='next'){if(i===qs.length-1)result();else{i++;renderQ();$('prog').scrollIntoView({block:'start'})}return}
  if(b.id==='again'){start(lesson);window.scrollTo(0,0);return}
  const q=qs[i];
  if(b.dataset.ll!==undefined){
    document.querySelectorAll('[data-ll]').forEach(x=>x.classList.remove('sel'));
    b.classList.add('sel');q.sel=q.links[Number(b.dataset.ll)];$('fb').innerHTML='';
  }else if(b.dataset.lr!==undefined){
    if(!q.sel){$('fb').innerHTML='<p class="say">請先點前面的音。</p>';return}
    if(b.dataset.lr===q.sel.c){
      const left=document.querySelector('[data-ll].sel');
      [left,b].forEach(x=>{x.classList.remove('sel');x.classList.add('good');x.disabled=true});
      q.sel=null;q.done++;$('fb').innerHTML='';
      if(q.done===q.links.length)done(null,'全部連好了！');
    }else{
      q.missed=true;renderProg();
      document.querySelectorAll('[data-ll]').forEach(x=>x.classList.remove('sel'));
      q.sel=null;$('fb').innerHTML='<p class="say">再想想，重新點一個音試試看。</p>';
    }
  }else if(b.dataset.circ!==undefined){
    if(q.items[Number(b.dataset.circ)].s.includes(q.target)){
      b.classList.add('good');b.disabled=true;q.found++;$('fb').innerHTML='';
      if(q.found===q.need)done(null,'全部找到了！');
    }else miss(b);
  }else if(b.dataset.ans!==undefined){
    if(Number(b.dataset.ans)===q.good){
      if(q.type==='fill')$('blank').outerHTML=ruDuo(q.s.ch[q.s.b]);
      done(b,q.say||'答對了！');
    }else miss(b);
  }else if(b.dataset.ord!==undefined){
    if(Number(b.dataset.ord)===q.filled){
      const slots=$('ordrow').querySelectorAll('.oslot');
      slots[q.filled].innerHTML=ru(q.s.ch[q.filled]);slots[q.filled].className='oslot full';
      b.disabled=true;q.filled++;
      if(q.filled<q.s.ch.length){slots[q.filled].classList.add('cur');$('fb').innerHTML=''}
      else done(null,'排好了！');
    }else miss(b);
  }else if(b.dataset.ml!==undefined){
    document.querySelectorAll('[data-ml]').forEach(x=>x.classList.remove('sel'));
    b.classList.add('sel');q.sel=q.pairs[Number(b.dataset.ml)];$('fb').innerHTML='';
  }else if(b.dataset.mr!==undefined){
    if(!q.sel){$('fb').innerHTML='<p class="say">請先點一張圖。</p>';return}
    if(b.dataset.mr===key(q.sel)){
      const left=document.querySelector('[data-ml].sel');
      [left,b].forEach(x=>{x.classList.remove('sel');x.classList.add('good');x.disabled=true});
      q.sel=null;q.done++;$('fb').innerHTML='';
      if(q.done===q.pairs.length)done(null,'全部連好了！');
    }else{
      q.missed=true;renderProg();
      document.querySelectorAll('[data-ml]').forEach(x=>x.classList.remove('sel'));
      q.sel=null;$('fb').innerHTML='<p class="say">再想想，重新點一張圖試試看。</p>';
    }
  }else if(b.dataset.opt!==undefined){
    const good=q.type==='listen'?b.dataset.opt===q.answer:b.dataset.opt===key(q.w);
    good?done(b,'答對了！'+(q.type==='pick'?q.w.c+'的注音就是這個。':'')):miss(b);
  }else if(b.dataset.tone){
    if(Number(b.dataset.tone)===q.tt)done(b,'答對了！這是'+TONES[q.tt-1][1]+'。');else miss(b);
  }else if(b.dataset.tile){
    const ch=[...q.w.s];
    if(b.dataset.tile===ch[q.filled]){
      const slots=$('slots').querySelectorAll('.slot');
      slots[q.filled].textContent=b.dataset.tile;slots[q.filled].className='slot full';
      q.filled++;if(!ch.slice(q.filled).includes(b.dataset.tile))b.disabled=true;
      if(q.filled<ch.length){slots[q.filled].classList.add('cur');$('fb').innerHTML=''}
      else done(null,'拼好了！');
    }else miss(b);
  }
});
$('mix').checked=mixed;
$('mix').addEventListener('change',e=>{mixed=e.target.checked;store.set('mixed',mixed?'1':'0');start(lesson)});
$('name').value=store.get('name')||'';
$('name').addEventListener('input',e=>store.set('name',e.target.value));
if('speechSynthesis' in window)speechSynthesis.getVoices();
let gTimers=[];
function stopGame(){gTimers.forEach(t=>{clearInterval(t);clearTimeout(t)});gTimers=[]}
const getStars=()=>Number(store.get('stars'))||0;
function addStars(n){store.set('stars',String(getStars()+n));updateStars()}
function updateStars(){const s=$('starcount');if(s)s.textContent='⭐ '+getStars()}
function beep(ok){
  try{
    const C=window.AudioContext||window.webkitAudioContext;if(!C)return;
    const a=new C(),o=a.createOscillator(),g=a.createGain();
    o.frequency.value=ok?880:220;g.gain.value=.06;o.connect(g);g.connect(a.destination);o.start();o.stop(a.currentTime+.15);
  }catch(e){}
}
const lessonVoc=()=>{const out=[];lesson.vocab.forEach(v=>{if(!out.some(u=>u.p===v.p||key(u)===key(v)))out.push(v)});return out};
const gameTop=text=>'<div class="gtop"><div class="sec">'+text+'</div><button class="gback" type="button" data-gback="1">回選單</button></div>';
function gameMenu(){
  stopGame();document.body.classList.remove('playing');
  $('main').innerHTML='<div class="gtop"><div class="sec">選一個遊戲</div><div class="starline">你有 '+getStars()+' 顆星 ⭐</div></div><div class="gamelist">'+
   '<button class="gamebtn" type="button" data-game="bubble"><span class="pic">🫧</span><span>魔法泡泡<small>射中對的注音</small></span></button>'+
   '<button class="gamebtn" type="button" data-game="catch"><span class="pic">🐱</span><span>小貓接星星<small>移動小貓，接住對的注音</small></span></button>'+
   '<button class="gamebtn" type="button" data-game="garden"><span class="pic">🌷</span><span>我的小花園<small>答對了，挑貼紙放花園</small></span></button>'+
   '<button class="gamebtn" type="button" data-game="memory"><span class="pic">🃏</span><span>翻牌配對<small>找出圖和注音</small></span></button>'+
   '<button class="gamebtn" type="button" data-game="mole"><span class="pic">'+themeOf().icon+'</span><span>注音打地鼠<small>打對的符號</small></span></button>'+
   '<button class="gamebtn" type="button" data-game="race"><span class="pic">🐢</span><span>龜兔賽跑<small>選對注音就往前走</small></span></button></div>';
}
function gameWin(game,stars,text){
  stopGame();
  if(stars)addStars(stars);
  beep(!!stars);
  $('main').innerHTML='<div class="result"><div class="pic">'+(stars?'🏆':'🐰')+'</div><p class="say ok">'+text+'</p><div class="starline">'+(stars?'拿到 '+stars+' 顆星 '+'⭐'.repeat(stars)+'．':'')+'你有 '+getStars()+' 顆星</div><button class="next" style="margin:0" type="button" data-game="'+game+'">再玩一次</button><button class="gback" type="button" data-gback="1">回選單</button></div>';
}
let mem=null;
function startMemory(){
  stopGame();
  const picks=take(lessonVoc(),4);
  const cards=shuffle(picks.flatMap((v,n)=>[{pair:n,html:'<span class="emoji">'+v.p+'</span>'},{pair:n,html:zyw(v)}]));
  mem={cards,open:[],flips:0,done:0,lock:false};
  $('main').innerHTML=gameTop('翻牌配對')+'<p class="hint" id="memcount">翻了 0 次</p><div class="memgrid">'+cards.map((c,n)=>'<button class="card" type="button" data-card="'+n+'"><span class="cardback">'+themeOf().icon+'</span></button>').join('')+'</div>';
}
function flipCard(b){
  const n=Number(b.dataset.card),c=mem.cards[n];
  if(mem.lock||b.classList.contains('open')||b.classList.contains('done'))return;
  b.classList.add('open');b.innerHTML=c.html;mem.open.push(b);
  if(mem.open.length<2)return;
  mem.flips++;$('memcount').textContent='翻了 '+mem.flips+' 次';
  const [x,y]=mem.open;mem.open=[];
  if(mem.cards[Number(x.dataset.card)].pair===mem.cards[Number(y.dataset.card)].pair){
    beep(true);[x,y].forEach(e=>{e.classList.remove('open');e.classList.add('done');e.disabled=true});
    mem.done++;
    if(mem.done===4)gTimers.push(setTimeout(()=>gameWin('memory',mem.flips<=6?3:mem.flips<=9?2:1,'全部配對成功！'),500));
  }else{
    mem.lock=true;
    gTimers.push(setTimeout(()=>{[x,y].forEach(e=>{e.classList.remove('open');e.innerHTML='<span class="cardback">'+themeOf().icon+'</span>'});mem.lock=false},900));
  }
}
const MOLE_GOAL=8;
let mo=null;
function nextMoleTarget(){
  const pool=lesson.sym.filter(x=>x[1]);
  mo.target=take(pool,1)[0];
  const t=$('moletarget');if(t)t.textContent=mo.target[0];
  say(mo.target[1]);
}
function startMole(){
  stopGame();
  mo={hits:0,target:null};
  $('main').innerHTML=gameTop('注音打地鼠')+'<div class="ask slim"><span class="word" id="moletarget"></span><button class="speak" type="button" id="molesay">'+SPEAKER+'聽聲音</button></div><p class="hint" id="hint"></p><p class="hint" id="molecount">已經打到 0 隻／共 '+MOLE_GOAL+' 隻</p><div class="field">'+[0,1,2,3,4,5].map(n=>'<button class="hole" type="button" data-hole="'+n+'"></button>').join('')+'</div>';
  nextMoleTarget();
  popMole();
  gTimers.push(setInterval(popMole,1400));
}
function popMole(){
  const holes=[...document.querySelectorAll('.hole')];if(!holes.length||!mo)return;
  holes.forEach(h=>{h.classList.remove('up','hit');h.innerHTML='';delete h.dataset.sym});
  const syms=lesson.sym.map(x=>x[0]).filter(s=>s!==mo.target[0]);
  const spots=take(holes,3);
  [mo.target[0],...take(syms,2)].forEach((s,n)=>{const h=spots[n];if(!h)return;h.classList.add('up');h.dataset.sym=s;h.innerHTML='<span class="mole">'+themeOf().icon+'</span>'+s});
}
function hitMole(b){
  if(!b.dataset.sym)return;
  if(b.dataset.sym===mo.target[0]){
    beep(true);mo.hits++;b.classList.add('hit');delete b.dataset.sym;
    $('molecount').textContent='已經打到 '+mo.hits+' 隻／共 '+MOLE_GOAL+' 隻';
    if(mo.hits>=MOLE_GOAL){gameWin('mole',3,'全部打到了！');return}
    nextMoleTarget();popMole();
  }else{beep(false);b.classList.add('bad');gTimers.push(setTimeout(()=>b.classList.remove('bad'),350))}
}
const RACE_STEPS=8;
let race=null;
function startRace(){
  stopGame();
  race={me:0,rabbit:0,tick:0,q:null};
  $('main').innerHTML=gameTop('龜兔賽跑')+'<div class="track"><div class="lane"><span class="runner" id="me" style="left:0%">🐢</span></div><div class="lane"><span class="runner" id="rb" style="left:0%">🐰</span></div><span class="flag">🏁</span></div><div id="raceq"></div>';
  raceQuestion();
  gTimers.push(setInterval(()=>{
    race.tick++;
    if(race.tick%4===0)return; // 兔子偶爾睡一下
    race.rabbit++;$('rb').style.left=(race.rabbit/RACE_STEPS*85)+'%';
    if(race.rabbit>=RACE_STEPS)gameWin('race',0,'兔子先到了，再試一次！');
  },6000));
}
function raceQuestion(){
  const voc=lessonVoc();
  const w=take(voc,1)[0];
  const opts=shuffle([w,...take(voc.filter(u=>u!==w),2)]);
  race.q={w,opts};
  $('raceq').innerHTML='<div class="ask slim"><span class="pic" role="img" aria-label="'+w.c+'">'+w.p+'</span></div><div class="opts three">'+opts.map((o,n)=>'<button class="cell chunk" type="button" data-race="'+n+'">'+zyw(o)+'</button>').join('')+'</div>';
}
function answerRace(b){
  if(race.q.opts[Number(b.dataset.race)]===race.q.w){
    beep(true);race.me++;$('me').style.left=(race.me/RACE_STEPS*85)+'%';
    if(race.me>=RACE_STEPS){gameWin('race',race.rabbit<4?3:2,'烏龜贏了！');return}
    raceQuestion();
  }else{beep(false);b.classList.add('bad');b.disabled=true}
}
const sheetEl=()=>document.body;
const THEMES={
 '1':{img:'images/lesson1.jpg',bg:'#a33a1f',icon:'🐱',pics:['🐱','🏃','🏅','🎽','🌼','🏁','🦀','🐈‍⬛']},
 '2':{img:'images/lesson2.jpg',bg:'#1f6b4a',icon:'🐣',pics:['🐣','🦢','🥚','🐤','🕸️','🐸','🌿','🐥']},
 '3':{img:'images/lesson3.jpg',bg:'#135f8f',icon:'🦫',pics:['🦛','🦫','🐟','🪵','🌊','🌲','💧','🐠']},
 '4':{img:'images/lesson4.jpg',bg:'#8a4a12',icon:'🎒',pics:['🎒','🏫','🦒','🦌','🍂','🌳','🐰','🐦']},
 '5':{img:'images/lesson5.jpg',bg:'#3f7a1e',icon:'🛝',pics:['🛝','🐭','🐰','⚽','🍄','🐱','☁️','🌼']},
 '6':{img:'images/lesson6.jpg',bg:'#a02c6b',icon:'🌷',pics:['🌷','🧑‍🏫','🎨','🙏','🐸','🍄','🍃','🐵']},
 '7':{img:'images/lesson7.jpg',bg:'#2f6d2b',icon:'🐢',pics:['🐢','🐰','🏁','💤','🎵','🐌','🌺','🌳']},
 '8':{img:'images/lesson8.jpg',bg:'#8c5a14',icon:'🥕',pics:['🥕','🐘','🐂','🐰','🐱','☀️','🐛','🌱']},
 '9':{img:'images/lesson9.jpg',bg:'#5a2a96',icon:'🎉',pics:['🎉','🦚','🐸','🥁','🦁','🌙','⭐','🐻']},
 'all':{img:'images/lessonall.jpg',bg:'#2b1a5a',icon:'🏆',pics:['🏆','🐱','🐣','🦫','🎒','🐢','🥕','🎉']}
};
const themeOf=()=>THEMES[lesson.id];
const sceneHtml=()=>themeOf().img?'<img class="sceneimg" src="'+themeOf().img+'" alt="">':'<div class="scene" aria-hidden="true">'+themeOf().pics.slice(0,5).map(p=>'<span>'+p+'</span>').join('')+'</div>';
const SLOTS=[[2,17],[92,17],[2,46],[92,42],[5,88],[89,86],[28,94],[62,94]];
const decorHtml=()=>'<div class="decor" aria-hidden="true">'+themeOf().pics.map((p,n)=>'<span style="left:'+SLOTS[n][0]+'%;top:'+SLOTS[n][1]+'%">'+p+'</span>').join('')+'</div>';
function applyTheme(){document.body.style.setProperty('--k-bg',themeOf().bg)}
function burst(){
  const stage=document.querySelector('.stage');if(!stage)return;
  const b=document.createElement('div');b.className='burst';b.setAttribute('aria-hidden','true');
  b.innerHTML=themeOf().pics.slice(0,6).map((p,n)=>'<span style="left:'+(10+n*15)+'%;animation-delay:'+(n*.06)+'s">'+p+'</span>').join('');
  stage.appendChild(b);
  gTimers.push(setTimeout(()=>b.remove(),1300));
}
const LIVE_SECONDS=30;
const SHAPES=['▲','◆','●','■'];
const duoHtml=ch=>'<span class="duo-line">'+ch.map(zyHan).join('')+'</span>';
const emojiHtml=p=>'<span class="emoji">'+p+'</span>';
function liveBuild(l){
  const voc=lessonVoc(),count=l.id==='all'?15:10;
  const picks=n=>shuffle(voc).slice(0,n);
  const fourFor=w=>shuffle([w,...shuffle(voc.filter(v=>v!==w)).slice(0,3)]);
  const makers={
    picZy(){const w=picks(1)[0],o=fourFor(w);return {prompt:'<span class="pic" role="img" aria-label="'+w.c+'">'+w.p+'</span>',say:w.c,opts:o.map(zyw),good:o.indexOf(w)}},
    zyPic(){const w=picks(1)[0],o=fourFor(w);return {prompt:'<span class="word">'+zyw(w)+'</span>',opts:o.map(v=>emojiHtml(v.p)),labels:o.map(v=>v.c),good:o.indexOf(w)}},
    charZy(){const w=picks(1)[0],o=fourFor(w);return {prompt:'<span class="pic" role="img" aria-label="'+w.c+'">'+w.p+'</span><span class="word" data-noz>'+w.c+'</span>',say:w.c,opts:o.map(zyw),good:o.indexOf(w)}},
    duoPic(){const w=picks(1)[0],o=fourFor(w);return {prompt:duoHtml(w.ch),say:w.c,opts:o.map(v=>emojiHtml(v.p)),labels:o.map(v=>v.c),good:o.indexOf(w)}},
    listen(){const pool=l.sym.filter(x=>x[1]),t=take(pool,1)[0],o=shuffle([t[0],...take(l.sym.map(x=>x[0]).filter(s=>s!==t[0]),3)]);return {prompt:'',say:t[1],mustListen:true,opts:o,good:o.indexOf(t[0])}},
    sentPic(){const s=take(l.sents,1)[0],others=[...new Set([...l.sents.map(x=>x.p),...voc.map(v=>v.p)])].filter(p=>p!==s.p),o=shuffle([s.p,...take(others,3)]);return {prompt:duoHtml(s.ch.flat()),say:sentText(s),opts:o.map(emojiHtml),labels:o,good:o.indexOf(s.p)}}
  };
  const names=Object.keys(makers),out=[];
  let bag=[];
  while(out.length<count){if(!bag.length)bag=shuffle(names);out.push(makers[bag.pop()]())}
  return out;
}
let live=null;
function liveLobby(){
  stopGame();sheetEl().classList.remove('playing');
  const n=lesson.id==='all'?15:10;
  $('main').innerHTML='<div class="stage klobby">'+decorHtml()+sceneHtml()+'<div class="shapes">'+SHAPES.map((s,k)=>'<span class="kshape'+k+'">'+s+'</span>').join('')+'</div><div class="kbig">注音搶答</div><div class="say">'+lesson.name+' '+lesson.sub+'．共 '+n+' 題</div><button class="kstart" type="button" data-kstart="1">開始</button></div>';
}
function liveStart(){
  live={qs:liveBuild(lesson),i:0,score:0,streak:0,right:0,left:LIVE_SECONDS,locked:false};
  sheetEl().classList.add('playing');
  liveQuestion();
}
function liveQuestion(){
  stopGame();
  const q=live.qs[live.i];live.left=LIVE_SECONDS;live.locked=false;
  const speak=q.say?'<button class="speak" type="button" data-say="'+q.say+'">'+SPEAKER+(q.mustListen?'聽聲音':'念給我聽')+'</button>':'';
  $('main').innerHTML='<div class="stage">'+decorHtml()+'<div class="khead"><button class="kexit" type="button" data-kexit="1">離開</button><span>第 '+(live.i+1)+' 題／共 '+live.qs.length+' 題</span><span class="kscore" id="kscore">'+live.score+'</span></div><div class="ktimer"><i id="kbar"></i></div>'+(q.tag?'<span class="ktag">'+q.tag+'</span>':'')+'<div class="kprompt">'+q.prompt+speak+'</div><p class="hint" id="hint"></p><div class="ktiles">'+q.opts.map((o,n)=>'<button class="ktile k'+n+'" type="button" data-k="'+n+'"'+(q.labels?' aria-label="'+q.labels[n]+'"':'')+'><span class="shape" aria-hidden="true">'+SHAPES[n]+'</span>'+o+'</button>').join('')+'</div><div class="kfb" id="kfb"></div></div>';
  gTimers.push(setInterval(()=>{
    live.left-=.1;
    const bar=$('kbar');if(bar)bar.style.width=Math.max(0,live.left/LIVE_SECONDS*100)+'%';
    if(live.left<=0)liveAnswer(-1);
  },100));
}
function liveAnswer(n){
  if(live.locked)return;
  live.locked=true;stopGame();
  const q=live.qs[live.i],ok=n===q.good;
  document.querySelectorAll('.ktile').forEach((b,k)=>{b.disabled=true;if(k===q.good)b.classList.add('right');else b.classList.add('dim')});
  let text;
  if(ok){
    burst();
    const pts=Math.round(500+500*Math.max(0,live.left)/LIVE_SECONDS)+live.streak*100;
    live.score+=pts;live.right++;live.streak++;
    text='答對了！＋'+pts+' 分'+(live.streak>1?'．連對 '+live.streak+' 題':'');
  }else{live.streak=0;text=n<0?'時間到！':'答錯了，看正確答案。'}
  beep(ok);
  $('kscore').textContent=live.score;
  const last=live.i===live.qs.length-1;
  $('kfb').innerHTML='<p class="say">'+text+'</p><button class="knext" type="button" data-knext="1">'+(last?'看成績':'下一題')+'</button>';
}
function liveEnd(){
  stopGame();
  const total=live.qs.length,max=total*1000;
  const ratio=live.right/total;
  const stars=ratio>=.9?3:ratio>=.6?2:ratio>0?1:0;
  if(stars)addStars(stars);
  const name=$('name').value.trim().replace(/[<>&"]/g,'');
  const rows=[{who:'🧒',label:name||'我',pts:live.score,me:true},{who:'🐱',label:'貓咪',pts:Math.round(max*.62)},{who:'🐰',label:'兔子',pts:Math.round(max*.42)},{who:'🐢',label:'烏龜',pts:Math.round(max*.22)}].sort((a,b)=>b.pts-a.pts);
  const place=rows.findIndex(r=>r.me)+1;
  $('main').innerHTML='<div class="stage klobby">'+decorHtml()+'<div class="kbig">排行榜</div><div class="say">第 '+place+' 名．答對 '+live.right+' 題，共 '+total+' 題'+(stars?'．拿到 '+stars+' 顆星 '+'⭐'.repeat(stars):'')+'</div><div class="board">'+rows.map((r,k)=>'<div class="brow'+(r.me?' me':'')+'"><span class="rank">'+(k+1)+'</span><span class="who" aria-hidden="true">'+r.who+'</span><span>'+r.label+'</span><span class="pts">'+r.pts+'</span></div>').join('')+'</div><button class="kstart" type="button" data-kstart="1">再玩一次</button><button class="kexit" type="button" data-kexit="1">回到選課</button></div>';
}
const GAME_GOAL=8;
const sayBtn=w=>'<button class="speak" type="button" data-say="'+w.c+'">'+SPEAKER+'聽一聽</button>';
const gamePrompt=w=>'<span class="pic" role="img" aria-label="'+w.c+'">'+w.p+'</span>'+sayBtn(w);
const countText=n=>'⭐ '+n+'／'+GAME_GOAL;
const arenaHtml=(title,inner)=>gameTop(title)+'<div class="ask slim" id="gprompt"></div><p class="hint" id="hint"></p><p class="hint" id="gcount">'+countText(0)+'</p><div class="arena" id="arena" style="background-image:url('+themeOf().img+')">'+inner+'</div>';
function pickTarget(game){
  const voc=lessonVoc();
  game.target=take(voc.filter(v=>v!==game.target),1)[0];
  $('gprompt').innerHTML=gamePrompt(game.target);
  say(game.target.c);
}
function spawnWord(game){
  const voc=lessonVoc();
  const hasTarget=game.items.some(it=>it.w===game.target);
  const used=game.items.map(it=>it.w);
  return !hasTarget?game.target:(take(voc.filter(v=>!used.includes(v)&&v!==game.target),1)[0]||take(voc,1)[0]);
}
// 魔法泡泡：泡泡往上飄，點對的注音，魔法棒就射出星星。
let bub=null;
function startBubble(){
  stopGame();
  bub={hits:0,items:[],target:null,tick:0,n:0,lanes:0};
  $('main').innerHTML=arenaHtml('魔法泡泡','<span class="wand" aria-hidden="true">🪄</span>');
  const a=$('arena');
  bub.lanes=a.clientWidth<520?3:4;
  pickTarget(bub);
  for(let k=0;k<bub.lanes;k++)spawnBubble(a.clientHeight*(.45+k*.3));
  gTimers.push(setInterval(stepBubble,33));
}
function spawnBubble(y){
  const a=$('arena');if(!a)return;
  const w=spawnWord(bub),size=a.clientWidth/bub.lanes;
  const lane=bub.n++%bub.lanes;
  const el=document.createElement('button');
  el.type='button';el.className='bubble';el.dataset.bub=String(bub.n);
  el.innerHTML=zyw(w);
  el.style.width=Math.min(size-8,124)+'px';el.style.height=Math.min(size-8,124)+'px';
  el.style.left=(lane*size+(size-Math.min(size-8,124))/2)+'px';
  a.appendChild(el);
  const it={id:String(bub.n),w,el,y,busy:false};
  el.style.transform='translateY('+y+'px)';
  bub.items.push(it);
}
function stepBubble(){
  const a=$('arena');if(!a||!bub)return;
  bub.tick++;
  bub.items.slice().forEach(it=>{
    if(it.busy)return;
    it.y-=1.1;
    it.el.style.transform='translateY('+it.y+'px)';
    if(it.y<-130){it.el.remove();bub.items=bub.items.filter(x=>x!==it)}
  });
  if(bub.tick%70===0&&bub.items.length<bub.lanes+1)spawnBubble(a.clientHeight);
  if(!bub.items.some(it=>it.w===bub.target))spawnBubble(a.clientHeight);
}
function shootBubble(b){
  const it=bub.items.find(x=>x.id===b.dataset.bub);if(!it||it.busy)return;
  const a=$('arena'),box=a.getBoundingClientRect(),r=b.getBoundingClientRect();
  const star=document.createElement('span');
  star.className='shot';star.textContent='⭐';star.setAttribute('aria-hidden','true');
  a.appendChild(star);
  const x=r.left-box.left+r.width/2-16,y=r.top-box.top+r.height/2-16;
  star.style.transform='translate('+(box.width/2-16)+'px,'+(box.height-50)+'px)';
  star.getBoundingClientRect();
  star.style.transform='translate('+x+'px,'+y+'px)';
  it.busy=true;
  gTimers.push(setTimeout(()=>{
    star.remove();
    if(!$('arena'))return;
    if(it.w===bub.target){
      beep(true);bub.hits++;
      it.el.classList.add('popped');
      gTimers.push(setTimeout(()=>it.el.remove(),220));
      bub.items=bub.items.filter(q=>q!==it);
      $('gcount').textContent=countText(bub.hits);
      if(bub.hits>=GAME_GOAL){gameWin('bubble',3,'泡泡全部射中了！');return}
      pickTarget(bub);
    }else{
      beep(false);it.busy=false;
      it.el.classList.add('bad');
      gTimers.push(setTimeout(()=>it.el.classList.remove('bad'),350));
    }
  },190));
}
// 小貓接星星：移動小貓，接住對的注音，接錯也不扣分。
let ctc=null;
function startCatch(){
  stopGame();
  ctc={hits:0,items:[],target:null,tick:0,x:.5};
  $('main').innerHTML=arenaHtml('小貓接星星','<span class="catcher" id="catcher" aria-hidden="true">🐱</span>')+'<div class="movebtns"><button class="gback" type="button" data-move="-1" aria-label="往左">◀</button><button class="gback" type="button" data-move="1" aria-label="往右">▶</button></div>';
  const a=$('arena');
  const follow=e=>{const r=a.getBoundingClientRect();ctc.x=Math.max(.06,Math.min(.94,(e.clientX-r.left)/r.width));drawCat()};
  a.addEventListener('pointerdown',follow);
  a.addEventListener('pointermove',follow);
  pickTarget(ctc);
  drawCat();
  spawnFalling();
  gTimers.push(setInterval(stepCatch,33));
}
function drawCat(){const c=$('catcher');if(c)c.style.left=(ctc.x*100)+'%'}
function spawnFalling(){
  const a=$('arena');if(!a)return;
  const w=spawnWord(ctc);
  const el=document.createElement('span');
  el.className='fallstar';el.innerHTML=zyw(w);
  const x=.12+Math.random()*.76;
  el.style.left=(x*100)+'%';
  a.appendChild(el);
  ctc.items.push({w,el,x,y:-90});
}
function catchItem(it){
  it.el.remove();
  ctc.items=ctc.items.filter(q=>q!==it);
  if(it.w===ctc.target){
    beep(true);ctc.hits++;
    $('gcount').textContent=countText(ctc.hits);
    if(ctc.hits>=GAME_GOAL){gameWin('catch',3,'全部接到了！');return}
    pickTarget(ctc);
  }else beep(false);
}
function stepCatch(){
  const a=$('arena');if(!a||!ctc)return;
  ctc.tick++;
  const h=a.clientHeight;
  ctc.items.slice().forEach(it=>{
    it.y+=1.3;
    it.el.style.transform='translate(-50%,'+it.y+'px)';
    if(it.y>h-150&&Math.abs(it.x-ctc.x)<.17){catchItem(it);return}
    if(it.y>h){it.el.remove();ctc.items=ctc.items.filter(q=>q!==it)}
  });
  if(ctc.tick%85===0&&ctc.items.length<4)spawnFalling();
  if(!ctc.items.some(it=>it.w===ctc.target)&&ctc.tick%20===0)spawnFalling();
}
// 我的小花園：答對就挑一張貼紙，自己決定放在哪裡。
const STICKERS=['🌷','🌻','🌸','🦋','🐰','🐱','🐣','🍄','🌈','🏠','⭐','🎀','🧁','🐝','🐞','🌳','🪁','🐶'];
let gd=null;
const loadGarden=()=>{try{const v=JSON.parse(store.get('garden')||'[]');return Array.isArray(v)?v:[]}catch(e){return []}};
function drawGarden(){
  const g=$('garden');if(!g)return;
  g.innerHTML=gd.list.map(s=>'<span class="sticker" aria-hidden="true" style="left:'+s.x+'%;top:'+s.y+'%">'+s.e+'</span>').join('');
}
function startGarden(){
  stopGame();
  gd={list:loadGarden(),w:null,sticker:null,placed:0};
  $('main').innerHTML=gameTop('我的小花園')+'<div class="garden" id="garden" role="img" aria-label="花園"></div><div id="gstep"></div><button class="gback" type="button" data-greset="1">重新布置</button>';
  $('garden').addEventListener('click',placeSticker);
  drawGarden();
  gardenQuestion();
}
function gardenQuestion(){
  gd.sticker=null;
  const voc=lessonVoc();
  const w=take(voc.filter(v=>v!==gd.w),1)[0];gd.w=w;
  const opts=shuffle([w,...take(voc.filter(v=>v!==w),2)]);
  gd.opts=opts;
  $('gstep').innerHTML='<div class="ask slim gardenask">'+gamePrompt(w)+'</div><p class="hint" id="hint"></p><div class="opts three">'+opts.map((o,n)=>'<button class="cell" type="button" data-gq="'+n+'">'+zyw(o)+'</button>').join('')+'</div>';
}
function gardenPick(){
  $('gstep').innerHTML='<p class="say ok">答對了！挑一張貼紙。</p><div class="opts three">'+take(STICKERS,3).map(e=>'<button class="cell emoji" type="button" data-gs="'+e+'">'+e+'</button>').join('')+'</div>';
}
function placeSticker(e){
  if(!gd||!gd.sticker)return;
  const r=e.currentTarget.getBoundingClientRect();
  gd.list.push({e:gd.sticker,x:Math.round((e.clientX-r.left)/r.width*100),y:Math.round((e.clientY-r.top)/r.height*100)});
  if(gd.list.length>40)gd.list.shift();
  store.set('garden',JSON.stringify(gd.list));
  drawGarden();beep(true);
  gd.placed++;
  if(gd.placed%5===0){addStars(1)}
  gardenQuestion();
}
function renderModes(){}
const ACTS=[
  {act:'quiz',icon:'📝',h:'注音考題',p:'一題一題慢慢做。',first:true},
  {act:'live',icon:'⏱️',h:'注音搶答',p:'答得越快，分數越高。'},
  {act:'game',icon:'🎮',h:'注音小遊戲',p:'玩一玩，把注音記牢。'}
];
const lessonLabel=l=>l.id==='all'?'期中測驗':l.name+' '+l.sub;
function showView(id){['homeview','lessonview','playview'].forEach(v=>{$(v).hidden=v!==id})}
function renderHome(){
  const cards=LESSONS.map(l=>{
    const best=store.get('best-'+l.id);
    const href=l.id==='all'?'#exam':'#lesson/'+l.id;
    return '<li'+(l.id==='all'?' class="examcard"':'')+'><a href="'+href+'"><img src="'+THEMES[l.id].img+'" alt="" loading="lazy"><span class="ltext"><span class="lname">'+(l.id==='all'?'期中測驗':l.name)+'</span><span class="lsub">'+(l.id==='all'?'九課混在一起考':l.sub)+'</span><span class="lbest">'+(best!==null?'最高 '+best+' 分':'還沒做')+'</span></span></a></li>';
  });
  $('lessongrid').innerHTML=cards.join('');
}
function renderLesson(){
  $('lessonimg').src=themeOf().img;
  $('lessontitle').textContent=lessonLabel(lesson);
  $('actlist').innerHTML=ACTS.map(a=>'<li'+(a.first?' class="first"':'')+'><a href="#lesson/'+lesson.id+'/'+a.act+'"><span class="acticon" aria-hidden="true">'+a.icon+'</span><span class="acttext"><span class="actname">'+a.h+'</span><span class="actsub">'+a.p+'</span></span>'+(a.first?'<span class="badge">先做這個</span>':'')+'</a></li>').join('');
}
function route(){
  stopGame();document.body.classList.remove('playing');
  const parts=location.hash.slice(1).split('/');
  const found=LESSONS.find(l=>l.id===parts[1]&&l.id!=='all');
  updateStars();
  if(parts[0]==='exam'){
    page='exam';mode='quiz';showView('playview');
    $('playback').href='#home';$('playback').textContent='← 全部課程';
    $('playtitle').textContent='期中測驗';
    start(LESSONS.find(l=>l.id==='all'));
    return;
  }
  if(parts[0]==='lesson'&&found){
    lesson=found;applyTheme();
    const act=ACTS.find(a=>a.act===parts[2]);
    if(!act){page='lesson';showView('lessonview');renderLesson();return}
    page=act.act;mode=act.act;showView('playview');
    $('playback').href='#lesson/'+lesson.id;$('playback').textContent='← '+lesson.name;
    $('playtitle').textContent=act.h;
    start(lesson);
    return;
  }
  page='home';showView('homeview');renderHome();
}
window.addEventListener('hashchange',()=>{route();window.scrollTo(0,0)});
$('main').addEventListener('click',e=>{
  const b=e.target.closest('button');if(!b||b.disabled)return;
  if(b.dataset.kstart){liveStart();return}
  if(b.dataset.kexit){liveLobby();return}
  if(b.dataset.k!==undefined){liveAnswer(Number(b.dataset.k));return}
  if(b.dataset.knext){if(live.i===live.qs.length-1){sheetEl().classList.remove('playing');liveEnd()}else{live.i++;liveQuestion();$('main').scrollIntoView({block:'start'})}return}
  if(b.dataset.bub!==undefined){shootBubble(b);return}
  if(b.dataset.move!==undefined){ctc.x=Math.max(.06,Math.min(.94,ctc.x+Number(b.dataset.move)*.16));drawCat();return}
  if(b.dataset.gq!==undefined){
    if(gd.opts[Number(b.dataset.gq)]===gd.w){beep(true);gardenPick()}
    else{beep(false);b.classList.add('bad');b.disabled=true}
    return;
  }
  if(b.dataset.gs!==undefined){
    gd.sticker=b.dataset.gs;
    $('gstep').innerHTML='<p class="say ok">點花園，把 '+gd.sticker+' 放上去。</p>';
    return;
  }
  if(b.dataset.greset){gd.list=[];store.set('garden','[]');drawGarden();return}
  if(b.dataset.gback){gameMenu();return}
  if(b.dataset.game){document.body.classList.add('playing');window.scrollTo(0,0);({memory:startMemory,mole:startMole,race:startRace,bubble:startBubble,catch:startCatch,garden:startGarden})[b.dataset.game]();return}
  if(b.dataset.card!==undefined){flipCard(b);return}
  if(b.dataset.hole!==undefined){hitMole(b);return}
  if(b.dataset.race!==undefined){answerRace(b);return}
  if(b.id==='molesay')say(mo.target[1]);
});
const sheet=document.querySelector('.app');
annotate(sheet);
new MutationObserver(()=>annotate(sheet)).observe(sheet,{childList:true,subtree:true});
route();
