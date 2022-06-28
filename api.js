const database = require('./database');
const { default: axios } = require("axios");
const api = "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT";
var Price;
function get_data(entry){
    try{
        axios.get(api).then(response=>{
            const {symbol, price} = response.data;
            console.log(`Currency is "${symbol}" and price is ${price}`);
            database.insert_data(price, entry);
            //Price = price
        })
    }
    catch(e){
        console.log(e);
    }
}


module.exports = { get_data }

//module.exports = { price }
