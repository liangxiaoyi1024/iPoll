var e = require("../../modules/pageCommons.js"), o = require("../../modules/request.js");

Page({
    data: {
        topics: [],
        error: ""
    },
    onLoad: function(o) {
        e.login(this) && this.loadPage();
    },
    loadPage: function() {
        var e = this, t = {
            sort: "-replyCount"
        };
        o.getRes("topics", t, !0).then(function(o) {
            var t = o.result.data;
            e.setData({
                topics: t
            }), wx.stopPullDownRefresh();
        });
    },
    clickScanButton: function(e) {
        var o = this;
        wx.scanCode({
            onlyFromCamera: !1,
            success: function(e) {
                "WX_CODE" == e.scanType && e.path ? (console.log(e.path), wx.redirectTo({
                    url: "/" + e.path
                })) : o.setData({
                    error: "Please scan a correct QR Code"
                });
            },
            fail: function(e) {
                o.setData({
                    error: "Please scan a correct QR Code"
                });
            }
        });
    },
    onPullDownRefresh: function() {
        this.loadPage();
    }
});