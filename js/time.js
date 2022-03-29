// 현재시간 출력
function tictok(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function showclock() {
    var d = new Date();
    var date = d.getDate();
    var weekaday = ['일', '월', '화', '수', '목', '금', '토'];
    var week = weekaday[d.getDay()];
    var month = tictok(d.getMonth() + 1);
    var x = document.getElementsByClassName('current_day')[0];
    var h = tictok(d.getHours());
    var m = tictok(d.getMinutes());
    x.innerHTML = month + "." + date + "." + " " + week + "  " + h + ":" + m;
}