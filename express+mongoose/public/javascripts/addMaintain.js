
(function () {
    var err = document.getElementsByClassName('err')[0];

    if(err.innerHTML != " "&& err.innerHTML != "" && err.innerHTML != null) {
        err.style.display = "block";
    }
    var form = document.getElementById('form_on');
    form.onsubmit = function () {
        var name = document.getElementById('name');
        // var backDate = document.getElementById('backDate');
        var reason = document.getElementById('reason');
        var end = document.getElementById('end');
        var user = document.getElementById('user');
        var money = document.getElementById('money');

        var reg = /^[0-9]*$/;

        if(name.value == "" || name.value == null) {
            name.value = "未命名都叫行唔郁";
        }
        if(reason.value == "" || reason.value == null) {
            reason.value = "大概是膨胀了";
        }
        if(end.value == "" || end.value == null) {
            end.value = "当然是完美啦";
        }
        if(user.value == "" || user.value == null) {
            user.value = "好人好事,不留名!!";
        }
        if(money.value == "" || money.value == null) {
            alert('维修费用不能不给!');
            return false;
        }
        else if(reg.test(money.value) == false) {
            alert("最后一行行输入数字啊, 喂!");
            return false;
        }
        return true;
    }
})();