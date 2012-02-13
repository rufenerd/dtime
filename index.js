function init(){
  $('#convertButton').click( function(){
    $('#conversion').html(convertTime(new Date("2012-2-12 " + $('#oldTime').val())));
  });
  decTime();
}

function decTime() {
  var today = new Date();
  var dtime = convertTime(today)
  document.getElementById('time').innerHTML = "<h1>"+dtime+"<h1>";
  setTimeout('decTime()');
}

function convertTime(time) {
  var h = time.getHours();
  var m = time.getMinutes();
  var s = time.getSeconds();
  var ms = time.getMilliseconds();
  var ms_today = 3600000*h + 60000*m + 1000*s + ms;
  return formatTime(Math.round(ms_today / 864))
}

function formatTime(time) {
  var addColons = function(s){
    h = s.slice(0,2);
    m = s.slice(2,3);
    s = s.slice(3,5);
    return [h,m,s].join(":");
  }
  var dtime = time.toString();
  while (dtime.length < 5){ dtime = "0" + dtime; }
  return addColons(dtime);
}