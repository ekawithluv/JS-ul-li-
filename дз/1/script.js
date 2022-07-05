const ul = document.querySelector('.ul');
const btn = document.querySelector('.btn');
const inp = document.querySelector('.inp');

btn.addEventListener ('click', function(e) {
    
    var li = document.createElement('li');    
    li.innerHTML = inp.value;
    ul.appendChild(li);
});