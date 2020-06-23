var e = require("../../../modules/pageCommons.js"), a = require("../../../modules/request.js"), t = require("../../../modules/utils.js");

Page({
    data: {
        replyId: "",
        reply: {},
        replies: [],
        roles: [],
        page_index: 0,
        max_page_index: 0,
        page_index2: 0,
        max_page_index2: 0
    },
    onLoad: function(a) {
        if (!getApp().globalData.stub) {
            e.login(this);
            var s = a.id;
            this.setData({
                replyId: s
            });
            var i = [];
            0 == a.participant_role && i.push({
                id: t.getAnonymousName(),
                name: "Anonymous"
            }), i.push({
                id: t.getRealName(),
                name: t.getRealName()
            }), this.setData({
                roles: i
            }), this.loadPage();
        }
    },
    loadPage: function() {
        var e = this, t = {
            _id: this.data.replyId
        };
        a.getRes("replies", t).then(function(a) {
            console.log(a);
            var t = a.result.data[0];
            t.type = "reply", t.content = t.answers[0].content, e.setData({
                reply: t
            }), e.loadReplies(0, !1);
        });
    },
    loadReplies: function(e, s) {
        var i = this, n = {
            article_id: this.data.replyId,
            type: "reply",
            page_index: e
        };
        a.getRes("replies", n, s).then(function(e) {
            console.log(e);
            var a = e.result.data;
            0 == i.data.replies.length ? i.setData({
                replies: a
            }) : (a = i.data.replies.concat(a), a = t.sortByCreatedDate(a), i.setData({
                replies: a
            })), s ? (i.setData({
                page_index2: e.result.page_index
            }), i.setData({
                max_page_index2: e.result.max_page_index
            })) : (i.setData({
                page_index: e.result.page_index
            }), i.setData({
                max_page_index: e.result.max_page_index
            }));
        });
    },
    onReachBottom: function() {
        this.data.page_index < this.data.max_page_index && this.loadReplies(this.data.page_index + 1, !1), 
        this.data.page_index2 < this.data.max_page_index2 && this.loadReplies(this.data.page_index2 + 1, !0);
    },
    onPostedReply: function() {
        this.setData({
            replies: []
        }), this.loadPage();
    }
});