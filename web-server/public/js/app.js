const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const msg1 = document.querySelector('#msg1')
const msg2 = document.querySelector('#msg2')


weatherForm.addEventListener('submit',(e)=> {
e.preventDefault();

if(search.value){
    msg1.textContent = 'Loading...'
fetch('https://api.weatherstack.com/current?access_key=0683370f14c91d912b3a115e4760bd89&query=' + search.value).then((response) => {
    response.json().then((data) => {
        // console.log({data})
        if(data.error){
            msg1.textContent = ''
            msg2.textContent = 'Error ' + data.error.info
            // console.log(data.error)
            }
        else{
            msg1.textContent = data.location.name + ' : '  + data.current.temperature
            msg2.textContent = ''
            // console.log(data.address, ' : ' ,data.temp)
        }  
        
    })
})
} else {
    msg1.textContent = 'Entr address'
}
})
