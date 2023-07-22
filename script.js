const selectImg=document.getElementById('myImage');
const clickOn=document.getElementById('on');
const clickOff=document.getElementById('off');

const toggle1=()=>{
    selectImg.src='ON_final.jpg';
}
const toggle2=()=>{
    selectImg.src='OFF_final.jpg';
}
clickOn.addEventListener('click',toggle1);
clickOff.addEventListener('click',toggle2);