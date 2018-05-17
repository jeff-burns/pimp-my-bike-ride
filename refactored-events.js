const button = document.querySelector('#submit-button')
const startDropdown = document.querySelector('#start-time')
const endDropdown = document.querySelector('#end-time')
let hourlyIndex

button.addEventListener('click', submitted)

let cityStart = ''
let stateStart = ''
let zipCodeStart = ''
let cityEnd = ''
let stateEnd = ''
let zipCodeEnd = ''

function submitted(event) {
    console.log(event.target)
    event.preventDefault()

    let cityField = document.querySelector('#start-city')
    cityStart = cityField.value
    let stateField = document.querySelector('#start-state')
    stateStart = stateField.value
    let zipCodeField = document.querySelector('#start-zip')
    zipCodeStart = zipCodeField.value

    let endCityField = document.querySelector('#end-city')
    cityEnd = endCityField.value
    let endStateField = document.querySelector('#end-state')
    stateEnd = endStateField.value
    let endZipCodeField = document.querySelector('#end-zip')
    zipCodeEnd = endZipCodeField.value

    let startOptionValue = startDropdown.selectedIndex
    console.log(startOptionValue)
    let startHour = getStartIndexForHour(startOptionValue)
    console.log(startHour)

    let endOptionValue = endDropdown.selectedIndex;
    console.log(endOptionValue)
    let endHour = getEndIndexForHour(endOptionValue)

    getStartWeather(cityStart, stateStart, zipCodeStart, startHour)
    
    getEndWeather(cityEnd,stateEnd, zipCodeEnd, endHour)
}

const timeNow = moment();
const minute = timeNow.minutes()
const hour = timeNow.hours() + 1
const rounded = minute > 29 ? 00 : 30;
timeNow.minutes(rounded);
const numTimes = 36 * 2; // 36 hours, every half hour
for (let i = 0; i < numTimes; i++) {
    let optionTime = document.createElement('option')
        const timeStr = (i > 0) ?  timeNow.add(30,'minute').format('k:mm') :
        timeNow.format('k:mm');
        optionTime.setAttribute('value', timeStr)
        optionTime.textContent = timeStr;
        startDropdown.appendChild(optionTime)
}



const timeNow2 = moment();
const minute2 = timeNow2.minutes()
const hour2 = timeNow2.hours() + 1
const rounded2 = minute2 > 29 ? 00 : 30;
timeNow2.minutes(rounded2);
const numTimes2 = 36 * 2; // 36 hours, every half hour
for (let i = 0; i < numTimes2; i++) {
    let optionTime = document.createElement('option')
        const timeStr = (i > 0) ?  timeNow2.add(30,'minute').format('k:mm') :
        timeNow2.format('k:mm');
        optionTime.setAttribute('value', timeStr)
        optionTime.textContent = timeStr;
        endDropdown.appendChild(optionTime)
}

function getStartIndexForHour(startOptionValue) {
    if (startOptionValue < 5) {
        return  1
        } else if (startOptionValue < 7) {
        return  2
        } else if (startOptionValue < 9) {
        return 3
        } else if (startOptionValue < 11) {
         return 4
        } else if (startOptionValue < 13) {
        return  5
        } else if (startOptionValue < 15) {
        return  6
        } else if (startOptionValue < 17) {
        return  7
        } else if (startOptionValue < 19) {
        return 8
        } else if (startOptionValue < 21) {
        return 9
        } else if (startOptionValue < 23) {
        return 10
        } else if (startOptionValue < 25) {
        return  11
        } else if (startOptionValue < 27) {
        return  12
        } else if (startOptionValue < 29) {
        return  13
        } else if (startOptionValue < 31) {
        return  14
        } else if (startOptionValue < 33) {
        return  15
        } else if (startOptionValue < 35) {
        return  16
        } else if (startOptionValue < 37) {
        return  17
        } else if (startOptionValue < 39) {
        return  18
        } else if (startOptionValue < 41) {
        return  19
        } else if (startOptionValue < 43) {
        return  20
        } else if (startOptionValue < 45) {
        return  21
        } else if (startOptionValue < 47) {
        return  22
        } else if (startOptionValue < 49) {
        return  23
        } else if (startOptionValue < 51) {
        return  24
        } else if (startOptionValue < 53) {
        return  25
        } else if (startOptionValue < 55) {
        return  26
        } else if (startOptionValue < 57) {
        return  27
        } else if (startOptionValue < 59) {
        return  28
        } else if (startOptionValue < 61) {
        return  29
        } else if (startOptionValue < 63) {
        return  30
        } else if (startOptionValue < 65) {
        return  31
        } else if (startOptionValue < 67) {
        return  32
        } else if (startOptionValue < 69) {
        return  33
        } else if (startOptionValue < 71) {
        return  34
        } else {
        return  35
        }
}

