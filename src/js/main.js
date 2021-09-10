importClass(android.content.Intent);
importClass(android.net.Uri)
importClass(android.os.PowerManager)
importPackage(android.widget)
importPackage(android.graphics)

/**
 * 山海 自动采集识别版本 安卓7.0+
 */

/** /////////////////////////////////////////////数据定义////////////////////////////////////////////////////////////// */
/**
 * 坐标数据
 * @type {{BoxEnd: [string, number, number], qLonIn: [string, number, number], agree: [string, number, number], login: [string, string, number, number], menu: [string, string, number, number], clossAlert: [string, number, number], loginButtn: [string, number, number], slideEnd: [string, number, number], home: [string, number, number], BoxSrart: [string, number, number], getInto: [string, number, number], slide: [string, number, number], weiChar: [string, string, number, number], TheBallSearch: [string, number, number], giftBag: [string, string, number, number], login2: [string, string, number, number], Directionalsearch: [string, number, number]}}
 */
const XY = {
    agree: ["agree", 611, 824], // 同意协议 |874|
    login: ["login", "0x5A9E94-0x101010", 981, 835, 1274, 916], // 登录按钮
    login2: ["login2", "0xCDD9EE-0x101010", 2036, 24, 2213, 116], // 登录按钮
    loginButtn: ["loginButtn", 1254, 889], // 登录按钮
    qLonIn: ["qLonIn", 856, 732], // qq 登录按钮
    getInto: ["getInto", 1902, 954], // 进入游戏按钮
    weiChar: ["weiChar", "0x56A262-0x101010", 1300, 642, 1486, 738], // 微信图标
    giftBag: ["giftBag", "0xFE8F00-0x101010", 1892, 59], // 礼包按钮 2132|42|
    slide: ["slide", 1733, 223], // 开始滑动
    slideEnd: ["slideEnd", 1685, 805], // 结束滑动
    slideGoods: ["slideGoods", 1234, 773], // 开始滑动物品
    slideEndGoods: ["slideEndGoods", 1239, 319], // 结束滑动物品
    home: ["home", 585, 1007], // 主页按钮
    TheBallSearch: ["TheBallSearch", 629, 431], // 球形搜索
    Directionalsearch: ["Directionalsearch", 912, 470], // 定向搜索
    BoxSrart: ["BoxSrart", 563, 302], // 定向搜索框
    BoxEnd: ["BoxEnd", 1700, 905], // 定向搜索框
    search: ["search", 1216, 880], // 搜索按钮 1231|897|0x9B9B9B
    searchColour: ["searchColour", "0x5A9E95-0x101010", 1162, 855,1327,901], // 搜索按钮 颜色
    giftBag: ["giftBag", "0xFE8F00-0x101010", 1892, 59], // 礼包按钮 2132|42|
    quickSearch: ["quickSearch", 973, 623], // 快捷搜索
    speedUp: ["speedUp", 2093, 654], // 加速移动
    success: ["success", "0x8CB9E2-0x101010", 1202, 268], // 登录按钮2 |881|
    gather: ["gather", 1579, 599], // 采集按钮a
    diaoyu: ["diaoyu", 1916, 778], // 拉起钓鱼按钮
    attack: ["attack", 1927, 792], // 攻击按钮
    jump: ["jump", 2084, 815], // 跳跃按钮
    // family
    family: ["family", 2050, 762], // 家园复活
    death: ["death", "0xF7F7FF-0x101010", 2032, 958], // 死亡
    tiansu: ["tiansu", 2012, 946], // 天枢复活
    menuBut: ["menuBut", 2132, 42], // 游戏菜单按钮
    beDivorced: ["beDivorced", 2007, 913], // 脱离卡死按钮
    food: ["food", 1898, 224], // 食物按钮
    oneFood: ["oneFood", 1596, 337], // 第一格食物

}
const url = "http://82.156.63.20:9092/game/verificationKey"
/**
 * 物品数据
 * @type {{cangyu: *}}
 */
const goods = {
    /**
     * 矿产类
     */
    "cangyu": ["chanwu", "kuangwu", "cangyu", 0],// 0 不需要下滑
    "yaoyu": ["chanwu", "kuangwu", "yaoyu", 1], // 1 需要下滑X
    "xuanyu": ["chanwu", "kuangwu", "xuanyu", 1], // 1 需要下滑
    "xuanyuX": ["chanwu", "kuangwu", "xuanyuX", 3], // 1 需要下滑
    "yanyu": ["chanwu", "kuangwu", "yanyu", 2], // 1 需要下滑
    "jingyu": ["chanwu", "kuangwu", "jingyu", 3], // 1 需要下滑
    "huangshi": ["chanwu", "kuangwu", "huangshi", 0], // 1 需要下滑
    "tie": ["chanwu", "kuangwu", "tie", 0], // 1 需要下滑
    "tong": ["chanwu", "kuangwu", "tong", 0], // 1 需要下滑
    "ying": ["chanwu", "kuangwu", "ying", 0], // 1 需要下滑
    "bin": ["chanwu", "kuangwu", "bin", 0], // 1 需要下滑
    "guyeguo": ["chanwu", "shumu", "guyeguo", 0],
    /**
     * 药品类
     */
    "mangcao": ["chanwu", "caoyao", "mangcao", 0],
    "longgu": ["chanwu", "caoyao", "longgu", 0],
    "pihua": ["chanwu", "caoyao", "pihua", 1],
    "soupi": ["chanwu", "dongwu", "soupi", 0],
    /**
     * 果蔬
     */
    "pingguo": ["chanwu", "guosu", "pingguo", 0],
    "lajiao": ["chanwu", "guosu", "lajiao", 0],

}
/**
 * 快捷搜索
 * @type {boolean}
 */
let quickSearch = false;
/**
 * 判断未知原因卡死页面数
 * @type {number}
 */
let notDetectedPage = 0;
/**
 * 当前程序运行状态
 * 防止识别到页面识别错误的卡死
 * @type {number}
 */
const runStatus = {
    "pageTest": 0, // 页面检测数
    "successNum": 0, // 采集成功数
}
/**
 * 进入游戏时候返回初始点
 * 用于判断卡死关闭
 * @type {boolean}
 */
let isInit = false;

/**
 * 当前悬浮窗tag
 * @type {string}
 */
let tag = "1";

/** /////////////////////////////////////////////方法定义////////////////////////////////////////////////////////////// */

