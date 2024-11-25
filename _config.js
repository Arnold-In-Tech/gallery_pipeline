var config = {}

// Update to have your correct username and password
config.mongoURI = {
//    production: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom?retryWrites=true&w=majority',
//    development: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
//    test: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom-test?retryWrites=true&w=majority',

// Updated connection string, username and password
//    production: 'mongodb+srv://arnold123:arnold123@arnoldscluster.njnnl.mongodb.net/?retryWrites=true&w=majority&appName=ArnoldsCluster',
//    development: 'mongodb+srv://arnold123:arnold123@arnoldscluster.njnnl.mongodb.net/?retryWrites=true&w=majority&appName=ArnoldsCluster',
//    test: 'mongodb+srv://arnold123:arnold123@arnoldscluster.njnnl.mongodb.net/?retryWrites=true&w=majority&appName=ArnoldsCluster',

   production: 'mongodb+srv://arnold123:arnold123@arnoldscluster.njnnl.mongodb.net/darkroom?retryWrites=true&w=majority',
   development: 'mongodb+srv://arnold123:arnold123@arnoldscluster.njnnl.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
   test: 'mongodb+srv://arnold123:arnold123@arnoldscluster.njnnl.mongodb.net/darkroom-test?retryWrites=true&w=majority',

}
module.exports = config;
