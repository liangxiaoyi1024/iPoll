var e = require("../../../../modules/pageCommons.js"), i = require("../../../../modules/request.js"), t = require("../../../../modules/utils.js"), a = require("../../../../modules/models.js"), n = a.Topic, s = a.ParticipantRoles, o = a.ReplyVisibilities, l = a.TopicModes, u = a.QuestionTypes;

Page({
    data: {
        disableSubmit: !1,
        participant_roles: [ {
            id: s.anyone,
            name: "Allow anonymous"
        }, {
            id: s.identifiableOnly,
            name: "No anonymous"
        } ],
        pr_index: s.anyone,
        reply_visibilities: [ {
            id: o.anyone,
            name: "Any replies"
        }, {
            id: o.participantOnly,
            name: "Own replies"
        } ],
        rv_index: o.anyone
    },
    onLoad: function(i) {
        e.login(this);
    },
    clickSubmit: function(e) {
        var i = this;
        this.setData({
            disableSubmit: !0
        }), t.isEmpty(e.detail.value.title) || t.isEmpty(e.detail.value.question) ? wx.showModal({
            title: "Validation",
            content: "Plesae input title and content",
            confirmText: "Confirm",
            cancelText: "Cancel",
            showCancel: !1,
            success: function(e) {
                i.setData({
                    disableSubmit: !1
                });
            }
        }) : wx.showModal({
            title: "Confirmation",
            content: "Submit this topic?",
            confirmText: "Confirm",
            cancelText: "Cancel",
            success: function(t) {
                t.confirm ? i.submitTopic(e) : t.cancel && i.setData({
                    disableSubmit: !1
                });
            }
        });
    },
    submitTopic: function(e) {
        if (getApp().globalData.stub) wx.navigateTo({
            url: "/pages/topics/list/listTopic"
        }); else {
            var a = new n();
            a.title = e.detail.value.title, a.participant_role = this.data.pr_index, a.reply_visibility = this.data.rv_index, 
            a.mode = l.questionnaire, a.author = t.getRealName(), a.questions = [ {
                seq: 1,
                type: u.text,
                content: e.detail.value.question
            } ], this.setData({
                disableSubmit: !1
            }), i.postRes("topics", {}, a, !1).then(function(e) {
                wx.reLaunch({
                    url: "/pages/topics/share/share?id=" + e.result._id
                });
            });
        }
    },
    prPickerChange: function(e) {
        console.log(e.detail), this.setData({
            pr_index: parseInt(e.detail.value)
        });
    },
    rvPickerChange: function(e) {
        this.setData({
            rv_index: parseInt(e.detail.value)
        });
    }
});