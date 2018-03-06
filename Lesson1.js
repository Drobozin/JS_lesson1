var a = 11101011;

function toDec(a) {

    if (typeof a == "number") {
        var _string = a.toString();
        var b = _string.split("");
        var arr = new Array(b.length);
        b.forEach(function (item, i ){
            if (item == '1' || item == '0') arr[i] = b [i];
            else {return;}
        });
        var r = b.toString();
        var r2 = arr.toString();
        if (r.length != r2.length){
            undefined;
        }
        else{
            var result = 0;
            arr = arr.reverse();
            arr.forEach(function (item, i) {
                if(item == '1'){
                    result += Math.pow(2, i)  ;
                }
            });
            console.log(result);
        }
        }
    else {
       undefined;
    }
}
toDec(a);
