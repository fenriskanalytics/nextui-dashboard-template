"<!DOCTYPE html>\n" +
"<html lang=\"en\">\n" +
"<head>\n" +
"    <meta charset=\"UTF-8\">\n" +
"    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
"    <title>Stock Market Sectors and Industry Groups</title>\n" +
"    <script src=\"https://cdn.jsdelivr.net/npm/chart.js\"></script>\n" +
"</head>\n" +
"<body>\n" +
"\n" +
"<canvas id=\"chartCanvas\"></canvas>\n" +
"\n" +
"<script>\n" +
"    const colors = ['#7cb5ec', '#434348', '#90ed7d', '#f7a35c', '#8085e9', '#f15c80', '#e4d354', '#2b908f', '#f45b5b', '#91e8e1', '#c23531'];\n" +
"\n" +
"    const config = {\n" +
"        type: 'doughnut',\n" +
"        data: {\n" +
"            labels: [\n" +
"                'Energy',\n" +
"                'Materials',\n" +
"                'Industrials',\n" +
"                'Consumer Discretionary',\n" +
"                'Consumer Staples',\n" +
"                'Health Care',\n" +
"                'Financials',\n" +
"                'Information Technology',\n" +
"                'Communication Services',\n" +
"                'Utilities',\n" +
"                'Real Estate',\n" +
"\n" +
"                'Oil, Gas & Consumable Fuels',\n" +
"                'Chemicals',\n" +
"                'Capital Goods',\n" +
"                'Automobiles & Components',\n" +
"                'Food & Staples Retailing',\n" +
"                'Health Care Equipment & Services',\n" +
"                'Banks',\n" +
"                'Software & Services',\n" +
"                'Media & Entertainment',\n" +
"                'Utilities',\n" +
"                'Real Estate Management & Development',\n" +
"            ],\n" +
"            datasets: [{\n" +
"                label: 'Industry Groups',\n" +
"                data: [null, null, null, null, null, null, null, null, null, null, null, 15, 10, 8, 7, 6, 5, 12, 14, 13, 9, 11],\n" +
"                backgroundColor: colors,\n" +
"                borderColor: 'white',\n" +
"                borderWidth: 2,\n" +
"                hoverBorderColor: 'white',\n" +
"                hoverBorderWidth: 2,\n" +
"                weight: 2\n" +
"            },{\n" +
"                label: 'Sectors',\n" +
"                data: [10, 9, 8, 7, 6, 5, 11, 15, 14, 12, 13, null, null, null, null, null, null, null, null, null, null, null],\n" +
"                backgroundColor: colors,\n" +
"                borderColor: 'white',\n" +
"                borderWidth: 2,\n" +
"                hoverBorderColor: 'white',\n" +
"                hoverBorderWidth: 2,\n" +
"                weight: 1\n" +
"            }]\n" +
"        },\n" +
"        options: {\n" +
"            responsive: true,\n" +
"            title: {\n" +
"                display: true,\n" +
"                text: 'Stock Market Sectors and Industry Groups, 2023'\n" +
"            },\n" +
"            tooltips: {\n" +
"                callbacks: {\n" +
"                    label: function(tooltipItem, data) {\n" +
"                        const dataset = data.datasets[tooltipItem.datasetIndex];\n" +
"                        const currentValue = dataset.data[tooltipItem.index];\n" +
"                        const currentLabel = data.labels[tooltipItem.index];\n" +
"                        return `${currentLabel}: ${currentValue}%`;\n" +
"                    }\n" +
"                }\n" +
"            },\n" +
"            legend: {\n" +
"                position: 'right'\n" +
"            },\n" +
"            onHover: function(event, chartElement) {\n" +
"                event.target.style.cursor = chartElement[0] ? 'pointer' : 'default';\n" +
"            },\n" +
"            plugins: {\n" +
"                datalabels: {\n" +
"                    color: '#000000',\n" +
"                }\n" +
"            },\n" +
"            hover: {\n" +
"                onHover: function(event, elements) {\n" +
"                    const ctx = this.chart.ctx;\n" +
"                    ctx.save();\n" +
"\n" +
"                    const chart = this.chart;\n" +
"                    let isHovered = elements && elements.length;\n" +
"                    \n" +
"                    chart.data.datasets.forEach(function(dataset, i) {\n" +
"                        ctx.globalAlpha = isHovered ? 0.2 : 1;\n" +
"                        if(isHovered) {\n" +
"                            var meta = chart.getDatasetMeta(i);\n" +
"                            meta.data.forEach(function(segment, index) {\n" +
"                                ctx.globalAlpha = (elements[0]._datasetIndex === i && elements[0]._index === index) ? 1 : 0.2;\n" +
"                                ctx.stroke();\n" +
"                            });\n" +
"                        }\n" +
"                    });\n" +
"\n" +
"                    ctx.restore();\n" +
"                }\n" +
"            }\n" +
"        }\n" +
"    };\n" +
"\n" +
"    const ctx = document.getElementById('chartCanvas').getContext('2d');\n" +
"    new Chart(ctx, config);\n" +
"</script>\n" +
"\n" +
"</body>\n" +
"</html>"
