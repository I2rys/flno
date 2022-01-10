//Dependencies
const Fs = require("fs")

//Variables
const Self_Args = process.argv.slice(2)

//Main
if(!Self_Args.length){
    console.log("node index.js <input> <output>")
    process.exit()
}

if(!Fs.existsSync(Self_Args[0])){
    console.log("Invalid input.")
    process.exit()
}

if(!Self_Args[1]){
    console.log("Invalid output.")
    process.exit()
}

var file_data = Fs.readFileSync(Self_Args[0], "utf8").replace(/\r/g, "").split("\n")

if(!file_data.length){
    console.log("Input data is empty.")
    process.exit()
}

for( i in file_data ){
    file_data[i] = file_data[i].replace(/[^a-zA-Z0-9]/g, "")
}

console.log(`Saving the results to ${Self_Args[1]}`)
Fs.writeFileSync(Self_Args[1], file_data.join("\n"), "utf8")
console.log(`Results successfully saved to ${Self_Args[1]}`)