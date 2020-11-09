
var exec = require('child_process').exec; 
var fs = require('fs'); 

var sql = require('sql.js');
var db_file = "cache/act.db"
var db_file_buffer = fs.readFileSync(db_file);

var storage = window.localStorage;

var sql_run = function(sql_str,callback){
	sql().then(function(SQL){
		var db = new SQL.Database(db_file_buffer);
		var res = db.exec(sql_str);
		var data = db.export();
		var buffer = new Buffer(data);
		fs.writeFileSync(db_file,buffer);
		callback(res);
	});
}

var usleep = function(time) {
	    var startTime = new Date().getTime() + parseInt(time, 10);
	        while(new Date().getTime() < startTime) {}
};

var system = function(cmd,callback){
	exec(cmd, function(err,stdout,stderr){
			if(err) {
				console.log('error:'+stderr);
			} else {
				callback(stdout);
			}
		});
	}

var random = function(minNum, maxNum) {
		switch (arguments.length) {
			case 1:
			  	return parseInt(Math.random() * minNum + 1, 10);
				break;
			case 2:
				return parseInt(Math.random() * ( maxNum - minNum + 1 ) + minNum, 10);
				break;
			default:
				return 0;
				break;
			}
		} 

var now_date = function() {
	var now = new Date();
	var year = now.getFullYear();
	var month = now.getMonth();
	var date = now.getDate();
	var day = now.getDay();
	var hour = now.getHours();
	var minu = now.getMinutes();
	var sec = now.getSeconds();
	month = month + 1;
	if (month < 10) month = "0" + month;
	if (date < 10) date = "0" + date;
	if (hour < 10) hour = "0" + hour;
	if (minu < 10) minu = "0" + minu;
	if (sec < 10) sec = "0" + sec;
	var time = "";
	time = year + "-" + month + "-" + date+ " " + hour + ":" + minu + ":" + sec;
	return time;
}

