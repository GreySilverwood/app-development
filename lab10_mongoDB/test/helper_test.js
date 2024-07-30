//import mongoose
const mongoose = require('mongoose')

//connect to MongoDB where 'students_name' is the database
mongoose.connect("mongodb://localhost/students_list")

//check if it is connected
mongoose.connection
    //use .once to watch for mongoDB to connect the first time when the event occurred
    .once('open', function(){
        console.log('\n===== Connected to MongoDB =====\n')
    })
    //use .on to watch for error in the connection
    .on('error', function(e){
        console.log('Error Connecting.', e)
    })

//clear all collections from the 'students' document
beforeEach(function(done){
    mongoose.connection.collections.students.drop()
    done()
})