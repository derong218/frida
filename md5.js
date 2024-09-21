


function getTimestamp() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `[${hours}:${minutes}:${seconds}]`;
}



Java.perform(function () {

    var Activity = Java.use("android.app.Activity");
    var ViewGroup = Java.use('android.view.ViewGroup');
    var OverlayView = Java.use('android.view.View');
    var Color = Java.use('android.graphics.Color');


    var LayoutParams = Java.use('android.widget.FrameLayout$LayoutParams');

    Activity.onResume.implementation = function (savedInstanceState) {
        this.onResume();
        console.log(getTimestamp(), "onResume");
        // 获取当前 Activity
        var window = this.getWindow();
        // var windowManagerParams = window.getAttributes();

        // 添加 FLAG_KEEP_SCREEN_ON 标志
        // windowManagerParams.flags.$int = windowManagerParams.flags.$int | 0x00000080;
        window.addFlags(0x00000080);

        console.log(getTimestamp(), "FLAG_KEEP_SCREEN_ON added");

    }

    Activity.onPause.implementation = function (savedInstanceState) {
        this.onPause();
        console.log(getTimestamp(), "onPause");
    }

    var hasAdd = false;

    Activity.onStart.implementation = function (savedInstanceState) {

        console.log(getTimestamp(), "onStart");

        this.onStart();

        if (hasAdd) {
            return;
        }
        // 获取当前的Activity
        var activity = Java.cast(this, Activity);

        // 在UI线程上运行添加View的操作
        Java.scheduleOnMainThread(function () {
            // 获取根布局
            var rootView = activity.findViewById(0x01020002); // android.R.id.content

            // 创建一个新的 View

            var overlayView = OverlayView.$new(activity);

            // 设置背景色为半透明黑色

            overlayView.setBackgroundColor(Color.BLACK.value); // 使用 Color 类来生成颜色值

            // 设置布局参数为全屏


            var params = LayoutParams.$new(-1, -1);


            console.log(getTimestamp(), "rootView", rootView);
            // 添加View到根布局
            var viewGroup = Java.cast(rootView, ViewGroup);
            viewGroup.addView(overlayView, params);
            console.log(getTimestamp(), "覆盖视图已添加");
            hasAdd = true;
        });
    };


    var OkHttpClient = Java.use('okhttp3.OkHttpClient');
    var RequestBuilder = Java.use("okhttp3.Request$Builder");
    var RequestBody = Java.use('okhttp3.RequestBody');
 

    // Create OkHttpClient instance
    var client = OkHttpClient.$new();

    function generateSignature(dataToSign) {
        console.log(getTimestamp(),dataToSign);
        var Crypto = Java.use('java.security.MessageDigest');
        var String = Java.use('java.lang.String');
        
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
        console.log(getTimestamp(),postData);
        var JSON = Java.use('okhttp3.MediaType').parse('application/json; charset=utf-8');
        var body = RequestBody.create(postData, JSON);

        var request = RequestBuilder.$new()
            .url(url)
            .post(body)
            .build();

        var call = client.newCall(request);
        var response = call.execute(); // This method is synchronous

        console.log('Response Code:', response.code());
        console.log('Response Body:', response.body().string());
    }

    // Example data
    var room = {
        name: 'Example Room',
        city: 'Example City',
        rtmp: 'rtmp://example.com',
        hls: 'http://example.com/stream.m3u8',
        pic: 'http://example.com/pic.jpg',
        count: 10,
        gn: 5,
        rid: '123123'
    };
    
    var salt = 'bkflg(003_lkjdkf12';
    var dataToSign = room.name + room.city + room.rtmp + room.hls + room.pic + room.count + room.gn + room.rid + salt;
    var signature = generateSignature(dataToSign);
    
    var postData = JSON.stringify({
        name: room.name,
        city: room.city,
        rtmp: room.rtmp,
        hls: room.hls,
        pic: room.pic,
        count: room.count,
        gn: room.gn,
        rid: room.rid,
        sig: signature
    });
    
    postRequest('http://127.0.0.1:61337/api/rooms', postData);
});