var task = new TasksReposit(window.localStorage);
var btn = document.querySelector('.create');
btn.onclick = function (){
    var text = document.querySelector('#text').value;
    var title = document.querySelector('#title').value;
    if (text == '' && title == '' || text == ''){
        alert('Укажите содержание заметки');
        return
    }
    task.Add(new Note(text, title));
    console.log(task.Get());
    
    renderBlock(task)

}

renderBlock(task);

function renderBlock(task){
    document.querySelector('.notes').innerHTML = ''
    for (var i = 0; i < task.Get().length; i++){
        //block
        var block = document.createElement('div');
        block.className = 'block';
        document.querySelector('.notes').prepend(block);
        //heading
        var heading = document.createElement('div');
        heading.className = 'heading';
        heading.innerHTML = task.Get()[i].title;
        block.prepend(heading);
        //hr
        var hr = document.createElement('hr');
        block.append(hr);
        //content
        var content = document.createElement('div')
        content.id = 'content';
        content.innerHTML = task.Get()[i].content;
        block.append(content);
        //buttons
        var btns = document.createElement('div');
        btns.className = 'buttons';
        document.querySelector('.heading').append(btns);
        //remove
        var remove = document.createElement('div');
        remove.className = 'remove';
        document.querySelector('.buttons').prepend(remove);
        //button
        var btn = document.createElement('button');
        btn.id = 'remove';
        btn.setAttribute('remove', task.Get()[i].id);
        btn.onclick = function(){
            task.Remove(this.getAttribute('remove'));
            renderBlock(task);
        }
        document.querySelector('.remove').prepend(btn);
        //image
        var img = document.createElement('img');
        img.src = 'images/iconfinder_90_111056.png';
        document.querySelector('#remove').prepend(img);
    }
    
}
