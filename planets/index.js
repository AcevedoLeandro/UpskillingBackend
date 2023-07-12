const server = require("./src/server");
const port = 8003;

server.listen(port, () => {
  console.log(`Planets listen on port ${port}`);
});
