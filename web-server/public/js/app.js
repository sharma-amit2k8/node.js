const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const msg1 = document.querySelector('#msg1')
const msg2 = document.querySelector('#msg2')


weatherForm.addEventListener('submit',(e)=> {
e.preventDefault();

if(search.value){
    msg1.textContent = 'Loading...'
fetch('/weather?address=' + search.value).then((response) => {
    response.json().then((data) => {
        // console.log({data})
        if(data.error){
            msg1.textContent = ''
            msg2.textContent = 'Error ' + data.error
            // msg2.textContent = 'Error ' + data.error.info
            // console.log(data.error)
            }
        else{
            // msg1.textContent = data.location.name + ' : '  + data.current.temperature
            msg1.textContent = data.address + ' : '  + data.temp
            msg2.textContent = 'feels Like : ' + data.feelslike 
            // console.log(data.address, ' : ' ,data.temp)
        }  
        
    })
})
} else {
    msg1.textContent = 'Entr address'
    msg2.textContent = ''
}
})
