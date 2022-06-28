const { Pool, Client } = require("pg");

function create_database(pool){
    pool.query("SELECT * from test", (err, res) => {
        console.log(err, res);
        pool.end();
    });
}

function connect_database(){
    const pool = new Pool({
        user: 'team1',
        host: 'practisedb-fresher.cdsamxevdhkl.ap-south-1.rds.amazonaws.com',
        database: 'projects_db',
        password: 'Od@5$ge1vMX1qF3$Wr',
        port: 49218,
    })
    pool.connect(function(err) {
        if (err) throw err;
        console.log("Database Connected!");
        create_database(pool);
    });
    
}

connect_database();

function insert_data(price, entry){
    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    pool.query("INSERT INTO test(id, time, price)VALUES(entry, time, price)",
        (err, res) => {
          console.log(err, res);
          pool.end();
        }
    );      
}


module.exports = { insert_data, connect_database, create_database }