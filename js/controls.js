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

  function getMinutes() {
    let newMinutes = prompt('Quantos minutos?')
    newMinutes = newMinutes.replace(':','.').replace(',','.')
    const newMinutesIsNotANumber = isNaN(newMinutes)
    
    if(newMinutesIsNotANumber) {
      AlertError.open()
      return
    }

    if (!newMinutes) {
      return false
    }

    return newMinutes
    }
  
  
  return {
    reset,
    play,
    pause,
    getMinutes
  }
}