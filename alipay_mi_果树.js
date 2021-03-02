setScreenMetrics(1080,2340);
var restart = 0;
var logfilename = "./log/log_mi_" + new Date().toLocaleDateString() + ".txt";
var nowscript = engines.myEngine().getSource();
var account_list = ["138******00","138******00","example@163.com","example@qq.com","example@163.com"];
start();

//开始程序
function start(){
    stop_other_engines();
    wake(); 
    main();
}

//主程序
function main(){
    var x = 0;
    create_log();
    toast_log(nowscript);
    clean_reopen_alipay();
    click("首页");
    switch_account(account_list[0]);
    tree();
    remove_app("支付宝");
    toast_log ("🤞🤞🤞Done, 美滋滋~🤞🤞🤞");
    toast_log("================================================================",1);
    home();
    close_screen();
    exit();
}

//悄咪咪偷能量啦~
function stole_energy(name,chk){
    var x = 0;
    click("蚂蚁森林",0);
    toast_log("😏😏进入蚂蚁森林😏😏");
    sleep(3000);
    check_elements(1,"最新动态");
    click_close();
    sleep(1000);
    goto_somewhere(name,1200,500,1000);
    for (var i = 0; i < 100; i += 1){
        x = 0;
        while (!textEndsWith("TA收取你").exists()){
            x += 1;
            check_dead_loops(x);
            click_close();
            if (textEndsWith("返回我的森林").exists()){
                click("返回我的森林",0);
                sleep(2000);
                backto_mainpage();
                return 1;
            }
            toast_log("进入他人庄园失败，停2s");
            sleep(2000);
        }
        click_energy("TA收取你",1);
        if (new Date().getHours() == 7){
            if (new Date().getMinutes() >= 4 && chk < 2){
                backto_mainpage();
                return 2;
            }
            if (new Date().getMinutes() >= 16 && chk < 3){
                backto_mainpage();
                return 3;
            }
            if (new Date().getMinutes() >= 32 && chk < 4){
                backto_mainpage();
                return 4;
            }
        }
        click_close();
        toast_log("🙈🙈有请下一位受害者🙈🙈");
        click(960 + random(-50,50),1560 + random(-20,20));
        sleep(1500);
    }
    click_close();
    sleep(2000);
}

//浇水🚿🚿
function go_watering(name){
    var x = 0;
    click("首页");
    sleep(1000);
    reject_update();
    toast_log("🚿🚿进入蚂蚁森林🚿🚿");
    click("蚂蚁森林");
    sleep(3000);
    check_elements(1,"最新动态");
    goto_somewhere(name);
    sleep(2000);
    check_elements(1,"TA收取你");
    toast_log("🚿🚿开始浇水~🚿🚿");
    for (var i = 0; i < 3; i+=1){
    	   toast_log("🚿🚿第" + (i + 1) +"次🚿🚿");
        click(750 + random(-20,20),1560 + random(-20,20));
        sleep(1500);
        click("66克");
        sleep(500);
        click("浇水送祝福");
        sleep(1500);
    }
    goback(2);
    toast_log ("🚿🚿next one~🚿🚿");
    sleep(2000);
}

//喂鸡🐤
function feed(){
    var x = 0;
    sleep(2000);
    click("蚂蚁庄园");
    toast_log("🐤🐤进入蚂蚁庄园🐤🐤");
    sleep(2000);
    check_elements(0,"com.alipay.mobile.nebula:id/h5_tv_title");
    click_close();
    toast_log("🐤🐤鸡舍ing🐤🐤");
    click(550 + random(-20,20),1340 + random(-20,20)); //点小鸡or找小鸡
    sleep(2000);
    click(850 + random(-20,20),1700 + random(-20,20));
    click(400 + random(-20,20),1700 + random(-20,20));
    sleep(2000);
    click(627,1390);
    sleep(1500);
    click(930 + random(-20,20),2180 + random(-20,20)); //喂饲料
    sleep(1500);
    click_close();
    toast_log("🐤🐤成功喂养🐤🐤");
    sleep(1500);
    click(450 + random(-20,20),1985 + random(-20,20)); //点铲子
    sleep(1500);
    click(256 + random(-70,90),1300 + random(-70,90)); //领肥料
    toast_log("🐤🐤领取肥料🐤🐤");
    backto_mainpage();
}

