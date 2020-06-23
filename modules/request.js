function e(e) {
    return e ? getApp().globalData.user.anonymous.jwt : getApp().globalData.user.identifiable.jwt;
}

module.exports.getRes = function(t, o) {
    var n = e(!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]);
    return wx.showLoading({
        title: "loading"
    }), wx.cloud.callFunction({
        name: "mpapi",
        data: {
            resource: t,
            method: "GET",
            parameters: o,
            jwt: n
        }
    }).then(function(e) {
        if (wx.hideLoading(), "401" != e.result.StatusCode) return e;
        wx.reLaunch({
            url: "/pages/common/error/error?errMsg=Authentication Failed!"
        });
    }).catch(function(e) {
        wx.hideLoading(), console.error(e);
    });
}, module.exports.postRes = function(t, o, n, r) {
    var a = e();
    return wx.showLoading({
        title: "loading"
    }), wx.cloud.callFunction({
        name: "mpapi",
        data: {
            resource: t,
            method: "POST",
            parameters: o,
            jwt: a,
            body: n
        }
    }).then(function(e) {
        return wx.hideLoading(), e;
    }).catch(function(e) {
        wx.hideLoading(), console.error(e);
    });
};