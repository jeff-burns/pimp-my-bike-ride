const button = document.querySelector('#submit-button')


//DROPDOWN LISTENERS AND FETCHES SHOULD HAPPEN WITHIN THIS
button.addEventListener('click', submitted)

let cityStart = ''
let stateStart = ''
let zipCodeStart = ''

let cityEnd = ''
let stateEnd = ''
let zipCodeEnd = ''

function submitted(event) {

    event.preventDefault()
//WHEN SEARCH CLICKED - GRAB THE INPUT VALUES
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

    //CALL EACH DROPDOWN LISTENER HERE AND HAVE ALL THE FETCH OPTIONS WITHIN EACH OF THEM INSTEAD?
//POSSIBLY GRAB VALUES FROM DROPDOWN EVENTS HERE- RUN LISTENER HERE?
//THEN USE ALL THOSE VALUES TO FETCH DYNAMICALLY WITH THEM
    getStartWeather(cityStart, stateStart, zipCodeStart)
    getEndWeather(cityEnd,stateEnd, zipCodeEnd)
    //WITHIN THIS, ALSO CALL THE DROPDOWN VALUES?
}
// -------------------------------
// REFACTOR THESE IN TO SEPARATE FUNCTIONS
        //START EVENT LISTENER
        //END EVENT LISTENER
        //HOURLYINDEX IF ELSES
        //START FETCH?
        //END FETCH? OR BOTH FETCHES TOGETHER ?

//CREATES START AND END DROPDOWNS UPON OPENING
const startDropdown = document.querySelector('#start-time')
console.log(startDropdown);

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

const endDropdown = document.querySelector('#end-time')
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

//HOURLY START INDEX FUNCTION
function getStartIndexForHour(index1) {
    let hourlyIndex = 0
    if (index1 < 5) {
        hourlyIndex = 1
        } else if (index1 < 7) {
        hourlyIndex = 2
        } else if (index1 < 9) {
        hourlyIndex = 3
        } else if (index1 < 11) {
        hourlyIndex = 4
        } else if (index1 < 13) {
        hourlyIndex = 5
        } else if (index1 < 15) {
        hourlyIndex = 6
        } else if (index1 < 17) {
        hourlyIndex = 7
        } else if (index1 < 19) {
        hourlyIndex = 8
        } else if (index1 < 21) {
        hourlyIndex = 9
        } else if (index1 < 23) {
        hourlyIndex = 10
        } else if (index1 < 25) {
        hourlyIndex = 11
        } else if (index1 < 27) {
        hourlyIndex = 12
        } else if (index1 < 29) {
        hourlyIndex = 13
        } else if (index1 < 31) {
        hourlyIndex = 14
        } else if (index1 < 33) {
        hourlyIndex = 15
        } else if (index1 < 35) {
        hourlyIndex = 16
        } else if (index1 < 37) {
        hourlyIndex = 17
        } else if (index1 < 39) {
        hourlyIndex = 18
        } else if (index1 < 41) {
        hourlyIndex = 19
        } else if (index1 < 43) {
        hourlyIndex = 20
        } else if (index1 < 45) {
        hourlyIndex = 21
        } else if (index1 < 47) {
        hourlyIndex = 22
        } else if (index1 < 49) {
        hourlyIndex = 23
        } else if (index1 < 51) {
        hourlyIndex = 24
        } else if (index1 < 53) {
        hourlyIndex = 25
        } else if (index1 < 55) {
        hourlyIndex = 26
        } else if (index1 < 57) {
        hourlyIndex = 27
        } else if (index1 < 59) {
        hourlyIndex = 28
        } else if (index1 < 61) {
        hourlyIndex = 29
        } else if (index1 < 63) {
        hourlyIndex = 30
        } else if (index1 < 65) {
        hourlyIndex = 31
        } else if (index1 < 67) {
        hourlyIndex = 32
        } else if (index1 < 69) {
        hourlyIndex = 33
        } else if (index1 < 71) {
        hourlyIndex = 34
        } else {
        hourlyIndex = 35
        }
}
console.log(getIndexForHour())

