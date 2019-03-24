const request = require('request');
const express = require('express');
const app = express();
const router = express.Router();
var varViews = 0;
const {createServer} = require('http');
const path = require('path');
const PORT = process.env.PORT || 3000
const dev = app.get('env') !== 'production'


if(!dev){
    console.log("Not Dev mode");
    app.use(express.static(path.resolve(__dirname, 'build')));
    app.use(express.static(__dirname + '/public'));

    app.get("/", (req, res) => {
        console.log('Home page');
        res.send("This is the home page");
    })
    
    app.post("/usbstat", (req, res) => {
        varViews++;
        var views = {views: varViews};

        const fs = require('fs');
        fs.writeFile("/numViews.txt", varViews, function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        }); 
        res.json(views);
    })
    
    app.delete("/usbstat", (req, res) => {
        varViews = 0;
        var views = {views: 0};
        const fs = require('fs');
        fs.writeFile("/numViews.txt", 0, function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        });
        res.json(views);
    })
    
    app.get("/usbstat", (req, res) => {
        var numViews = {views: varViews};

        const fs = require('fs');
        fs.writeFile("/numViews.txt", varViews, function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        });


        return res.json(numViews);
    })

    app.get('/*', function(req, res) {
        res.sendFile(path.join(__dirname, '/public/index.html'), function(err) {
          if (err) {
            res.status(500).send(err)
          }
        })
      })

}else {
    app.get("/", (req, res) => {
        console.log('Home page');
        res.send("This is the home page");
    })
    
    app.post("/usbstat", (req, res) => {
        varViews++;
        var views = {views: varViews};
        res.json(views);
    })
    
    app.delete("/usbstat", (req, res) => {
        varViews = 0;
        var views = {views: 0};
        res.json(views);
    })
    
    app.get("/usbstat", (req, res) => {
        var numViews = {views: varViews};
        return res.json(numViews);
    })
}

app.listen(PORT, () => {
    console.log('App is listening on'+PORT);
})



module.exports = app;