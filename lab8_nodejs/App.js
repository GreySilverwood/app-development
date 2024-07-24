console.log('===== Example 1: Global Object, Console =====')
console.log('Welcome to NodeJS by Zaiqiang Li')
console.warn('WARNING! The file might be corrupted.')
console.error('SYNTAX ERROR. Check spelling.')
console.trace('Trace error in line')

console.log('===== Example 2: Global Object, Timer =====')
setTimeout(()=>{console.warn('Time is over.')},3000)

let count = 3
const timer = setInterval(()=>{
    console.log(`Counting ${count}`)
    count -= 1
    if (count == 0){
        clearInterval(timer)
    }
},2000)

console.log('===== Example 3: Check or Print directory or file =====')
console.log(`Current directory: ${__dirname}`)
console.log(`Current File: ${__filename}`)

console.log('===== Example 4: Working with Different Modules =====')
//import the module
const name = require('./mod')

console.log(name.helper("Martha"))
console.log(name.id(1203814))
console.log(name.email('zaiqiangli456@gmail.com'))

console.log('\n===== Example 5: NodeJS Event Module =====')
//import the nodjs module events
const events = require('events')

//user construstor 'new' to create an object of events
const eventEmitter = new events.EventEmitter()

eventEmitter.on('test', function(e){
    console.log(e)
})

eventEmitter.emit('test', 'EVENTS EMITTERS IN NODEJS')

console.log('\n===== Emample 6: Read File in NodeJS =====')
const fs = require('fs')
fs.readFile('readmore.txt', 'utf-8', function(error, data){
    console.log(data)
    console.log(`Error = ${error}`)
})

console.log("\n===== Example 7: Write File in NodeJS =====")
let info = "This file has three names: \n1. Peter\n2. Martha\n3. Jason"
fs.writeFile('readmore.txt', info, function(error){
    if(error){
        console.log(error)
    }
})

console.log('\n===== Example 8: Append Data into an Existing File in NodeJS =====')
fs.appendFile("user_emails.txt", info, function(error){
    if(error){
        console.log(error)
    }
})

console.log('\n===== Example 9: Remove Files =====')
fs.unlink('user_emails.txt', function(error){
    if(error){
        console.log(error)
    }
})

console.log('\n===== Example 10: Create Files =====')
// .writeFile(), .appendFile(), .open()
fs.open('newfile.txt', 'w', function(err){
    if(err){
        console.log(err)
    } else {
        console.log('File saved.')
    }
})

console.log('\n===== Example 11: Create Directory =====')
fs.mkdirSync('new_directory')

console.log('\n===== Example 12: Remove Directory =====')
fs.rmdirSync('new_directory')