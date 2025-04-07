import {createServer} from 'http'

const users = [
    {id: 1, name: 'John Doe'},
    {id: 2, name: 'Jane Doe'},
    {id: 3, name: 'Jim Doe'},
]

//logger middleware
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    next()
}

//JSON middleware
const jsonMiddleware = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json')
    next()
}

//route handler for GET /api/users
const getUserHandler = (req, res) => {
    res.write(JSON.stringify(users))
    res.end()
}


// route handler for GET /api/users/:id
const getUserByIdHandler = (req, res) => {
    const id = req.url.split('/')[3]
    const user = users.find((user) => user.id === parseInt(id))
    if (user) {
        res.write(JSON.stringify(user))
        res.end()
    } else {
        res.statusCode = 404
        res.write(JSON.stringify({message: "user not found"}))
        res.end()
    }
}

//not found handler
const notFoundHandle = (req, res) => {
    res.statusCode = 404
    res.write(JSON.stringify({message: "user not found"}))
    res.end()
}

//route handler for POST /api/users
const createUserHandler = (req, res) => {
    let body = '';
    //Listen for data
    req.on('data', (chunk) => {
        body += chunk.toString()
    })
    req.on('end', () => {
        const newUser = JSON.parse(body)
        users.push(newUser)
        res.statusCode = 201
        res.write(JSON.stringify(newUser))
        res.end()
    })
}

const server = createServer((req, res) => {
   logger(req, res, () => {
    jsonMiddleware(req, res, () => {
        if (req.url === '/api/users' && req.method === 'GET') {
            getUserHandler(req, res)
        } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') {
            getUserByIdHandler(req, res)
        } else if(req.url === '/api/users' && req.method === 'POST') {
            createUserHandler(req, res)
        } else {
            notFoundHandle(req, res)
        }
    })
    //  if (req.url === '/api/users' && req.method === 'GET') {
    //     res.setHeader('Content-Type', 'application/json')
    //     res.write(JSON.stringify(users))
    //     res.end()
    // } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') {
    //     const id = req.url.split('/')[3]
    //     const user = users.find((user) => user.id === parseInt(id))
    //     res.setHeader('Content-Type', 'application/json')
    //     if (user) {
    //         // res.setHeader('Content-Type', 'application/json')
    //         res.write(JSON.stringify(user))
    //         // res.end()
    //     } else {
    //         // res.setHeader('Content-Type', 'application/json')
    //         res.statusCode = 404
    //         res.write(JSON.stringify({message: "user not found"}))
    //         // res.end()
    //     }
    //     res.end()
    // } else {
    //     res.setHeader('Content-Type', 'application/json')
    //     res.statusCode = 404
    //     res.write(JSON.stringify({message: "route not found"}))
    //     res.end()
    // }
   })
})

server.listen(process.env.PORT, () => {
    console.log(`server running`)
})
