const { Router } = require("express");
const Like = require("./model");
const auth = require("../auth/middleware");
const { toData } = require('../auth/jwt')

const router = new Router();

router.post("/like", auth, (req, res, next) => {
  const authBlock =
    req.headers.authorization && req.headers.authorization.split(" ");
      
  const userId = toData(authBlock[1]).userId;

  Like.create({
    like : req.body.like,
    imageId : req.body.imageId,
    userId
  })
    .then(like => res.send(like))
    .catch(err => next(err));
});

router.delete("/like/:id", auth, (request, response, next) => {
  const authBlock =
    request.headers.authorization && request.headers.authorization.split(" ");
      
  const user = toData(authBlock[1]).userId;

  Like.destroy({
    where: { imageId: request.params.id,  userId: user}
  })
    .then(number => response.send({ number }))
    .catch(err => next(err));
});

module.exports = router;