var i = {
    anyone: 0,
    identifiableOnly: 1
}, t = {
    anyone: 0,
    participantOnly: 1
}, l = {
    questionnaire: 1,
    pk: 2
}, e = {
    text: 1,
    singleChoice: 2,
    mutipleChoices: 3
};

module.exports = {
    Topic: function() {
        this.title = null, this.summary = null, this.reply_visibility = 0, this.participant_role = 0, 
        this.effective = null, this.expiry = null, this.follow_count = 0, this.view_count = 0, 
        this.reply_count = 0, this.mode = 0, this.author = null, this.questions = null;
    },
    Reply: function() {
        this.article_id = null, this.type = null, this.author = null, this.answers = null, 
        this.reply_count = 0;
    },
    ParticipantRoles: i,
    ReplyVisibilities: t,
    TopicModes: l,
    QuestionTypes: e
};