/* eslint-disable no-unused-vars */
let express     = require('express'),
    cors        = require('cors'),
    mongoose    = require('mongoose'),
    database    = require('./database'),
    bodyParser  = require('body-parser'),
    createError = require('http-errors')

// Connect MongoDB
mongoose.Promise = global.Promise;
mongoose.connect(database.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database connected successfully.');
}, error => {
    console.log('Cannot connect to database ' + error);
})

const studentAPI = require('./routes/student.route');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}))

// Cors
app.use(cors());

// API
app.use('/api', studentAPI);

// CREATE PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log('Connect to port ' + port);
})

// 404 Handler
app.use((req, res, next) => {
    next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message)
})