const express = require("express");
const morgan = require("morgan");
const { createProxyMiddleware } = require("http-proxy-middleware");
const port = 8000;

const app = express();
app.use(morgan("dev"));

app.use(
  `/characters`,
  createProxyMiddleware({
    target: `http://characters:8001`,
    changeOrigin: true,
  })
);
app.use(
  "/films",
  createProxyMiddleware({
    target: "http://films:8002",
    changeOrigin: true,
  })
);

app.use(
  "/planets",
  createProxyMiddleware({
    target: "http://planets:8003",
    changeOrigin: true,
  })
);

app.listen(port, () => {
  console.log(`Gateway on port: ${port}`);
});
