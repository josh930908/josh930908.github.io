
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
            
        out+=(i+1);out+="."+q[arr_order[i]];out+="<br>";
        out+='<input type="text" input id="'+id+'" value="'+x+'">';
        if(correct[i-from+1])out+='<font color="green">correct</font><br>';
        else out+='<font color="red">incorrect</font><br>the answer is:'+ansl[arr_order[i]];
        out+="<br><br>";
    }
//    out+='<button onClick="window.location.reload();">Back</button>';
    out+='<button onClick="imple();">Back</button>';
    out+='<button onClick="build();">Back ot normal</button>';
        
//	document.write(out2);
    content.innerHTML=out;
}

function imple(){
    var from=getCookie("from");
    var to=getCookie("to");
    if(from==1 && to==n)build();
    else build_order();
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
        build();
        return;
    }
    if(end-start+1<10){
        alert("單字數量不可少於10");
        build();
        return;
    }
    document.cookie='from='+start;
    document.cookie='to='+end;
    build_order();

}

function build_order(){
    var from=getCookie("from");
    var to=getCookie("to");
    var out="<title>LV"+getCookie("level")+"</title>, Range from "+from+" to "+to+"<h2>LV"+getCookie("level")+"</h2><h3>給定對應的中文，請輸入英文</h3><br>";
    

    for(var i=from-1;i<to;++i)arr_order[i-from+1]=i;
    var n=to-from+1;
    arr_order.sort(function(){
        return (0.5-Math.random());
    });                
    
        
    for(var i=from-1;i<from-1+10;++i){
        var id="ans"+(i-from+1);   
        out+=(i-from+2);out+="."+q[arr_order[i]];out+="<br>";
        out+='<input type="text" input id="'+id+'"><br><br><br>';
    }
    out+='<button name="submit" onClick="check_order()">Submit</button>&nbsp&nbsp';
    out+='<button name="submit" onClick="list()">List</button>&nbsp&nbsp';
    content.innerHTML=out;
}            

    function build_old(){
        var arr=[];
        for(var i=0;i<n;++i)arr[i]=i;
        arr.sort(function(){
            return (0.5-Math.random());
        });            
        var out="<title>全範圍測驗模式</title><h2>LV1</h2><h3>給定對應的中文，請輸入英文</h3><br>";
        var from=1;var to=n;
        for(var i=0;i<10;++i){
            var id="ans"+(i+1);
            out+=(i+1);out+="."+q[arr[i]];out+="<br>";
            out+='<input type="text" input id="'+id+'"><br><br><br>';
        }
        out+='<button name="submit" onClick="check()">Submit</button>&nbsp&nbsp';
        out+='<button name="submit" onClick="order()">自訂</button>&nbsp&nbsp';
        out+='<button name="submit" onClick="list()">List</button>&nbsp&nbsp';
        //document.write(out);
        document.write(out);
    }

function build(){
    document.cookie='from='+1;
    document.cookie='to='+n;
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
    if(i==1)q=q1,ansl=ansl1,n=n1;
    if(i==2)q=q2,ansl=ansl2,n=n2;
    if(i==3)q=q3,ansl=ansl3,n=n3;
    if(i==4)q=q4,ansl=ansl4,n=n4;
    if(i==5)q=q5,ansl=ansl5,n=n5;
    if(i==6)q=q6,ansl=ansl6,n=n6;    
    if(i==-1)location.reload();
    

    build();
}