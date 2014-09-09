define(['jquery', 'd3', 'app/chart'],
    function($, d3, Chart) {
        console.log('chart?', Chart);
        $(function() {
            console.log('main loaded!');

            var pdaf = pdaf || {};
            pdaf.chart = new Chart();
            pdaf.chart.initialize('#pdaf-chart', d3);
            pdaf.chart.addData();
        });
    }
);