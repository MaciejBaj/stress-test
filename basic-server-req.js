var express = require('express');
var app = express();
var request=require('request');


var counter = 0;


setInterval(function () {
	console.log("senidng req to pinkipe");
	request.get('http://pinkiepie.todr.me:3000', {}, function (err,res,body) {
	  console.log('resp', body);
	});

}, 1000);

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});

//loadtest http://localhost:3000/ -t 1 -c 10 --rps 100   

//iptables -I INPUT -p tcp --dport 3000 -m state --state NEW,RELATED,ESTABLISHED -m limit --limit 3/s -j DROP

//sudo iptables -A INPUT -p tcp --dport 3000 -i eth0 -m state --state NEW -m recent --set
//sudo iptables -A INPUT -p tcp --dport 3000 -i eth0 -m state --state NEW,RELATED,ESTABLISHED -m recent --update --seconds 1 --hitcount 3 -j DROP
