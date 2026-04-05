var video;

window.addEventListener("load", ()=> {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay = false;
	video.loop = false; 

});

document.querySelector("#play").addEventListener("click", ()=> {
	console.log("Play video");
	document.querySelector("#volume").innerHTML = `${video.volume*100}%`
	video.play()
});

document.querySelector("#pause").addEventListener("click",()=>{
	console.log("Pause video")
	video.pause()
})

document.querySelector("#slower").addEventListener("click",()=>{
	console.log("Slow down video")
	video.playbackRate-=.1
	console.log(`Speed is ${video.playbackRate}`)
})
document.querySelector("#faster").addEventListener("click",()=>{
	console.log("Speed up video")
	video.playbackRate+=.1
	console.log(`Speed is ${video.playbackRate}`)
})

document.querySelector("#skip").addEventListener("click",()=>{
	console.log("SKip ahead")
	if(video.currentTime>=video.duration){
		video.currentTime = 0
		console.log(`Video current time is ${video.currentTime}`)
	}
	else{
		video.currentTime+=10
	    console.log(`Video current time is ${video.currentTime}`)
	}
})
document.querySelector("#mute").addEventListener("click",()=>{
  if(!video.muted){
	console.log("Mute")
	video.muted=true
	document.querySelector("#mute").innerHTML="Unmute"
  }
  else{
	console.log("Unmute")
	video.muted=false
	document.querySelector("#mute").innerHTML="Mute"

  }
})
document.querySelector("#slider").addEventListener("change",(e)=>{
  video.volume = e.target.value/100
  console.log(`The current value is ${e.target.value}`)
  document.querySelector("#volume").innerHTML = `${e.target.value}%`
})
document.querySelector("#vintage").addEventListener("click",()=>{
	console.log("Old School")
	video.classList.add("oldSchool")
})

document.querySelector("#orig").addEventListener("click",()=>{
	console.log("Original")
	video.classList.remove("oldSchool")
})