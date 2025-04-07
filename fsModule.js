// import fs from 'fs'
import { read } from 'fs'
import fs from 'fs/promises'

//readFile() - calback
// fs.readFile('./test.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data)
// })

//readFileSync - Synchronous version
// const data = fs.readFileSync('./test.txt', 'utf-8')
// console.log(data)

//readFile() - Promise .then()
// fs.readFile('./test.txt', 'utf8')
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))

//readFile - Promise async/await
const readFile = async () => {
    try {
        const data = await  fs.readFile('./test.txt', 'utf-8')
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
// readFile()



// write File
const writeFile = async () => {
    try {
        await fs.writeFile('./test.txt', 'Hello world')
        console.log('File written to')
    } catch (error) {
        console.log(error)
    }
}
// writeFile()
// readFile()



// Append File
const appendFile = async () => {
    try {
        await fs.appendFile('./test.txt', '\nThis is the appended text')
        console.log('File appended to')
    } catch (error) {
        console.log(error)
    }
}
writeFile()
appendFile()
readFile()