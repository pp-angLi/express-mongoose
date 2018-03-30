
(function () {
    var err = document.getElementsByClassName('err')[0];

    if(err.innerHTML != " "&& err.innerHTML != ""&&err.innerHTML!=null) {
        err.style.display = "block";
    }
    var form = document.getElementById('form_on');
    form.onsubmit = function () {
        var name = document.getElementById('name');
        var money = document.getElementById('money');
        var kid = document.getElementById('kid');
        var method = document.getElementById('method');
        var address = document.getElementById('address');

        var reg = /^[0-9]*$/;

        if(name.value == "" || name.value == null) {
            name.value = "未命名都叫行唔郁";
        }
        if(money.value == "" || money.value == null) {
            money.value = "100000000";
        }
        else if(reg.test(money.value) == false) {
            alert("第二行输入数字啊, 喂!");
            return false;
        }
        if(kid.value == "" || kid.value == null) {
            kid.value = "行得快分行";
        }
        if(method.value == "" || method.value == null) {
            method.value = "捡来的不备注";
        }
        if(address.value == "" || address.value == null) {
            address.value = "上天了没位置";
        }
        return true;
    }

})();