/**
 * 判断电量是否达到设置
 * 没达到 暂停脚本冲电
 */
function isQe() {
    // 判断当前电量
    let qe = device.getBattery();
    // 拿到脚本设置电量
    const endQe = Number(readConfigString("endQe"))
    const startQe = Number(readConfigString("startQe"))
    let i = 0;
    if (qe < endQe) {
        // 关闭App等待
        clossApp()
        // 暂停充电
        device.keepScreenDim();
        while (i == 0) {
            toast("电量不足暂停10分钟")
            sleep(600000)
            let qe1 = device.getBattery();
            if (qe1 > startQe) {
                i = 1;
            }
        }
    }

}

/**
 * 关闭app
 */
function clossApp() {
    // 打开详情页面
    utils.openActivity({
        "action": "android.settings.APPLICATION_DETAILS_SETTINGS",
        "uri": "package:" + "com.tencent.tmgp.djsy"
    });
    sleep(2000)
    var selector = textMatch(".*强.*|.*停.*|.*结.*|.*行.*");
    click(selector);
    sleep(2000)
    var selector2 = textMatch(".*确定.*");
    var result2 = click(selector2);
    if (result2) {
        toast("关闭成功");
    }
    sleep(3000)
}

/**
 * 打开app
 * @param user
 */
function openApp() {
    setCurrentStatus("正在打开应用")
    // 打开app
    let isOpen = utils.openApp("com.tencent.tmgp.djsy");
    let isOpen2 = utils.openAppByName("妄想山海");
    sleep(1000)
    if (!isOpen || !isOpen2) {
        toast("打开失败,正在重试")
        utils.openApp("com.tencent.tmgp.djsy");
        utils.openAppByName("妄想山海");
        sleep(1000)
    }
    toast("等待8秒")
    sleep(8000);
}

/**
 *
 * 根据某一个真机分辨率计算出因数,从而计算出点击位置
 * @param name 区分保存的分辨率比例
 * @param realX
 * @param realY
 */
function getAutoXY(name, realX, realY) {
    // 拿到对应数据
    // 获取屏幕高度宽度
    let width = device.getScreenWidth();
    let height = device.getScreenHeight();
    // 拿到比例获取对应的坐标点
    let x = getScale(name, realX, "x", width, height) * width / 10
    let y = getScale(name, realY, "y", width, height) * height / 10
    return [x, y]
}

/**
 * 全屏幕寻找色
 * return {x,y}
 */
function packFindColorEx(xyData) {
    // 获取对应分辨率的坐标
    let xy = getAutoXY(xyData[0] + "start", xyData[2], xyData[3])
    let xy2 = getAutoXY(xyData[0] + "end", xyData[4], xyData[5])
    sleep(3000)
    // 获取开始按钮颜色
    let points = image.findColorEx(xyData[1], 0.5, xy[0], xy[1], xy2[0], xy2[1], 1, 1);
    if (points) {
        return points
    }


}

/**
 * 输入文字点击
 * @param str
 */
function clickText(str) {
    var result = getOneNodeInfo(text(str), 10 * 1000);
    if (result) {
        let status = result.click();
        if (status) {
            // 在利用坐标点击一次，防止控件没有点击成功
            let info = JSON.parse(result)
            let x = info.bounds.left + random(1, 8)
            let y = info.bounds.top + random(1, 8)
            clickPoint(x, y);
            return true
        }
    }
    return false;
}

/**
 * 获取分辨率比例
 * @param name 坐标名称 区分
 * @param num 坐标点
 * @param type 坐标类型  x:y
 * @param width  当前设备宽
 * @param height  高
 * @returns {number} 返回当前计算后的比例  所有手机保持相同比例实现全分辨率执行
 */
function getScale(name, num, type, width, height) {

    // 计算后保存对于坐标点比例
    let data = readResString("xy.json");
    data = JSON.parse(data)
    let dataKey = name + "_" + type
    // 判断是否是计算比例的手机
    if (width !== 2280 || height !== 1080) {
        // 不是测试手机必须使用比例
        if (data[dataKey]) {
            return data[dataKey];
        }
        toast("当前不存在对应屏幕比例")
        // throw Error("当前不存在对应屏幕比例")
    }
    // 创建
    file.create("/sdcard/xy.json");
    let data2 = file.readFile("/sdcard/xy.json");
    data2 = JSON.parse(data2)
    let numXy;
    if (type === "x") {
        numXy = num * 10 / width
    }
    if (type === "y") {
        numXy = num * 10 / height
    }
    // 保存数据
    data2[dataKey] = numXy
    // 写入
    file.writeFile(JSON.stringify(data2), "/sdcard/xy.json");
    return numXy
}

/**
 * 自动找图
 * @param name
 * x:left   y:bottom
 * @returns boolean
 */
function findImage(name) {
    let width = device.getScreenWidth();
    let height = device.getScreenHeight();
    //申请完权限等1s再截图,否则会截不到图
    sleep(1000)
    //从工程目录下res文件夹下读取sms.png文件
    var sms = readResAutoImage(name + ".png");
    // 动态获取坐标点
    //在当前屏幕中查找，并且限制只查找一个
    var points = image.findImageEx(sms,
        width - width / 2, 0, width, height,
        0.1, 1);
    //这玩意是个数组
    if (points) {
        let goods = points[0];
        return {
            "x": goods.left,
            "y": goods.bottom
        };
    }
    return false

}

/**
 * 自动找图 - 屏幕右边
 * @param name
 * x:left   y:bottom
 * @returns boolean
 */
function findImgR(name) {
    let width = device.getScreenWidth();
    let height = device.getScreenHeight();
    //申请完权限等1s再截图,否则会截不到图
    sleep(1000)
    //从工程目录下res文件夹下读取sms.png文件
    var sms = readResAutoImage(name + ".png");
    // 动态获取坐标点
    //在当前屏幕中查找，并且限制只查找一个
    var points = image.findImageEx(sms,
        0 , 0, width, height,
        0.1, 1);
    //这玩意是个数组
    if (points) {
        return true
    }
    return false

}

/**
 * 关闭app重新打开
 */
function clossAppReOpen() {
    clossApp()
    // 默认执行
    openApp();
    // 重新进入以后直接执行返回中枢
    isInit = true
}

/**
 * 查询方法传入配置物品返回坐标
 * @param goods
 * @returns {多个Point|null}
 */
