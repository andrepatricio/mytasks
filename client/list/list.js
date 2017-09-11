Template.list.helpers({
    taskList : function(){
        return TaskModel.find({});
    },

    formatDate : function(){
        return moment(this.date).format("MMMM Do YYYY, hh:mm");
    }
});

Template.list.events({
    "click button": function(e, template){
        var task = this;
        Meteor.call("remover", task._id);
    }
});