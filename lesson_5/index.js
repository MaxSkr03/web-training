var but = document.querySelector('.but');
but.onclick = function (){
    var text = document.querySelector('.writing');
    var str = text.textContent;
    var substr = document.querySelector('.inp').value;
    
    console.log(find(str, substr));
}



function find (str, substr){
    for (var i = 0; i < str.length; i++){
        for (var j = 0; j < substr.length; j++){
            var elem;
            if (str[i + j] == substr[j]) {
                elem = i;
                document.querySelector('.out').innerHTML += str[i + j] 
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