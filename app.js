App({
    globalData: {
        stub: !1,
        user: "",
        history: []
    },
    onLaunch: function() {
        wx.cloud ? wx.cloud.init({
            env: "release-n94aw",
            traceUser: !0
        }) : console.error("请使用 2.2.3 或以上的基础库以使用云能力");
        var t = wx.getStorageSync("history");
        t && (this.globalData.history = t);
        var a = wx.getStorageSync("user");
        a && (this.globalData.user = a);
    }
});