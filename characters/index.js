const server = require("./src/server");
const port = 8001;

server.listen(port, () => {
  console.log(`Characters listen on port ${port}`);
});
