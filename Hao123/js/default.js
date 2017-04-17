/* 
* @Author: anchen
* @Date:   2015-12-09 14:15:24
* @Last Modified by:   anchen
* @Last Modified time: 2016-01-04 16:37:01
*/

var weather=document.getElementById("weatherv2");//获取天气id
weather.onmouseenter=function(){
    weather.className +="colweather_hover ";//添加clsss
}
weather.onmouseleave=function(){
    weather.className=weather.className.replace("colweather_hover ","");
}
var weather_city;
var city_div=document.getElementById("city"); //获取城市显示或隐藏部分
if(weather.childNodes[0].nodeType==1){
    weather_city=weather.childNodes[0];
}else{
    weather_city=weather.childNodes[1];
}
weather_city.onclick=function(){
    // alert(city_div.style.display);
    if(city_div.style.display=="block"){
        city_div.style.display="none";
        weather.className=weather.className.replace("colweather-active ","");
    }else{
        city_div.style.display="block";
        weather.className+="colweather-active ";
    }
}

//获取颜色
var color=document.getElementById("color"); //获取li颜色
var _wgt=document.getElementById("_wgt");//顶上绿色线条ul
var lifirst=_wgt.getElementsByTagName("li");
var spanlist=document.getElementById("spanlist").getElementsByTagName("span");//获取最后一排span列表
var new_color="#099e6a";
var active;
var cookiecolor=getCookie("color");
if(cookiecolor){
 _wgt.style.borderTopColor=cookiecolor;
lifirst[0].style.backgroundColor=cookiecolor;
new_color=cookiecolor;
}
setBottmColor();//为最后一栏设置颜色
color.onclick=function(e){    //点击颜色列表时触发事件
    new_color=e.target.getAttribute("mata");
     setCookie("color",new_color,111);
    _wgt.style.borderTopColor=new_color;
    lifirst[0].style.backgroundColor=new_color;
    setBottmColor();
   
}
for(var i=0;i<lifirst.length;i++){       
    lifirst[i].onmouseover=function(){
        this.style.color=new_color;
    }
    lifirst[i].onmouseout=function(){
        this.style.color="#333";
    }
}
function setBottmColor(){
for(var j=0;j<spanlist.length;j++){
    if(j>23){
    spanlist[j].style.color=new_color;
    }
}
}


//银行div显示与隐藏
var ilogo=document.getElementById("ilogo");//获取银行logo
var bank=document.getElementById("bank");//获取银行div
ilogo.onmouseover=function(){         //移动到图标时显示div
    bank.style.display="block";
    ilogo.style.backgroundPosition="-583px -751px";
}
ilogo.onmouseout=function(){  //移出图标时隐藏div
    bank.style.display="none";
    ilogo.style.backgroundPosition="-583px -683px";
}
bank.onmouseover=function(){     //移到div时显示div
    bank.style.display="block";
    ilogo.style.backgroundPosition="-583px -751px";
}
bank.onmouseout=function(){        //移出div时隐藏div
    bank.style.display="none";
    ilogo.style.backgroundPosition="-583px -683px";
}

function setCookie(name,value,iDay){  //设置cookie内容，并设置过期日期。
        var oDate=new Date();
        oDate.setDate(oDate.getDate()+iDay);
        document.cookie=name+"="+value+";expires="+oDate;
}
function getCookie(name){   //获取cookie中的值
    var arr=document.cookie.split("; ");
    for(var i=0;i<arr.length;i++){
        var arr2=arr[i].split("=");
        if(arr2[0]==name){
            return arr2[1];
        }
    }
    return false;
}
