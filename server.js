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


app.use(rollbar.errorHandler());

const port= process.env.PORT || 4040;

app.listen(port, () => {
    console.log(`Jammin on ${port}`);
});