function MainProcess(){
	this.mission = 1;
	this.road = "left";
	this.life = 100;
	this.process = 0;
	this.timerID = 0;
	this.roadNum = 3;
	this.situ = "none";
	this.w = window.innerWidth;
	this.h = window.innerHeight;
}

MainProcess.prototype={
	render:function(){
		var c = document.getElementById('main-ui');
		var cxt = c.getContext("2d");
		var road = new Image();
		road.src = "./img/road.png";
		road.onload=function(){
			cxt.drawImage(road,0,0,300,150);
			var roadline = new Image();
			roadline.src = "./img/roadline.png";
			roadline.onload=function(){
				cxt.drawImage(roadline,0,0,300,150);
			}
		}
		var sky = new Image();
		sky.src = "./img/sky.png";
		sky.onload=function(){
			cxt.drawImage(sky,0,0,300,150);
		}
	},
	showHelp:function(){
		this.situ="help";
		var c = document.getElementById('main-ui');
		var cxt = c.getContext("2d");
		var help = new Image();
		help.src = "./img/help.png";
		help.onload=function(){
			cxt.drawImage(help,0,0,300,150);
		}
		$("#start-button").css("display", "none");
		$("#help-button").css("display", "none");
	}
}

var p = new MainProcess();
p.render();
$("#help-button").on("tap", function(evt) {
	p.showHelp();
});

$("#main-ui").on("tap",function(evt){
	if (p.situ == "help"){
		p.render();
		$("#start-button").css("display", "block");
		$("#help-button").css("display", "block");
	}
});