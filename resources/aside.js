const openlog=document.getElementById('op-win1');
const openreg=document.getElementById('op-win2');
const closereg=document.getElementById('close-reg');
const closelog=document.getElementById('close-log');
const modalreg=document.getElementById('popup1');
const modallog=document.getElementById('popup2');

openreg.addEventListener('click',() =>{
    modalreg.classList.remove('show')
})
openlog.addEventListener('click',() =>{
    modallog.classList.remove('show')
})
closereg.addEventListener('click',function(e) {
    modalreg.classList.add('show')
})
closelog.addEventListener('click',function(e) {
    modallog.classList.add('show')
})


