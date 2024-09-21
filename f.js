
setImmediate(function () {
    //延迟1秒调用Hook方法
    setTimeout(test, 1000);
});
//执行Hook方法
function test() {
    Java.perform(function () {
        let Kiwi = Java.use("com.kiwi.sdk.Kiwi");
        console.log(`Kiwi.Init `);
        Kiwi["Init"].implementation = function (str) {
            console.log(`Kiwi.Init is called: str=${str}`);
            let result = this["Init"](str);
            console.log(`Kiwi.Init result=${result}`);
            return result;
        };



        Kiwi["OnNetworkOn"].implementation = function () {
            console.log(`Kiwi.OnNetworkOn is called`);
            let result = this["OnNetworkOn"]();
            console.log(`Kiwi.OnNetworkOn result=${result}`);
            return result;
        };


        Kiwi["init_appname"].implementation = function (str) {
            console.log(`Kiwi.init_appname is called: str=${str}`);
            let result = this["init_appname"](str);
            console.log(`Kiwi.init_appname result=${result}`);
            return result;
        };


        Kiwi["init_cache"].implementation = function (str) {
            console.log(`Kiwi.init_cache is called: str=${str}`);
            let result = this["init_cache"](str);
            console.log(`Kiwi.init_cache result=${result}`);
            return result;
        };


        Kiwi["init_device_info"].implementation = function (str) {
            console.log(`Kiwi.init_device_info is called: str=${str}`);
            let result = this["init_device_info"](str);
            console.log(`Kiwi.init_device_info result=${result}`);
            return result;
        };

        Kiwi["on_network_on"].implementation = function () {
            console.log(`Kiwi.on_network_on is called`);
            let result = this["on_network_on"]();
            console.log(`Kiwi.on_network_on result=${result}`);
            return result;
        };

        Kiwi["restart_all_server"].implementation = function () {
            console.log(`Kiwi.restart_all_server is called`);
            let result = this["restart_all_server"]();
            console.log(`Kiwi.restart_all_server result=${result}`);
            return result;
        };



        Kiwi["send_log"].implementation = function (i, str) {
            console.log(`Kiwi.send_log is called: i=${i}, str=${str}`);
            let result = this["send_log"](i, str);
            console.log(`Kiwi.send_log result=${result}`);
            return result;
        };


        Kiwi["server_to_local"].implementation = function (str) {
            console.log(`Kiwi.server_to_local is called: str=${str}`);
            let result = this["server_to_local"](str);
            console.log(`Kiwi.server_to_local result=${result}`);
            // return "0|127.0.0.1|9001";

            return result;
        };


        Kiwi["set_current_network"].implementation = function (str) {
            console.log(`Kiwi.set_current_network is called: str=${str}`);
            let result = this["set_current_network"](str);
            console.log(`Kiwi.set_current_network result=${result}`);
            return result;
        };

        // Kiwi["InitWithListener"].implementation = function (str, kiwiListener) {
        //     console.log(`Kiwi.InitWithListener is called: str=${str}, kiwiListener=${kiwiListener}`);
        //     let result = this["InitWithListener"](str, kiwiListener);
        //     console.log(`Kiwi.InitWithListener result=${result}`);
        //     return result;
        // };

        // Kiwi["ServerToLocal"].implementation = function (str, stringBuffer, stringBuffer2) {
        //     console.log(`Kiwi.ServerToLocal is called: str=${str}, stringBuffer=${stringBuffer}, stringBuffer2=${stringBuffer2}`);
        //     let result = this["ServerToLocal"](str, stringBuffer, stringBuffer2);
        //     console.log(`Kiwi.ServerToLocal result=${result}`);
        //     return result;
        // };

        // Kiwi["SendLog"].implementation = function (i, str) {
        //     console.log(`Kiwi.SendLog is called: i=${i}, str=${str}`);
        //     let result = this["SendLog"](i, str);
        //     console.log(`Kiwi.SendLog result=${result}`);
        //     return result;
        // };

        // let SuperNetworkKitPlugin = Java.use("com.example.super_network_kit.SuperNetworkKitPlugin");
        // SuperNetworkKitPlugin["initConnection"].implementation = function (str, str2, z) {
        //     console.log(`SuperNetworkKitPlugin.initConnection is called: str=${str}, str2=${str2}, z=${z}`);
        //     let result = this["initConnection"](str, str2, z);
        //     console.log(`SuperNetworkKitPlugin.initConnection result=${result}`);
        //     return result;
        // };






        // let WsManager = Java.use("com.example.super_network_kit.WsManager");
        // WsManager["send"].implementation = function (obj) {
        //     console.log(`WsManager.send is called: obj=${obj}`);
        //     let result = this["send"](obj);
        //     console.log(`WsManager.send result=${result}`);
        //     return result;
        // };
        // WsManager["sendMessage"].overload('java.lang.String').implementation = function (str) {
        //     console.log(`WsManager.sendMessage is called: str=${str}`);
        //     let result = this["sendMessage"](str);
        //     console.log(`WsManager.sendMessage result=${result}`);
        //     return result;
        // };

        let DeviceInfo = Java.use("com.kiwi.sdk.DeviceInfo");
        DeviceInfo["getBoot"].implementation = function () {
            console.log(`DeviceInfo.getBoot is called`);
            let result = this["getBoot"]();
            console.log(`DeviceInfo.getBoot result=${result}`);
            return result;
        };




        DeviceInfo["getNetworkOperator"].implementation = function (context) {
            console.log(`DeviceInfo.getNetworkOperator is called: context=${context}`);
            let result = this["getNetworkOperator"](context);
            console.log(`DeviceInfo.getNetworkOperator result=${result}`);
            return result;
        };



        DeviceInfo["getDeviceName"].implementation = function (context) {
            console.log(`DeviceInfo.getDeviceName is called: context=${context}`);
            let result = this["getDeviceName"](context);
            console.log(`DeviceInfo.getDeviceName result=${result}`);
            return result;
        };

        DeviceInfo["getDeviceID"].implementation = function (context) {
            console.log(`DeviceInfo.getDeviceID is called: context=${context}`);
            let result = this["getDeviceID"](context);
            console.log(`DeviceInfo.getDeviceID result=${result}`);
            return result;
        };

        DeviceInfo["getAndroidID"].implementation = function (context) {
            console.log(`DeviceInfo.getAndroidID is called: context=${context}`);
            let result = this["getAndroidID"](context);
            console.log(`DeviceInfo.getAndroidID result=${result}`);
            return "77aaddff6dfghd";
        };

        DeviceInfo["getScreen"].implementation = function (context) {
            console.log(`DeviceInfo.getScreen is called: context=${context}`);
            let result = this["getScreen"](context);
            console.log(`DeviceInfo.getScreen result=${result}`);
            return result;
        };

        DeviceInfo["getOS"].implementation = function () {
            console.log(`DeviceInfo.getOS is called`);
            let result = this["getOS"]();
            console.log(`DeviceInfo.getOS result=${result}`);
            return result;
        };

        DeviceInfo["getPhoneModel"].implementation = function () {
            console.log(`DeviceInfo.getPhoneModel is called`);
            let result = this["getPhoneModel"]();
            console.log(`DeviceInfo.getPhoneModel result=${result}`);
            return result;
        };


        DeviceInfo["getFirstInstallTime"].implementation = function (context) {
            console.log(`DeviceInfo.getFirstInstallTime is called: context=${context}`);
            let result = this["getFirstInstallTime"](context);
            console.log(`DeviceInfo.getFirstInstallTime result=${result}`);
            return result;
        };

        DeviceInfo["getNetworkType"].implementation = function (context) {
            console.log(`DeviceInfo.getNetworkType is called: context=${context}`);
            let result = this["getNetworkType"](context);
            console.log(`DeviceInfo.getNetworkType result=${result}`);
            return result;
        };


        // let MethodChannel = Java.use("io.flutter.plugin.common.MethodChannel");
        // MethodChannel["invokeMethod"].overload('java.lang.String', 'java.lang.Object').implementation = function (str, obj) {
        //     console.log(`MethodChannel.invokeMethod is called: str=${str}, obj=${obj}`);
        //     this["invokeMethod"](str, obj);
        // };

        // let PluginYidunPlugin = Java.use("com.example.plugin_yidun.PluginYidunPlugin");
        // PluginYidunPlugin["onMethodCall"].implementation = function (methodCall, result) {
        //     console.log(`PluginYidunPlugin.onMethodCall is called: methodCall=${methodCall}, result=${result}`);
        //     this["onMethodCall"](methodCall, result);
        // };

        // // let WatchMan = Java.use("com.netease.mobsec.WatchMan");
        // WatchMan["init"].implementation = function (context, str, watchManConf, initCallback) {
        //     console.log(`WatchMan.init is called: context=${context}, str=${str}, watchManConf=${watchManConf}, initCallback=${initCallback}`);
        //     this["init"](context, str, watchManConf, initCallback);
        // };



    });
}