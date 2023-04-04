//importing
import express from 'express'
import mongoose from 'mongoose'
import whatsappSchema from "./dbMessage.js"

// app config
const app = express()
const port = process.env.PORT || 9000

//middlware
app.use(express.json())
// DB config
const connection_url = 'mongodb+srv://admin:admin000@cluster0.oiea9x3.mongodb.net/?retryWrites=true&w=majority'
mongoose.set('strictQuery', false);
mongoose.connect(connection_url
    
    // useNewUrlParser: true,
    // useUnifiedTopology: true
);

//????

// api routes 
app.get('/',(req,res)=>res.status(200).send('hello world'))

app.get('/messages/sync',(req,res)=>{ 

    Messages.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        } 
    })
}) 

app.post('/messages/new',(req,res)=>{ 
    const dbMessage = req.body;

    whatsappSchema.create(dbMessage,(err,data)=>{
        if(err){
            res.status(500).send(err)
        } else {
            res.status(201).send(`new message created: \n ${data}`)
        } 
    })
})

//listen
app.listen(port,()=>console.log(`Listening on localhost:${port}`))