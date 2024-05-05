const header=document.querySelector('.header');
const main=document.querySelector('.main');
const footer=document.querySelector('.footer');
const links=document.querySelectorAll('.nav__link')

let color='';
let navColor='';

if(localStorage.getItem('bg-color')!==null){
color=localStorage.getItem('bg-color')
header.style.background=color
footer.style.background=color




}
if(localStorage.getItem('link-item')!==null){
navColor=localStorage.getItem('link-item')
links.forEach((el)=>{
    el.style.color=navColor

})




}




function choiceDark(){
header.style.background='grey'
header.style.transition='0.3s ease-out 0.5s'
main.style.background='lightgrey'
main.style.transition='0.3s ease-out 0.5s'
footer.style.background='grey'
footer.style.transition='0.3s ease-out 0.5s'
links.forEach((el)=>{
    el.style.color='green'
   el.style.transition='0.3s ease-out 0.5s'
})




localStorage.setItem('bg-color', 'grey')
localStorage.setItem('link-item','green')
}
function choicelight(){
    header.style.background='purple'
    header.style.transition='0.3s ease-out 0.5s'
    main.style.background='white'
    main.style.transition='0.3s ease-out 0.5s'
    footer.style.background='purple'
    footer.style.transition='0.3s ease-out 0.5s'
    links.forEach((el)=>{
        el.style.color='white'
       el.style.transition='0.3s ease-out 0.5s'
    })
    
    
    
    
    localStorage.setItem('bg-color', 'purple')
    localStorage.setItem('link-item','white')
    }





