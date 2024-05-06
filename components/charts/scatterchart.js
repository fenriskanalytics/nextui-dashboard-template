const scatterChartCode = " <!DOCTYPE html>\n" +
"<html lang=\"en\">\n" +
"<head>\n" +
"    <meta charset=\"UTF-8\">\n" +
"    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
"    <title>Scatter Chart with Chart.js</title>\n" +
"    <script src=\"https://cdn.jsdelivr.net/npm/chart.js\"></script>\n" +
"</head>\n" +
"<body>\n" +
"<canvas id=\"scatterChart\" width=\"400\" height=\"200\"></canvas>\n" +
"\n" +
"<script>\n" +
"    // Generate test data with discrete X values and continuous Y values\n" +
"    const getTestData = x => {\n" +
"        const off = 50 + 10 * Math.random(); // Example offset for dollar value\n" +
"        return Array.from({length: 200}, (_, i) => ({\n" +
"            x: x,\n" +
"            y: off + (Math.random() - 0.5) * (Math.random() - 0.5) * 5\n" +
"        }));\n" +
"    };\n" +
"\n" +
"    // Sample data points for mean estimate and actual results\n" +
"    const meanEstimate = { x: 2.5, y: 55, pointBackgroundColor: 'red' };\n" +
"    const actualResult = { x: 3.5, y: 60, pointBackgroundColor: 'blue' };\n" +
"\n" +
"    new Chart(document.getElementById(\"scatterChart\"), {\n" +
"        type: 'scatter',\n" +
"        data: {\n" +
"            datasets: [{\n" +
"                label: 'Quarter 1',\n" +
"                data: getTestData(1),\n" +
"                backgroundColor: 'rgba(255, 99, 132, 0.5)'\n" +
"            }, {\n" +
"                label: 'Quarter 2',\n" +
"                data: getTestData(2),\n" +
"                backgroundColor: 'rgba(54, 162, 235, 0.5)'\n" +
"            }, {\n" +
"                label: 'Quarter 3',\n" +
"                data: getTestData(3),\n" +
"                backgroundColor: 'rgba(255, 206, 86, 0.5)'\n" +
"            }, {\n" +
"                label: 'Quarter 4',\n" +
"                data: getTestData(4),\n" +
"                backgroundColor: 'rgba(75, 192, 192, 0.5)'\n" +
"            }, {\n" +
"                label: 'Mean Estimate',\n" +
"                data: [meanEstimate],\n" +
"                pointRadius: 5\n" +
"            }, {\n" +
"                label: 'Actual Result',\n" +
"                data: [actualResult],\n" +
"                pointRadius: 5\n" +
"            }]\n" +
"        },\n" +
"        options: {\n" +
"            scales: {\n" +
"                x: {\n" +
"                    type: 'linear',\n" +
"                    position: 'bottom',\n" +
"                    ticks: {\n" +
"                        callback: function(value, index, values) {\n" +
"                            // Map numerical x-values to quarter labels\n" +
"                            switch(value) {\n" +
"                                case 1: return 'Q1';\n" +
"                                case 2: return 'Q2';\n" +
"                                case 3: return 'Q3';\n" +
"                                case 4: return 'Q4';\n" +
"                                default: return '';\n" +
"                            }\n" +
"                        }\n" +
"                    }\n" +
"                },\n" +
"                y: {\n" +
"                    ticks: {\n" +
"                        // Format y-values as dollar amounts\n" +
"                        callback: function(value, index, values) {\n" +
"                            return '$' + value.toFixed(2);\n" +
"                        }\n" +
"                    }\n" +
"                }\n" +
"            }\n" +
"        }\n" +
"    });\n" +
"</script>\n" +
"</body>\n" +
"</html>";

console.log(scatterChartCode);
