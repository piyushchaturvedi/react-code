const router = require("express").Router();
const users = require('./models/user');
router.post("/add", (req, res) => {
  users.findOne({ name:req.body.name }).count().exec(function (err, resp) {
    console.log(req.body.name);
    if (resp>0) {
      return res.status(200).send({status:false,msg:'user alredy exits!!'});
    } else {
      new users(req.body).save().then(docs => {
        return res.status(200).send({status:true,msg:'user saved'});
      });
      
    }
  });
});

router.post("/edit", (req, res) => {
  users.findByIdAndUpdate({ _id: req.body.id }, { $set: req.body },
    (err, result) => {
      if (err) {
        return res.status(200).send({status:false,msg:'something went wrong!!'});
      } else {
        return res.status(200).send({status:true,msg:'user updated!!'});
      }
    });
});

router.post("/delete", (req, res) => {
  users.deleteOne({ '_id': req.body.id }, function (err, result) {
    if (err) {
      return res.status(200).send({status:false,msg:'something went wrong!!'});
    }
    else {
      return res.status(200).send({status:true,msg:'user deleted!!'});
    }
  });
});

router.post("/list", async(req, res) => {
  const user =await users.find();
  res.status(200).send(user);
});

module.exports = router;