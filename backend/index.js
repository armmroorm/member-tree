const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

const port = 3001;

const dataRoute = require('./routes/dataRoute');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(morgan('dev'));
app.use(helmet());

app.use('/api/member_data',dataRoute);

app.listen(port,()=>{
    console.log('Connect to port : ',port);
});

