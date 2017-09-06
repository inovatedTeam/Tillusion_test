var Info   = require('mongoose').model('Info');
exports.render = function (req,res)
{
    Info.find({}).exec(function(err, datas){
      res.render('index', {datas: datas});  
    });
};
exports.setInfo = function(req,res){
  console.log(req.body);
  var info = new Info(req.body);
  info.save(function(err){
      if(!err) res.json("success");
      else res.json("failure");
  });
};
exports.getInfo = function(req,res){
  Info.find({}).exec(function(err, datas){
    console.log(datas);
    res.json(datas);
  });
};
