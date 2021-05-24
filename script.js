// 본문 설정
var Body = {
    backgroundColor : function(color){
        document.querySelector('body').style.backgroundColor=color;
    },
    fontColor : function(color){
        document.querySelector('body').style.color=color;
    },
    lineColorchange : function(color){
        document.querySelector('h1').style.borderBottomColor=color;
        document.querySelector('ol').style.borderRightColor=color;
        document.querySelector('ol').style.borderTopColor=color;
        document.querySelector('ol').style.borderBottomColor=color;
    }
}
var Links = {
    fontColor : function(color){
        var alist = document.querySelectorAll('a');
        var i = 0;
        while (i < alist.length){
            alist[i].style.color=color;
            i = i + 1;
        }
    },
    deCoration : function(deco){
        var alist = document.querySelectorAll('a');
        var i = 0;
        while (i < alist.length){
            alist[i].style.textDecoration=deco;
            i = i + 1;
        }
    }
}
var setTB = {
    setTD : function(color){
        var tdlist = document.querySelectorAll('td');
        var k = 0;
        while (k < tdlist.length){
            tdlist[k].style.borderColor=color;
            k = k + 1;
        }
    },
    setTable : function(color){
        document.querySelector('table').style.borderColer=color;
    },
    setTH : function(color){
        var thlist = document.querySelectorAll('th');
        var x = 0;
        while (x < thlist.length){
            thlist[x].style.borderColor=color;
            x = x + 1;
        }
    }
}
// 주간모드 야간모드 버튼
function nightDayHandler(self){
    if(self.value==='Night'){
        Body.backgroundColor('black');
        Body.fontColor('white');
        Body.lineColorchange('white');
        Links.fontColor('yellow');
        Links.deCoration('underline');

        var tablelist = document.querySelectorAll('table');
        if(tablelist.length === 0){
            self.value = 'Day';
        }else{
            setTB.setTD('white');
            setTB.setTable('white');
            setTB.setTH('white');
            self.value = 'Day';
        }
    } else {
        Body.backgroundColor('pink');
        Body.fontColor('blue');
        Body.lineColorchange('black');
        Links.fontColor('red');
        Links.deCoration('none');
        var tablelist = document.querySelectorAll('table');
        if(tablelist.length === 0){
            self.value = 'Night';
        }else{
            setTB.setTD('black');
            setTB.setTable('black');
            setTB.setTH('black');
            self.value = 'Night';
        }
    }
}