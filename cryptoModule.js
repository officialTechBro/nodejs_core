import crypto from 'crypto'

//createHash()
// const hash = crypto.createHash('sha256')
// hash.update('password1234')
// console.log(hash.digest('hex'))


//randomByte()
// crypto.randomBytes(16, (err, buf) => {
//     if (err) throw err
//     console.log(buf.toString('hex'))
// })

//createCipheriv & createDecipheriv
const algorithm = 'aes-256-cbc'
const Key = crypto.randomBytes(32)
const iv = crypto.randomBytes(16)

const cipher = crypto.createCipheriv(algorithm, Key, iv)
let encrypted = cipher.update('Hello, this is a top level secrete message', 'utf8', 'hex')
encrypted += cipher.final('hex')
console.log(encrypted)


const decipher = crypto.createDecipheriv(algorithm, Key, iv)
let decrypted = decipher.update(encrypted, 'hex', 'utf8')
decrypted += decipher.final('utf8')
console.log(decrypted)