var express = require('express');
var app = express();

var counter = 0;
app.get('/', function (req, res) {
  console.log('Hello World ' + counter);
  res.send('Hello World ' + counter);
  counter += 1;
});

setInterval(function () {
	counter = 0;
}, 1000);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

//loadtest http://localhost:3000/ -t 1 -c 10 --rps 100   

//iptables -I INPUT -p tcp --dport 3000 -m state --state NEW,RELATED,ESTABLISHED -m limit --limit 3/s -j DROP

//sudo iptables -A INPUT -p tcp --dport 3000 -i eth0 -m state --state NEW -m recent --set
//sudo iptables -A INPUT -p tcp --dport 3000 -i eth0 -m state --state NEW,RELATED,ESTABLISHED -m recent --update --seconds 1 --hitcount 3 -j DROP
