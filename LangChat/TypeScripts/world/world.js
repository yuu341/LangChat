var width = 960, height = 1160;
var projection = d3.geo.orthographic()
    .rotate([4.4, 0, 0])
    .scale(200)
    .translate([width / 2, height / 2]);
var path = d3.geo.path()
    .projection(projection);
//d3.json("Content/world.json", function (error, data) {
//    console.log(data);
//    svg.append("path")
//        .datum(topojson.object(data, data.objects.subunits))
//        .attr("d", path);
//    svg.selectAll(".subunit")
//        .data(topojson.object(data, data.objects.subunits).geometries)
//        .enter().append("path")
//        .attr("d", path)
//        .style("fill", function (d, idx) {
//            var r: number = Math.floor(Math.random() * 255);
//            var g: number = Math.floor(Math.random() * 255);
//            var b: number = Math.floor(Math.random() * 255);
//            return "#" + r.toString(16) + g.toString(16) + b.toString(16);
//        })
//        .on("mouseover", function (d) {
//        });
//});
console.log("");
var Globe = (function () {
    function Globe() {
        this.ScreenWidth = 960;
        this.ScreenHeight = 1160;
    }
    Globe.prototype.zoom = function () {
        console.log("zoom");
    };
    Globe.prototype.load = function (file) {
        console.log("loading file[" + file + "]");
        this.svg = d3.select("#world").append("svg")
            .attr({
            "width": this.ScreenWidth,
            "height": this.ScreenHeight
        });
        d3.json(file, function (error, data) {
        });
    };
    Globe.prototype.filterCountry = function (name) {
    };
    Globe.prototype.filterLakes = function (name) {
    };
    return Globe;
})();
//地図表示
//マウスオーバーで情報表示（湖沼が多いほど色が変わったり）、国境など
//湖沼をマップする
//ズームイン　ズームアウト
//# sourceMappingURL=world.js.map