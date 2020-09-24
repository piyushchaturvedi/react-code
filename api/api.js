const router = require("express").Router();
const users = require('./models/user');
router.post("/add", (req, res) => {
  users.findOne({ name:req.body.name }).count().exec(function (err, resp) {
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
 // console.log(req.body);
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
  users.deleteOne(req.body.id, function (err, result) {
    if (err) {
      return res.status(200).send({status:false,msg:'something went wrong!!'});
    }else {
      return res.status(200).send({status:true,msg:'user deleted!!'});
    }
  });
});

router.post("/view", async(req, res) => {
  const user =await users.findOne({_id:req.body.id?req.body.id:''});
  if (user) {
    return res.status(200).send(user);
  }else {
    return res.status(200).send(user);
  }
});

router.post("/list", async(req, res) => {
  const user =await users.find();
  if (user) {
    return res.status(200).send({status:true,msg:'Listing has been loaded',data:user});
  }else {
    return res.status(200).send({status:free,msg:'List is not found',data:[]});
  }
});

module.exports = router;