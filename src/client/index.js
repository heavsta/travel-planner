//STYLES
import './styles/main.scss'

//JS IMPORTS
import { saveTrip } from './js/app'

//JS EXPORTS
export { saveTrip }

//Event listener to make API calls and update the UI with user and API data
document.getElementById('generate').addEventListener('click', saveTrip);