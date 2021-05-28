const express = require('express')
const path = require('path') //requiere el modulo nativo path de node
const app = express()
/* publicPath = path.join(__dirname, '../public') */
const port = process.env.PORT || 3002
app.use(express.static(__dirname + '/public'));

app.get('/',(req,res)=>{
    res.sendFile( __dirname +'/index.html')
})

app.listen(port, () => console.log('Servidor corriendo en el puerto 3001'))