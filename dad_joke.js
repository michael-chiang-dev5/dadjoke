const request = require('request');
const fs = require("fs");
const prompt = require('prompt');

prompt.start();
prompt.get(['searchString'], function (err, result) {
    const str = result.searchString
    const options = createOptions(str)
    request(options,callback)
});

function createOptions(str) {
    const options = {
        url: 'https://icanhazdadjoke.com/'+`search?term=${str}`,
        headers: {
            'Accept': 'application/json'
        }
    };
    return options
}

function callback(error,response,body) {    
    let obj = JSON.parse(body)
    //let joke = obj['joke']
    let jokeArray = obj['results']
    if (jokeArray.length===0) {console.log('no jokes found for search term'); return;}
    let randomIdx = Math.floor(Math.random() * jokeArray.length); 
    let joke = jokeArray[randomIdx]['joke'] + '\n'
    fs.appendFile('jokes.txt', joke, (err) => {
        if (err) console.log(err);
        else console.log('File written successfully')
    })
}