//果树🌚
function tree(){
    var x = 0;
    sleep(2000);
    click("蚂蚁庄园");
    toast_log("🐤🐤进入蚂蚁庄园🐤🐤");
    sleep(2000);
    check_elements(0,"com.alipay.mobile.nebula:id/h5_tv_title");
    click_close();
    sleep(1000);
    toast_log("进入农场");
    click(150 + random(-20,20),1370 + random(-20,20)); //进入农场
    toast_log("领取肥料");
    sleep(2000);
    check_elements(2,"添加到首页");
    click_close();
    sleep(1500);
    click(770 + random(-20,20),1500 + random(-20,20)); //领肥料
    sleep(1000);
    backto_mainpage();  
}

//收集能量~
function collect_myEnergy(num){
    var x = 0;
    sleep(1000);
    click("蚂蚁森林",0);
    toast_log("🐱🐱进入蚂蚁森林🐱🐱");
    sleep(3000);
    click_close();
    toast_log("🐱🐱收能量🐱🐱");
    click_energy("最新动态",1);
    if (num){
        click_free_energy();
    }
    toast_log("🐱🐱能量已收完🐱🐱");
    backto_mainpage();
}

//点击能量
function click_energy(mess,num){
    if (!num) { num = 1; }
    var click_list = [[215,730],[265,705],[315,665],[375,635],[445,610],[515,610],[590,610],[670,635],[750,665],[800,695],[850,730]]
    check_elements(1,mess);
    for (i = 0; i < num; i += 1){
        for (x = 0; x < 11; x += 1){
            click(click_list[x][0],click_list[x][1]);
        }
        if (click_close()){
            toast("😏😏遇到小可爱啦😏😏");
            sleep(500);
            for (x = 0; x < 11; x += 1){
                click(click_list[x][0],click_list[x][1]);
                click_close();
            }
        }
        sleep(1500);
    }
}

//点击浇水的能量
function click_free_energy(){
    for (var i = 0; i < 20; i += 1){
        click(270 + random(-20,20),500 + random(-20,20));
        click(450 + random(-20,20),500 + random(-20,20));
        sleep(200);
    }
}

//寻找并进入指定位置
function goto_somewhere(name,distan,tim,slp){
    if (!distan){distan = 800}
    if (!tim){tim = 500}
    if (!slp){slp = 2000}
    sleep(1500);
    toast_log("😏😏寻找" + name + "😏😏");
    if (text("总排行榜").exists()){
        click("总排行榜");
        sleep(1000);
    }
    if (text("查看更多好友").exists()){
        click("查看更多好友");
        sleep(1000);
    }
    for (var i = 0; i < 20; i += 1){
        sleep(slp);
        if (text(name).exists()){
            if (text(name).findOne().bounds().centerY() < 2333){
                var cl = text(name).findOne();
                toast_log("😏😏goto " + name + "😏😏");
                if (!click(name,0)){
                    sleep(1000);
                    click(cl.bounds().centerX(),cl.bounds().centerY());
                }
                sleep(slp);
                break;
            }
        }
        swipe(500,2000,500,2000-distan,tim);
    }
    click_close();
}

