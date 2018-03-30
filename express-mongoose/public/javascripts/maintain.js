var testArr = [];

function fix (index) {
    var alter = document.getElementsByClassName('alter');
    var test = document.getElementsByClassName('table_test');

    var name = document.getElementById('name');
    var reason = document.getElementById('reason');
    var end = document.getElementById('end');
    var user = document.getElementById('user');
    var money = document.getElementById('money');
    var id;

    var wins = document.getElementById('window');
    wins.style.display = 'block';

    var k;

    for(var i = 0; i < alter.length; i++) {
        if(index == alter[i]) {
            k = i;
            console.log(k);
            break;
        }
    }

    name.placeholder = "名称:" + test[k].childNodes[1].innerHTML;
    reason.placeholder = "维修原因:" + test[k].childNodes[3].innerHTML;
    end.placeholder = "维修质量:" + test[k].childNodes[5].innerHTML;
    user.placeholder = "维修人员:" + test[k].childNodes[7].innerHTML;
    money.placeholder = "付费金额:" + test[k].childNodes[9].innerHTML;

    id = index.dataset.id;
    testArr[0] = test[k].childNodes[1].innerHTML;
    testArr[1] = test[k].childNodes[3].innerHTML;
    testArr[2] = test[k].childNodes[5].innerHTML;
    testArr[3] = test[k].childNodes[7].innerHTML;
    testArr[4] = test[k].childNodes[9].innerHTML;
    testArr[5] = id;
}

(function (){
    var form = document.getElementById('form_on');
    form.onsubmit = function () {
        var name = document.getElementById('name');
        var reason = document.getElementById('reason');
        var end = document.getElementById('end');
        var user = document.getElementById('user');
        var money = document.getElementById('money');

        var reg = /^[0-9]*$/;

        if(name.value == '' || name.value == null) {
             name.value =  testArr[0];
        }
        if(reason.value == '' || reason.value == null) {
             reason.value =  testArr[1];
        }
        if(end.value == '' || end.value == null) {
             end.value =  testArr[2];
        }
        if(user.value == '' || user.value == null) {
             user.value =  testArr[3];
        }
        if(money.value == '' || money.value == null) {
             money.value =  testArr[4];
        }
        else if(reg.test(money.value) == false) {
            alert("最后一行行输入数字啊, 喂!");
            return false;
        }
        form.action = '/fixMaintain?id=' + testArr[5];
    }
})();
