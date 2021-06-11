const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

const app = express();

app.use('/api/auth', require('./routes/auth-route'))

const PORT = config.get('port') || 5000

async function start() {
    try {
        await mongoose.connect(config.get('mongoURL'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(PORT,() => {console.log(`Server is running on port ${PORT}`)});
    } catch (e) {
        console.log('Server error', e.message)
        process.exit( 1 )
    }
}

start()

// app.use(cors());
// app.use(express.json());

