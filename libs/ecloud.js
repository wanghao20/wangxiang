function ECloudWrapper() {

}


var ecloud = new ECloudWrapper();


ECloudWrapper.prototype.log = function (msg) {
    var s = [];
    for (var i = 1; i < arguments.length; i++) {
        s.push(arguments[i]);
    }
    ecImporter.cloudLog(msg, s);
}
 /**
  * 普通的打印的日志(logd,logi,logw,loge)是否同步到云控，默认是同步的，可以不使用ecloud.log的时候,云控也可以看到日志
  * @param logSyncToCloud true 代表同步 false 代表不同步
  */
ECloudWrapper.prototype.commonLogToCloud = function (logSyncToCloud) {
    ecImporter.commonLogToCloud(logSyncToCloud);
}

/**
 * 取得当前任务的信息
 * @return {JSON} 对象
 */
ECloudWrapper.prototype.getTaskInfo = function () {
    if (ecloudWrapper == null) {
        return;
    }
    var d = ecloudWrapper.getTaskInfo();
    if (d != null) {
        return JSON.parse(d);
    }
    return null;
};


/**
 * 获取机器编号
 * @return {string} 机器编码或者null
 */
ECloudWrapper.prototype.getDeviceNo = function () {
    if (ecloudWrapper == null) {
        return;
    }
    return javaString2string(ecloudWrapper.getDeviceNo());
};

/**
 * 通过资源组取得一组资源
 * @param map 可扩展参数表
 *   例如 {"groupName":"资源组1"}
 *   key定义：
 *   groupName = 资源组名称
 *   pageNum= 页码 例如 1代表第一页
 *   pageSize= 每页个数 例如 10 代表一页有10个
 *
 * @return {JSON} 资源JSON对象
 */
ECloudWrapper.prototype.getResources = function (map) {
    if (ecloudWrapper == null) {
        return;
    }
    var d = ecloudWrapper.getResources(JSON.stringify(map));
    if (d != null) {
        return JSON.parse(d);
    }
    return null;
};


/**
 * 上传要存储的数据
 * @param map 可扩展参数表
 *   例如
 * {
 *   "groupName":"123",
 *	"dataKey": "11111",
 *  "content":"123"
 * }
 *   key定义：
 *   groupName = 数据的组名，如果云端没有这个组，会自动创建
 *   dataKey = 存储数据的唯一标示
 *   content = 数据字符串
 * @return {bool} true代表成功 false 代表失败
 */
ECloudWrapper.prototype.uploadStorageData = function (map) {
    if (ecloudWrapper == null) {
        return;
    }
    return ecloudWrapper.uploadStorageData(JSON.stringify(map));
};

/**
 * 通过数据组名取得一组数据
 * @param map 可扩展参数表
 *   例如 {"groupName":"数据组1"}
 *   {"dataKey":"key"}
 *   key定义： groupName = 数据组名称
 *   dataKey = 数据唯一标示
 *   pageNum= 页码 例如 1代表第一页
 *   pageSize= 每页个数 例如 10 代表一页有10个
 * @return {JSON} JSON对象
 */
ECloudWrapper.prototype.getStorageDatas = function (map) {
    if (ecloudWrapper == null) {
        return;
    }
    var d = ecloudWrapper.getStorageDatas(JSON.stringify(map));
    if (d != null) {
        return JSON.parse(d);
    }
    return null;
};

/**
 * 子任务失败
 *  @param map 可扩展参数表
 *   例如
 * {
 *   "subTaskId":123,
 *	 "msg": "因为找不到XXX失败"
 * }
 * @return {bool} true代表成功 false 代表失败
 */
ECloudWrapper.prototype.subTaskFail = function (map) {
    if (ecloudWrapper == null) {
        return;
    }
    return ecloudWrapper.subTaskFail(JSON.stringify(map));
};

/**
 * 子任务成功
 *  @param map 可扩展参数表
 *   例如
 * {
 *   "subTaskId":123,
 *	"msg": "任务成功"
 * }
 * @return {bool} true代表成功 false 代表失败
 */
ECloudWrapper.prototype.subTaskOk = function (map) {
    if (ecloudWrapper == null) {
        return;
    }
    return ecloudWrapper.subTaskOk(JSON.stringify(map));
};