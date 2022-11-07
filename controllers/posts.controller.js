const createError = require("http-errors");
const Post = require("../models/posts.model");

module.exports.create = (req, res, next) => {
  Post.create({
    ...req.body,
  })
    //Devuelve HTTP 201 con el detalle JSON del Post creado en la Base de Datos en memoria
    .then((post) => res.status(201).json(post))
    // Devuelve HTTP 400 si hay errores en la validación del body de la petición contra el esquema definido
    .catch((err) => res.status(400).send())
    .catch(next);
};

module.exports.list = (req, res, next) => {
  Post.find({})
    // Devuelve HTTP 200 OK con el listado JSON de posts almacenados en la Base de Datos en memoria
    .then((posts) => res.json(posts))
    .catch(next);
};

module.exports.getOne = (req, res, next) => {
  Post.findById(req.params.id)
    // Devuelve 200 OK con detalle de un Post JSON almacenado en la Base de Datos en memoria
    .then((posts) => {
      if(posts){
        res.json(posts);
      } else {
        // Devuelve 404 si el post no existe en la Base de Datos en memoria
        res.status(404).send();
      }
    })
    // .catch((err) => res.status(404).send())
    .catch(next);
};

module.exports.patchOne = (req, res, next) => {
  Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  })
  .then(post => {
    if(post) {
      res.json(post)
    } else {
      res.status(404).send()
    }
  })
  // .catch(err => res.status(404).send());
  .catch(next);
};

module.exports.deleteOne = (req, res, next) => {
  Post.findByIdAndDelete(req.params.id)
  .then(post => {
    if(post){
      res.status(204).send();
    } else {
      res.status(404).send();
    }
  })
  // .catch(err => res.status(404).send());
  .catch(next);
};
