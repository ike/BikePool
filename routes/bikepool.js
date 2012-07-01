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
	2400:{time:'12:00'},
	2430:{time:'12:30'}
}


var avatars = [
		'http://profile.ak.fbcdn.net/hprofile-ak-snc4/275219_592159006_5641090_q.jpg',
		'http://profile.ak.fbcdn.net/hprofile-ak-snc4/41563_403838_1775353908_q.jpg',
		'http://profile.ak.fbcdn.net/hprofile-ak-snc4/274975_709096636_1773343650_q.jpg',
		'http://profile.ak.fbcdn.net/hprofile-ak-snc4/157406_584915952_572452274_q.jpg',
		'http://profile.ak.fbcdn.net/hprofile-ak-ash2/371359_1391557219_1395016500_q.jpg',
		'http://profile.ak.fbcdn.net/hprofile-ak-snc4/41773_1438022747_9054_n.jpg',
		'http://profile.ak.fbcdn.net/hprofile-ak-snc4/41773_1438022747_9054_n.jpg',
		'http://profile.ak.fbcdn.net/hprofile-ak-snc4/275473_1835325427_3297755_n.jpg',
		'http://profile.ak.fbcdn.net/hprofile-ak-snc4/41468_100000767625615_1306_n.jpg',
		'http://profile.ak.fbcdn.net/hprofile-ak-snc4/49064_510901969_1084_n.jpg',
		'http://profile.ak.fbcdn.net/hprofile-ak-snc4/173377_748208372_424926076_n.jpg',
		'http://profile.ak.fbcdn.net/hprofile-ak-snc4/368878_1342260081_1252270577_n.jpg',
		'http://profile.ak.fbcdn.net/hprofile-ak-snc4/157797_689905576_1001769255_n.jpg',
		'http://profile.ak.fbcdn.net/hprofile-ak-snc4/186876_503898642_695328115_n.jpg',
		'http://profile.ak.fbcdn.net/hprofile-ak-ash2/49212_612541747_2975_n.jpg',
		'http://profile.ak.fbcdn.net/hprofile-ak-snc4/572782_524286405_197498286_n.jpg',
		'http://profile.ak.fbcdn.net/hprofile-ak-snc4/369063_201301062_186105466_n.jpg',
		'http://profile.ak.fbcdn.net/hprofile-ak-ash2/173355_702076694_5934574_n.jpg',
		'http://profile.ak.fbcdn.net/hprofile-ak-snc4/157247_1069030372_254159793_n.jpg',
		'http://profile.ak.fbcdn.net/hprofile-ak-snc4/368831_1358650828_260028352_n.jpg',
		'http://profile.ak.fbcdn.net/hprofile-ak-snc4/260864_1523790019_101295787_n.jpg',
		'http://profile.ak.fbcdn.net/hprofile-ak-ash2/48978_1072700819_3188_n.jpg',
		'http://profile.ak.fbcdn.net/hprofile-ak-snc4/157864_12500579_177732011_n.jpg',
		'http://profile.ak.fbcdn.net/hprofile-ak-snc4/276177_13004024_118900488_n.jpg',
		'http://profile.ak.fbcdn.net/hprofile-ak-snc4/173588_100000442697893_1142558131_n.jpg'	
];


exports.home = function(req, res){
  res.render('home', { title: 'BikePool' })
};

// handler for displaying all the routes
exports.routes = function(req, res) {
    res.render('routes', { title: 'Routes', routes:routes });
};

// handler for displaying an individual route
exports.route = function(req, res) {
    var name = routes[req.params.id].name;
    var start = routes[req.params.id].start;
    var end = routes[req.params.id].end;
    var members = routes[req.params.id].members;
    res.render('route', { title: name + ' - BikePool', name:name, start:start, end:end, times:times, avatars:avatars, members:members });
};


// handler for displaying the about page
exports.about = function(req, res) {
    res.render('about', { title: 'About - BikePool' });
};

// handler for displaying the about page
exports.routedetails = function(req, res) {
    res.render('routedetails', { title: 'Join A Route - BikePool'});
};