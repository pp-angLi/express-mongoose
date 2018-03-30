
(function () {
    var err = document.getElementsByClassName('err')[0];

    if(err.innerHTML != " "&& err.innerHTML != ""&& err.innerHTML != null) {
        err.style.display = "block";
    }
    var form = document.getElementById('form_on');
    form.onsubmit = function () {
        var name = document.getElementById('name');
        // var backDate = document.getElementById('backDate');
        var use = document.getElementById('use');
        var useCase = document.getElementById('useCase');
        var evaluate = document.getElementById('evaluate');

        if(name.value == "" || name.value == null) {
            name.value = "未命名都叫行唔郁";
        }
        if(use.value == '' || use.value == null) {
             use.value =  "大侠请留名";
        }
        if(backDate.value == "" || backDate.value == null) {
            alert('请限定归还时间');
            return false;
        }
        if(useCase.value == "" || useCase.value == null) {
            useCase.value = "等一下!!";
        }
        if(evaluate.value == "" || evaluate.value == null) {
            evaluate.value = "好评!没评论的都是好评";
        }
        return true;
    }
})()