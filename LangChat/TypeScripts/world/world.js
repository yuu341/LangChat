var dataset = ["string data", "hello", 15, 20, 25];
var svg = d3.select("#world").append("svg")
    .attr({
    "width": 400,
    "height": 400
});
d3.json("Content/test.json", function (error, uk) {
    svg.append("path")
        .datum(uk)
        .attr("d", d3.geo.path().projection(d3.geo.mercator()));
});
//地図表示
//マウスオーバーで情報表示（湖沼が多いほど色が変わったり）、国境など
//湖沼をマップする
//ズームイン　ズームアウト 
//# sourceMappingURL=world.js.map