let mRandom = 600000;
let randomTempMap = new Map();
var picRoot = "";

let roomsPlayUrl = new Map();


let roomCache = [];
let saveTimer = null;



function getTimestamp() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `[${hours}:${minutes}:${seconds}]`;
}
const safeParse = (str) => {
    try {
        return JSON.parse(str);
    } catch (error) {
        return null;
    }
}







const handleConfig = (body) => {
    const result = body["result"];
    picRoot = result["n"];
    console.log(getTimestamp(), "picRoot", picRoot);
}



// const test = () => {
Java.perform(function () {



    var Activity = Java.use("android.app.Activity");
    var ViewGroup = Java.use('android.view.ViewGroup');
    var OverlayView = Java.use('android.view.View');
    var TextView = Java.use('android.widget.TextView');
    var Color = Java.use('android.graphics.Color');
    var CharSequence = Java.use('java.lang.CharSequence');
    var OkHttpClient = Java.use('okhttp3.OkHttpClient');
    var RequestBuilder = Java.use("okhttp3.Request$Builder");
    var RequestBody = Java.use('okhttp3.RequestBody');
    var RequestBody = Java.use('okhttp3.RequestBody');
    var Callback = Java.use('okhttp3.Callback');
    var Crypto = Java.use('java.security.MessageDigest');
    var String = Java.use('java.lang.String');
    var ScrollingMovementMethod = Java.use('android.text.method.ScrollingMovementMethod');


    var LayoutParams = Java.use('android.widget.FrameLayout$LayoutParams');
    var hasAdd = false;

    var textView;
    var textViewText;
    let FlutterActivity = Java.use("io.flutter.embedding.android.FlutterActivity");

    var menuId = 93;
    const updateMenuIdByVip = function (isVip) {
        if (isVip) {
            menuId = 93;
        } else {
            menuId = 2;
        }
    }

    FlutterActivity["getActivity"].implementation = function () {
        console.log(`FlutterActivity.getActivity is called`);
        let result = this["getActivity"]();


        console.log(getTimestamp(), `FlutterActivity.getActivity result=${result}`, Activity, hasAdd);


        if (!hasAdd) {
            hasAdd = true;
            // 获取当前的Activity
            var activity = Java.cast(result, Activity);

            // 在UI线程上运行添加View的操作
            Java.scheduleOnMainThread(function () {
                // 获取根布局
                var rootView = activity.findViewById(0x01020002); // android.R.id.content

                // 创建一个新的 View

                var overlayView = OverlayView.$new(activity);
                textView = TextView.$new(activity);


                // 设置背景色为半透明黑色

                textView.setBackgroundColor(Color.BLACK.value); // 使用 Color 类来生成颜色值

                // var text = Java.cast("ABC", CharSequence);

                textView.setMovementMethod(ScrollingMovementMethod.$new());


                textView.setText(String.$new("\r\n\r\n\r\n" + getTimestamp() + "\r\n"));
                // textView.setTextColor(Color.DKGRAY.value)
                // 设置布局参数为全屏


                var params = LayoutParams.$new(-1, -1);


                console.log(getTimestamp(), "rootView", rootView);
                // 添加View到根布局
                var viewGroup = Java.cast(rootView, ViewGroup);
                viewGroup.addView(textView, params);
                console.log(getTimestamp(), "rootView added");

                // 获取当前 Activity
                var window = activity.getWindow();
                window.addFlags(0x00000080);
                console.log(getTimestamp(), "FLAG_KEEP_SCREEN_ON added");

            });
        }


        return result;
    };

    let DeviceInfo = Java.use("com.kiwi.sdk.DeviceInfo");

    // DeviceInfo["getNetworkOperator"].implementation = function (context) {
    //     return "中国移动";
    // };

    // DeviceInfo["getDeviceName"].implementation = function (context) {
    //     return "uytt";
    // };

    // DeviceInfo["getDeviceID"].implementation = function (context) {
    //     return "unknown";
    // };

    // DeviceInfo["getAndroidID"].implementation = function (context) {
    //     return "73451233543518";
    // };

    // DeviceInfo["getOS"].implementation = function () {
    //     return "Android 14";
    // };

    // DeviceInfo["getPhoneModel"].implementation = function () {
    //     return "Android11";
    // };

    // DeviceInfo["getFirstInstallTime"].implementation = function (context) {
    //     return 1723814123086;
    // };

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


        // 生成随机8个字符的小写字母和数字
        let chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
        let randomID = '';
        for (let i = 0; i < 8; i++) {
            randomID += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        console.log("androidId:", randomID);
        return randomID;
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




    // Create OkHttpClient instance
    var client = OkHttpClient.$new();

    function generateSignature(dataToSign) {
        // console.log(getTimestamp(), dataToSign);


        var javaString = String.$new(dataToSign);
        var md = Crypto.getInstance('MD5');
        md.update(javaString.getBytes('UTF-8'));

        var digest = md.digest();

        var hexString = '';
        for (var i = 0; i < digest.length; i++) {
            var hex = (digest[i] & 0xFF).toString(16);
            if (hex.length === 1) {
                hexString += '0';
            }
            hexString += hex;
        }
        return hexString;
    }

    function postRequest(url, postData) {
        console.log(getTimestamp(), postData);
        var JSON = Java.use('okhttp3.MediaType').parse('application/json; charset=utf-8');
        var body = RequestBody.create(postData, JSON);

        var request = RequestBuilder.$new()
            .url(url)
            .addHeader('Authorization', 'Bearer c6a310e9ab2f2a877e18ad62f3eb437730c3cf779e8dfb793cc7bf2127846d2144081c2348d12477fccc63ec302e427e8ea541256a745d999667124689cca4a3d1581c2f991282a5aa24e83e997a6c1e70ac33ded054c852e67e73ad78d26b98a882d99e14d3a8afcd47c196b74635abcd6450448a684b8d02ff59100199ea9f')
            .post(body)
            .build();

        var call = client.newCall(request);

        // Define a callback to handle the response asynchronously
        var callback = Java.registerClass({
            name: 'com.example.OkHttpCallback',
            implements: [Callback],
            methods: {
                onFailure: function (call, e) {
                    console.error(getTimestamp(), 'Request failed:', e.toString());
                },
                onResponse: function (call, response) {
                    console.log(getTimestamp(), 'Response Code:', response.code());
                    console.log(getTimestamp(), 'Response Body:', response.body().string());
                }
            }
        });

        call.enqueue(callback.$new());

        // call.enqueue(callback); // Enqueue the request for asynchronous execution
    }


    const singleSaveRoomToDatabase = async (room, video) => {

        var roomObj = {
            name: room.name,
            city: room.city_show || '',
            rtmp: video.play_rtmp,
            // hls: video.play_hls,
            hls: "",
            pic: picRoot + (room.attachment_url || ""),
            count: video.player_count || 0,
            gn: room.has_guang_nian || 0,
            fee: room.live_fee || 0,
            payType: room.live_pay_type || 0,
            rid: room.id,
        };
        var salt = 'bkflg(003_lkjdkf12';
        var dataToSign = roomObj.name + roomObj.city + roomObj.rtmp + roomObj.hls + roomObj.pic + roomObj.count + roomObj.gn
            + roomObj.fee + roomObj.payType + roomObj.rid + salt;
        var signature = generateSignature(dataToSign);

        var postData = JSON.stringify({
            name: roomObj.name,
            city: roomObj.city,
            rtmp: roomObj.rtmp,
            hls: roomObj.hls,
            pic: roomObj.pic,
            count: roomObj.count,
            gn: roomObj.gn,
            fee: roomObj.fee || 0,
            payType: roomObj.payType || 0,
            rid: roomObj.rid,
            sig: signature
        });
        if (textView) {

            // 假设你已经向textView添加了文本
            textView.append(String.$new(getTimestamp() + roomObj.rid + "\r\n"));
            // 滚动到底部
            textView.scrollTo(0, textView.getBottom());
        }

        postRequest('http://107.172.142.26:61337/v8/rooms', postData);

    }
    // Find the SuperNetworkKitPlugin class
    var SuperNetworkKitPlugin = Java.use('com.example.super_network_kit.SuperNetworkKitPlugin');

    // Global variable to store the connID for sendString
    var connIDForSendString = null;

    var pluginInstance = null;

    const sendTextToWs = (text) => {
        // console.log(getTimestamp(), text);
        pluginInstance.sendString(connIDForSendString, text);
    }


    const getRoomList = (pageIndex = 1) => {
        console.log(getTimestamp(), "get /room/list");
        const body = { "body": { "page_index": pageIndex, "menu_id": 93, "channel_id": "juzi", "app_version": "20240823002" }, "random": mRandom++, "method": "POST", "uri": "/room/list" };
        const text = JSON.stringify(body);
        randomTempMap.set(body.random, body);
        sendTextToWs(text);
        return body.random;
    }


    const getListByIds = (ids) => {
        console.log(getTimestamp(), "getListByIds", ids.join(","));
        const body = { "body": { "ids": ids.join(","), "channel_id": "juzi", "app_version": "20240823002" }, "random": mRandom++, "method": "POST", "uri": "/room/get_list_by_ids" };
        const text = JSON.stringify(body);
        randomTempMap.set(body.random, body);
        sendTextToWs(text);
        return body.random;
    }

    const joinRoom = (room) => {
        console.log(getTimestamp(), "joinRoom", room.id);
        const body = { "body": { "live_pay_type": room.live_pay_type, "menu_id": room.menu_id, "room_id": room.id, "no_need_ticket": 1, "app_version": "20240823002" }, "random": mRandom++, "method": "POST", "uri": "/room_push/join" };
        const text = JSON.stringify(body);
        randomTempMap.set(body.random, body);
        sendTextToWs(text);
        return body.random;
    }


    const handleRoomJoin = (body) => {
        console.log(getTimestamp(), "handleRoomJoin");
        const room = body["room"];

        const video = body["video"];
        // console.log(getTimestamp(), "room", JSON.stringify(room));
        // console.log(getTimestamp(),"roomDetail:", room.id, room.name, video.play_rtmp, video.play_hls, video.play_flv);
        roomsPlayUrl.set(room.id, { "url": video["play_rtmp"], "time": Date.now() });
        singleSaveRoomToDatabase(room, video);
    }

    const handleRoomList = (body, pageIndex) => {
        console.log(getTimestamp(), "handleRoomList");
        const ids = body["result"];
        if (ids) {
            const hasNext = body["has_next"];
            console.log(getTimestamp(), "size:", ids.length, hasNext);
            if (hasNext == 1) {
                getRoomList(pageIndex + 1);
            }
            const random = getListByIds(ids);
        }
    }

    const handleRoomByIds = (body, random) => {
        console.log(getTimestamp(), "handleRoomByIds");
        const rooms = body["rooms"];
        //console.log(getTimestamp(),"rooms:", JSON.stringify(rooms));

        rooms.forEach(room => {
            const now = Date.now();
            const urlObj = roomsPlayUrl.get(room.id);


            if (urlObj == null || now - urlObj["time"] > 50000) {
                joinRoom(room);
            }
        });

    }

    const parseMessage = (text) => {
        // console.log(getTimestamp(), "parseMessage", text.length);

        if (text.length > 6) {
            // console.log(getTimestamp(), "parseMessage", text.length);
            const parseD = JSON.parse(text);
            const data = parseD["data"];
            const random = parseD["data"]["random"];
            const randomSend = randomTempMap.get(random);
            // console.log(getTimestamp(), "random", random);
            if (randomSend != null || random == 1) {
                randomTempMap.delete(random);
                const body = safeParse(data["body"]);
                // console.log(getTimestamp(),data["body"]);
                if (random == 1) {
                    handleConfig(body);
                } else {
                    const sendBody = randomSend["body"];
                    const sendUri = randomSend["uri"];

                    if (sendUri === "/room/list") {
                        handleRoomList(body, sendBody["page_index"]);
                    } else if (sendUri === "/room/get_list_by_ids") {
                        handleRoomByIds(body, random);
                    } else if (sendUri === "/room_push/join") {
                        handleRoomJoin(body);
                    }
                }

            }
        }

    }

    SuperNetworkKitPlugin["initConnection"].implementation = function (str, str2, z) {
        console.log(getTimestamp(), `SuperNetworkKitPlugin.initConnection is called: str=${str}, str2=${str2}, z=${z}`);
        let result = this["initConnection"](str, str2, z);
        console.log(getTimestamp(), `SuperNetworkKitPlugin.initConnection result=${result}`);
        // Check if str2 is not null
        if (str2 !== null) {
            console.log(getTimestamp(), 'str2 is not null, storing connID:', result);
            connIDForSendString = result;  // Store the connID
        }
        return result;
    };

    let MethodChannel = Java.use("io.flutter.plugin.common.MethodChannel");
    MethodChannel["invokeMethod"].overload('java.lang.String', 'java.lang.Object').implementation = function (str, obj) {
        // console.log(getTimestamp(), `MethodChannel.invokeMethod is called: str=${str} ${("onMessage:" + connIDForSendString) == str}`);
        if (("onMessage:" + connIDForSendString) == str) {
            parseMessage(obj.toString());
        }

        this["invokeMethod"](str, obj);
    };

    // Hook the onAttachedToEngine method to get the instance
    SuperNetworkKitPlugin.onAttachedToEngine.implementation = function (flutterPluginBinding) {
        // Call the original implementation
        this.onAttachedToEngine(flutterPluginBinding);

        // Store the instance of the plugin
        pluginInstance = Java.retain(this);

        console.log(getTimestamp(), 'Plugin instance obtained:', pluginInstance);


        const v = function () {
            Java.perform(function () {
                try {
                    getRoomList();
                } catch (e) {
                    console.log(getTimestamp(), 'Error calling sendString:', e);
                }
            });
        }

        setTimeout(v, 10000);
        setInterval(v, 300000);
    };
});

// }



// setImmediate(function () {
//     //延迟1秒调用Hook方法
//     setTimeout(test, 1);
// });