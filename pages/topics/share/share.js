var e = require("../../../modules/pageCommons.js"), s = require("../../../modules/request.js");

Page({
    data: {
        isSuccess: !1,
        isLoaded: !1,
        successMsg: "Saved successfully!",
        topic: "",
        acodeUrl: ""
    },
    onLoad: function(t) {
        var a = this, i = t.id, o = wx.env.USER_DATA_PATH + "/" + i + ".jpg", c = {
            _id: i
        };
        s.getRes("topics", c).then(function(t) {
            var c = t.result.data[0];
            e.setHistory(c), a.setData({
                topic: c
            });
            var n = {
                page: "pages/topics/view/questions/view",
                _id: i
            };
            s.getRes("wxacode", n).then(function(e) {
                wx.getFileSystemManager().writeFile({
                    filePath: o,
                    data: e.result.buffer,
                    encoding: "binary",
                    success: function(e) {
                        console.log("saved acode"), console.log(e), a.setData({
                            acodeUrl: o
                        }), a.setData({
                            isLoaded: !0
                        });
                    },
                    fail: function(e) {
                        console.log("error saving acode"), console.error(e);
                    }
                });
            });
        });
    },
    saveWxacode: function() {
        var e = this;
        wx.saveImageToPhotosAlbum({
            filePath: this.data.acodeUrl,
            success: function(s) {
                e.setData({
                    isSuccess: !0
                });
            }
        });
    },
    onShareAppMessage: function() {
        return {
            title: this.data.topic.title,
            imageUrl: "/images/Surveylist-512.png",
            path: "/pages/topics/view/questions/view?id=" + this.data.topic._id
        };
    }
});