var e = require("../../../../modules/pageCommons.js");

Page({
    data: {},
    onLoad: function(t) {
        e.login(this);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    submitTopic: function(e) {
        if (getApp().globalData.stub) {
            if (getApp().globalData.stub) return void wx.navigateTo({
                url: "success"
            });
        } else {
            console.log(e.detail.value);
            var t = e.detail.value.topicTitle, o = e.detail.value.prosTitle, n = e.detail.value.conssTitle;
            wx.cloud.callFunction({
                name: "mpapi",
                data: {
                    resource: "topics",
                    method: "POST",
                    jwt: getApp().globalData.user.identifiable.jwt,
                    body: {
                        title: t,
                        mode: 1,
                        author: getApp().globalData.user.identifiable.jwt.aud,
                        created_date: new Date().getTime(),
                        modified_date: new Date().getTime(),
                        questions: [ {
                            seq: 1,
                            type: 1,
                            content: t,
                            options: [ {
                                seq: 1,
                                content: o
                            }, {
                                seq: 2,
                                content: n
                            } ]
                        } ]
                    }
                }
            }).then(function(e) {
                console.log("create topic sucessfully!"), console.log(e), wx.navigateTo({
                    url: "success?id=" + e.result._id
                });
            }).catch(function(e) {
                console.error(e);
            });
        }
    }
});