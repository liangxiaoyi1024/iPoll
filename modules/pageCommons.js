module.exports.login = function(t) {
    if (getApp().globalData.stub) return !1;
    if (getApp().globalData.user) return !0;
    var o = "/pages/login/login?redirect=/" + t.route, r = t.options.id;
    return r || (r = t.options.scene), r && (o = o + "&topicId=" + r), wx.redirectTo({
        url: o
    }), !1;
}, module.exports.setHistory = function(t) {
    history = getApp().globalData.history;
    var o = !1;
    history.forEach(function(r) {
        if (t._id == r._id) return o = !0, !1;
    }), o || (history.unshift(t), wx.setStorageSync("history", history));
};