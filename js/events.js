import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSoundOff,
  buttonSoundOn,
  buttonSet,
} from "./elements.js"

import { AlertError } from "./alert-error.js"

export default function({controls, timer, sound}) {

  buttonPlay.addEventListener('click', function() {
  controls.play()
  timer.countdown()
  sound.pressButton()
  AlertError.close()
  })

  buttonPause.addEventListener('click', function() {
  controls.pause()
  timer.hold()
  sound.pressButton()
  AlertError.close()
  })

  buttonStop.addEventListener('click', function() {
  controls.reset()
  timer.reset()
  sound.pressButton()
  AlertError.close()

  })

  buttonSoundOff.addEventListener('click', function() {
  buttonSoundOn.classList.remove('hide')
  buttonSoundOff.classList.add('hide')
  sound.bgAudio.pause()
  AlertError.close()
  })

  buttonSoundOn.addEventListener('click', function() {
  buttonSoundOn.classList.add('hide')
  buttonSoundOff.classList.remove('hide')
  sound.bgAudio.play()
  AlertError.close()
  })

  buttonSet.addEventListener('click', function() {
  AlertError.close()
  
  let newTimer = controls.getTimer()
  /*let cutNumber = newMinutes.toString().split('.')

  if (!cutNumber[1] || cutNumber[1].length>2 || Number(cutNumber[1] > 60)){
    cutNumber[1] = '0'
  }
*/
  if(!newTimer || newTimer[1] < 0) {
    timer.reset()
    return
  }

  //minutes = newMinutes
  timer.updateDisplay(newTimer[0], newTimer[1].padEnd(2,'0'))
  timer.updateMinutes(newTimer[0])
  timer.updateSeconds(newTimer[1].padEnd(2,'0'))
  })
}