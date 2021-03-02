setScreenMetrics(1080,2340);
var logfilename = "./log/log_mi_" + new Date().toLocaleDateString() + ".txt";

main();

//主程序
function main(){
    create_log();
    if (device.isScreenOn()){
        remove_app("支付宝");
        close_screen();
    }
    stop_other_engines();
    toast_log(get_time() + "================结束所有脚本================", 1);
    engines.myEngine().forceStop();
}

//停止其他脚本
function stop_other_engines(){
    var num = engines.all().length;
    var engines_list = engines.all();
    for (var x = 0; x < num; x += 1){
        if (engines_list[x] != engines.myEngine()){
    	        engines_list[x].forceStop();
        }
    }
}

//移除app
function remove_app(appname){
    home();
    sleep(1000);
    recents();
    sleep(1500);
    if (text(appname).exists()){
        var app = text(appname).findOne();
        swipe(app.bounds().centerX(), app.bounds().centerY(), 1080, app.bounds().centerY(),300);
    }
    sleep(1000);
    home();
}

//输出日志
function toast_log(mess,num){
    if (!num) { num = 0; }
    switch (num){
        case 0:
            dat = get_time();
            toastLog(mess);
            files.append(logfilename, dat + mess + "\n", encoding='utf-8');
            break;
        case 1:
            files.append(logfilename, mess + "\n", encoding='utf-8');
            break;
    }
}

//获取当前时间
function get_time(){
    var tim = new Date();
    date = tim.toLocaleDateString();
    time = tim.toTimeString().split("GMT")[0];
    return (date + time);
}

//唤醒屏幕及解锁
function wake(){
    device.wakeUpIfNeeded();
    if (currentPackage()=='com.android.systemui' || currentPackage()=='com.miui.aod'){
        device.wakeUpIfNeeded();
        sleep(1000);
        swipe(540,1500,540,300,500);
        sleep(500);
        gesture(1000,[540,1375],[250,1375],[540,1085],[830,1375],[540,1665],[250,1665],[250,1085],[830,1085],[830,1665]);
    }
}

//创建日志文件
function create_log(){
    if (files.createWithDirs(logfilename)){
        toast("创建" + logfilename + "成功");
    }
}

//锁屏
function close_screen(){
    sleep(1500);
    quickSettings();
    sleep(1000);
    var w = desc("锁屏").findOne(3000);
    if(w){
        click(w.bounds().centerX(),w.bounds().centerY());
    }
}

//停止其他脚本
function stop_other_engines(){
    var num = engines.all().length;
    var engines_list = engines.all();
    for (var x = 0; x < num; x += 1){
        if (engines_list[x] != engines.myEngine()){
    	        engines_list[x].forceStop();
        }
    }
}
