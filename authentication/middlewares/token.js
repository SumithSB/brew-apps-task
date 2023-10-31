const jwt = require("jsonwebtoken");
const SECRET = process.env.JWT_SECRET;

middleware = {};

middleware.validation = (req, res, next) => {
  try {
    jwt.verify(req.headers.authorization, SECRET, (err, decoded) => {
      if (err) {
        console.log(err);
        res
          .status(401)
          .send({ error: "NOT AUTHENTICATED" });
      } else {
        req.tokenpayload = decoded;
        next();
      }
    });
  } catch (err) {
    res
      .status(500)
      .send({ error: "NOT AUTHENTICATED" });
  }
};


middleware.createAccessToken = (id) => {
  return jwt.sign({ userId: id }, SECRET);
}

module.exports = middleware;
