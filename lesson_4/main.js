var arr = [['.', '.', '.', '.', '.',], 
           ['.', '.', '.', '.', '.',], 
           ['.', '.', '.', '.', '.',], 
           ['.', '.', '.', '.', '.',], 
           ['.', '.', '.', '.', '.',]
          ];
for (var i = 0; i < arr.length; i++){
    var str = '';
    for (var j = 0; j < arr[i].length; j++){
        var nul = arr[i][j];
        if (i == arr[i].length - 1 - j || i == j || j == (arr[i].length - 1) / 2 || i == (arr[j].length - 1) / 2) nul = '*'
        str += ' ' + nul;
    }
    console.log(str);
}

