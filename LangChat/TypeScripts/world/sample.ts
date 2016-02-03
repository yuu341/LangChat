!function () {
    function t(t, n, a) {
        var o = t.translate(), r = Math.atan2(n[1] - o[1], n[0] - o[0]) - Math.atan2(a[1] - o[1], a[0] - o[0]);
        return [Math.cos(r / 2), 0, 0, Math.sin(r / 2)]
    }
    function n(t, n) {
        var a = t.invert(n);
        return a && isFinite(a[0]) && isFinite(a[1]) && u(a)
    }
    function a(t) {
        var n = .5 * t[0] * d, a = .5 * t[1] * d, o = .5 * t[2] * d, r = Math.sin(n), e = Math.cos(n), i = Math.sin(a), u = Math.cos(a), c = Math.sin(o), s = Math.cos(o);
        return [e * u * s + r * i * c, r * u * s - e * i * c, e * i * s + r * u * c, e * u * c - r * i * s]
    }
    function o(t, n) {
        var a = t[0], o = t[1], r = t[2], e = t[3], i = n[0], u = n[1], c = n[2], s = n[3];
        return [a * i - o * u - r * c - e * s, a * u + o * i + r * s - e * c, a * c - o * s + r * i + e * u, a * s + o * c - r * u + e * i]
    }
    function r(t, n) {
        if (t && n) {
            var a = s(t, n), o = Math.sqrt(c(a, a)), r = .5 * Math.acos(Math.max(-1, Math.min(1, c(t, n)))), e = Math.sin(r) / o;
            return o && [Math.cos(r), a[2] * e, -a[1] * e, a[0] * e]
        }
    }
    function e(t, n) {
        var a = Math.max(-1, Math.min(1, c(t, n))), o = 0 > a ? -1 : 1, r = Math.acos(o * a), e = Math.sin(r);
        return e ? function (a) {
            var i = o * Math.sin((1 - a) * r) / e, u = Math.sin(a * r) / e;
            return [t[0] * i + n[0] * u, t[1] * i + n[1] * u, t[2] * i + n[2] * u, t[3] * i + n[3] * u]
        }
            : function () {
                return t
            }
    }
    function i(t) {
        return
        [Math.atan2(2 * (t[0] * t[1] + t[2] * t[3]),
            1 - 2 * (t[1] * t[1] + t[2] * t[2])) * f,
            Math.asin(Math.max(-1, Math.min(1, 2 * (t[0] * t[2] - t[3] * t[1])))) * f,
            Math.atan2(2 * (t[0] * t[3] + t[1] * t[2]), 1 - 2 * (t[2] * t[2] + t[3] * t[3])) * f]
    }
    function u(t) {
        var n = t[0] * d, a = t[1] * d, o = Math.cos(a);
        return [o * Math.cos(n), o * Math.sin(n), Math.sin(a)]
    }
    function c(t, n) {
        for (var a = 0, o = t.length, r = 0;
            o > a;
            ++a)r += t[a] * n[a];
        return r
    }
    function s(t, n) {
        return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]]
    }
    function h(t) {
        for (var n = 0, a = arguments.length, o = [];
            ++n < a;
        )o.push(arguments[n]);
        var r = d3.dispatch.apply(null, o);
        return r.of = function (n, a) {
            return function (o) {
                try {
                    var e = o.sourceEvent = d3.event;
                    o.target = t, d3.event = o, r[o.type].apply(n, a)
                }
                finally {
                    d3.event = e
                }
            }
        }
            , r
    }
    var d = Math.PI / 180, f = 180 / Math.PI;
    d3.geo.zoom = function () {
        function c(t) {
            p++ || t({
                type: "zoomstart"
            }
            )
        }
        function s(t) {
            t({
                type: "zoom"
            }
            )
        }
        function d(t) {
            --p || t({
                type: "zoomend"
            }
            )
        }
        var f, l, m, p = 0, M = h(v, "zoomstart", "zoom", "zoomend"), v = d3.behavior.zoom().on("zoomstart", function () {
            var e = d3.mouse(this), u = a(f.rotate()), h = n(f, e);
            h && (m = h), g.call(v, "zoom", function () {
                f.scale(z.k = d3.event.scale);
                var a = d3.mouse(this), c = r(m, n(f, a));
                f.rotate(z.r = i(u = c ? o(u, c) : o(t(f, e, a), u))), e = a, s(M.of(this, arguments))
            }
            ), c(M.of(this, arguments))
        }
        ).on("zoomend", function () {
            g.call(v, "zoom", null), d(M.of(this, arguments))
        }
            ), g = v.on, z = {
                r: [0, 0, 0], k: 1
            }
            ;
        return v.rotateTo = function (t) {
            var n = r(u(t), u([-z.r[0], -z.r[1]]));
            return i(o(a(z.r), n))
        }
            , v.projection = function (t) {
                return arguments.length ? (f = t, z = {
                    r: f.rotate(), k: f.scale()
                }
                    , v.scale(z.k)) : f
            }
            , v.duration = function (t) {
                return arguments.length ? (l = t, v) : l
            }
            , v.event = function (t) {
                t.each(function () {
                    var t = d3.select(this), n = M.of(this, arguments), o = z, r = d3.transition(t);
                    if (r !== t) {
                        r.each("start.zoom", function () {
                            this.__chart__ && (z = this.__chart__), f.rotate(z.r).scale(z.k), c(n)
                        }
                        ).tween("zoom:zoom", function () {
                            var t = v.size()[0], u = e(a(z.r), a(o.r)), c = d3.geo.distance(z.r, o.r), h = d3.interpolateZoom([0, 0, t / z.k], [c, 0, t / o.k]);
                            return l && r.duration(l(.001 * h.duration)), function (a) {
                                var o = h(a);
                                this.__chart__ = z = {
                                    r: i(u(o[0] / c)), k: t / o[2]
                                }
                                    , f.rotate(z.r).scale(z.k), v.scale(z.k), s(n)
                            }
                        }
                            ).each("end.zoom", function () {
                                d(n)
                            }
                            );
                        try {
                            r.each("interrupt.zoom", function () {
                                d(n)
                            }
                            )
                        }
                        catch (u) {
                        }
                    }
                    else this.__chart__ = z, c(n), s(n), d(n)
                }
                )
            }
            , d3.rebind(v, M, "on")
    }
}
    (), function () {
        function t(t) {
            return o(Math.abs(t[1])) + "\xb0" + (t[1] > 0 ? "S" : "N") + ", " + o(Math.abs(t[0])) + "\xb0" + (t[0] > 0 ? "W" : "E")
        }
        var n = 960, a = 960, o = d3.format(".1f"), r = d3.geo.orthographic().clipAngle(90).rotate([-5, -5]).precision(.1).translate([n / 2, a / 2]).scale(470), e = d3.geo.gilbert(r), i = function () {
            var t = d3.geo.path().projection(e);
            return function (n) {
                var a = r.rotate();
                return n = t(n) + (r.rotate([a[0] + 180, a[1], a[2]]), t(n)), r.rotate(a), n
            }
        }
            (), u = d3.select("#map").append("svg").attr("width", n).attr("height", a).call(d3.geo.zoom().projection(r).on("zoomstart", function () {
                h.datum(c)
            }
            ).on("zoom", function () {
                d3.select("#origin").text(t(r.rotate())), u.selectAll("path").attr("d", i)
            }
                ).on("zoomend", function () {
                    h.datum(s).attr("d", i)
                }
                ));
        u.append("path").datum({
            type: "Sphere"
        }
        ).attr("class", "background").attr("d", i);
        var c, s, h = u.append("path").attr("class", "world");
        u.append("path").datum(d3.geo.graticule()).attr("class", "graticule").attr("d", i), u.append("path").datum({
            type: "Sphere"
        }
        ).attr("class", "outline").attr("d", i), queue().defer(d3.json, "../world-110m.json").defer(d3.json, "../world-50m.json").await(function (t, n, a) {
            h.datum(s = topojson.feature(a, a.objects.land)).attr("d", i), c = topojson.feature(n, n.objects.land)
        }
        )
    }
        ();
