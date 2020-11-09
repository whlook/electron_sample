
var timecnt_prepare = 3;
var timecnt_rec = 10;

let recorder = null;

function startRecorder(stream) {
	recorder = new MediaRecorder(stream);
	recorder.start();
	recorder.addEventListener('dataavailable',process);
	recorder.onerror = err => {
		console.error(err);
	};
}

function stopRecorder() {
	recorder.stop();
	recorder = null;
}

function showloader() {
	document.querySelector(".loader").style.display="";
}

function saveMedia(blob) {
	let reader = new FileReader();
	let rand_name = random(1,100000);
	let mp4_file = 'cache/' + `${rand_name}` + '.mp4';
	reader.onload = () => {
		let buffer = new Buffer(reader.result);
		fs.writeFile(mp4_file, buffer, {}, (err, res) => {
			if (err) return console.error(err);
		});
	};
	reader.onerror = err => console.error(err);
	reader.readAsArrayBuffer(blob);
	return mp4_file;
}

function process(event){
	let blob = new Blob([event.data], {
		type: 'video/mp4',
	});
	let name = saveMedia(blob);
	var cmd = "python ai.py " + `${name}`;
	system(cmd,function(data){
		console.log(data);
		var json = JSON.parse(data);
		var user_name = storage["user_name"];
		var video_path = name;
		var score1 = json["score1"];
		var score2 = json["score2"];
		var score3 = json["score3"];
		var score1video = json["score1video"];
		var score2video = json["score2video"];
		var score3video = json["score3video"];
		var scoreall = json["scoreall"];
		var trigger = now_date();
		storage["current_username"] = user_name;
		storage["current_score1"] = score1;
		storage["current_score2"] = score2;
		storage["current_score3"] = score3;
		storage["current_score1video"] = score1video;
		storage["current_score2video"] = score2video;
		storage["current_score3video"] = score3video;
		storage["current_scoreall"] = scoreall;
		storage["current_video"] = name;
		var sql_str = "insert into act (user_id,user_name,video_path,score1,score2,score3,scoreall,trigger) values (null," + "\"" + user_name + "\",\"" + video_path + "\"," + score1 + "," + score2 + "," + score3 + "," + scoreall + ",\"" + trigger + "\")";
			console.log(sql_str);
		sql_run(sql_str,function(data){
			console.log(data);
			var load= document.querySelector("#cntwav_load");
			load.pause();
			window.location.href="../result/result.html";
		});
		usleep(1000);
	});
}

function countDown_rec() {
	if (timecnt_rec < 1) {
		var posleft = document.querySelector("#countdown");
		posleft.setAttribute("class","cntdown3 mfont2");
		document.querySelector("#countdown").innerHTML = "Stop!";
		if (timecnt_rec < 0) {
			document.querySelector("#countdown").innerHTML = "";
			stopRecorder();
			showloader();
			var wav10s= document.querySelector("#cntwav_10s");
			wav10s.pause();
			var load= document.querySelector("#cntwav_load");
			load.play();
			return;
		}
	}else{
		document.querySelector("#countdown").innerHTML = `${timecnt_rec}`;
	}
	timecnt_rec--;
	setTimeout(countDown_rec, 1000);
}


function countDown_prepare() {
	if(timecnt_prepare == 3){
		var wav321 = document.querySelector("#cntwav_321");
		wav321.play();
	}
	if(timecnt_prepare == 2){
		var wav10s= document.querySelector("#cntwav_10s");
		wav10s.play();
	}
	if(timecnt_prepare == 1){
		var go= document.querySelector("#cntwav_go");
		go.play();
	}
	if (timecnt_prepare < 1) {
		document.querySelector("#countdown").innerHTML = "Go!";
		if (timecnt_prepare < 0) {
			document.querySelector("#countdown").innerHTML = "";
			var posleft = document.querySelector("#countdown");
			posleft.setAttribute("class","cntdown2 mfont2");
			countDown_rec();
			var wav10s= document.querySelector("#cntwav_10s");
			wav10s.playbackRate = 1.3;
			return;
		}
	} else {
		document.querySelector("#countdown").innerHTML = `${timecnt_prepare}`;
	}
	timecnt_prepare--;
	setTimeout(countDown_prepare, 1000);
}
	
var cfg = {
	audio: false,
	video: {
		width: 1536,
		height:864,
		frameRate:30
	}
};
navigator.mediaDevices.getUserMedia(cfg).then(function(mediaStream) {
	var video = document.querySelector('video');
	video.srcObject = mediaStream;
	video.onloadedmetadata = function(e) {
		video.play();
		countDown_prepare();
	};
	startRecorder(mediaStream);
}).catch(function(err) {
	console.log(err.name + ": " + err.message);
}); // always check for errors at the end.



