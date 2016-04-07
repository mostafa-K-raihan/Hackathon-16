<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>

	<script type="text/javascript">
      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Month', 'Violence Percentage'],
          ['January',     11],
          ['February',     13],
          ['March',  11],
          ['April', 8],
          ['May',   7],
		  ['June',   7],
		  ['July',   9],
		  ['August',   8],
		  ['September',   9],
		  ['November',   9],
		  ['December',   8],
        ]);
		
		var data1 = google.visualization.arrayToDataTable([
			['Time','Violence Percentage'],
			['00:00-04:00',2],
			['04:00-08:00',19],
			['08:00-12:00',23],
			['12:00-16:00',22],
			['16:00-20:00',21],
			['20:00-23:59',13],
		]);
		var data2 = google.visualization.arrayToDataTable([
			['Violence Type','Violence Percentage'],
			['Eve Teasing',27],
			['Rape',17],
			['Murder',25],
			['Harrasment',25],
			['Physical Abuse',12],
		]);
		var data3 = google.visualization.arrayToDataTable([
			['Area','Violence Percentage'],
			['Uttara',27],
			['Basabo',17],
			['Shantinagar',25],
			['Badda',25],
			['Gulshan',12],
			['Shaymoli', 25],
			['dhanmondi',46],
			['green road', 32],
			['banglamotor',12],
		]);

		
        var options = {
			
          title: 'Violence per Month Year 2016',
          is3D: true,
		  backgroundColor: '#98e400',
		  legend : {textStyle: {color: 'black', fontSize: 10}},
		  legend : {position: 'none'},
		  titleTextStyle: {color:'#f40000', fontSize:20, bold: true}
        };
		var options1 = {
			
          title: 'Violence per 4 hour Interval in a day for last month',
          is3D: true,
		  backgroundColor: '#98e400',
		  legend : {textStyle: {color: 'black', fontSize: 10}},
		  legend : {position: 'none'},
		  titleTextStyle: {color:'#f40000', fontSize:20, bold: true}
        };

        var options2 = {
			
          title: 'Violence Type Percentage',
          is3D: true,
		  backgroundColor: '#98e400',
		  legend : {textStyle: {color: 'black', fontSize: 10}},
		  legend : {position: 'none'},
		  titleTextStyle: {color:'#f40000', fontSize:20, bold: true}
        };
		var options3 = {
			
          title: 'Violence in different area',
          is3D: true,
		  backgroundColor: '#98e400',
		  legend : {textStyle: {color: 'black', fontSize: 10}},
		  legend : {position: 'none'},
		  titleTextStyle: {color:'#f40000', fontSize:20, bold: true}
        };


		var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
        var chart1 = new google.visualization.PieChart(document.getElementById('piechart_3d1'));
		
		var chart2 = new google.visualization.PieChart(document.getElementById('piechart_3d2'));
        var chart3 = new google.visualization.PieChart(document.getElementById('piechart_3d3'));
		
		chart.draw(data, options);
		chart1.draw(data1,options1);
		chart2.draw(data2, options2);
		chart3.draw(data3, options3);
	  }
    </script>
	<style>
		.beforeZoomUpLeft{
			position : absolute; top: 12%; left: 17%; width: 35%; height: 40%;
		}
		.beforeZoomUpRight{
			position: absolute ; top: 12%; right: 12%; width: 35%; height: 40%;
		}
		.beforeZoomDownLeft{
			position: absolute; bottom:5%; left: 17%; width: 35%; height: 40%;
		}
		.beforeZoomDownRight{
			position: absolute; bottom:5%; right:12%; width: 35%; height: 40%;
		}
		.afterZoom{
			position: absolute; left: 7%; top: 5%;  zoom : 2.4;
		}
		.hide{
			visibility: hidden;
		}
		.dropdown-menu
	</style>
  </head>
  <body>
	
	
    <div id="piechart_3d" class="beforeZoomUpLeft"></div>
	<div id="piechart_3d1" class="beforeZoomUpRight"></div>
	<div id="piechart_3d2" class="beforeZoomDownLeft"></div>
	<div id="piechart_3d3" class="beforeZoomDownRight"></div>
	
	<script type="text/javascript">
		$(document).ready( function() {
			$('#piechart_3d').click(
			function() {
				//$(this).removeClass('beforeZoomUpLeft');
				$(this).toggleClass('afterZoom');
				$("#piechart_3d1").toggleClass('hide');
				$("#piechart_3d2").toggleClass('hide');
				$("#piechart_3d3").toggleClass('hide');
				
				
			});
			$('#piechart_3d1').click(
			function() {
				//$(this).removeClass('beforeZoomUpLeft');
				$(this).toggleClass('afterZoom');
				
				$("#piechart_3d").toggleClass('hide');
				$("#piechart_3d2").toggleClass('hide');
				$("#piechart_3d3").toggleClass('hide');
				
				
			});
			$('#piechart_3d2').click(
			function() {
				//$(this).removeClass('beforeZoomUpLeft');
				$(this).toggleClass('afterZoom');
				
				$("#piechart_3d").toggleClass('hide');
				$("#piechart_3d1").toggleClass('hide');
				$("#piechart_3d3").toggleClass('hide');
				
				
			});
			$('#piechart_3d3').click(
			function() {
				//$(this).removeClass('beforeZoomUpLeft');
				$(this).toggleClass('afterZoom');
				$("#piechart_3d").toggleClass('hide');
				$("#piechart_3d1").toggleClass('hide');
				$("#piechart_3d2").toggleClass('hide');
				
			});
		});
		
		
		
	</script>
	
  </body>
</html>