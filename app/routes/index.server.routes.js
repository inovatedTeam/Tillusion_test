var authorize = function(req, res, next) {
  if (req.session && req.session.account)
    return next();
  else{
  	return res.redirect('/admin');
  }
}
var index 		= require('../controllers/index.server.controller');

module.exports = function(app) {
	app.get('/', index.render);
	app.post("/api/places/add",index.setInfo);
	app.get('/api/places',index.getInfo);
};