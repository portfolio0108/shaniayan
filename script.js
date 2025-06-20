const WhereTheWindTakesMe = document.getElementById('wherethewind');
const delulu = document.getElementById('delulu');
const cosmos = document.getElementById('cosmos');
const sickofyou = document.getElementById('sickofyou');
const sunshineintherain = document.getElementById('sunshine');
const backbtn = document.querySelector('.backbtn')
const audio = new Audio()

WhereTheWindTakesMe.addEventListener("click", ()=>{
    window.open("https://lnk.to/sy_wtwtm?fbclid=PAZXh0bgNhZW0CMTEAAaag_MQ4TcM4mK5378JDPjZWdPyjlr3s65HkEnBK2mGLfVXFHDoEm76aSKo_aem_KEr_KTi4SOj4FpUF24gtlw", '_blank');
})

delulu.addEventListener('click', ()=>{
    window.open("https://lnk.to/Delulu?fbclid=PAZXh0bgNhZW0CMTEAAaZ3eDU3L_wK6IHMgDm4HwLybbT2gVPsg72Yw2s5R5ZB39JqXx9uuf6YpK4_aem_t8_jo4mmVRrqDC_lKflpsw", '_blank')
})

cosmos.addEventListener("click", ()=>{
    window.open("https://lnk.to/Shania_Yan_Cosmos", '_blank')
})

sickofyou.addEventListener('click', ()=>{
    window.open("https://lnk.to/Shania_sickofyou",'_blank')
})

sunshineintherain.addEventListener("click", ()=>{
    window.open("https://lnk.to/ShaniaYan_Sunshine", '_blank')
})

backbtn.addEventListener("click",()=>{
    window.open("index.html","_self");
})

audio.src="wholemix.mp3";


