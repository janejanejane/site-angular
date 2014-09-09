define(function(){
    'use strict';

    function Chart () {
        this.width = 700;
        this.height = 500;
        this.svg = null;
    };

    Chart.prototype = {
        initialize: function(name, d3){
            console.log('chart name is:', name);
            this.svg = d3.select(name);
        },
        addData: function(){
            var data = [4, 8, 15, 16, 23, 42],
                color = d3.scale.category20c(),
                margin = {top: 40, right: 10, bottom: 10, left: 10},
                width = this.width - margin.left - margin.right,
                height = this.height - margin.top - margin.bottom,
                treemap = d3.layout.treemap()
                            .size([width, height])
                            .sticky(true)
                            .value(function(d) { console.log('this is d>>>', d); return d.Total; })
                            .children(function(d) { return d.data; }),
                that = this;

            console.log('this.svg', this.svg);
            // this.svg.selectAll('div')
            //         .data(data)
            //     .enter().append('div')
            //         .style('width', function(d) { return d * 10 + 'px'; })
            //         .text(function(d) { return d; });

            d3.json('scripts/data/releases.json', function(error, root) {
                console.log('that?', that, root);
                var node = that.svg.append('div')
                                .style("position", "relative")
                                .style("width", (width + margin.left + margin.right) + 'px')
                                .style('height', (height + margin.top + margin.bottom) + 'px')
                                .style('left', margin.left + 'px')
                                .style('top', margin.top + 'px')
                                .datum(root).selectAll('.node')
                                .data(treemap.nodes)
                            .enter().append('div')
                                .attr('class', 'node')
                                .call(position)
                                .style('background', function(d) { return d.District ? color(d.District) : null; })
                                .text(function(d) {
                                    console.log('District:', d.District);
                                    return d.District;
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