var t = require("../../../modules/pageCommons.js");

Page({
    data: {
        topics: [],
        hasHistory: !1
    },
    onLoad: function(s) {
        t.login(this), history = getApp().globalData.history, history.length > 0 && (this.setData({
            hasHistory: !0
        }), this.setData({
            topics: history
        }));
    }
});