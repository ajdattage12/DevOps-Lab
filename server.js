const express = require('express')
const path = require('path')
const cors = require('cors')
//include and initalize the rollbar library with you access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '96893bb6d840473091b39de23f2dbd96',
  captureUncaught: true,
  captureUnhandledRejections: true,
})
// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', function(req, res) {
    rollbar.info("HTML file served successfully");
    res.sendFile(path.join(__dirname, "/public/index.html"))
})

app.post('/', function(req, res){
    try {
    nonExistentFunction();
  } catch (error) {
    console.error(error);
  }
    rollbar.info("This is the fake function error");
    res.status(400).send("Opps! That is not allowed.")
})

app.use('/', function (req, res){
    try{
        nonExistentFunction():
    }catch (error) {
        console.error(error);
    }
    rollbar.info("This is the fake function error");
    res.status(400).send("Fake Function Alert")
})

app.use("/", express.static(path.join(__dirname, "/public")));

app.use('/css', express.static(path.join(__dirname, "/styles.css")))

app.use(rollbar.errorHandler());

const port= process.env.PORT || 4040;

app.listen(port, () => {
    console.log(`Jammin on ${port}`);
});