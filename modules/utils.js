function e(e, t) {
    var r = {
        "M+": e.getMonth() + 1,
        "d+": e.getDate(),
        "H+": e.getHours(),
        "m+": e.getMinutes(),
        "s+": e.getSeconds()
    };
    /(y+)/.test(t) && (t = t.replace(RegExp.$1, (e.getFullYear() + "").substr(4 - RegExp.$1.length)));
    for (var n in r) new RegExp("(" + n + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? r[n] : ("00" + r[n]).substr(("" + r[n]).length)));
    return t;
}

function t(e) {
    for (var t = 0, r = 0; r < e.length; r++) {
        var n = e.charCodeAt(r);
        n >= 1 && n <= 126 || 65376 <= n && n <= 65439 ? t++ : t += 2;
    }
    return t;
}

function r(e, t) {
    for (var r = [], n = 0, u = 0; n < t && u < e.length; ) {
        var o = e.substring(u, u + 1), a = e.charCodeAt(u);
        r.push(o), u++, a >= 1 && a <= 126 || 65376 <= a && a <= 65439 ? n++ : n += 2;
    }
    return r.join("");
}

module.exports.formatDate = function(t) {
    return e(new Date(t), "yyyy/MM/dd HH:mm:ss");
}, module.exports.reduceString = function(e, n) {
    return t(e) > n ? r(e, n - 2) + "..." : e;
}, module.exports.sortByCreatedDate = function(e) {
    return e.sort(function(e, t) {
        var r = new Date(e.created_date).getTime(), n = new Date(t.created_date).getTime();
        return r > n ? -1 : n > r ? 1 : 0;
    });
}, module.exports.getAnonymousName = function() {
    return getApp().globalData.user.anonymous.jwt.aud;
}, module.exports.getRealName = function() {
    return getApp().globalData.user.identifiable.jwt.aud;
}, module.exports.isChinese = function(e) {
    return !!/.*[\u4e00-\u9fa5]+.*$/.test(e);
}, module.exports.isEmpty = function(e) {
    return !/\s\S+|S+\s|\S/.test(e);
};