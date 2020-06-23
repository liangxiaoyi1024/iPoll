var e = require("../../modules/models.js").TopicModes, t = require("../../modules/utils.js");

Component({
    properties: {
        showCount: {
            type: Boolean
        },
        topics: {
            type: Array,
            observer: function(e, o) {
                if (e) {
                    var r = e;
                    r.forEach(function(e) {
                        e.localed_created_date = t.formatDate(e.created_date), e.shortTitle = t.reduceString(e.title, 42), 
                        e.questions[0].shortContent = t.reduceString(e.questions[0].content, 112);
                    }), this.setData({
                        topics: r
                    });
                }
            }
        }
    },
    data: {
        showCount: !0
    },
    methods: {
        view: function(t) {
            t.currentTarget.dataset.mode == e.questionnaire && wx.navigateTo({
                url: "/pages/topics/view/questions/view?id=" + t.currentTarget.dataset.id
            });
        }
    }
});