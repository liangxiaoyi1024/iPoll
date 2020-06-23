Page({
    data: {
        content: "error"
    },
    onLoad: function(n) {
        var t = n.errMsg;
        t && this.setData({
            content: t
        });
    },
    login: function() {
        wx.reLaunch({
            url: "/pages/login/login"
        });
    }
});