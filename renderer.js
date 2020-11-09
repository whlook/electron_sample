// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

var date = now_date();
console.log(date);
function start_game(){
	console.log("start game");
	var user_name = document.getElementById("user_name").value;
	if(user_name){
		storage["user_name"] = user_name;
	}else{
		storage["user_name"] = "passerby";
	}
	window.location.href="./record/record.html";
}

let sql_str = "create table if not exists `act` (user_id integer primary key autoincrement,user_name text,video_path text,score1 int,score2 int,score3 int,scoreall int,trigger text)";
sql_run(sql_str,function(data){
	console.log(data);
});

usleep(1000);

sql_str = "create index if not exists `act_index` on `act` (score1,score2,score3,scoreall);";
sql_run(sql_str,function(data){
	console.log(data);
});

/*
usleep(1000);

sql_str = "select * from act order by scoreall desc limit 5 offset 0";
sql_run(sql_str,function(data){
	console.log(data);
	for (let i=0;i<data[0].values.length;i++){
		var div = document.createElement('div');
		div.innerHTML = "score:"+ data[0].values[i][6] +","+data[0].values[i][7];
		document.getElementById('top_list').appendChild(div);
		var video = document.createElement('video');
		video.src = data[0].values[i][2];
		video.autoplay = "autoplay";
		video.loop = "loop";
		video.style = "width:160px;height:120px";
		document.getElementById('top_list').appendChild(video);
	}
});
*/


