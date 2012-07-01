exports.home = function(req, res){
  res.render('home', { title: 'BikePool' })
};

var routes = {
	1234:{name:'Brooklyn to Manhattan', start:'Brooklyn, NY, USA', end:'Manhattan, NY, USA', members:567},
    5678:{name:'Grand Army Plaza to Tribeca', start:'Grand Army Plaza, NY, USA', end:'Tribeca, NY, USA', members:567},
    9012:{name:'Williamsburg to East Village', start:'Williamsburg, NY, USA', end:'East Village, NY, USA', members:567},
    3456:{name:'Williamsburg to Dumbo', start:'Williamsburg, NY, USA', end:'Dumbo, NY, USA', members:567},
	7890:{name:'Park Slope Food Coop to Columbus Circle', start:'Park Slope Food Coop, NY, USA', end:'Columbus Circle, NY, USA', members:567},
	4321:{name:'Sunset Park to Chelsea', start:'Sunset Park, NY, USA', end:'Chelsea, NY, USA', members:567},
}

var times = [
	'6:00',
	'6:30',
]

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