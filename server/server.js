const express = require('express')
const app = express()
const port = 8080

const compression = require('compression');
app.use(compression({
    filter: function () { return true; }}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('/contacts', (req, res) => {
    var fs = require('fs');
    var responseJSON = fs.readFileSync("./data/contacts-small.json", 'utf8');
    res.set('Content-Type', 'application/json');
    console.log(Buffer.byteLength(responseJSON, 'utf8'));
    //res.set('Content-Length', Buffer.byteLength(responseJSON, 'utf8'));
    res.send(responseJSON);
})

app.listen(port, () => console.log(`Server started on port ${port}!`))