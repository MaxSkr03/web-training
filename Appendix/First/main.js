var task = new TasksReposit(window.localStorage);
var btn = document.querySelector('#btn');
var content = document.querySelector('#content').value;
btn.onclick = function (){
    var content = document.querySelector('#content').value;
    var title = document.querySelector('#title').value;
    if (content == '' && title == ''){
        return
    }
    else{
        task.Add(new Note(content, title));
        console.log(task.Get());
        renderTable(task)
    }
    
}

renderTable(task)
function renderTable(task){
    var table = document.querySelector('#table');
    table.innerHTML = '';
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    td1.innerHTML = 'Заголовок'; 
    var td2 = document.createElement('td');
    td2.innerHTML = 'Текст'; 
    table.append(tr);
    tr.append(td1);
    tr.append(td2);
    for(var i = 0; i < task.Get().length; i++){
        var tr = document.createElement('tr');
        table.append(tr);
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        td1.innerHTML = task.Get()[i].title;
        td2.innerHTML = task.Get()[i].content;
        tr.append(td1);
        tr.append(td2);
    }
}

