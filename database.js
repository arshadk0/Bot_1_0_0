const { Pool, Client } = require("pg");
var pool;
function create_database(){
    pool.query("CREATE TABLE IF NOT EXISTS test(price VARCHAR(15))", (err, res) => {
        //console.log(err, res);
        console.log("DataBase created!")
        //pool.end();
    });
}

function connect_database(){
    pool = new Pool({
        user: 'team1',
        host: 'practisedb-fresher.cdsamxevdhkl.ap-south-1.rds.amazonaws.com',
        database: 'projects_db',
        password: 'Od@5$ge1vMX1qF3$Wr',
        port: 49218,
    })
    pool.connect(function(err) {
        if (err) throw err;
        console.log("Database Connected!");
        
    });
    
}

//connect_database();

function insert_data(price){
    pool.query("INSERT INTO test(price)VALUES("+price+")",
        (err, res) => {
          //console.log(err, res);
          console.log(`Inserted with price = ${price}`)
          //pool.end();
        }
    );      
}

function get_data(){
    

}


module.exports = { insert_data, connect_database, create_database, get_data }