import request from 'request';
// import http from 'http';

// const url = 'https://api.weatherstack.com/current?access_key=0683370f14c91d912b3a115e4760bd89&query=Patna'

// const getForecast = http.get(url, (response) => {
//     console.log(response)
// } )

// getForecast.on('error', (error) => {
//     console.log(error)
// }) 
// import http from 'http';
// const url = 'http://api.weatherstack.com/current?access_key=0683370f14c91d912b3a115e4760bd89&query=Patna'

// const request = http.get(url, (res) => {
//   let data = '';

//   // collect chunks
//   res.on('data', chunk => {
//     data += chunk;
//   });

//   // finished receiving
//   res.on('end', () => {
//     const parsedData = JSON.parse(data);
//     console.log(parsedData);
//   });

// })

// request.on('error', (err) => {
//   console.log('Error:', err.message);
// });

export const getForecast = (address, print) => {
    const url = 'https://api.weatherstack.com/current?access_key=0683370f14c91d912b3a115e4760bd89&query=' + address

    // console.log(url);
    request({ url, json: true }, (error, {body} = {}) => {
        if (error) {
            print('API call failed', undefined, undefined)
        } else if (body.error) {
            print(body.error.info, undefined, undefined)
        } 
        else {
            // console.log(response.body)
            const data = body.current
            print(undefined, data.temperature, data.feelslike)
        }
        // console.log( 'temp : '+  data.temperature +  ' and feels like : '+ data.feelslike)
    })

}

// getForecast(Bengaluru, (error, temp, feelslike)=> {
//     console.log('Error' +  error);
//     console.log('temp' +  temp);
//     console.log('feelslike' +  feelslike);
// })