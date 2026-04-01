import express from 'express'
import {fileURLToPath} from 'url'
import path from 'path'
import hbs from 'hbs'
import { getForecast } from './utils/forecast.js'

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const viewspath = path.join(__dirname, '../templates/views')
const partialspath = path.join(__dirname, '../templates/partials')
const publicPath = path.join(__dirname, '../public')

// first add the static path
app.use(express.static(publicPath))

// 👇 2nd add view settings here
app.set('views', viewspath )
app.set('view engine','hbs')
hbs.registerPartials(partialspath)


//3rd Add route handlers
app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send({
            error : 'pls provide an address'
        })
    }
    
    getForecast(req.query.address, (error, temp, feelslike)=> {
        if(error){
            return res.send({
                error : 'Error occured' + error
            })
        }
        res.send({      
        address: req.query.address,
        temp,
        feelslike
    });
    })
})

app.get('',(req,res)=> {
    res.render('index',{
        title : 'Weather App!',
        name: 'Amit'
    })
})

app.get('/help', (req,res)=> {
    res.render('help',{
        title: 'Help!!!',
        name : 'Avni',
        msg : 'Do you need help :)'
    })
})

app.get('/help{/*path}', (req,res) => {
    res.render('404',{
        title : 'help 404',
        errorMsg : 'This is help 404 page',
        name : 'Avni'
    })
})

app.get('{/*path}', (req,res) => {
   res.render('404', {
    title : '404',
    errorMsg : 'page not found',
    name : 'Amit'
   })
})

// 404 handler (last)
// app.use((req, res) => {
//   res.send( 'Page not found')
// })
// app.get('', (req,res)=> {
//     res.send('Landing Page');
// })

// app.get('/help', (req,res)=> {
//     res.send('<h1>Help Page </h1>');
// })

// app.get('/about', (req,res)=> {
//     res.send('<h2>about Page</h2>');
// })



app.listen('1200', ()=> {
    console.log('App Server started')
}
)

// console.log(__dirname);
