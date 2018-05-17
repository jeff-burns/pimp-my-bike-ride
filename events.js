const button = document.querySelector('#submit-button')

button.addEventListener('click', submitted)

let cityStart = ''
let stateStart = ''
let zipCodeStart = ''

let cityEnd = ''
let stateEnd = ''
let zipCodeEnd = ''

function submitted(event) {

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

    getSearchResults(cityStart, stateStart, zipCodeStart, cityEnd,stateEnd, zipCodeEnd)
}

// You don’t have to pass a predefined function to repeat. Often, you’d want to create a function value on the spot instead.

// function repeat(n, action) {
//     for (let i = 0; i < n; i++) {
//       action(i);
//     }
//   }

// function createRepeat(n,action) {
//     return function(action) {
//         for (let i = 0; i < n; i++) {
//             action(i);
//           } 
//     }
// }

//   const repeatTenTimes = createRepeat(10);
//   repeatTenTimes(function(n){console.log(n);});
// let labels = [];
// repeat(5, i => {
//   labels.push(`Unit ${i + 1}`);
// });
// console.log(labels);

// MAYBE SET THE STARTDROPDOWN AFTER THE START LOCATION AND USE IT AS THE SUBMIT & SAME WITH THE ENDING TIME AND PLACE
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

endDropdown.addEventListener('change', function() {
    event.preventDefault()
})

// const alertDropdown = document.querySelector('#alert-time')
// const timeNow3 = moment();
// const minute3 = timeNow3.minutes()
// const hour3 = timeNow3.hours() + 1
// const rounded3 = minute3 > 29 ? 00 : 30;
// timeNow3.minutes(rounded3);
// const numTimes3 = 36 * 2; // 36 hours, every half hour
// for (let i = 0; i < numTimes3; i++) {
//     let optionTime = document.createElement('option')
//         const timeStr = (i > 0) ?  timeNow3.add(30,'minute').format('k:mm') :
//         timeNow3.format('k:mm');
//         optionTime.setAttribute('value', timeStr)
//         optionTime.textContent = timeStr;
//         alertDropdown.appendChild(optionTime)
// }

// alertDropdown.addEventListener('change', submitted)
        
// // COMPARE THE TIME SELECTED TO CURRENT TIME THEN DYNAMICALLY INPUT THE TIMEPICKED VARIABLE INTO THE INDEX OF THE HOURLY_FORECAST[x] THAT WILL CORRESPOND WITH IT
// function grabStart() {
//     let startTime = document.querySelector('#start-time')
    
//     startTime.addEventListener('change', function(event) {
//         let index = event.target.selectedIndex
//         let options = event.target.options
//         let timePicked = options[index].value
//         if (timepicked)
//         roleImage.src = `https://secure-eyrie-78012.herokuapp.com/images/${imagePath}`
//     }) 
// }

// function grabEnd() {
//     let endTime = document.querySelector('#end-time')

//     endTime.addEventListener('change', function(event) {
//         let index = event.target.selectedIndex
//         let options = event.target.options
//         let timePicked = options[index].value
//         roleImage.src = `https://secure-eyrie-78012.herokuapp.com/images/${imagePath}`
//     })
// }


// function capitalizeCity(city) 
// {
//     return city.charAt(0).toUpperCase() + string.slice(1);
// }


let hourlyIndex = 0
function getIndexForHour() {
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
console.log(hourlyIndex)




function getSearchResults(cityStart, stateStart, zipCodeStart, cityEnd, stateEnd, zipCodeEnd) {

    
  
    const startUrl = `http://api.wunderground.com/api/2b572770b27d6c40/conditions/q/${stateStart}/${cityStart}/${zipCodeStart}.json`

    const endUrl = `http://api.wunderground.com/api/2b572770b27d6c40/hourly/q/${stateEnd}/${cityEnd}/${zipCodeEnd}.json`

    startDropdown.addEventListener('change', function() {
        event.preventDefault()
        var index1 = event.target.selectedIndex
        console.log(index1)
        let options = event.target.options
        console.log(options)

     

        
        if (index1 < 3) {
            fetch(startUrl)
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
            
           
            fetch(endUrl)
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
}

       
    

     


// function showResults(things) {
//     things.forEach(function(conditions) {
// console.log(showResults)
//     })
// }
// let startH4 = document.createElement('h4')
    
    // document.querySelector('#results-start-weather').textContent = response.current_observation.temp_f
    // document.querySelector('#results-start-weather').textContent = response.current_observation.precip_1hr_in
    // starting weather specifics from api
    // let startWeather = document.createElement('div')
    // startWeather.appendChild(startH4)
    // resultsStart.appendChild(startWeather)


// function showResults(results) {
//   results.forEach((movie) => {
//     const movieDiv = document.createElement('div');
//     const h3 = document.createElement('h3');
//     h3.textContent = movie.Title; conditions.current_observation.weather
//     let hasPlot = false;
//     h3.addEventListener('click', function() {
//       if(!hasPlot) {
//         hasPlot = true;
//         const url = `https://omdb-api.now.sh/?i=${movie.imdbID}`;
//         fetch(url)
//           .then(response => response.json())
//           .then(json => {
//             console.log(json);
//             p.textContent = json.Plot;
//           });
//       }
//     });
//     movieDiv.appendChild(h3);
//     const p = document.createElement('p');
//     movieDiv.appendChild(p);
//     resultsSection.appendChild(movieDiv);
//   });
// }



// let endWeather = document.createElement('div')
// let endH4 = document.createElement('h4')
// endH4.textContent = // ending weather specifics from api

// endWeather.appendChild(endH4)
// resultsStart.appendChild(endWeather)