var xhr = new XMLHttpRequest();
xhr.open("get", "http://dummy.restapiexample.com/api/v1/employees", true);
xhr.send();
xhr.onreadystatechange = function(){
    if(xhr.readyState != 4) return;
    if (xhr.status != 200) return;
    
    var data = JSON.parse(xhr.responseText).data;
    console.log(data);
    renderTable(data);
    document.getElementById('name').onclick = function (){
        sortFunctionAtName(data);
        renderTable(data);
    }
    document.getElementById('salary').onclick = function (){
        sortFunctionAtSalary(data);
        renderTable(data);
    }
}

function sortFunctionAtName(data){
    data.sort(function (a, b){
        if (a.employee_name > b.employee_name) return 1;
        else if (a.employee_name < b.employee_name) return -1;
        else return 0;
    })
}
function sortFunctionAtSalary (data){
    data.sort(function (a, b) {
        if (parseInt(a.employee_salary) > parseInt(b.employee_salary)) return 1;
        else if (parseInt(a.employee_salary) < parseInt(b.employee_salary)) return -1;
        else return 0;
    })
}
function renderTable(data) {
    document.getElementById('table').innerHTML = ''
    for (var i = 0; i < data.length; i++){
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        document.querySelector('#table').appendChild(tr);
        tr.appendChild(td1).innerHTML = data[i].id;
        tr.appendChild(td2).innerHTML = data[i].employee_name;
        tr.appendChild(td3).innerHTML = data[i].employee_salary;
    }
    
}

