define(function(){
    'use strict';

    function Chart (width, height) {
        this.width = width;
        this.height = height;
        this.svg = null;
    };

    Chart.prototype = {
        initialize: function(name){
            console.log('chart name is:', name);
            this.svg = d3.select(name);
        },
        addData: function(){
            var data = [4, 8, 15, 16, 23, 42],
                color = d3.scale.category20c(),
                margin = {top: 40, right: 10, bottom: 10, left: 10},
                width = this.width,
                height = this.height,
                treemap = d3.layout.treemap()
                            .size([width, height])
                            .sticky(true)
                            .value(function(d) {
                                return parseInt(d.Total);
                            })
                            .children(function(d) { return d.data; }),
                that = this;

            console.log('this.svg', this.svg);

            d3.json('scripts/data/releases.json', function(error, root) {
                console.log('that?', that, root);
                var node = that.svg.append("div")
                                .attr('class', 'main')
                                .style('position', 'relative')
                                .style('width', width + 'px')
                                .style('height', (height + 100) + 'px')
                                .style('top', margin.top + 'px')
                                .datum(root).selectAll('.node')
                                .data(treemap.nodes)
                            .enter().append('div')
                                .attr('class', 'node')
                                .call(position)
                                .style('background', function(d) {
                                    console.log('style d:', d);
                                    return d.District ? color(d.parent.province) : null;
                                })
                                .text(function(d) {
                                    console.log('District:', d.District);
                                    return d.District || null;
                                });
            });

            function position() {
                this.style('left', function(d) { return d.x + 'px'; })
                    .style('top', function(d) { return d.y + 'px'; })
                    .style('width', function(d) { return Math.max(0, d.dx - 1) + 'px'; })
                    .style('height', function(d) { return Math.max(0, d.dy - 1) + 'px'; });
            }
        }
    };

    console.log('chart loaded!');
    return Chart;
});