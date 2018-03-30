var testArr = [];

function fix (index) {
    var alter = document.getElementsByClassName('alter');
    var test = document.getElementsByClassName('table_test');

    var name = document.getElementById('name');
    var use = document.getElementById('use');
    var backDate = document.getElementById('backDate');
    var useCase = document.getElementById('useCase');
    var evaluate = document.getElementById('evaluate');
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
    use.placeholder = "借用人名字" + test[k].childNodes[5].innerHTML;
    // backDate.placeholder = test[k].childNodes[7].innerHTML;
    useCase.placeholder = "使用情况:" + test[k].childNodes[9].innerHTML;
    evaluate.placeholder = "评价:" + test[k].childNodes[11].innerHTML;

    id = index.dataset.id;
    testArr[0] = test[k].childNodes[1].innerHTML;
    testArr[1] = test[k].childNodes[5].innerHTML;
    testArr[2] = test[k].childNodes[7].innerHTML;
    testArr[3] = test[k].childNodes[9].innerHTML;
    testArr[4] = test[k].childNodes[11].innerHTML;
    testArr[5] = id;
    console.log(testArr[2]);
}

(function (){
    var form = document.getElementById('form_on');
    form.onsubmit = function () {
        var name = document.getElementById('name');
        var backDate = document.getElementById('backDate');
        var use = document.getElementById('use');
        var useCase = document.getElementById('useCase');
        var evaluate = document.getElementById('evaluate');

        if(name.value == '' || name.value == null) {
             name.value =  testArr[0];
        }
        if(use.value == '' || use.value == null) {
             use.value =  testArr[1];
        }
        if(backDate.value == '' || backDate.value == null) {
             alert("归还日期不能为空! 我是第三行!!");
             return false;
        }
        if(useCase.value == '' || useCase.value == null) {
             useCase.value =  testArr[3];
        }
        if(evaluate.value == '' || evaluate.value == null) {
             evaluate.value =  testArr[4];
        }
        form.action = '/fixLending?id=' + testArr[5];
    }
})();
