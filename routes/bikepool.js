exports.home = function(req, res){
  res.render('home', { title: 'BikePool' })
};

exports.routes = function(req, res){
	res.render('routes', {title: 'Routes'})
}