//切换账号
function switch_account(account){
    toast_log("切换至" + account);
    check_elements(1,"我的");
    click("我的");
    sleep(1500);
    if (text(account).exists()){
        click("首页");
        sleep(1500);
        reject_update();
        return true;
    }
    click("我的");
    check_elements(2,"设置");
    var setting = desc("设置").findOne();
    if (setting){
        click(setting.bounds().centerX(), setting.bounds().centerY());
    }
    sleep(1000);
    check_elements(1,"换账号登录");
    click("换账号登录");
    sleep(1000);
    check_elements(1,account);
    click(account);
    sleep(1500);
    click_close();
    reject_update();
    toast_log("切换成功");
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

//打开支付宝并清除重新打开
function clean_reopen_alipay(){
    launchApp("支付宝");
    sleep(1000);
    remove_app("支付宝");
    home();
    sleep(1000);
    while (!open_alipay()){
        toast_log("启动支付宝失败");
        x += 1;
        check_dead_loops(x);
    }
}

//打开支付宝
function open_alipay(){
    launchApp("支付宝");
    sleep(1000);
    if (check_elements(1,"首页")){
        toast_log("启动支付宝成功");
    }
    return true;
}

//切换至双开支付宝
function switch_another_alipay(){
    home();
    sleep(1500);
    click(666,500);
    sleep(2000);
    check_elements(1,"首页");
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

//返回至首页
function backto_mainpage(){
    for (var y = 0; y < 10; y += 1){
        sleep(500);
        reject_update();
        if (text("首页").exists()){
            if (text("扫一扫").exists()){
                return true;
            }else{
                click("首页");
                sleep(1000);
                return true;
            }
        }
        goback(1);
    }
}

//拒绝更新
function reject_update(){
    sleep(500);
    if (text("稍后再说").exists()){
        click("稍后再说");
    }
}

//检查元素是否存在
function check_elements(mess,typ,tim){
    if (!tim) { tim = 3000; }
    if (!typ) { typ = 1; }
    var x = 0;
    switch (typ){
        case 3:
            while (!packageName(mess).exists()){
                x += 1;
                check_elements_sub(x,mess,tim);
            }
            return true;
        case 4:
            while (!className(mess).exists()){
                x += 1;
                check_elements_sub(x,mess,tim);
            }
            return true;
        case 0:
            while (!id(mess).exists()){
                x += 1;
                check_elements_sub(x,mess,tim);
            }
            return true;
        case 1:
            while (!text(mess).exists()){
                x += 1;
                check_elements_sub(x,mess,tim);
            }
            return true;
        case 2:
            while (!desc(mess).exists()){
                x += 1;
                check_elements_sub(x,mess,tim);
            }
            return true;
    }
}

//查看元素是否存在_子模块
function check_elements_sub(num,mess,tim){
    click_close();
    toast_log("不存在:" + mess + "，停" + tim/1000 + "秒");
    if (num == 6){
        reject_update();
        goback(1);
    }
    check_dead_loops(num);
    sleep(tim);
}

//按类型点击元素
function clk(mess,typ,slp){
    if (!slp) { slp = 0; }
    if (!typ) { typ = 1; }
    sleep(slp);
    switch (typ){
        case 0:
            bnd = id(mess).findOne(2000);
            break;
        case 1:
            bnd = text(mess).findOne(2000);
            break;
        case 2:
            bnd = desc(mess).findOne(2000);
            break;
    }
    if (bnd){
        if(!click(mess,0)){
            click(bnd.bounds().centerX(),bnd.bounds().centerY());
            return true;
        }else{ return true; }
    }else{ toast_log("寻找 " + mess + " 失败"); }
}

//输出日志
function toast_log(mess,num){
    if (!num) { num = 0; }
    switch (num){
        case 0:
            dat = get_time();
            toastLog(mess);
            files.append(logfilename,dat + mess + "\n",encoding='utf-8');
            break;
        case 1:
            files.append(logfilename,mess + "\n",encoding='utf-8');
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

//循环返回
function goback(num){
    for (var i = 0; i < num; i += 1){
        back();
        sleep(1500);
    }
}

//点击关闭按钮
function click_close(){
    sleep(500);
    while(text("关闭").exists()){
        click("关闭");
        return true;
    }
}

//死循环退出机制
function check_dead_loops(num){
    if (num > 10){
        toast_log("🤔🤔🤔死循环，强制退出！！！咱们日志见🌚🌚🌚");
        home();
        openAppSetting(getPackageName("支付宝"));
        while(!click("结束运行"));
        sleep(2000);
        while(!click("确定"));
        sleep(500);
        remove_app("支付宝");
        home();
        sleep(2000);
        check_ending_js(restart);
        restart += 1;
        toast_log(">>>！！【重启脚本第" + restart + "次】！！<<<");
        main();
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

//结束程序
function check_ending_js(ending){
    if (ending > 3){
        home();
        toast_log(">>>！！！【多次出错，退出脚本】！！！<<<");
        exit();
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