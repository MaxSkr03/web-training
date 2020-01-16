var xhr = new XMLHttpRequest();
xhr.open("get", "http://dummy.restapiexample.com/api/v1/employees", true);
xhr.send();
xhr.onreadystatechange = function(){
    if(xhr.readyState != 4) return;
    if (xhr.status != 200) return;
    renderTable(JSON.parse(xhr.responseText).data);
}


function renderTable(data) {
    for (var i = 0; i < data.length; i++){
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        document.querySelector('#table').appendChild(tr);
        tr.appendChild(td1).innerHTML = data[i].id;
        tr.appendChild(td2).innerHTML = data[i].employee_name;
    }
    console.log(data);
}

