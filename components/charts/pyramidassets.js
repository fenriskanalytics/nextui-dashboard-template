var assetClassesScript = 
"<script src=\"https://cdn.jsdelivr.net/npm/chart.js\"></script>\n" +
"<canvas id=\"assetChart\"></canvas>\n" +
"<script>\n" +
"document.addEventListener('DOMContentLoaded', function() {\n" +
"    var ctx = document.getElementById('assetChart').getContext('2d');\n" +
"\n" +
"    var data = {\n" +
"        labels: [\n" +
"            \"Equities\",\n" +
"            \"Fixed Income\",\n" +
"            // ... other asset classes\n" +
"        ],\n" +
"        datasets: [{\n" +
"            label: 'Portfolio 1',\n" +
"            data: [-25, -15, /* ... other values for Portfolio 1 */],\n" +
"            backgroundColor: 'rgba(75, 192, 192, 0.2)'\n" +
"        },\n" +
"        {\n" +
"            label: 'Portfolio 2',\n" +
"            data: [20, 12, /* ... other values for Portfolio 2 */],\n" +
"            backgroundColor: 'rgba(255, 99, 132, 0.2)'\n" +
"        }]\n" +
"    };\n" +
"\n" +
"    var options = {\n" +
"        indexAxis: 'y',\n" +
"        scales: {\n" +
"            x: {\n" +
"                beginAtZero: true\n" +
"            }\n" +
"        }\n" +
"    };\n" +
"\n" +
"    var assetChart = new Chart(ctx, {\n" +
"        type: 'bar',\n" +
"        data: data,\n" +
"        options: options\n" +
"    });\n" +
"});\n" +
"</script>";
