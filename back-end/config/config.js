const path = require('path');

module.exports = {
    APP_NAME: 'Point Of Sale',

    PORT: 8000,
    IP: '127.0.0.1',

    COOKIE_SECRET: 'DU30P4R1NMG4GUR4NG',

    CORS: {
        allowed_headers: 'Access-Token, X-Requested-With, Content-Type, Accept',
        allowed_origins: '*',
        allowed_methods: 'GET, POST, PUT, OPTIONS, DELETE'
    },

    ASSETS_DIR: path.normalize(__dirname + '/../../front-end'),

    DATABASE_CREDENTIALS: {
        host: '127.0.0.1',
        user: 'root',
        password: 'user',
        database: 'pos'
    }
}