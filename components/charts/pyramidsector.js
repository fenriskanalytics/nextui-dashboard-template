var sectorsScript = 
"<script src=\"https://cdn.jsdelivr.net/npm/chart.js\"></script>\n" +
"<canvas id=\"sectorChart\"></canvas>\n" +
"<script>\n" +
"document.addEventListener('DOMContentLoaded', function() {\n" +
"    var ctx = document.getElementById('sectorChart').getContext('2d');\n" +
"\n" +
"    var data = {\n" +
"        labels: [\n" +
"            \"Information Technology\",\n" +
"            \"Health Care\",\n" +
"            // ... other sectors\n" +
"        ],\n" +
"        datasets: [{\n" +
"            label: 'Portfolio 1',\n" +
"            data: [-20, -15, /* ... other values for Portfolio 1 */],\n" +
"            backgroundColor: 'rgba(75, 192, 192, 0.2)'\n" +
"        },\n" +
"        {\n" +
"            label: 'Portfolio 2',\n" +
"            data: [25, 20, /* ... other values for Portfolio 2 */],\n" +
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
"    var sectorChart = new Chart(ctx, {\n" +
"        type: 'bar',\n" +
"        data: data,\n" +
"        options: options\n" +
"    });\n" +
"});\n" +
"</script>";
