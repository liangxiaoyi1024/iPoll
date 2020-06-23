Page({
    data: {},
    onLoad: function(o) {
        var n = this, e = o.id, a = wx.env.USER_DATA_PATH + "/" + e + ".jpg";
        console.log(a), wx.cloud.callFunction({
            name: "mpapi",
            data: {
                resource: "wxacode",
                method: "GET",
                parameters: {
                    id: e
                },
                jwt: getApp().globalData.user.anonymous.jwt
            }
        }).then(function(o) {
            console.log("got acode"), wx.getFileSystemManager().writeFile({
                filePath: a,
                data: o.result.buffer,
                encoding: "binary",
                success: function(o) {
                    console.log("saved acode"), console.log(o), n.setData({
                        acodeUrl: a
                    });
                },
                fail: function(o) {
                    console.log("error saving acode"), console.error(o);
                }
            });
        }).catch(function(o) {
            console.error(o);
        });
    },
    saveWxacode: function() {
        wx.saveImageToPhotosAlbum({
            filePath: this.data.acodeUrl,
            success: function(o) {}
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});