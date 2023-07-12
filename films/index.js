const server = require("./src/server");
const port = 8002;

server.listen(port, () => {
  console.log(`films listen on port ${port}`);
});