function getStartWeather(cityStart, stateStart, zipCodeStart, startHour) {
    const startConditionsUrl = `http://api.wunderground.com/api/2b572770b27d6c40/conditions/q/${stateStart}/${cityStart}/${zipCodeStart}.json`

    const startHourlyUrl = `http://api.wunderground.com/api/2b572770b27d6c40/hourly/q/${stateStart}/${cityStart}/${zipCodeStart}.json`

    fetch(startHourlyUrl)
    .then(function(response) {
        return response.json()
    }) 
    .then(function(response) {
        console.log(response)

        document.querySelector('#cloudiness').textContent = response.hourly_forecast[startHour].condition

        document.querySelector('#raininess').textContent = response.hourly_forecast[startHour].qpf.english + "0 in."

        document.querySelector('#temp').textContent = response.hourly_forecast[startHour].temp.english + " ℉"

        document.querySelector('#windiness').textContent = response.hourly_forecast[startHour].feelslike.english + " ℉"
    })
}  

function getEndIndexForHour(endOptionValue) {
    if (endOptionValue < 5) {
        return  1
        } else if (endOptionValue < 7) {
        return  2
        } else if (endOptionValue < 9) {
        return 3
        } else if (endOptionValue < 11) {
         return 4
        } else if (endOptionValue < 13) {
        return  5
        } else if (endOptionValue < 15) {
        return  6
        } else if (endOptionValue < 17) {
        return  7
        } else if (endOptionValue < 19) {
        return 8
        } else if (endOptionValue < 21) {
        return 9
        } else if (endOptionValue < 23) {
        return 10
        } else if (endOptionValue < 25) {
        return  11
        } else if (endOptionValue < 27) {
        return  12
        } else if (endOptionValue < 29) {
        return  13
        } else if (endOptionValue < 31) {
        return  14
        } else if (endOptionValue < 33) {
        return  15
        } else if (endOptionValue < 35) {
        return  16
        } else if (endOptionValue < 37) {
        return  17
        } else if (endOptionValue < 39) {
        return  18
        } else if (endOptionValue < 41) {
        return  19
        } else if (endOptionValue < 43) {
        return  20
        } else if (endOptionValue < 45) {
        return  21
        } else if (endOptionValue < 47) {
        return  22
        } else if (endOptionValue < 49) {
        return  23
        } else if (endOptionValue < 51) {
        return  24
        } else if (endOptionValue < 53) {
        return  25
        } else if (endOptionValue < 55) {
        return  26
        } else if (endOptionValue < 57) {
        return  27
        } else if (endOptionValue < 59) {
        return  28
        } else if (endOptionValue < 61) {
        return  29
        } else if (endOptionValue < 63) {
        return  30
        } else if (endOptionValue < 65) {
        return  31
        } else if (endOptionValue < 67) {
        return  32
        } else if (endOptionValue < 69) {
        return  33
        } else if (endOptionValue < 71) {
        return  34
        } else {
        return  35
        }
}

function getEndWeather(cityEnd, stateEnd, zipCodeEnd, endHour) {
    const endUrl = `http://api.wunderground.com/api/2b572770b27d6c40/hourly/q/${stateEnd}/${cityEnd}/${zipCodeEnd}.json`

    fetch(endUrl)
    .then(function(response) {
        return response.json()
    }) 
    .then(function(response) {
        console.log(response)

        document.querySelector('#end-cloudiness').textContent = response.hourly_forecast[endHour].condition

        document.querySelector('#end-raininess').textContent = response.hourly_forecast[endHour].qpf.english + "0 in."

        document.querySelector('#end-temp').textContent = response.hourly_forecast[endHour].temp.english + " ℉"

        document.querySelector('#end-windiness').textContent = response.hourly_forecast[endHour].feelslike.english + " ℉"
    })
}
 