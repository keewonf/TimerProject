import { AlertError } from "./alert-error.js"

export default function Controls({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,

})  {  
  
  function play() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonSet.classList.add('hide')
    buttonStop.classList.remove('hide')

  }

  function pause() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
    
  }


  function reset() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonSet.classList.remove('hide')
    buttonStop.classList.add('hide')
  }

  function getTimer() {
    let newTimer = prompt('Quanto tempo?')
    let Cutted = []
    if (newTimer) {
    newTimer = newTimer.replace(':','.').replace(',','.')
    }

    const newTimerIsNotANumber = isNaN(newTimer)
    
    if(newTimerIsNotANumber) {
      AlertError.open()
      return
    }

    if (!newTimer) {
      return false
    }

    function cutTimer(Timer) {
      let cutNumber = Timer.toString().split('.')
      

      if (!cutNumber[1] || cutNumber[1].length>2 || Number(cutNumber[1] > 60 || cutNumber[1] * 10 > 60)) {
        cutNumber[1] = '0'
      }

      let cutMinutes = cutNumber[0]
      let cutSeconds = cutNumber[1]
      Cutted = [ cutMinutes, cutSeconds]
      
      return Cutted
    }
    cutTimer(newTimer)
    newTimer = Cutted
    return newTimer
  }
  
  
  return {
    reset,
    play,
    pause,
    getTimer
  }
}