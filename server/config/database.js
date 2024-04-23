const mongoose = require('mongoose');


const connect = async() =>{
   try {
      const conn = await mongoose.connect(process.env.MONGO_URL)
      console.log(`connected to dataBASE ${conn.connection.host} `);
  } catch (error) {
      console.log(`Error in connection ${error}`)
  }
} 


module.exports = {connect}