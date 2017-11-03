const express =  require('express')
const app = express()
const ejs = require('ejs')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const conn = mongoose.connect('mongodb://raryson:123QWE@ds245755.mlab.com:45755/todoist')

const listSchema = mongoose.Schema({
    item: String
});

const model = mongoose.model('List', listSchema)

app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static('public'))


app.get('/', (req, res) => {
    const clientListObject = []
    model.find((err, resp) => {
        if(err) return (err)
        resp.forEach((value, index) => {
            if(value.item !== "undefined"){
                clientListObject.push({"text" : value.item, "id" : value._id})
            }
        })

        res.render('index', {
            listClient: clientListObject
        });

    })
})

app.post('/add', (req, res) => {

    let clientList = new model({item: req.body.text})

    clientList.save((err ,client) => {
        if(err) return console.log(err, client)
        res.json({statusCode: 200, _id: client._id })
    })

    
})

app.post('/remove', (req, res) => {

    model.findByIdAndRemove(req.body.delete, (err, resp) => {
        if(err) console.log(err)
        res.json({statusCode: 200 })
    })

  

    
        
    })
    


app.listen(3000, () => {
    console.log('listening at 3000')
})