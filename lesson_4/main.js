var arr = [];
var num = 7; 
for (var i = 0; i < num; i++){
    for (var j = 0; j < num; j++){
        arr.push([]);
        arr[j].push('.')
    }
}
for (var i = 0; i < arr.length; i++){
    var str = '';
    for (var j = 0; j < arr[i].length; j++){
        var nul = arr[i][j];
        if (i == arr[i].length - 1 - j || i == j || j == (arr[i].length - 1) / 2 || i == (arr[j].length - 1) / 2) nul = '*'
        str += ' ' + nul;
    }
    console.log(str);
}