var Reposit = function (key, localStorage){
    this.key = key;
    this.localStorage = localStorage;
}

Reposit.prototype.Get = function (){
    return this.localStorage.getItem(this.key);
}

Reposit.prototype.Set = function (content){
    this.localStorage.setItem(this.key, content);
}

var TasksReposit = function (localStorage){
    Reposit.call(this, 'tasks', localStorage);
}

TasksReposit.prototype = Object.create(Reposit.prototype);

TasksReposit.prototype.Get = function(){
    if (Reposit.prototype.Get.call(this) == null){
        return [];
    }
    return JSON.parse(Reposit.prototype.Get.call(this));
}

TasksReposit.prototype.Add = function (elem){
    var arr = this.Get();
    arr.push(elem);
    this.Set(arr);
}

TasksReposit.prototype.Remove = function (elemId){
    var arr = this.Get();
    for (var i = 0; i < arr.length; i++){
        if (arr[i].id == elemId) {
            arr.splice(i, 1);
            break;
        }
    }
    this.Set(arr);
}

TasksReposit.prototype.Set = function(content){
    Reposit.prototype.Set.call(this, JSON.stringify(content));
}

