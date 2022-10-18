const arrayData = ["Data 1", "Data 2", "Data 3"];
let title = document.querySelector("#judul");
let listdata = document.querySelector("#list");
let ul = document.createElement("ul");

title.innerHTML = "Application Woaw";

const btnClick = function(){
    listdata.innerHTML = '';
    ul.innerHTML = '';
    arrayData.forEach( x =>
    {
        let li = document.createElement("li");
        li.innerHTML = x;
        ul.appendChild(li);    
    });

    listdata.appendChild(ul);
}

const btnClear = function(){
    listdata.innerHTML = '';
    ul.innerHTML = '';
}