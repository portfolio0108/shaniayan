const youtube = document.getElementById('yt');
const insta = document.getElementById("insta");
const spotify= document.getElementById("spotify");
const fb= document.getElementById("fb");
const threads= document.getElementById("threads");
const tiktok = document.getElementById("tiktok");
const x = document.getElementById("x");
const backbtn = document.querySelector('.backbtn')
youtube.addEventListener("click",()=>{
    window.open("https://www.youtube.com/channel/UCcaYkWDw6A4_8awJgKGWeGA","_blank");
})

insta.addEventListener("click", ()=>{
    window.open("https://www.instagram.com/ShaniaYanOfc","_blank")
})

spotify.addEventListener("click",()=>{
    window.open("https://open.spotify.com/artist/1bycmYZBIFs1GndFBYtlSX?si=TtUV7-SRR0-yiB4_B_F1Pw&utm_source=copy-link&nd=1#login","_blank")
})

fb.addEventListener("click",()=>{
    window.open("https://www.facebook.com/ShaniaYanOfc","_blank")
})

threads.addEventListener("click", ()=>{
    window.open("https://www.threads.net/@shaniayanofc?xmt=AQGzDAN1y1CXrxXaTw8Zn1Dtpa5IFJ2CY3SrvapINbreiIo","_blank")
})

tiktok.addEventListener("click",()=>{
    window.open("https://www.tiktok.com/@ShaniaYanOfc","_blank")
})

x.addEventListener("click", ()=>{
    window.open("https://x.com/ShaniaYanOfc","_blank")
})

backbtn.addEventListener("click", ()=>{
    window.open("index.html","_self")
})
