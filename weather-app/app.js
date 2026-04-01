import { getForecast } from "./forecast.js";

console.log(process.argv[2]);
const location = process.argv[2]

// getForecast('Bengaluru', (error, temp, feelslike)=> {
//     debugger
//     console.log('Error' +  error);
//     console.log('temp' +  temp);
//     console.log('feelslike' +  feelslike);
// })
if(location){
getForecast(location, (error, temp, feelslike)=> {
    console.log('Error' +  error);
    console.log(location);
    console.log('temp' +  temp);
    console.log('feelslike' +  feelslike);
})
} else
{
    console.log('Enter a location')
}