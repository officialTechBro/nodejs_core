import path from 'path'
import url from 'url'

const filePath = './home/profile/taiw0.txt'

//basename
console.log(path.basename(filePath))

//dirname
console.log(path.dirname(filePath))

//extensionname
console.log(path.extname(filePath))

//parse()
console.log(path.parse(filePath))

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

console.log({__filename, __dirname})

//join()
const filePath2 = path.join(__dirname, 'dir1', 'dir2', 'profile.txt')
console.log(filePath2)

//resolve
const filePath3 = path.resolve(__dirname, 'dir1', 'dir2', 'profile.txt')
console.log(filePath3)