function find(goods) {
    setCurrentStatus("正在查找物品")
    // 获取屏幕高度宽度
    let width = device.getScreenWidth();
    let height = device.getScreenHeight();
    let points = null;
    // 判断是否是狩猎
    let mod = Number(readConfigString("mod"))
    // 狩猎
    if (mod == 2) {
        points = image.findMultiColorEx("0x5A4A4A-0x101010", "10|1|0x353136-0x101010,16|0|0x7D788F-0x101010,19|0|0x8B8198-0x101010,23|0|0x675A5F-0x101010,23|7|0x69606D-0x101010,13|5|0xA695A1-0x101010,-26|41|0x111010-0x101010,-10|25|0xA77474-0x101010,2|33|0xBF9C95-0x101010,20|44|0x7D5353-0x101010,19|48|0xD7D7E7-0x101010", 0.9, 10, 10, width, height, 10, 1);
    }
    if (goods[2] == "cangyu") {
        points = image.findMultiColorEx("0xC77239-0x101010",
            "5|1|0xBB6331-0x101010,7|1|0xC36734-0x101010,9|0|0xB3561D-0x101010,12|0|0xC76B20-0x101010,15|0|0xF0D289-0x101010,19|1|0xF7F5DC-0x101010,23|1|0xDFD08F-0x101010,25|1|0xE3D49D-0x101010,-2|14|0xB2652F-0x101010,1|14|0xDCAC64-0x101010,3|14|0xE0D595-0x101010,6|14|0xF9F8E6-0x101010,10|14|0xEFEAC2-0x101010,12|14|0xD6CC99-0x101010,7|10|0xF6ECC9-0x101010", 0.9, 10, 10, width, height, 10, 1);
    }
    if (goods[2] == "yaoyu") {
        points = image.findMultiColorEx("0xD1BA2E-0x101010", "7|0|0xE4D181-0x101010,18|1|0xA66E19-0x101010,18|8|0xA36516-0x101010,7|20|0x7D4308-0x101010,-6|19|0xE2C964-0x101010,-11|13|0xE0D296-0x101010,1|8|0xE3C84D-0x101010,-14|23|0xD9BC69-0x101010,-19|31|0x764C1B-0x101010,-3|33|0x824D18-0x101010,-14|37|0x8D5724-0x101010", 0.9, 10, 10, width, height, 10, 1);
    }
    if (goods[2] == "guyeguo") {
        points = image.findMultiColorEx("0x7F981A-0x101010", "16|1|0xA5C437-0x101010,19|1|0x99B632-0x101010,24|14|0x8BA604-0x101010,-4|16|0x849A08-0x101010,8|11|0xA0C314-0x101010,9|18|0xAABA1F-0x101010,-3|28|0x5B7604-0x101010,23|27|0x898E08-0x101010,-7|35|0x232C03-0x101010,8|42|0x202900-0x101010", 0.9, 10, 10, width, height, 10, 1);
    }
    if (goods[2] == "mangcao") {
        points = image.findMultiColorEx("0xD19E2A-0x101010", "3|3|0xD65617-0x101010,6|6|0xF10C00-0x101010,11|-1|0xF72E1A-0x101010,19|2|0xFF2400-0x101010,20|-7|0xFEF954-0x101010,24|4|0xF0671C-0x101010,15|18|0x596F52-0x101010,28|15|0xFF0D28-0x101010,-14|42|0x96EABD-0x101010", 0.9, 10, 10, width, height, 10, 1);
    }
    if (goods[2] == "xuanyu") {
        points = image.findMultiColorEx("0x703214-0x101010", "3|1|0x773715-0x101010,4|-6|0x956705-0x101010,19|-4|0xB46E02-0x101010,30|-9|0xBB9F4B-0x101010,37|-1|0xCFAC58-0x101010,28|-2|0xE5D6B5-0x101010,22|0|0xBC7004-0x101010,0|28|0x702D17-0x101010,15|18|0xAE6C00-0x101010,21|32|0x864621-0x101010", 0.9, 10, 10, width, height, 10, 1);
    }
    if (goods[2] == "xuanyuX") {
        points = image.findMultiColorEx("0xDEB32A-0x101010", "6|0|0xF0CA29-0x101010,13|0|0xF4C830-0x101010,20|-1|0xE4BC1B-0x101010,26|2|0xE9B925-0x101010,24|14|0xDAA003-0x101010,14|10|0xFFF6DF-0x101010,3|11|0xFCEEDA-0x101010,-9|25|0xA55505-0x101010,5|38|0x9D580F-0x101010,19|34|0xA55F07-0x101010,5|47|0x843D02-0x101010", 0.9, 10, 10, width, height, 10, 1);
    }
    if (goods[2] == "yanyu") {
        points = image.findMultiColorEx("0xD6AD63-0x101010", "19|-5|0xCF7F11-0x101010,28|1|0xF7D664-0x101010,33|14|0xF0DF80-0x101010,15|36|0xA46216-0x101010,0|43|0x4F2415-0x101010,-19|25|0xCFA75A-0x101010,5|20|0xB35215-0x101010,12|11|0x793A15-0x101010,21|8|0x2D1A13-0x101010", 0.9, 10, 10, width, height, 10, 1);
    }
    if (goods[2] == "jingyu") {
        points = image.findMultiColorEx("0xF5EEE1-0x101010", "12|1|0xEEEDCF-0x101010,21|1|0xEDCE74-0x101010,26|1|0xF1BD39-0x101010,23|14|0xB0620A-0x101010,9|14|0xF1B307-0x101010,1|14|0xD5973D-0x101010,-8|14|0xEEDEC6-0x101010,-18|27|0xCD7902-0x101010,-4|28|0xC06601-0x101010,6|29|0xD6A25C-0x101010,-4|49|0x6A3300-0x101010", 0.9, 10, 10, width, height, 10, 1);
    }
    if (goods[2] == "huangshi") {
        points = image.findMultiColorEx("0x735732-0x101010", "10|-3|0x947D5A-0x101010,21|-3|0xA28151-0x101010,32|2|0xA29068-0x101010,34|13|0xB2975E-0x101010,3|15|0x312914-0x101010,3|26|0x5C4719-0x101010,12|27|0x635A3F-0x101010,20|27|0x0F0A04-0x101010,44|32|0xCBBD8B-0x101010", 0.9, 10, 10, width, height, 10, 1);
    }
    if (goods[2] == "tie") {
        points = image.findMultiColorEx("0x46464D-0x101010", "5|0|0x5E5E6C-0x101010,9|0|0x727279-0x101010,13|0|0x818181-0x101010,20|0|0x4A4755-0x101010,20|12|0x393545-0x101010,11|13|0x777777-0x101010,4|13|0x7D7D93-0x101010,-6|14|0x414451-0x101010,4|28|0x514B4C-0x101010,28|29|0x68606E-0x101010", 0.9, 10, 10, width, height, 10, 1);
    }
    if (goods[2] == "tong") {
        points = image.findMultiColorEx("0x7199A4-0x101010", "13|0|0x2A3742-0x101010,24|-4|0xA3B7B7-0x101010,29|-4|0xD8E0E0-0x101010,40|6|0xADD0F3-0x101010,40|26|0x424A59-0x101010,25|16|0x2D2D33-0x101010,9|20|0x121116-0x101010,-5|9|0xC4E2E2-0x101010,17|12|0x576573-0x101010", 0.9, 10, 10, width, height, 10, 1);
    }
    if (goods[2] == "ying") {
        points = image.findMultiColorEx("0x888C7F-0x101010", "7|0|0x949687-0x101010,12|0|0x242424-0x101010,14|14|0xF2F2F2-0x101010,3|15|0x525348-0x101010,-11|26|0x806321-0x101010,-4|35|0xB59447-0x101010,5|35|0x553802-0x101010,10|37|0x9E5725-0x101010,19|32|0x6E6E56-0x101010", 0.9, 10, 10, width, height, 10, 1);
    }
    if (goods[2] == "bin") {
        points = image.findMultiColorEx("0x384A61-0x101010", "0|2|0x415365-0x101010,-3|2|0x4A6076-0x101010,4|4|0x405364-0x101010,8|5|0x586F83-0x101010,15|25|0x374E61-0x101010,19|23|0x3F5269-0x101010,1|17|0xABC2D3-0x101010,0|15|0xB2C9DA-0x101010,-9|19|0x7A8BA0-0x101010,-5|18|0x5E6D7D-0x101010,38|-31|0xBCD5E6-0x101010", 0.9, 10, 10, width, height, 10, 1);
    }
    if (goods[2] == "longgu") {
        points = image.findMultiColorEx("0xA2CA71-0x101010", "-10|6|0x80A82D-0x101010,-13|14|0xA2C970-0x101010,-10|19|0x547618-0x101010,-27|33|0x88A440-0x101010,-17|27|0xA1D074-0x101010,0|21|0x85AE34-0x101010,16|18|0x7FA842-0x101010,9|16|0x96C658-0x101010,3|36|0xA1C84B-0x101010,8|28|0xAEDA6B-0x101010", 0.9, 10, 10, width, height, 10, 1);
    }
    if (goods[2] == "pihua") {
        points = image.findMultiColorEx("0x695510-0x101010", "2|-3|0x8F7C2D-0x101010,4|-6|0x736115-0x101010,8|-10|0x948F29-0x101010,13|-12|0xFCF451-0x101010,13|-15|0x625200-0x101010,12|-18|0x614716-0x101010,17|-24|0x5B5001-0x101010,18|-37|0x4B3C00-0x101010,17|-39|0x523B00-0x101010,18|-44|0xECE444-0x101010,52|-45|0xF7ED2B-0x101010,49|-44|0x674E00-0x101010,49|-42|0x634D02-0x101010,40|-27|0xB4A128-0x101010,38|-27|0x695D21-0x101010", 0.8, 10, 10, width, height, 10, 1);
    }
    if (goods[2] == "pingguo") {
        points = image.findMultiColorEx("0xC8686C-0x101010", "0|2|0xC34E57-0x101010,0|3|0xFF9CA8-0x101010,0|8|0xFF8289-0x101010,0|13|0xF25157-0x101010,-1|19|0xFFDFBF-0x101010,0|24|0xF6E9D6-0x101010,10|24|0xEC7D2C-0x101010,18|22|0xD05131-0x101010,24|18|0xD26C3C-0x101010,23|12|0xEB9B5C-0x101010,24|5|0x7B9226-0x101010,24|1|0x8EB946-0x101010", 0.9, 10, 10, width, height, 10, 1);
    }
    if (goods[2] == "lajiao") {
        points = image.findMultiColorEx("0xB3C48D-0x101010", "-3|3|0xCBBBA1-0x101010,-9|9|0xD44050-0x101010,-13|16|0xB31A1C-0x101010,-31|35|0xBE3235-0x101010,-40|42|0xF6728A-0x101010,-13|42|0x852018-0x101010,-15|39|0x750D0A-0x101010,-8|30|0xCC5F5A-0x101010,0|23|0xC5D7AD-0x101010,-7|39|0x5F6E37-0x101010", 0.9, 10, 10, width, height, 10, 1);
    }
    if (points) {
        let listobj = [];
        for (let i = 0; i < points.length; i++) {
            // 物品坐标
            let x = points[i].x;
            let y = points[i].y;
            // 获取物品距离并且保存
            // 偏移计算出截图块
            let startX = x;
            let startY = y - height / 27
            let endX = width / 11.4 + x;
            let endY = y + height / 27
            // 文字识别判断目标位置需要寻走多少秒
            let num = discern(0, startX, startY, endX, endY)
            if (num && num !== NaN) {
                listobj.push(
                    {
                        "num": num,
                        "points": points[i]
                    }
                )
            }
        }
        // 返回距离最近的
        listobj.sort(function (a, b) {
            let value1 = a["num"];
            let value2 = b["num"];
            return value1 - value2;
        });
        if (listobj.length > 0) {
            return [listobj[0].points, listobj[0].num]
        } else {
            return [points[0], null]
        }
    }
    return null;

}

