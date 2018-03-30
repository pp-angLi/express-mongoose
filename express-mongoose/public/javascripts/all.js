
function getStyle(obj,attr){//用来获取样式的方法
    if(obj.currentStyle){//IE用currentStyle。
            return Math.floor(parseInt(obj.currentStyle[attr]));
    }
    else{//firefox用getComputedStyle来获取样式。
        return Math.floor(parseInt(getComputedStyle(obj,false)[attr]))
    }
}

(function () { //设定高度
    var err = document.getElementsByClassName('err')[0];

    if(err.innerHTML != " "&& err.innerHTML != "" && err.innerHTML != null ) {
        err.style.display = "block";
    }

    var head = document.getElementById('header');
    var more = document.getElementById('more');
    var cover = document.getElementById('cover');
    var hheight = getStyle(head, 'height');
    var hmore = getStyle(more, 'height');
    cover.style.maxHeight = getStyle(document.body, 'height') - hheight - hmore + 'px';
  })();

(function () {
    var xRemove = document.getElementById('x_remove');
    var wins = document.getElementById('window');

    xRemove.onclick = function () {
      wins.style.display = 'none';
    }
})();

(function () {
    var search = document.getElementById('search');
    var table = document.getElementsByClassName('table_test');

    var display = [];
    var index = 0;
    search.onchange = function () {
        var seaValue = search.value;
        for(var i = 0; i < table.length; i++) {
            table[i].style.display = 'none';
        }
        console.log(seaValue);

        for(var i = 0; i < table.length; i++) {
            var child = table[i].childNodes;
            for(var j = 1; j < child.length - 2; j+=2){
                var ind = child[j].innerHTML;
                // console.log(ind);
                var flag = 1;
                for(var k = 0; k < ind.length; k++) {
                    if(seaValue == ind[k]){
                        console.log(ind)
                        flag = 0;
                        table[i].style.display = '';
                        index++;
                        break;
                    }
                }
                if(flag == 0) {
                    break;
                }
            }
        }

    }

    var back = document.getElementById('back');
    back.onclick = function () {
        search.value = '';
        for(var i = 0; i < table.length; i++) {
            table[i].style.display = '';
        }
    }

})();