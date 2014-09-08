(function(){
    'use strict';

    function Chart () {
        this.width = 700;
        this.height = 500;
    };

    Chart.prototype = {
        initialize: function(name){
            console.log('chart name is:', name);
        }
    };

    console.log('chart loaded!', Chart);
    return Chart;
}());