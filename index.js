const app = require('express')();
const http = require('http').Server(app);

const port = process.env.PORT || 3000;

const os = require('os');
const figlet = require('figlet');
require('dotenv').config();

setInterval(talk, process.env.LOG_INTERVAL || 1000);

let count = 0;

function talk() {

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    const host = os.hostname();

    console.log(`${count} - from ${host} - at ${hours}:${minutes}:${seconds} (${date})`);
    count++;

}

figlet('Logger', function(err, data) {
    console.log(data);
});

console.log(`I will log each ${process.env.LOG_INTERVAL}ms`);

// Serve to K8s readinessProbe and livenessProbe
app.get('/status', function(req, res){
    res.sendStatus(200);
});

http.listen(port, function(){
    console.log('K8s server listening on *:' + port);
});