// START FUNCTION 
function getStartWeather(cityStart, stateStart, zipCodeStart) {

    const startConditionsUrl = `http://api.wunderground.com/api/2b572770b27d6c40/conditions/q/${stateStart}/${cityStart}/${zipCodeStart}.json`

    const startHourlyUrl = `http://api.wunderground.com/api/2b572770b27d6c40/hourly/q/${stateStart}/${cityStart}/${zipCodeStart}.json`

    startDropdown.addEventListener('change', function() {
        event.preventDefault()
        var index1 = event.target.selectedIndex
        console.log(index1)
        // let options = event.target.options
        // console.log(options)

        if (index1 < 3) {
            fetch(startConditionsUrl)
            .then(function(response) {
                return response.json()
            }) 
            .then(function(response) {
                // console.log(response)
                document.querySelector('#cloudiness').textContent = response.current_observation.weather

                document.querySelector('#raininess').textContent = response.current_observation.precip_1hr_in + " in."

                document.querySelector('#temp').textContent = response.current_observation.temp_f + " ℉"

                document.querySelector('#windiness').textContent = response.current_observation.windchill_f + " ℉"
            })
        } else if (index1 > 2) {
            // ADD THE getIndexForHour() FUNCTION HERE TO USE
            getStartIndexForHour(index1)

            fetch(startHourlyUrl)
            .then(function(response) {
                return response.json()
            }) 
            .then(function(response) {
                console.log(response)

                document.querySelector('#cloudiness').textContent = response.hourly_forecast[hourlyIndex].condition

                document.querySelector('#raininess').textContent = response.hourly_forecast[hourlyIndex].qpf.english + "0 in."

                document.querySelector('#temp').textContent = response.hourly_forecast[hourlyIndex].temp.english + " ℉"

                document.querySelector('#windiness').textContent = response.hourly_forecast[hourlyIndex].feelslike.english + " ℉"
            })
        }  
    })          
}

//HOURLY END INDEX FUNCTION
function getEndIndexForHour(index2) {
    let hourlyIndex = 0
    if (index2 < 5) {
        hourlyIndex = 1
        } else if (index2 < 7) {
        hourlyIndex = 2
        } else if (index2 < 9) {
        hourlyIndex = 3
        } else if (index2 < 11) {
        hourlyIndex = 4
        } else if (index2 < 13) {
        hourlyIndex = 5
        } else if (index2 < 15) {
        hourlyIndex = 6
        } else if (index2 < 17) {
        hourlyIndex = 7
        } else if (index2 < 19) {
        hourlyIndex = 8
        } else if (index2 < 21) {
        hourlyIndex = 9
        } else if (index2 < 23) {
        hourlyIndex = 10
        } else if (index2 < 25) {
        hourlyIndex = 11
        } else if (index2 < 27) {
        hourlyIndex = 12
        } else if (index2 < 29) {
        hourlyIndex = 13
        } else if (index2 < 31) {
        hourlyIndex = 14
        } else if (index2 < 33) {
        hourlyIndex = 15
        } else if (index2 < 35) {
        hourlyIndex = 16
        } else if (index2 < 37) {
        hourlyIndex = 17
        } else if (index2 < 39) {
        hourlyIndex = 18
        } else if (index2 < 41) {
        hourlyIndex = 19
        } else if (index2 < 43) {
        hourlyIndex = 20
        } else if (index2 < 45) {
        hourlyIndex = 21
        } else if (index2 < 47) {
        hourlyIndex = 22
        } else if (index2 < 49) {
        hourlyIndex = 23
        } else if (index2 < 51) {
        hourlyIndex = 24
        } else if (index2 < 53) {
        hourlyIndex = 25
        } else if (index2 < 55) {
        hourlyIndex = 26
        } else if (index2 < 57) {
        hourlyIndex = 27
        } else if (index2 < 59) {
        hourlyIndex = 28
        } else if (index2 < 61) {
        hourlyIndex = 29
        } else if (index2 < 63) {
        hourlyIndex = 30
        } else if (index2 < 65) {
        hourlyIndex = 31
        } else if (index2 < 67) {
        hourlyIndex = 32
        } else if (index2 < 69) {
        hourlyIndex = 33
        } else if (index2 < 71) {
        hourlyIndex = 34
        } else {
        hourlyIndex = 35
        }
}

//END FUNCTION
function getEndWeather(cityEnd, stateEnd, zipCodeEnd) {

    const endUrl = `http://api.wunderground.com/api/2b572770b27d6c40/hourly/q/${stateEnd}/${cityEnd}/${zipCodeEnd}.json`

    endDropdown.addEventListener('change', function() {
        event.preventDefault()
        var index2 = event.target.selectedIndex
        console.log(index2)

        getEndIndexForHour(index2)

        fetch(endUrl)
        .then(function(response) {
            return response.json()
        }) 
        .then(function(response) {
            console.log(response)

            document.querySelector('#end-cloudiness').textContent = response.hourly_forecast[0].condition

            document.querySelector('#end-raininess').textContent = response.hourly_forecast[0].qpf.english + "0 in."

            document.querySelector('#end-temp').textContent = response.hourly_forecast[0].temp.english + " ℉"

            document.querySelector('#end-windiness').textContent = response.hourly_forecast[0].feelslike.english + " ℉"
        })
    })
}