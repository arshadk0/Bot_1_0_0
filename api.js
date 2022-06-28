const database = require('./database');
const { default: axios } = require("axios");
const api = "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT";
function get_data(){
    try{
        axios.get(api).then(response=>{
            const {symbol, price} = response.data;
            console.log(`Currency is "${symbol}" and price is ${price}`);
            database.insert_data(price);
        })
    }
    catch(e){
        console.log(e);
    }
}


module.exports = { get_data }

