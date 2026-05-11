// UpTime Monitor Application
//RestApi FUll
const http = require("http");

const app = {};

// ConfigSig
app.config = {
  port: 3000,
};

//create Server
app.createServer = () => {
  const server = http.createServer(app.HandlerReqRes);
  server.listen(app.config.port, () => {
    console.log(`listen to port ${app.config.port}`);
  });
};

// handle Req And Res

app.HandlerReqRes = (req, res) => {
  res.end("Hello Programmer");
};

app.createServer();