/**
 * 调整位置到正上方
 */
function getDirection(coordinate) {
    setCurrentStatus("获取物品位置")
    // 物品坐标
    let x = coordinate.x;
    let y = coordinate.y;
    // 获取屏幕宽高判断所在区间
    let width = device.getScreenWidth();
    let height = device.getScreenHeight();
    // 拿到屏幕中心点
    let coreX = width / 2;
    let coreY = height / 2;
    // 定义当前位于的区域
    let move = {
        "top": 0,
        "lower": 0,
        "left": 0,
        "right": 0,
    }
    // 高减去屏幕中心点-物品距离上方的距离
    move.top = height - coreY - y;
    move.lower = height - coreY - (height - y);
    move.left = width - coreX - x;
    move.right = width - coreX - (width - x);
    /**
     * 中心坐标 x向左移动1/4  滑动至物品x向左移动1/4
     */
    const swipe = {
        startX: coreX / 2,
        startY: coreY,
        endX: 0,
        endY: 0,
    }
    // 把相对于中心点的位置平移到操作点
    // 如果物品是在上方
    if (move.top > 0) {
        swipe.endY = y
    }
    // 如果物品是在下方
    if (move.lower > 0) {
        swipe.endY = y
    }
    // 如果物品是左边
    if (move.left > 0) {
        // 判断是上方左边还是下方左边
        swipe.endX = x / 2
    }
    // 如果物品是右边
    if (move.right > 0) {
        swipe.endX = (x - coreX) / 2 + coreX / 2
    }
    // 初始化
    if (swipe.endY == 0) {
        swipe.endY = coreY
    }
    return swipe;

}

