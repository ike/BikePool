exports.home = function(req, res){
  res.render('home', { title: 'BikePool' })
};

var routes = {
	1234:{name:'Brooklyn to Manhattan', start:'Brooklyn, NY, USA', end:'Manhattan, NY, USA'},
    5678:{name:'Grand Army Plaza to Tribeca', start:'Grand Army Plaza, NY, USA', end:'Tribeca, NY, USA'},
    9012:{name:'Williamsburg to East Village', start:'Williamsburg, NY, USA', end:'East Village, NY, USA'},
}

// handler for displaying the routes
exports.routes = function(req, res) {
    res.render('routes', { title: 'Routes', routes:routes });
};

// handler for displaying individual items
exports.item = function(req, res) {
    var name = items[req.params.id].name;
    var start = items[req.params.id].start;
    var end = items[req.params.id].end;
    res.render('item', { title: name + ' - BikePool', name:name, start:start, end:end });
};


// handler for displaying the routes
exports.about = function(req, res) {
    res.render('about', { title: 'About - BikePool'});
};