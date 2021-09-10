function ShellWrapper() {

}

var shell = new ShellWrapper();
/**
 * 安装 apk
 * <Br/>
 * 运行环境: 代理模式
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param path 文件路径
 * @return 布尔型 true 代表安装成功，false 代表安装失败
 */
ShellWrapper.prototype.installApp = function (path) {
    if (shellWrapper == null) {
        return null;
    }
    return shellWrapper.installApp(path);
};
/**
 * 卸载应用程序
 * <Br/>
 * 运行环境: 代理模式
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param packageName 应用程序的包名
 * @return 布尔型 true 代表卸载成功，false 代表卸载失败
 */
ShellWrapper.prototype.uninstallApp = function (packageName) {
    if (shellWrapper == null) {
        return null;
    }
    return shellWrapper.uninstallApp(packageName);
};

/**
 * 停止正在执行的应用
 * <Br/>
 * 运行环境: 代理模式
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param packageName 应用程序的包名
 * @return 布尔型 true 代表成功，false 代表失败
 */
ShellWrapper.prototype.stopApp = function (packageName) {
    if (shellWrapper == null) {
        return null;
    }
    return shellWrapper.stopApp(packageName);
};


/**
 * 执行Shell命令
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param command 命令，例如安装App ： pm install /sdcard/app.apk
 * @return string 命令执行后返回的字符串结果
 */
ShellWrapper.prototype.execCommand = function (command) {
    if (shellWrapper == null) {
        return null;
    }
    var x = shellWrapper.execCommand(command);
    return javaString2string(x);
};

/**
 * 执行root模式下，相关的命令，需要有root权限
 * 运行环境: 无限制
 * @param command 命令
 * @return {string|null}
 */
ShellWrapper.prototype.sudo = function (command) {
    if (shellWrapper == null) {
        return null;
    }
    var x = shellWrapper.sudo(command);
    return javaString2string(x);
};

/**
 * 请求授予root权限
 * 运行环境: 无限制
 * @return {boolean} true代表有root权限
 */
ShellWrapper.prototype.su = function () {
    if (shellWrapper == null) {
        return null;
    }
    return shellWrapper.su();
};


/**
 * 执行shell命令
 * <Br/>
 * 运行环境: 代理模式,需要启动代理服务
 * <Br/>
 * 兼容版本: Android 4.4 以上
 * @param command 命令字符串
 * @return 字符串 shell结果
 */
ShellWrapper.prototype.execAgentCommand = function (command) {
    if (shellWrapper == null) {
        return null;
    }
    var x = agentEventWrapper.execShellCommand(command);
    return javaString2string(x);
};



