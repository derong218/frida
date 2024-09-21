Java.perform(function () {

    let RoomType = Java.use("com.qennnsad.aknkaksd.domain.RoomType");
    // RoomType["$init"].implementation = function (str, i7, i8) {
    //     console.log(`RoomType.$init is called: str=${str}, i7=${i7}, i8=${i8}`);
    //     this["$init"](str, i7, i8);
    // };


    RoomType["getInt"].implementation = function () {
        console.log(`RoomType.getInt is called`);
        let result = this["getInt"]();
        console.log(`RoomType.getInt result=${result}`);
        return 0;
    };

    let HWLLSClient = Java.use("com.huawei.hwllsplayer.client.HWLLSClient");
    HWLLSClient["startPlay"].implementation = function (str, startPlayOptions) {
        console.log(`HWLLSClient.startPlay is called: str=${str}, startPlayOptions=${startPlayOptions}`);
        let result = this["startPlay"](str, startPlayOptions);
        console.log(`HWLLSClient.startPlay result=${result}`);
        return result;
    };

    let StreamBean = Java.use("com.qennnsad.aknkaksd.data.bean.room.PrivateLimitBean$StreamBean");
    StreamBean["getLll_pull_url"].implementation = function () {
        console.log(`StreamBean.getLll_pull_url is called`);
        let result = this["getLll_pull_url"]();
        console.log(`StreamBean.getLll_pull_url result=${result}`);
        return result;
    };


    StreamBean["getPull_url"].implementation = function () {
        console.log(`StreamBean.getPull_url is called`);
        let result = this["getPull_url"]();
        console.log(`StreamBean.getPull_url result=${result}`);
        return result;
    };

    let AES = Java.use("com.qennnsad.aknkaksd.util.AES");
    AES["aesdecrypt_tiger2"].implementation = function (str) {
        console.log(`AES.aesdecrypt_tiger2 is called: str=${str}`);
        let result = this["aesdecrypt_tiger2"](str);
        console.log(`AES.aesdecrypt_tiger2 result=${result}`);
        return result;
    };


    AES["aesdecrypt_tiger"].implementation = function (str) {
        console.log(`AES.aesdecrypt_tiger is called: str=${str}`);
        let result = this["aesdecrypt_tiger"](str);
        console.log(`AES.aesdecrypt_tiger result=${result}`);
        return result;
    };

    let d = Java.use("com.qennnsad.aknkaksd.domain.base.d");
    d["c"].implementation = function (response) {
        console.log(`d.c is called: response=${response}`);
        let result = this["c"](response);
        console.log(`d.c result=${result}`);
        return result;
    };


});