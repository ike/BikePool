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

var times = {
	600:{time:'6:00'},
	630:{time:'6:30'},
	700:{time:'7:00'},
	730:{time:'7:30'},
	800:{time:'8:00'},
	830:{time:'8:30'},
	900:{time:'9:00'},
	930:{time:'9:30'},
	1000:{time:'10:00'},
	1030:{time:'10:30'},
	1100:{time:'11:00'},
	1130:{time:'11:30'},
	1200:{time:'12:00'},
	1230:{time:'12:30'},
	1300:{time:'1:00'},
	1330:{time:'1:30'},
	1400:{time:'2:00'},
	1430:{time:'2:30'},
	1500:{time:'3:00'},
	1530:{time:'3:30'},
	1600:{time:'4:00'},
	1630:{time:'4:30'},
	1700:{time:'5:00'},
	1730:{time:'5:30'},
	1800:{time:'6:00'},
	1830:{time:'6:30'},
	1900:{time:'7:00'},
	1930:{time:'7:30'},
	2000:{time:'8:00'},
	2030:{time:'8:30'},
	2100:{time:'9:00'},
	2130:{time:'9:30'},
	2200:{time:'10:00'},
	2230:{time:'10:30'},
	2300:{time:'11:00'},
	2330:{time:'11:30'},
	0000:{time:'12:00'},
	0030:{time:'12:30'}
}

// handler for displaying the routes
exports.routes = function(req, res) {
    res.render('routes', { title: 'Routes', routes:routes });
};

// handler for displaying individual items
exports.route = function(req, res) {
    var name = routes[req.params.id].name;
    var start = routes[req.params.id].start;
    var end = routes[req.params.id].end;
    res.render('route', { title: name + ' - BikePool', name:name, start:start, end:end, times.times });
};