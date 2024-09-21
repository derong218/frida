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





Java.perform(function () {



    // // Find the SuperNetworkKitPlugin class
    // var SuperNetworkKitPlugin = Java.use('com.example.super_network_kit.SuperNetworkKitPlugin');
    // let FlutterActivityAndFragmentDelegate = Java.use("io.flutter.embedding.android.FlutterActivityAndFragmentDelegate");
    // FlutterActivityAndFragmentDelegate["onCreateView"].implementation = function (layoutInflater, viewGroup, bundle, i, z) {
    //     console.log(`FlutterActivityAndFragmentDelegate.onCreateView is called: layoutInflater=${layoutInflater}, viewGroup=${viewGroup}, bundle=${bundle}, i=${i}, z=${z}`);
    //     let result = this["onCreateView"](layoutInflater, viewGroup, bundle, i, z);
    //     console.log(`FlutterActivityAndFragmentDelegate.onCreateView result=${result}`);
    //     return result;
    // };
    // console.log("SuperNetworkKitPlugin:", SuperNetworkKitPlugin);

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
        window.addFlags( 0x00000080);
        
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

        if(hasAdd){
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


            console.log(getTimestamp(),"rootView", rootView);
            // 添加View到根布局
            var viewGroup = Java.cast(rootView, ViewGroup);
            viewGroup.addView(overlayView, params);
            console.log(getTimestamp(), "覆盖视图已添加");
            hasAdd = true;
        });
    };
});
