var arr = [];
<<<<<<< HEAD
var num = 5; 
for (var i = 0; i < num; i++){
    arr.push([]);
    for (var j = 0; j < num; j++){
        arr[i].push('.');
=======
var num = 7; 
for (var i = 0; i < num; i++){
    for (var j = 0; j < num; j++){
        arr.push([]);
        arr[j].push('.')
>>>>>>> bea4c8088e093f922c1c60bc6b7846ba0bb580ad
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