// factory
import Sound from "./sounds.js"
const sound = Sound()
export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls,
}) {

  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent) 
  let seconds = Number(secondsDisplay.textContent)
  
  function updateDisplay(newMinutes, newSeconds){
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    
    newSeconds = newSeconds === undefined ? seconds : newSeconds
    minutesDisplay.textContent = String(newMinutes).padStart(2,"0")
    secondsDisplay.textContent = String(newSeconds).padStart(2, "0")
  }

  function reset() {
  updateDisplay(minutes, seconds)
  clearTimeout(timerTimeOut)
  }

  function countdown () {
  timerTimeOut = setTimeout(function() {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)
    let isFinished = minutes <= 0 && seconds <=0
    updateDisplay(minutes, 0)
    /* if (seconds > 0){
    updateDisplay(minutes, String(seconds - 1))
    }

    else if (minutes <= 0) {
      resetControls()
      return
    }
    
    if (seconds <= 0) {
      seconds = 5
      --minutes
    }
  */

    if (isFinished) {
      resetControls()
      updateDisplay()
      sound.timeEnd()
      return
    }

    if (seconds <= 0) {
      seconds = 60
      --minutes
    }


    updateDisplay(minutes, String(seconds - 1))

   countdown()
  }, 1000)
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes
  }

  function updateSeconds(newSeconds) {
    seconds = newSeconds
  }

  function hold() {
    clearTimeout(timerTimeOut)
  }

  return {
    countdown, 
    reset,
    updateDisplay,
    updateMinutes,
    updateSeconds,
    hold
  }
}
