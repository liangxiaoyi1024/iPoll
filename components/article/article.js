var e = require("../../modules/request.js"), t = require("../../modules/utils.js"), a = require("../../modules/models.js").Reply;

Component({
    properties: {
        article: {
            type: Object,
            observer: function(e, a) {
                if (e) {
                    var i = e;
                    i.created_date && (i.created_date = t.formatDate(i.created_date)), this.setData({
                        article: i
                    });
                }
            }
        },
        roles: Array,
        replies: {
            type: Array,
            observer: function(e, a) {
                if (e) {
                    var i = e;
                    i.forEach(function(e) {
                        e.created_date = t.formatDate(e.created_date);
                    }), this.setData({
                        replies: i
                    });
                }
            }
        }
    },
    data: {
        isSuccess: !1,
        disableSubmit: !1,
        successMsg: "Replied successfully!",
        role_index: 0
    },
    methods: {
        rolePickerChange: function(e) {
            this.setData({
                role_index: parseInt(e.detail.value)
            });
        },
        clickSubmit: function(e) {
            var a = this;
            this.setData({
                disableSubmit: !0
            }), t.isEmpty(e.detail.value.myReply) ? wx.showModal({
                title: "Validation",
                content: "Plesae input reply",
                confirmText: "Confirm",
                cancelText: "Cancel",
                showCancel: !1,
                success: function(e) {
                    a.setData({
                        disableSubmit: !1
                    });
                }
            }) : wx.showModal({
                title: "Confirmation",
                content: "Submit this reply?",
                confirmText: "Confirm",
                cancelText: "Cancel",
                success: function(t) {
                    t.confirm ? a.submitRely(e) : t.cancel && a.setData({
                        disableSubmit: !1
                    });
                }
            });
        },
        submitRely: function(t) {
            var i = this, s = new a();
            s.article_id = this.data.article._id, s.type = this.data.article.type, s.author = this.data.roles[this.data.role_index].id, 
            s.answers = [ {
                seq: 1,
                content: t.detail.value.myReply
            } ], console.log(s), e.postRes("replies", {}, s, !1).then(function(e) {
                console.log(e), i.setData({
                    isSuccess: !0
                }), i.setData({
                    replyContent: ""
                }), i.setData({
                    disableSubmit: !1
                }), i.triggerEvent("postedReply", {}, {});
            });
        },
        view: function(e) {
            "topic" == this.data.article.type && wx.navigateTo({
                url: "/pages/replies/view/view?participant_role=" + this.data.article.participant_role + "&id=" + e.currentTarget.dataset.id
            });
        },
        share: function(e) {
            var t = e.currentTarget.dataset.id;
            wx.navigateTo({
                url: "/pages/topics/share/share?id=" + t
            });
        }
    }
});