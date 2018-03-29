var testArr = [];

function fix (index) {
    var alter = document.getElementsByClassName('alter');
    var test = document.getElementsByClassName('table_test');

    var name = document.getElementById('name');
    var money = document.getElementById('money');
    var kid = document.getElementById('kid');
    var method = document.getElementById('method');
    var address = document.getElementById('address');
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
    money.placeholder = test[k].childNodes[3].innerHTML;
    kid.placeholder = "分类:" + test[k].childNodes[5].innerHTML;
    method.placeholder = "获取方法:" + test[k].childNodes[9].innerHTML;
    address.placeholder = "存放位置:" + test[k].childNodes[11].innerHTML;

    id = index.dataset.id;
    testArr[0] = test[k].childNodes[1].innerHTML;
    testArr[1] = test[k].childNodes[3].innerHTML;
    testArr[2] = test[k].childNodes[5].innerHTML;
    testArr[3] = test[k].childNodes[9].innerHTML;
    testArr[4] = test[k].childNodes[11].innerHTML;
    testArr[5] = id;
}

(function (){
    var form = document.getElementById('form_on');
    form.onsubmit = function () {
        var name = document.getElementById('name');
        var money = document.getElementById('money');
        var kid = document.getElementById('kid');
        var method = document.getElementById('method');
        var address = document.getElementById('address');

        var reg = /^[0-9]*$/;

        if(name.value == '' || name.value == null) {
             name.value =  testArr[0];
        }
        if(money.value == '' || money.value == null) {
             money.value =  testArr[1];
        }
        else if(reg.test(money.value) == false) {
            alert("第二行输入数字啊, 喂!");
            return false;
        }
        if(kid.value == '' || kid.value == null) {
             kid.value =  testArr[2];
        }
        if(method.value == '' || method.value == null) {
             method.value =  testArr[3];
        }
        if(address.value == '' || address.value == null) {
             address.value =  testArr[4];
        }
        form.action = '/fixThing?id=' + testArr[5];
    }
})();
