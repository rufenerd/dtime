function init(){
  var onClick = function(){
    var input = $('#inputField').val()
    var split = input.split(":");
    if($('input[value=oldToNew]').attr('checked')){
      return oldToNew(new Date("1970-01-01 " + input));
    } else {
      return newToOld(input);
    }
  };

  $('#convertButton').click( function(){
    $('#conversion').html(onClick());
  });

  $("#conversionLink").click( function(){
    $("#conversionLink").hide();
    $("#conversionTool").show();
  });

  setInterval('decTime()', 1);
}

function decTime() {
  var today = new Date();
  var dtime = oldToNew(today)
  $("#time").html($("<h1>").text(dtime));
}

function oldToNew(time) {
  var h = time.getHours();
  var m = time.getMinutes();
  var s = time.getSeconds();
  var ms = time.getMilliseconds();
  var ms_today = 3600000*h + 60000*m + 1000*s + ms;
  return formatTime(Math.round(ms_today / 864))
}

function newToOld(time) {
  var time = time.split(":")
  var h = parseInt(time[0]);
  var m = (time.length > 1) ? parseInt(time[1]) : 0;
  var s = (time.length > 2) ? parseInt(time[2]) : 0;

  var ms = (1000*h + 100*m + s) * 864;
  console.log(h,m,s,ms, new Date(ms));
  var dt = new Date(ms);
  return dt.toGMTString().split(" ")[4];
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