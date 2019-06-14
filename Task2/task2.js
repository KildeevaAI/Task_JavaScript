function MathCalc(input) {
    var arr = input.match( /\d+(\.\d+)?|[\+,\-,\*,\/,\=]{1}/ig);
    var res = 0;
    if(arr[0] * 1 !== "NaN") {
        res += arr[0] * 1;
    }

    for (var i = 0;  i < arr.length; i++){
        if (arr[i] == "+"){
            res += arr[i + 1] * 1;
        }
        else if (arr[i]  == "-"){
            res -= arr[i + 1] * 1;
        }
        else if (arr[i]  == "*"){
            res *= arr[i + 1] * 1;
        }
        else if (arr[i]  == "/"){
            res /= arr[i + 1] * 1;
        }
        else if (arr[i]  == "="){
            break;
        }

        //document.writeln( `${res}<br/>`);
    }
return res;
}
      
var str = "-3.5 +4*10-5.3 /5=";
var res = MathCalc(str);
document.writeln( res);


