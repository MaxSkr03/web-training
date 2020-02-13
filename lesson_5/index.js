function find (str, substr){
    for (var i = 0; i < str.length - 1; i++){
        for (var j = 0; j < substr.length - 1; j++){
            var elem;
            if (str[i + j] == substr[j]) {
                elem = i;
            }
            else {
                elem = undefined;
                break;
            }
        }
        if (elem != undefined) break
    }
    return elem;
}
console.log(find("lorem ipsum trololo", "um tr"));