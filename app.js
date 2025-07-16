const nextBtn = document.querySelector(".next-btn");
const heroVideo = document.querySelector(".hero-video");
let videos=["hero-1", "hero-2", "hero-3", "hero-4"];
let index = 1;
nextBtn.addEventListener("click", ()=>{
    index++;
    if(index>= 1 && index<=4){
        heroVideo.src=`videos/${videos[index-1]}.mp4`
        console.log(`videos/${videos[index-1]}.mp4`)
    }else{
        index=1;
        heroVideo.src=`videos/${videos[index-1]}.mp4`
    }
})
