import Controls from "./controls.js" 
import Timer from "./timer.js"
import { AlertError } from "./alert-error.js"

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
  AlertError.close()
})

buttonPause.addEventListener('click', function() {
  controls.pause()
  timer.hold()
  AlertError.close()
})

buttonStop.addEventListener('click', function() {
  controls.reset()
  timer.reset()
  AlertError.close()

})

buttonSoundOff.addEventListener('click', function() {
  buttonSoundOn.classList.remove('hide')
  buttonSoundOff.classList.add('hide')
  AlertError.close()
})

buttonSoundOn.addEventListener('click', function() {
  buttonSoundOn.classList.add('hide')
  buttonSoundOff.classList.remove('hide')
  AlertError.close()
})

buttonSet.addEventListener('click', function() {
  AlertError.close()
  
  let newMinutes = controls.getMinutes()
  let cutNumber = newMinutes.toString().split('.')

  if (!cutNumber[1] || cutNumber[1].length>2 || Number(cutNumber[1] > 60)){
    cutNumber[1] = '0'
  }

  if(!newMinutes || cutNumber[1] < 0) {
    timer.reset()
    return
  }

  //minutes = newMinutes
  timer.updateDisplay(cutNumber[0], cutNumber[1].padEnd(2,'0'))
  timer.updateMinutes(cutNumber[0])
  timer.updateSeconds(cutNumber[1].padEnd(2,'0'))
})

