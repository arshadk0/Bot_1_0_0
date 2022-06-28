
const express = require('express');
const cron = require('node-cron');
const api = require('./api');
const database = require('./database');
const axios = require('axios');
const request = require("request");
const entry = 1;
async function main() {
    database.connect_database(); 
    //database.create_database();
    try {
        cron.schedule('*/10 * * * * *', async () => {
            api.get_data(entry);
            entry = entry+1;
            //console.log(api.get_data());
        });
    } catch (e) {
        console.log('an error occured: ' + JSON.stringify(e, null, 2));
        throw e;
    }
}


const PORT = process.env.PORT || 3000;
express().listen(PORT, function () {
    console.log("Server Started on Port " + PORT);
});

main().then(() => { console.log('Function is started.'); });