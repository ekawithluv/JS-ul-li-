const ul = document.querySelector('.ul');
var objects = [
    {name: 'Item 1', price:50},
    {name: 'Item 2', price:100}, 
    {name: 'Item 3', price:120}, 
    {name: 'Item 4', price:70}
]
for (var i of objects) {    
    var li = document.createElement('li');
    li.innerHTML = i.name + ' - ' + i.price + ' &#8381';
    if
    (i.price>100) 
    li.style.color = 'red';
    else
    li.style.color = 'green';
    ul.appendChild(li);
}