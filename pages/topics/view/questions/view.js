var e = require("../../../../modules/pageCommons.js"), t = require("../../../../modules/request.js"), a = require("../../../../modules/utils.js"), i = require("../../../../modules/models.js"), s = i.ParticipantRoles, o = i.ReplyVisibilities;

Page({
    data: {
        topicId: "",
        topic: {},
        replies: [],
        roles: [],
        page_index: 0,
        max_page_index: 0,
        page_index2: 0,
        max_page_index2: 0
    },
    onLoad: function(t) {
        if (!getApp().globalData.stub && e.login(this)) {
            var a = t.id;
            a || (a = t.scene), this.setData({
                topicId: a
            }), this.loadPage();
        }
    },
    loadPage: function() {
        var i = this;
        this.setData({
            replies: []
        });
        var n = {
            _id: this.data.topicId
        };
        t.getRes("topics", n).then(function(t) {
            var n = t.result.data[0];
            n.type = "topic", n.content = n.questions[0].content;
            var p = [];
            n.participant_role == s.anyone ? p.push({
                id: a.getAnonymousName(),
                name: "Anonymous"
            }) : n.eplyRoleNote = "This topic NOT allow to reply anonymously!", p.push({
                id: a.getRealName(),
                name: a.getRealName()
            }), i.loadReplies(0, !1), n.author != a.getRealName() && n.reply_visibility == o.participantOnly && (i.loadReplies(0, !0), 
            n.replyDisplayNote = "You can only view your reply!"), i.setData({
                roles: p
            }), i.setData({
                topic: n
            }), e.setHistory(n), wx.stopPullDownRefresh();
        });
    },
    loadReplies: function(e, i) {
        var s = this, o = {
            article_id: this.data.topicId,
            type: "topic",
            page_index: e
        };
        t.getRes("replies", o, i).then(function(e) {
            var t = e.result.data;
            0 == s.data.replies.length ? s.setData({
                replies: t
            }) : (t = s.data.replies.concat(t), t = a.sortByCreatedDate(t), s.setData({
                replies: t
            })), i ? (s.setData({
                page_index2: e.result.page_index
            }), s.setData({
                max_page_index2: e.result.max_page_index
            })) : (s.setData({
                page_index: e.result.page_index
            }), s.setData({
                max_page_index: e.result.max_page_index
            }));
        });
    },
    onReachBottom: function() {
        this.data.page_index < this.data.max_page_index && this.loadReplies(this.data.page_index + 1, !1), 
        this.data.page_index2 < this.data.max_page_index2 && this.loadReplies(this.data.page_index2 + 1, !0);
    },
    onPostedReply: function() {
        this.loadPage();
    },
    onPullDownRefresh: function() {
        this.loadPage();
    },
    onShareAppMessage: function() {
        return {
            title: this.data.topic.title,
            imageUrl: "/images/Surveylist-512.png",
            path: "/pages/topics/view/questions/view?id=" + this.data.topic._id
        };
    }
});