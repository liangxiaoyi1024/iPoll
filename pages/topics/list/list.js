var a = require("../../../modules/pageCommons.js"), e = require("../../../modules/request.js"), t = require("../../../modules/utils.js");

Page({
    data: {
        topics: [],
        page_index: 0,
        max_page_index: 0
    },
    onLoad: function(e) {
        getApp().globalData.stub || (a.login(this), this.loadTopics(this.data.page_index));
    },
    loadTopics: function(a) {
        var i = this, s = {
            author: t.getRealName(),
            page_index: a
        };
        e.getRes("topics", s, !1).then(function(a) {
            console.log(a.result);
            var e = a.result.data;
            i.setData({
                topics: i.data.topics.concat(e)
            }), i.setData({
                page_index: a.result.page_index
            }), i.setData({
                max_page_index: a.result.max_page_index
            });
        });
    },
    onReachBottom: function() {
        this.data.page_index < this.data.max_page_index && this.loadTopics(this.data.page_index + 1);
    }
});