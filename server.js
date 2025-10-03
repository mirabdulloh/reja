const http = require("http");
const mongodb = require("mongodb");



const connectionString = "mongodb+srv://MAX:mirabdulla2003@reja.8avcuvv.mongodb.net/?retryWrites=true&w=majority&appName=reja"
mongodb.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function (err, client) {
    if (err) {
        console.log("ERROR:");
        throw err;
    } else {
        console.log("data base ulandi");
        module.exports = client;
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 4014;

        server.listen(PORT, function () {
            console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}/`);
        });
    }
});
