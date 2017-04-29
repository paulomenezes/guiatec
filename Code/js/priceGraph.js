var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
var lineChartData = {
	labels : ["04 jan a 10 jan","11 jan a 17 jan","18 jan a 24 jan","25 jan a 31 jan","01 fev a 07 fev","agora"],
	datasets : [
		{
			label: "My Second dataset",
			fillColor : "rgba(255,165,24,0.2)",
			strokeColor : "rgba(213,137,18,1)",
			pointColor : "rgba(213,137,18,1)",
			pointStrokeColor : "#fff",
			pointHighlightFill : "#fff",
			pointHighlightStroke : "rgba(213,137,18,1)",
			data : [ 1231.12, 1196.15, 1196.15, 1299.00, 1259.10, 1349.10]
		}
	]
};


var options = {      
	scaleLabel : "<%= 'R$ ' + value %>",
	tooltipTemplate: "<%= 'R$ ' + value %>",
	responsive: true
};

window.onload = function(){
	var ctx = document.getElementById("canvas").getContext("2d");
	window.myLine = new Chart(ctx).Line(lineChartData, options);
}