/**
 * 自动找图并点击勾选
 * @param name
 * x:left   y:bottom
 * @returns boolean
 */
function findImageEx(name) {
    //申请完权限等1s再截图,否则会截不到图
    sleep(1000)
    //从工程目录下res文件夹下读取sms.png文件
    var sms = readResAutoImage(name + ".png");
    // 动态获取坐标点
    let xys = getAutoXY(XY["BoxSrart"][0], XY["BoxSrart"][1], XY["BoxSrart"][2])
    let xys2 = getAutoXY(XY["BoxEnd"][0], XY["BoxEnd"][1], XY["BoxEnd"][2])
    //在当前屏幕中查找，并且限制只查找一个
    var points = image.findImageEx(sms, xys[0], xys[1], xys2[0], xys2[1], 0.1, 1);
    logd(points)
    logd(JSON.stringify(points))

    //这玩意是个数组
    if (points) {
        logd(JSON.stringify(points[0]))
        logd(points[0])
        let goods = points[0];
        clickPoint(goods.left, goods.bottom);
        return true;
    }
    return false

}

/**
 * 关闭弹窗
 */
function clossArth() {
    // 游戏内弹窗
    let points = findImage("clos")
    if (points) {
        let x = points.x;
        let y = points.y;
        clickPoint(x, y);
        sleep(500)
        clickPoint(x, y);
        sleep(500)
        clickPoint(x, y);
        sleep(500)
    }

    // 游戏启动页弹窗
    let points2 = findImage("clos2")
    if (points2) {
        let x = points2.x;
        let y = points2.y;
        clickPoint(x, y);
        sleep(500)
        clickPoint(x, y);
        sleep(500)
        clickPoint(x, y);
        sleep(500)
    }


}

/**
 * 调整视角为上帝视角(方便搜索后查询)
 */
function scrollDown() {
    let xys = getAutoXY(XY["slide"][0], XY["slide"][1], XY["slide"][2])
    let xys2 = getAutoXY(XY["slideEnd"][0], XY["slideEnd"][1], XY["slideEnd"][2])
    swipeToPoint(xys[0], xys[1], xys2[0], xys2[1], 200);
}

/**
 * 传入配置项点击
 * @param xy 配置名称
 */
function clickXY(xy) {
    let xys = getAutoXY(XY[xy][0], XY[xy][1], XY[xy][2])
    clickPoint(xys[0], xys[1]);
}

/**
 * 判断当前时间是否执行
 * return 当前时间段user
 */
function isGetDATE() {

    // 判断当前时间段
    const nowHours = timeFormat("HH");
    // 拿出对应时间段账号密码
    let date = {
        "startTime": readConfigString("startTime"),
        "endTime": readConfigString("endTime"),
    }
    if (parseInt(nowHours) >= parseInt(date.startTime) && parseInt(nowHours) < parseInt(date.endTime)) {
        return true
    }
    return false
}

/**
 * 设置当前悬浮窗信息
 * @param currentStatus
 */
function setCurrentStatus(msg) {
    // 获取屏幕高度宽度
    let width = device.getScreenWidth();
    let height = device.getScreenHeight();
    let tv = new TextView(context);
    floaty.close(tag)
    // 停止关闭
    if (msg === "脚本停止") {
        return
    }
    let str = "";
    // 当前不存在账号
    str += "状态:" + msg
    tv.setText(str);
    tv.setBackgroundColor(Color.parseColor("#fdfff0"))
    floaty.showFloatView(tag, tv, width / 2, height - height / 10);
}

/**
 * 申请权限
 */
function applyAuth() {
    let paddleocr = {
        "type": "paddleocr"
    }
    let inited = ocr.initOcr(paddleocr)
    logd("初始化结果 -> " + inited);
    if (!inited) {
        loge("error : " + ocr.getErrorMsg());
        return;
    }

    let initServer = ocr.initOcrServer(5 * 1000);
    logd("initServer " + initServer);
    if (!initServer) {
        loge("initServer error : " + ocr.getErrorMsg());
        return;
    }
    // 浮窗
    let p = floaty.requestFloatViewPermission(1000)
    if (!p) {
        toast("没有浮窗权限，终止执行");
        return false;
    }
    // 无障碍
    var result = isAccMode();
    if (!result) {
        toast("请开启无障碍服务")
        utils.openIntentAction("android.settings.ACCESSIBILITY_SETTINGS");
        return false;
    }
    var result2=  startEnv();
    if (!result2) {
        toast("请开启无障碍服务")
        utils.openIntentAction("android.settings.ACCESSIBILITY_SETTINGS");
        return false;
    }
    // 截图
    var requestImg = image.requestScreenCapture(10000, 0);
    if (!requestImg) {
        requestImg = image.requestScreenCapture(10000, 0);
    }
    if (!requestImg) {
        toast("申请截图权限失败!")
        setCurrentStatus("申请截图权限失败! 请重启无障碍 或者重启手机重试!")
        return false;
    }
    return true;
}

/**
 * 监听停止
 */
function stopCallback() {
    setStopCallback(function () {
        device.vibrate(1000);
        //关闭tag=123的浮窗
        // floaty.close(tag)
        setCurrentStatus("脚本停止")
        device.cancelKeepingAwake();
        // 关闭自动化
        closeEnv(false);
        //释放所有资源
        ocr.releaseAll();
    });
}

