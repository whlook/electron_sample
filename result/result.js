
setInterval(function(){
	if(storage["current_video"]){
		document.querySelector("#uservideo").src = "../" + storage["current_video"];
		document.querySelector("#username").innerHTML = storage["current_username"];
		document.querySelector("#score1").innerHTML = storage["current_score1"];
		document.querySelector("#score2").innerHTML = storage["current_score2"];
		document.querySelector("#score3").innerHTML = storage["current_score3"];
		document.querySelector("#scoreall").innerHTML = storage["current_scoreall"];
		document.querySelector("#score1video").src=  storage["current_score1video"];
		document.querySelector("#score2video").src=  storage["current_score2video"];
		document.querySelector("#score3video").src=  storage["current_score3video"];
		storage["current_video"] = "";
	}
}, 1000);

let sql_str = "select * from act order by scoreall desc limit 5 offset 0";
sql_run(sql_str,function(data){
	console.log(data);
	for (let i=0;i<data[0].values.length;i++){
		var score=data[0].values[i][6];
		var time=data[0].values[i][7];
		var videosrc="../"+ data[0].values[i][2];
		var usrname = data[0].values[i][1];
		if(i==0){
			let viddiv = document.createElement('div');
			viddiv.style="position:absolute;left:1320px;top:160px;";
			let video = document.createElement('video');
			video.src=`${videosrc}`;
			video.autoplay = "autoplay";
			video.loop = "loop";
			video.style = "width:256px;height:192px";
			viddiv.appendChild(video);
			document.getElementById('top_list').appendChild(viddiv);

			let topnumdiv = document.createElement('div');
			topnumdiv.setAttribute("class","topnum");
			topnumdiv.innerHTML=" &nbsp;No.1&nbsp; ";
			topnumdiv.style="background-color:blue;position:absolute;left:1320px;top:184px;";
			document.getElementById('top_list').appendChild(topnumdiv);

			let topnamediv = document.createElement('div');
			topnamediv.setAttribute("class","topinfo");
			topnamediv.innerHTML="昵称:" + `${usrname}`;
			topnamediv.style="position:absolute;left:1600px;top:200px;";
			document.getElementById('top_list').appendChild(topnamediv);

			let topfiltdiv = document.createElement('div');
			topfiltdiv.setAttribute("class","topinfo");
			topfiltdiv.innerHTML="排名:1";
			topfiltdiv.style="position:absolute;left:1600px;top:220px;";
			document.getElementById('top_list').appendChild(topfiltdiv);

			let topscordiv = document.createElement('div');
			topscordiv.setAttribute("class","topinfo");
			topscordiv.innerHTML="总分:" + `${score}`;
			topscordiv.style="position:absolute;left:1600px;top:240px;";
			document.getElementById('top_list').appendChild(topscordiv);

			let toptimediv = document.createElement('div');
			toptimediv.setAttribute("class","topinfo");
			toptimediv.innerHTML="时间:" + `${time}`;
			toptimediv.style="position:absolute;left:1600px;top:260px;";
			document.getElementById('top_list').appendChild(toptimediv);
		}
		if(i==1){
			let viddiv = document.createElement('div');
			viddiv.style="position:absolute;left:1320px;top:320px;";
			let video = document.createElement('video');
			video.src=`${videosrc}`;
			video.autoplay = "autoplay";
			video.loop = "loop";
			video.style = "width:256px;height:192px";
			viddiv.appendChild(video);
			document.getElementById('top_list').appendChild(viddiv);

			let topnumdiv = document.createElement('div');
			topnumdiv.setAttribute("class","topnum");
			topnumdiv.innerHTML=" &nbsp;No.2&nbsp; ";
			topnumdiv.style="background-color:blue;position:absolute;left:1320px;top:344px;";
			document.getElementById('top_list').appendChild(topnumdiv);

			let topnamediv = document.createElement('div');
			topnamediv.setAttribute("class","topinfo");
			topnamediv.innerHTML="昵称:" + `${usrname}`;
			topnamediv.style="position:absolute;left:1600px;top:360px;";
			document.getElementById('top_list').appendChild(topnamediv);

			let topfiltdiv = document.createElement('div');
			topfiltdiv.setAttribute("class","topinfo");
			topfiltdiv.innerHTML="排名:2";
			topfiltdiv.style="position:absolute;left:1600px;top:380px;";
			document.getElementById('top_list').appendChild(topfiltdiv);

			let topscordiv = document.createElement('div');
			topscordiv.setAttribute("class","topinfo");
			topscordiv.innerHTML="总分:" + `${score}`;
			topscordiv.style="position:absolute;left:1600px;top:400px;";
			document.getElementById('top_list').appendChild(topscordiv);

			let toptimediv = document.createElement('div');
			toptimediv.setAttribute("class","topinfo");
			toptimediv.innerHTML="时间:" + `${time}`;
			toptimediv.style="position:absolute;left:1600px;top:420px;";
			document.getElementById('top_list').appendChild(toptimediv);
		}
if(i==2){
			let viddiv = document.createElement('div');
			viddiv.style="position:absolute;left:1320px;top:480px;";
			let video = document.createElement('video');
			video.src=`${videosrc}`;
			video.autoplay = "autoplay";
			video.loop = "loop";
			video.style = "width:256px;height:192px";
			viddiv.appendChild(video);
			document.getElementById('top_list').appendChild(viddiv);

			let topnumdiv = document.createElement('div');
			topnumdiv.setAttribute("class","topnum");
			topnumdiv.innerHTML=" &nbsp;No.3&nbsp; ";
			topnumdiv.style="background-color:blue;position:absolute;left:1320px;top:504px;";
			document.getElementById('top_list').appendChild(topnumdiv);

			let topnamediv = document.createElement('div');
			topnamediv.setAttribute("class","topinfo");
			topnamediv.innerHTML="昵称:" + `${usrname}`;
			topnamediv.style="position:absolute;left:1600px;top:520px;";
			document.getElementById('top_list').appendChild(topnamediv);

			let topfiltdiv = document.createElement('div');
			topfiltdiv.setAttribute("class","topinfo");
			topfiltdiv.innerHTML="排名:3";
			topfiltdiv.style="position:absolute;left:1600px;top:540px;";
			document.getElementById('top_list').appendChild(topfiltdiv);

			let topscordiv = document.createElement('div');
			topscordiv.setAttribute("class","topinfo");
			topscordiv.innerHTML="总分:" + `${score}`;
			topscordiv.style="position:absolute;left:1600px;top:560px;";
			document.getElementById('top_list').appendChild(topscordiv);

			let toptimediv = document.createElement('div');
			toptimediv.setAttribute("class","topinfo");
			toptimediv.innerHTML="时间:" + `${time}`;
			toptimediv.style="position:absolute;left:1600px;top:580px;";
			document.getElementById('top_list').appendChild(toptimediv);
		}

	if(i==3){
			let viddiv = document.createElement('div');
			viddiv.style="position:absolute;left:1320px;top:640px;";
			let video = document.createElement('video');
			video.src=`${videosrc}`;
			video.autoplay = "autoplay";
			video.loop = "loop";
			video.style = "width:256px;height:192px";
			viddiv.appendChild(video);
			document.getElementById('top_list').appendChild(viddiv);

			let topnumdiv = document.createElement('div');
			topnumdiv.setAttribute("class","topnum");
			topnumdiv.innerHTML=" &nbsp;No.4&nbsp; ";
			topnumdiv.style="background-color:blue;position:absolute;left:1320px;top:664px;";
			document.getElementById('top_list').appendChild(topnumdiv);

			let topnamediv = document.createElement('div');
			topnamediv.setAttribute("class","topinfo");
			topnamediv.innerHTML="昵称:" + `${usrname}`;
			topnamediv.style="position:absolute;left:1600px;top:680px;";
			document.getElementById('top_list').appendChild(topnamediv);

			let topfiltdiv = document.createElement('div');
			topfiltdiv.setAttribute("class","topinfo");
			topfiltdiv.innerHTML="排名:4";
			topfiltdiv.style="position:absolute;left:1600px;top:700px;";
			document.getElementById('top_list').appendChild(topfiltdiv);

			let topscordiv = document.createElement('div');
			topscordiv.setAttribute("class","topinfo");
			topscordiv.innerHTML="总分:" + `${score}`;
			topscordiv.style="position:absolute;left:1600px;top:720px;";
			document.getElementById('top_list').appendChild(topscordiv);

			let toptimediv = document.createElement('div');
			toptimediv.setAttribute("class","topinfo");
			toptimediv.innerHTML="时间:" + `${time}`;
			toptimediv.style="position:absolute;left:1600px;top:740px;";
			document.getElementById('top_list').appendChild(toptimediv);
		}

	if(i==4){
			let viddiv = document.createElement('div');
			viddiv.style="position:absolute;left:1320px;top:800px;";
			let video = document.createElement('video');
			video.src=`${videosrc}`;
			video.autoplay = "autoplay";
			video.loop = "loop";
			video.style = "width:256px;height:192px";
			viddiv.appendChild(video);
			document.getElementById('top_list').appendChild(viddiv);

			let topnumdiv = document.createElement('div');
			topnumdiv.setAttribute("class","topnum");
			topnumdiv.innerHTML=" &nbsp;No.5&nbsp; ";
			topnumdiv.style="background-color:blue;position:absolute;left:1320px;top:824px;";
			document.getElementById('top_list').appendChild(topnumdiv);

			let topnamediv = document.createElement('div');
			topnamediv.setAttribute("class","topinfo");
			topnamediv.innerHTML="昵称:" + `${usrname}`;
			topnamediv.style="position:absolute;left:1600px;top:840px;";
			document.getElementById('top_list').appendChild(topnamediv);

			let topfiltdiv = document.createElement('div');
			topfiltdiv.setAttribute("class","topinfo");
			topfiltdiv.innerHTML="排名:5";
			topfiltdiv.style="position:absolute;left:1600px;top:860px;";
			document.getElementById('top_list').appendChild(topfiltdiv);

			let topscordiv = document.createElement('div');
			topscordiv.setAttribute("class","topinfo");
			topscordiv.innerHTML="总分:" + `${score}`;
			topscordiv.style="position:absolute;left:1600px;top:880px;";
			document.getElementById('top_list').appendChild(topscordiv);

			let toptimediv = document.createElement('div');
			toptimediv.setAttribute("class","topinfo");
			toptimediv.innerHTML="时间:" + `${time}`;
			toptimediv.style="position:absolute;left:1600px;top:900px;";
			document.getElementById('top_list').appendChild(toptimediv);
		}
	}
});

function restart(){
	window.location.href="../index.html";
}
