const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

//email api key
// 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

// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')
// const Task = require('./models/task')
// const User = require('./models/user')
// const multer = require('multer')


const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})


// ************************* Extras *************************

// We first provide our string argument, then we provide whatever comes back from the call to single as the second argument, and finally we provide our route handler as the third argument.
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb) {
//         if(!file.originalname.match(/\.(doc|docx)$/)){
//             return cb(new Error('Please upload a word document'))
//         }
//         cb(undefined, true)
//         // cb(new Error('File must be pdf'))
//         // cb(undefined, true)
//         // cb(undefined, false)
//     }
// })

// const errorMiddleware = (req, res, next) => {
//     throw new Error('From my middleware')
// }
// app.post('/upload', errorMiddleware, (req, res) => {
//     res.send()
// }, (error, req, res, next) => {
//     res.status(400).send({ error: error.message })
// })

/* app.post('/upload', upload.single('upload'), (req, res) => {
    res.send()
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
})
 */
/* middleware
app.use((req, res, next) => {
    if(req.method === 'GET') {
        res.send('GET requests are disabled')
    } else {
        next()
    }
}) */

/* app.use((req, res, next) => {
    res.status(503).send('Site is under maintenance. Check back soon!')
}) */

// const main = async () => {
//     // const task = await Task.findById('626a9c985b81db55e500e2dd')
//     // await task.populate('owner')
//     // console.log(task.owner)

//     // owner id: 626a9ad68d79c377b28527e9
//     // task id: 626a9c985b81db55e500e2dd

//     // const user = await User.findById('626a9ad68d79c377b28527e9')
//     // await user.populate('tasks')
//     // console.log(user.tasks)
// }
// main() 


// bcrypt hash function
// const myfunction = async () => {
//     const password = 'red12345'
//     const hashedPassword = await bcrypt.hash(password, 8)
    
//     console.log(password)
//     console.log(hashedPassword)

//     const isMatch = await bcrypt.compare('red123456', hashedPassword)
//     console.log(isMatch)
// }

// const myfunction = async () => {
//     const token = jwt.sign({ _id:'abc123' }, 'thisisalongcourse', {expiresIn: '7 days'})
//     console.log(token)

//     const data = jwt.verify(token, 'thisisalongcourse')
//     console.log(data)
// }

// myfunction()