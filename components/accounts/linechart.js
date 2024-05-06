"<!DOCTYPE html>\n" +
"<html>\n" +
"<head>\n" +
"<title>ECharts Line Chart Example</title>\n" +
"<link href='https://fonts.googleapis.com/css2?family=Open+Sans&display=swap' rel='stylesheet'>\n" +
"<style>body {font-family: 'Open Sans', sans-serif;}</style>\n" +
"<script src='https://cdnjs.cloudflare.com/ajax/libs/echarts/5.3.1/echarts.min.js'></script>\n" +
"</head>\n" +
"<body>\n" +
"<div id='main' style='width: 100%; height: 500px;'></div>\n" +
"<script type='text/javascript'>\n" +
"var chartDom = document.getElementById('main');\n" +
"var myChart = echarts.init(chartDom);\n" +
"var option;\n" +
"var date = new Date();\n" +
"date.setHours(0, 0, 0, 0);\n" +
"var value = 20;\n" +
"function generateData() {\n" +
"value = Math.round(Math.random() * 10 - 4.8 + value);\n" +
"if (value < -50) {value = -50 + Math.random() * 10;}\n" +
"if (value > 50) {value = 50 - Math.random() * 10;}\n" +
"date = new Date(date.getTime() + 7 * 24 * 60 * 60 * 1000);\n" +
"return { date: echarts.format.formatTime('yyyy-MM-dd', date), value: value };\n" +
"}\n" +
"function generateDatas(count) {\n" +
"var data = [];\n" +
"for (var i = 0; i < count; ++i) {\n" +
"data.push(generateData());\n" +
"}\n" +
"return data;\n" +
"}\n" +
"var chartData = generateDatas(300);\n" +
"option = {\n" +
"tooltip: {\n" +
"trigger: 'axis',\n" +
"formatter: function(params) {\n" +
"return params[0].marker + params[0].name + ': ' + params[0].value + '%';\n" +
"}\n" +
"},\n" +
"xAxis: {\n" +
"type: 'category',\n" +
"data: chartData.map(function(item) { return item.date; })\n" +
"},\n" +
"yAxis: {\n" +
"type: 'value',\n" +
"axisLabel: {\n" +
"formatter: '{value}%'\n" +
"}\n" +
"},\n" +
"series: [{\n" +
"data: chartData.map(function(item) { return item.value; }),\n" +
"type: 'line',\n" +
"areaStyle: {\n" +
"color: '#67b7dc'\n" +
"},\n" +
"smooth: true\n" +
"}]\n" +
"};\n" +
"myChart.setOption(option);\n" +
"</script>\n" +
"</body>\n" +
"</html>"
