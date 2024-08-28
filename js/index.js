import Controls from "./controls.js" 
import Timer from "./timer.js"
import Sound from "./sounds.js"
import Events from "./events.js"

import { 
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  minutesDisplay,
  secondsDisplay,
} from "./elements.js"

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

const sound = Sound()

Events({controls, timer, sound})

