var htmlCode = "<!DOCTYPE html>\n" +
"<html lang=\"en\">\n" +
"<head>\n" +
"    <meta charset=\"UTF-8\">\n" +
"    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n" +
"    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
"    <title>Bullet Chart using Chart.js</title>\n" +
"    <script src=\"https://cdn.jsdelivr.net/npm/chart.js\"></script>\n" +
"</head>\n" +
"<body>\n" +
"\n" +
"<canvas id=\"bulletChart\" width=\"400\" height=\"100\"></canvas>\n" +
"\n" +
"<script>\n" +
"document.addEventListener(\"DOMContentLoaded\", function() {\n" +
"    var ctx = document.getElementById('bulletChart').getContext('2d');\n" +
"\n" +
"    var data = {\n" +
"        datasets: [{\n" +
"            label: 'Range',\n" +
"            data: [0.5, 3.5], // [lowest, highest]\n" +
"            backgroundColor: 'rgba(192, 192, 192, 0.6)', // Light gray\n" +
"            borderColor: 'rgba(192, 192, 192, 1)',\n" +
"            borderWidth: 1,\n" +
"            barPercentage: 0.6\n" +
"        }, {\n" +
"            label: 'Actual',\n" +
"            data: [2.0], // Actual result\n" +
"            backgroundColor: 'rgba(136, 136, 136, 0.8)', // Dark gray\n" +
"            borderColor: 'rgba(136, 136, 136, 1)',\n" +
"            borderWidth: 1,\n" +
"            barPercentage: 0.4\n" +
"        }]\n" +
"    };\n" +
"\n" +
"    var bulletChart = new Chart(ctx, {\n" +
"        type: 'horizontalBar',\n" +
"        data: data,\n" +
"        options: {\n" +
"            scales: {\n" +
"                xAxes: [{\n" +
"                    ticks: {\n" +
"                        beginAtZero: true\n" +
"                    }\n" +
"                }],\n" +
"                yAxes: [{\n" +
"                    display: false,\n" +
"                    stacked: true\n" +
"                }]\n" +
"            },\n" +
"            plugins: {\n" +
"                legend: {\n" +
"                    position: 'bottom'\n" +
"                }\n" +
"            }\n" +
"        },\n" +
"        plugins: [{\n" +
"            // Render the mean triangle\n" +
"            afterDraw: (chart, args, options) => {\n" +
"                const x = chart.scales.x.getPixelForValue(2.5); // Mean value\n" +
"                const y = chart.height / 2;\n" +
"\n" +
"                ctx.fillStyle = '#70b603';\n" +
"                ctx.beginPath();\n" +
"                ctx.moveTo(x, y - 10); // top\n" +
"                ctx.lineTo(x - 10, y + 10); // bottom left\n" +
"                ctx.lineTo(x + 10, y + 10); // bottom right\n" +
"                ctx.closePath();\n" +
"                ctx.fill();\n" +
"            }\n" +
"        }]\n" +
"    });\n" +
"});\n" +
"</script>\n" +
"\n" +
"</body>\n" +
"</html>";
