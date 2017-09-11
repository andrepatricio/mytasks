Template.newTask.events({
    "submit form": function(e, template){
        e.preventDefault();
        var input = $("#task");
        Meteor.call("adicionar", input.val());
        input.val("");
    }
});