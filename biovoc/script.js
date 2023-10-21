
var arr=[],arr_order=[],q,n,ansl;


function check(){
    //    content.innerHTML="";
    var score=0,correct=[];
    for(var i=0;i<10;++i){
        var id="ans"+(i+1);
        var x=document.getElementById(id).value;
        if(ansl[arr[i]]==x)++score,correct[i]=1;
        else correct[i]=0;
    }
    var out="<title>LV1</title><h2>LV1</h2><h3>給定對應的中文，請輸入英文</h3>score:";
    out+=score*10+"/100<br>";
    for(var i=0;i<10;++i){
        var id="ans"+(i+1);
        var x=document.getElementById(id).value;
        
        out+=(i+1);out+="."+q[arr[i]];out+="<br>";
        out+='<input type="text" input id="'+id+'" value="'+x+'">';
        if(correct[i])out+='<font color="green">correct</font><br>';
        else out+='<font color="red">incorrect</font><br>the answer is:'+ansl[arr[i]];
        out+="<br><br>";
    }
    //out+='<button onClick="window.location.reload();">Back</button>';
    out+='<button onClick="imple();">Back</button>';
        
    //document.write(out2);
    content.innerHTML=out;
}

function check_order(){
    var from=getCookie("from");
    var to=getCookie("to");
    var score=0,correct=[];
    for(var i=from-1;i<from-1+10;++i){
        var id="ans"+(i-from+1);
        var x=document.getElementById(id).value;
        if(ansl[arr_order[i-from+1]]==x)++score,correct[i-from+1]=1;
        else correct[i-from+1]=0;
    }
    var out="<title>LV1</title><h2>LV1</h2><h3>給定對應的中文，請輸入英文</h3>score:";
    out+=score*10+"/100<br>";
    for(var i=from-1;i<from-1+10;++i){
        var id="ans"+(i-from+1);
        var x=document.getElementById(id).value;
            
        out+=(i-from+2);out+="."+q[arr_order[i-from+1]];out+="<br>";
        out+='<input type="text" input id="'+id+'" value="'+x+'">';
        if(correct[i-from+1])out+='<font color="green">答案正確！</font><br>';
        else out+='<font color="red">答案錯誤...</font><br>正確答案是:'+ansl[arr_order[i-from+1]];
        out+="<br><br>";
    }
//    out+='<button onClick="window.location.reload();">Back</button>';
    out+='<button onClick="imple();">返回</button>';
        
//	document.write(out2);
    content.innerHTML=out;
}

function imple(){
    build_order();
}

function list(){
    var from=getCookie("from");
    var to=getCookie("to");    
    var out="<title>LV1</title><h2>LV1</h2><h3>Vocabularies List</h3>";
    out+="<h3>Range from "+from+" to "+(to)+"</h3><br>";
    out+='<table border="1">';
    for(var i=from-1;i<to;++i){
        out+='<tr>';
        out+="<td>"+(i+1)+".</td><td>"+q[i]+"</td><td>"+ansl[i]+"</td>";
        out+='</tr>';
    }

//    out+='<button onClick="window.location.reload();">Back</button>';
    out+='<button onClick="imple();">Back</button>';
    content.innerHTML=out;
}
    

function order(){
    var out="<title>LV1</title><h2>LV1自訂範圍模式</h2><h3>給定對應的中文，請輸入英文</h3><br>";
    var start=prompt("開始編號");
    var end=prompt("結束編號");
        
    if(start<1 || end>n || start>end){
        alert("輸入範圍錯誤");
        
        return;
    }
    if(end-start+1<10){
        alert("單字數量不可少於10");
        
        return;
    }
    document.cookie='from='+start;
    document.cookie='to='+end;
    imple();

}

function build_order(){
    q=question;ansl=a;n=n1;
    var from=getCookie("from");
    var to=getCookie("to");
    if(getCookie("level")==-1)
        var out="<title>自訂範圍</title><h2>自訂範圍, 從 "+from+" 到 "+to+"</h2><h3>給定對應的中文，請輸入英文</h3><br>";
    else
        var out="<title>LV"+getCookie("level")+"</title><h2>LV"+getCookie("level")+", 從 "+from+" 到 "+to+"</h2><h3>給定對應的中文，請輸入英文</h3><br>";
    

    for(var i=from-1;i<to;++i)arr_order[i-from+1]=i;
    var n=to-from+1;
    arr_order.sort(function(){
        return (0.5-Math.random());
    });                
    
        
    for(var i=from-1;i<from-1+10;++i){
        var id="ans"+(i-from+1);   
        out+=(i-from+2);out+="."+q[arr_order[i-from+1]];out+="<br>";
        out+='<input type="text" input id="'+id+'" style:"height=10px"><br><br><br>';
    }
    out+='<button name="submit" onClick="check_order()">提交答案！</button>&nbsp&nbsp';
    out+='<button name="submit" onClick="list()">顯示單字表</button>&nbsp&nbsp';
    
    content.innerHTML=out;
    document.cookie='level=-1';
}            

function build(){
//     document.cookie='from='+1;
//     document.cookie='to='+n;
    var from=getCookie("from");
    var to=getCookie("to");
    for(var i=0;i<n;++i)arr[i]=i;
    arr.sort(function(){
        return (0.5-Math.random());
    });            
    var out="<title>LV"+getCookie("level")+"</title><h2>LV"+getCookie("level")+"</h2><h3>給定對應的中文，請輸入英文</h3><br>";
    var from=1;var to=10;
    for(var i=0;i<10;++i){
        var id="ans"+(i+1);
        out+=(i+1);out+="."+q[arr[i]];out+="<br>";
        out+='<input type="text" input id="'+id+'"><br><br><br>';
    }
    out+='<button name="submit" onClick="check()">Submit</button>&nbsp&nbsp';
    out+='<button name="submit" onClick="order()">自訂</button>&nbsp&nbsp';
    out+='<button name="submit" onClick="list()">List</button>&nbsp&nbsp';
    //document.write(out);
    content.innerHTML=out;
}

