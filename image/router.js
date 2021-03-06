const { Router } = require("express");
const Image = require("./model");
const User = require("../user/model")
const auth = require("../auth/middleware");

const router = new Router();

router.get("/image", (req, res, next) => {
  Image.findAll({include : [{
    model: User, attributes: ['id']
}]})
    .then(image => res.send(image))
    .catch(err => next(err));
});

router.post("/image", auth, (req, res, next) => {
  Image.create(req.body)
    .then(image => res.send(image))
    .catch(err => next(err));
});

router.put("/image/:id", (request, response, next) => {
  Image.findByPk(request.params.id)
    .then(image => image.update(request.body))
    .then(image => response.send(image))
    .catch(err => next(err));
});

router.delete("/image/:id", (request, response, next) => {
  Image.destroy({
    where: { id: request.params.id }
  })
    .then(number => response.send({ number }))
    .catch(err => next(err));
});

module.exports = router;