/** /////////////////////////////////////////////主逻辑////////////////////////////////////////////////////////////// */

/**
 * 主方法
 */
function main() {

    // 监听停止
    stopCallback()
    // 关闭日志
    closeLogWindow();
    //请求权限
    applyAuth()
    // 检测授权
    // if (!verification()) {
    //     sleep(2000)
    //     return false;
    // }
    // 开启后台运行
    device.keepAwake(PowerManager.SCREEN_DIM_WAKE_LOCK | PowerManager.ACQUIRE_CAUSES_WAKEUP);

    // 监测音量上键停止脚本
    thread.execAsync(function () {
        //监听无障碍节点事件
        observeEvent("key-down", function (key, data) {
            // 检查是否点击音量上
            const event = JSON.parse(data)
            if (event.keyCode === 24) {
                exit();
            }
        });
        while (true) {
            sleep(1000)
        }
    });

    // 打开app
    openApp()
    let i = 1
    while (i == 1) {
        try {
            // 程序运行主逻辑
            runMain()
            // i = 0
        } catch (e) {
            toast(JSON.stringify(e))
        }
    }

}

/**
 * 基础检查
 * @returns {boolean}
 */
function check() {
    // 检查电量
    isQe()
    // 检查时间段
    if (isGetDATE()) {
        toast("不在运行时间段暂停1分钟")
        sleep(60000)
        return false;
    }
    // 判断未知原因卡死
    let noteMax = Number(readConfigString("noteMax"))
    if (!noteMax || noteMax == 0) {
        noteMax = random(10, 15)
    }
    if (notDetectedPage > noteMax) {// 未知的页面大于5
        notDetectedPage = 0;
        clossAppReOpen()
    }
    // 防止识别到页面, 但是识别错误导致的卡死
    // 页面检测成功5次, 采集成功小于4次
    let pageTestMax = Number(readConfigString("pageTestMax"))
    if (!pageTestMax || pageTestMax == 0) {
        pageTestMax = random(9, 12)
    }
    if (runStatus["pageTest"] > pageTestMax && runStatus["successNum"] < 4) {
        // init
        runStatus["pageTest"] = 0;
        runStatus["successNum"] = 0;
        clossAppReOpen()
    }
    return true
}

/**
 * 程序运行主逻辑
 */
function runMain() {
    // 基础检查
    if (!check()) {
        return;
    }
    // 检测页面
    let page = testIngPage();// index
    logd(page)
    // 初始化未检测到的页面数
    if (page[0] !== "0") {
        notDetectedPage = 0;
    }
    // toast(page);
    // 判断是否需要授权
    if (page[0] == "QQ登陆") {
        setCurrentStatus("执行QQ登录")
        // 勾选同意按钮 283 550
        clickXY("agree")
        // 判断设置的QQ登录还是微信登录
        // 点击 qq登陆
        clickXY("qLonIn")
        sleep(2000)// 等待加载
        clickText("QQ授权登录")
        sleep(2000)// 等待加载
        clickText("完成QQ授权")
        sleep(2000)// 等待加载
        return;
    }
    if (page[0] == "登陆") {
        setCurrentStatus("直接登录")
        // 点击登陆 1128 632
        clickXY("loginButtn")
        sleep(3000)// 等待加载
        // 进入游戏
        clickXY("getInto")
        sleep(10000)// 等待加载
        return;

    }
    // 判断在游戏页面
    if (page[0] == "index") {
        setCurrentStatus("当前在主页")
        // 初始化数据
        quickSearch = false // 关闭快捷搜索
        // 检测是否是免费功能
        let mod = Number(readConfigString("mod"))
        // 辅助采集
        if (mod == 3) {
            while (true) {
                sleep(1000)
                clickXY("gather")
                sleep(1000)
            }
        }
        // 钓鱼
        if (mod == 1) {
            while (true) {
                // 判断是否放入鱼竿
                var notd = image.findMultiColorEx("0x9CA5B2-0x101010", "-2|2|0x99A2AF-0x101010,-3|4|0x9DA6B2-0x101010,-3|6|0xA4ACB9-0x101010,5|23|0x374D61-0x101010,3|24|0x9AA4B1-0x101010,22|36|0x9FAAB7-0x101010,17|-25|0xACB5C1-0x101010,20|-30|0xA0AAB9-0x101010,16|-21|0xA2AAB7-0x101010", 0.9, 1700, 944, 1816, 1037, 1, 1);
                if (notd) {
                    setCurrentStatus("正在检测是否中鱼")
                    clickPoint(notd[0].x, notd[0].y)
                }
                // 判断是否中鱼
                var points = image.findMultiColorEx("0xB8FFFF-0x101010", "30|-5|0xC0FFFF-0x101010,68|1|0xBAFFFF-0x101010,103|27|0xBAFFFF-0x101010,116|89|0xBAFFFF-0x101010,72|150|0xB5FFFF-0x101010,0|148|0xB4FFFF-0x101010,-43|110|0xA6EEFF-0x101010,-48|70|0xAFF8FF-0x101010,-39|41|0xB8FFFF-0x101010", 0.7, 1793, 657, 2069, 911, 1, 1);
                if (points) {
                    setCurrentStatus("拉起鱼竿")
                    for (let i = 0; i < 20; i++) {
                        clickXY("diaoyu")
                    }
                    sleep(1000)
                }
            }
        }
        // 检测页面数加一
        ++runStatus["pageTest"];
        // 是否执行返回初始点操作
        if (isInit) {
            returnInit();
        }
        // 判断任务类型(采集/狩猎/孵蛋)
        // 开始执行定向搜索
        let goods = getGoods();
        // 执行搜索
        searchGather(goods)// 默认采集
        return;
    }
    // death
    if (page[0] == "death") {
        let returnInitType = Number(readConfigString("returnInit"))
        // toast(returnInitType)
        // 判断设置返回天枢还是家园
        if (returnInitType !== 0) {
            clickXY("tiansu")
        } else {
            clickXY("family")
        }
        return;
    }
    // 默认执行
    // 未检测到页面+1
    notDetectedPage++;
    // 清空采集
    runStatus["successNum"] = 0;

}

/**
 * 获取当前采集对象
 */
