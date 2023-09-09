function showTime(){
    var d=new Date()
    var hr=d.getHours()
    var min=d.getMinutes()
    var sec=d.getSeconds()
    var session='AM'
    if(hr==0){
        hr=12
    }
    if(hr>12){
        hr=hr;  //24hr format
        //hr=hr-12  -> 12hr format
        session='PM'
    }
    hr=(hr<10)?'0'+hr:hr
    min=(min<10)?'0'+min:min
    sec=(sec<10)?'0'+sec:sec
    var time=hr+":"+min+":"+sec+" "+session
    document.getElementById('MyClockDisplay').textContent=time;
    setTimeout(showTime,1000)
}
showTime()