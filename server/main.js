Meteor.startup(function(){
  Meteor.publish('tasks', function(){
    return TaskModel.find({user: this.userId});
  });
});