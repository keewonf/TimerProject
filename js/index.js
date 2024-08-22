import Controls from "./controls.js" 
import Timer from "./timer.js"

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
//let minutes = Number(minutesDisplay.textContent) 

//let seconds
/* buttonPlay.onclick = function(event) {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
}
*/


const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
})

const configTimer = {
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
  //minutes
}

const timer = Timer(configTimer)



buttonPlay.addEventListener('click', function() {
  controls.play()
  timer.countdown()
})

buttonPause.addEventListener('click', function() {
  controls.pause()
  timer.hold()
})

buttonStop.addEventListener('click', function() {
  controls.reset()
  timer.reset()

})

buttonSoundOff.addEventListener('click', function() {
  buttonSoundOn.classList.remove('hide')
  buttonSoundOff.classList.add('hide')
})

buttonSoundOn.addEventListener('click', function() {
  buttonSoundOn.classList.add('hide')
  buttonSoundOff.classList.remove('hide')
})

buttonSet.addEventListener('click', function() {
  let newMinutes = controls.getMinutes()

  const newMinutesIsNotANumber = isNaN(newMinutes) 
  
  if(!newMinutes || newMinutesIsNotANumber) {
    timer.reset()
    return
  }

  //minutes = newMinutes
  timer.updateDisplay(newMinutes, 0)
  timer.updateMinutes(newMinutes)
})

