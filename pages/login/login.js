Page({
    data: {
        error: ""
    },
    clickScanButton: function(e) {
        var t = this;
        wx.scanCode({
            onlyFromCamera: !1,
            success: function(e) {
                getApp().globalData.stub ? wx.navigateTo({
                    url: "/pages/home/home"
                }) : t.scanSuccess(e);
            },
            fail: function(e) {
                t.setData({
                    error: "Incorrect QR Code"
                });
            }
        });
    },
    scanSuccess: function(e) {
        var t = this;
        try {
            var r = JSON.parse(e.result);
            if (!("qe" in r)) return void this.setData({
                error: "Incorrect QR Code"
            });
            if (r.qe < Date.parse(new Date()) / 1e3) this.setData({
                error: "QR Code expired"
            }); else {
                var a = {
                    anonymous: {
                        jwt: {
                            aud: r.a,
                            exp: r.e,
                            sig: r.as
                        }
                    },
                    identifiable: {
                        jwt: {
                            aud: r.i,
                            exp: r.e,
                            sig: r.is
                        }
                    }
                };
                wx.cloud.callFunction({
                    name: "mpapi",
                    data: {
                        resource: "health",
                        method: "GET",
                        jwt: a.anonymous.jwt
                    }
                }).then(function(e) {
                    if ("401" == e.result.StatusCode) t.setData({
                        error: "Incorrect QR Code"
                    }); else {
                        getApp().globalData.user = a, wx.setStorageSync("user", a);
                        var r = decodeURI(t.options.redirect), o = t.options.topicId;
                        r = o ? r + "?id=" + o : "/pages/home/home", wx.redirectTo({
                            url: r
                        });
                    }
                }).catch(function(e) {
                    t.setData({
                        error: "Incorrect QR Code"
                    });
                });
            }
        } catch (e) {
            console.error(e), this.setData({
                error: "Incorrect QR Code"
            });
        }
    }
});