function getGoods() {
    let mod = Number(readConfigString("mod"))

    // 狩猎
    if (mod == 2) {
        return goods.soupi;
    }
    let good = Number(readConfigString("goods"))
    switch (good) {
        case 0:
            return goods.cangyu;
        case 1:
            return goods.yaoyu;
        case 2:
            return goods.xuanyu;
        case 3:
            return goods.xuanyuX;
        case 4:
            return goods.yanyu;
        case 5:
            return goods.jingyu;
        case 6:
            return goods.huangshi;
        case 7:
            return goods.tie;
        case 8:
            return goods.tong;
        case 9:
            return goods.ying;
        case 10:
            return goods.bin;
        case 11:
            return goods.mangcao;
        case 12:
            return goods.guyeguo;
        case 13:
            return goods.longgu;
        case 14:
            return goods.pihua;
        case 15:
            return goods.pingguo;
        case 16:
            return goods.lajiao;
        default:
            return goods.cangyu; // 默认采集
    }
}

/**
 * 检测当前页面 妄想山海
 * 返回页面标识和 x y
 */
function testIngPage() {
    setCurrentStatus("检测当前页面")
    // 检测关闭弹窗
    clossArth();
    // 游戏主页按钮
    let menu = findImage("menu");
    if (menu) {
        // toast("当前在游戏内")
        return ["index"]
    }
    let menu2 = findImage("neme2");
    if (menu2) {
        // toast("当前在游戏内")
        return ["index"]
    }
    let width = device.getScreenWidth();
    let height = device.getScreenHeight();
    var menu3 = image.findMultiColorEx("0xE5E4DB-0x101010", "2|0|0xECEAE3-0x101010,5|0|0xE5E3DC-0x101010,7|4|0xEBEAE2-0x101010,5|8|0xE7E4D9-0x101010,1|10|0xDFDCCC-0x101010,-3|7|0xE8E6E3-0x101010,0|4|0xEBE8E6-0x101010,3|5|0xECE8E5-0x101010,2|3|0xE7E6E6-0x101010", 0.4, 2093, 27, width, height, 1,1);
    if (menu3) {
        // toast("当前在游戏内")
        return ["index"]
    }
    // death
    let death = findImgR("death")
    if (death) {
        // toast("当前死亡")
        return ["death"]
    }
    // 获取开始按钮颜色 weiChar
    let login = packFindColorEx(XY.login)
    let login2 = packFindColorEx(XY.login2)
    if (login && login2) {
        // toast("当前可直接登陆")
        return ["登陆"]
    }
    // 微信登录按钮
    let weiChar = packFindColorEx(XY.weiChar);
    if (weiChar) {
        // toast("当前需要点击登陆")
        return ["QQ登陆"]
    }

    return ["0"]
}

/**
 * 获取key对应的状态
 * 是否是免费使用
 * 是否是绑定状态
 * 绑定设备id
 * 剩余使用时间
 * @returns {any}
 */
function getVerification() {
    // 机型
    let model = device.getModel();
    // 安卓id
    let imei = device.getAndroidId();
    let key = readConfigString("key");
    // 请求体
    let data = {
        "model": model,
        "imei": imei,
        "key": key
    };
    let params = {
        "url": url,
        "method": "GET",
        "referrer": "baidu.com",
        "data": data,
    };
    let x = http.request(params);
    return JSON.parse(x.body);
}

/**
 * 验证脚本是否授权
 */
function verification() {
    setCurrentStatus("验证授权")
    // 检测是否是免费功能
    let mod = Number(readConfigString("mod"))
    // 辅助采集
    if (mod == 3) {
        return true;
    }
    let data = getVerification()
    // toast(JSON.stringify(data))
    // 判断状态  0:无效,1:可用,2:已使用,3:过期
    if (data.data.state == 1) {
        toast("剩余使用时长:" + data.data.time + "小时")
        sleep(3000)
        return true;
    } else {
        toast(data.data.msg)
        return false
    }

}

/**
 * 返回中枢或者家园
 */
function returnInit() {
    let returnInitType = Number(readConfigString("returnInit"))
    if (!returnInitType) {
        returnInitType = 1
    }
    if (returnInitType == 0) {
        // 返回家园
    } else {
        // 点击菜单
        // 游戏主页按钮
        let menu = findImage("menu");
        if (menu) {
            let x = menu.x;
            let y = menu.y;
            clickPoint(x, y);
            sleep(500)
            // 点击脱离卡死
            clickXY("beDivorced")
            // 等待返回中枢成功
            sleep(6000)
        }
    }

}

/**
 * 搜索采集
 */
function searchGather(goods) {
    let seekNm = 0; // 寻找次数
    let discernNum = 0; // 没有识别到物品次数
    let failNum = 0;// 未采集成功次数
    let successNum = 0;// 采集成功次数
    // ?次未识别到物品,开始重新检测页面
    let discernMax = Number(readConfigString("discernMax"))
    if (!discernMax || discernMax == 0) {
        discernMax = random(8, 10)
    }
    while (discernNum < discernMax) {
        // 判断是否返回中枢或者家园
        let failNumMax = Number(readConfigString("failNumMax"))
        if (!failNumMax || failNumMax == 0) {
            failNumMax = random(25, 40)
        }
        if (failNum >= failNumMax) {
            // 连续移动30次未采集成功
            failNum = 0;
            returnInit()
        }
        //判断是否需要吃东西,默认第一格
        // 采集成功4-6次吃东西
        let successNumMAx = Number(readConfigString("successNumMAx"))
        if (!successNumMAx || successNumMAx == 0) {
            successNumMAx = random(4, 6)
        }
        if (successNum >= successNumMAx) {
            sleep(500)
            // 打开消耗品
            clickXY("food")
            sleep(1000)
            // 点击第一格
            clickXY("oneFood")
            sleep(1000)
            // 点击中心点,防止没有食物时挡住屏幕
            // 获取屏幕宽高判断所在区间
            let width = device.getScreenWidth();
            let height = device.getScreenHeight();
            // 拿到屏幕中心点
            let coreX = width / 2;
            let coreY = height / 2;
            clickPoint(coreX, coreY);
            // 初始化
            successNum = 0;
        }
        // 判断是否需要执行搜索
        // 寻找5-10次执行一次搜索
        if (seekNm == 0 || seekNm % random(5, 10) == 0) {
            // 调整视角
            scrollDown()
            sleep(500)
            search(goods)
            // 设置状态为搜索成功// 可直接快捷搜
            quickSearch = true
        }
        // 等待搜索动画
        sleep(500)
        // 全屏找色返回坐标点和距离
        // 拿到距离最近的物品
        let coordinate = find(goods) // 多点找色找到物品
        // 拿到物品坐标
        if (coordinate) {
            // 初始化识别数量
            discernNum = 0;
            // // 调整角色方向让物品在最上方
            let move = getDirection(coordinate[0])
            // 移动采集
            let state = moveDist(move, coordinate[1]);
            if (!state) {
                // 未采集成功次数加一
                failNum++;
            } else {
                // init
                failNum = 0;
                // 成功数加一()
                ++successNum;
                ++runStatus["successNum"];
            }
        } else {
            toast("没有识别到物品")
            discernNum++;
        }
        // 采集次数加一
        seekNm++;

    }
}