function getCookie(name) {
    function escape(s) { return s.replace(/([.*+?\^$(){}|\[\]\/\\])/g, '\\$1'); }
    var match = document.cookie.match(RegExp('(?:^|;\\s*)' + escape(name) + '=([^;]*)'));
    return match ? match[1] : null;
}

function select_level(){
    var i=document.getElementById("level").value;
    document.cookie='level='+i;
    var s,e;
    if(i==0)s=1,e=29;
    if(i==1)s=93,e=208;
    if(i==2)s=1,e=209;
    if(i==-1)location.reload();

    document.cookie='from='+s;
    document.cookie='to='+e;
    imple();
}

function record(){
    alert(11);

    var x=document.getElementById(rec).value;
    alert(x);
}

var all_wrong=[],all_n;

function all_init(){
    all_n=0;
    q=question;ansl=a;n=n1;
    for(var i=0;i<n;++i)arr_order[i]=i,all_wrong[i]=0;
    arr_order.sort(function(){
        return (0.5-Math.random());
    });             
    var out='<title>Challenge Mode!</title>';
    out+='<h2>挑戰模式！單字無重複</h2>';
    out+='<h3>說明：</h3>';
    out+='本次挑戰共分有'+n+'題，分成10次考，每次至多10題。測驗完畢後系統會告知你尚不熟的單字，可以多加練習！<br><br>';
    out+='<button name="submit" onclick="build_order_all(1)">開始挑戰！</button>';
    content.innerHTML=out;
    document.cookie="round=0";
}

function build_order_all(){
    var round=getCookie('round');
    round++;
    document.cookie="round="+round;
    var out="<title>Challenge Mode!</title><h2>Round "+round+"</h2>";
    var f=round*10-9,t=round*10;

    for(var i=f;i<=t && i<=n;++i){
        all_n++;
        var id="ans"+i;   
        out+=i;out+="."+q[arr_order[i-1]];out+="<br>";
        out+='<input type="text" input id="'+i+'" style:"height=10px"><br><br><br>';
    }

    out+='<button name="submit" onClick="check_all()">提交答案！</button>&nbsp&nbsp';
    
    content.innerHTML=out;
    document.cookie='level=-1';
}  


function check_all(){
    var round=getCookie('round');
    var score=0,correct=[];
    var f=round*10-9,t=round*10;
    //alert(2);
    for(var i=f;i<=t && i<=n;++i){
        var id="ans"+i;
        var x=document.getElementById(i).value;
        if(ansl[arr_order[i-1]]==x)++score,correct[i-1]=1;
        else correct[i-1]=0,all_wrong[i-1]=1;
    }
    var out="<title>Challenge Mode!</title><h2>Round "+round+"</h2><h3>給定對應的中文，請輸入英文</h3>score:";
    out+=score*10+"/100<br>";
    for(var i=f;i<=t && i<=n;++i){
        var id=i;
        var x=document.getElementById(id).value;
            
        out+=i;out+="."+q[arr_order[i-1]];out+="<br>";
        out+='<input type="text" input id="'+id+'" value="'+x+'">';
        if(correct[i-1])out+='<font color="green">答案正確！</font><br>';
        else out+='<font color="red">答案錯誤...</font><br>正確答案是:'+ansl[arr_order[i-1]];
        out+="<br><br>";
    }
//    out+='<button onClick="window.location.reload();">Back</button>';

    if(t>=n){
        out+='<h5><font color="red">您已作答完畢，請點選結算按鈕</font></h5>';
        out+='<button onclick="end_all()">結算</button>';
    }else{
        out+='<button onClick="build_order_all()">下一階段</button>&nbsp&nbsp';
        out+='<button onclick="end_all()">中途而廢</button>';        
    }

        
//	document.write(out2);
    content.innerHTML=out;
}

function to2bits(flt) {
    if (parseFloat(flt) == flt) {
        return Math.round(flt * 100) / 100; // 到2位小數
    }
    else
        return 0;
}


function end_all(){
    var correct_n=all_n;
    for(var i=1;i<=all_n;++i){
        if(all_wrong[i-1])--correct_n;
    }
    var out='<title>結算</title><h2>挑戰模式結算</h2><b>';
    out+='題庫題數：'+n+'題<br>';
    out+='答題題數：'+all_n+' 題<br>';
    out+='答題比例：'+to2bits((all_n/n)*100)+'％<br>';
    out+='答對題數：'+correct_n+' 題<br>';
    out+='正確率：'+to2bits((correct_n/all_n)*100)+'％<br>';
    out+='整體熟悉度：'+to2bits((correct_n/n)*100)+'％<br>';
    out+='錯誤單字表：';
    out+='</b>';
    out+='<table border="1">';
    for(var i=1;i<=all_n;++i){
        if(!all_wrong[i-1])continue;
        out+='<tr>';
        out+="<td>"+(i)+".</td><td>"+q[arr_order[i-1]]+"</td><td>"+ansl[arr_order[i-1]]+"</td>";
        out+='</tr>';
    }
    out+='</table><br>';
    out+='<button onClick="location.reload()">返回</button>';
    content.innerHTML=out;
}
