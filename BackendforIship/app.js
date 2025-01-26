var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors=require('cors');
const bodyparser=require('body-parser');
const mongoose=require('mongoose');
const FirstRoute=require('./Router/FirstRoute');

var app = express();

app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001'], // Allow both frontends
}));


mongoose.connect("mongodb+srv://sravyabulusu2005:vWQJNtL4N2tzkgbb@cluster0.py4um.mongodb.net/")
.then(result=>
{
  console.log("Connected Successfully");
}
)
.catch(err=>
{
  console.log(err);
}
)



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(bodyparser());

app.use("/",FirstRoute);


app.listen(9001,function(){
  console.log("Bhanu Server Iship2 Started")
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

let notifications = []; // Store notifications here

// Endpoint to fetch notifications
app.get('/api/notifications', (req, res) => {
  res.json(notifications);
});

// Endpoint to post notifications
app.post('/api/notifications', (req, res) => {
  const notificationData = req.body;

  console.log('Notification received:', notificationData);

  // Store the new notification
  notifications.push({
    id: notifications.length + 1,
    message: notificationData.message,
    timestamp: new Date()
  });

  // Send a response back to the frontend
  res.json({
    message: 'Notification received successfully!',
    data: notificationData
  });
});




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