/**
 * 传入坐标块 文字识别
 * @param type 识别类型 0 : 识别数字  1:识别汉字
 * @param startX
 * @param startY
 * @param endX
 * @param endY
 */
function discern(type, startX, startY, endX, endY) {

    // 获取屏幕高度宽度
    let bitmap = image.captureScreenBitmap("jpg", startX, startY, endX, endY, 80);
    // 对图片进行识别
    let result = ocr.ocrBitmap(bitmap, 20 * 1000, {});
    if (result) {
        for (var i = 0; i < result.length; i++) {
            var value = result[i];
            if (type == 0) {
                // 获取数字 截取前面两位
                let num = value.label.replace(/[^0-9]/ig, "").substr(0, 2);
                // logd("数字:" + num);
                image.recycle(bitmap);
                return num;
            }
        }
    } else {
        image.recycle(bitmap)
        return null
    }
    image.recycle(bitmap)

}

/**
 * 移动并识别采集
 * @param swipe 坐标
 * @param num 距离:丈
 * @returns {boolean}
 */
function moveDist(swipe, num) {
    setCurrentStatus("正在移动识别")
    // logd("num : " + num)
    // 计算移动时间
    let moveTime = Number(readConfigString("moveTime"))
    if (!num || num == 0 || num == NaN) {
        if (!moveTime) {
            moveTime = random(500, 4000)
        }
    } else {
        // 体力还有
        if (num < 30) {
            moveTime = (Number(num) * 1000) * 0.53;
        } else {
            // 后面没有体力
            moveTime = (Number(num) * 1000) * 0.53;

        }
    }
    logd("moveTime : " + moveTime)
    // 判断是否是狩猎
    let mod = Number(readConfigString("mod"))
    // 狩猎
    if (mod == 2) {
        clickXY("attack")
        swipeToPoint(swipe.startX,swipe.startY,swipe.endX,swipe.endY,moveTime);
    }else{
        // 拿到加速按钮位置
        let xys = getAutoXY(XY["speedUp"][0], XY["speedUp"][1], XY["speedUp"][2])
        //加速移动(多点触控)
        var touch1 = MultiPoint
            .get()
            .action(0).x(swipe.startX).y(swipe.startY).pointer(1).delay(1)
            .next()
            .action(2).x(swipe.endX).y(swipe.endY).pointer(1).delay(moveTime)
        var touch2 = MultiPoint
            .get()
            .action(0).x(xys[0]).y(xys[1]).pointer(2).delay(1)
            .next()
            .action(1).x(xys[0]).y(xys[1]).pointer(2).delay(moveTime);
        multiTouch(touch1, touch2, null, moveTime);
    }

    sleep(moveTime)
    // 点击加速时使用
    if (num && num !== NaN && moveTime > 3000) {
        sleep(200)
        // 防止卡主点击跳跃
        clickXY("jump")
        sleep(500)
    }
    // 识别采集
    let succeGather = 0;
    for (let i = 0; i < 3; i++) {
        clickXY("gather")
        // 采集成功提示信息
        let xy = getAutoXY(XY.success[0], XY.success[2], XY.success[3])

        sleep(500)
        // 获取开始按钮颜色
        let success = image.findColorEx(XY.success[1], 0.9, xy[0], xy[1], 0, 0, 10, 1);
        if (success) {
            setCurrentStatus("采集成功")
            succeGather++;
        }

        // 等待识别是否挖矿
        sleep(500)
    }
    // 采集成功连续采集
    if (succeGather > 0) {
        for (let i = 0; i < 10; i++) {
            clickXY("gather")
            sleep(1000)
        }
        // 点击攻击按钮
        clickXY("attack")
        return true;
    }
    // 判断是否是狩猎
    if (mod == 2) {
        clickXY("attack")
        sleep(500)
        clickXY("attack")
        sleep(500)
        clickXY("attack")
    }
    return false;
}

/**
 * 搜索物品
 */
function search(goods) {
    setCurrentStatus("执行搜索")
    // 点击主页按钮
    clickXY("home")
    sleep(500)
    // 点击地球搜索
    clickXY("TheBallSearch")
    sleep(500)
    // 点击定向搜索按钮
    sleep(500)
    // 是否存在快捷搜
    if (quickSearch) {
        clickXY("quickSearch")
        return true;
    }
    // 点击定向搜索
    clickXY("Directionalsearch")
    sleep(500)
    // 判断类型
    logd(JSON.stringify(goods))
    // 通过找图拿到坐标点位置
    findImageEx(goods[0])// 产物
    sleep(500)
    findImageEx(goods[1])// 矿物
    sleep(500)
    // 判断是否需要上滑 goods[3]
    for (let i = 0; i < goods[3]; i++) {
        let xys = getAutoXY(XY["slideGoods"][0], XY["slideGoods"][1],
            XY["slideGoods"][2])
        let xys2 = getAutoXY(XY["slideEndGoods"][0], XY["slideEndGoods"][1],
            XY["slideEndGoods"][2])
        // 滑动
        swipeToPoint(xys[0] + random(4, 8), xys[1] + random(4, 8)
            , xys2[0] + random(4, 8), xys2[1] + random(4, 8), 1000);
        sleep(1000)
    }
    // sleep(500)
    // toast(findImageEx(goods[2]))
    // 找图
    if (findImageEx(goods[2])) {
        // 勾选成功
        // 判断搜索按钮是否可点击
        let searchColour = packFindColorEx(XY.searchColour);
        sleep(500)
        if (!searchColour) {
            // 点击搜索
            clickXY("search")
        } else {
            findImageEx(goods[2])
            sleep(500)
            clickXY("search")
        }

    }
    return false
}

/**
 * 运行
 */
main();