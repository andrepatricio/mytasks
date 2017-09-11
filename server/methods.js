Meteor.methods({
    adicionar : function(name){
        TaskModel.insert({name: name, date: new Date(), user: this.userId});
    },

    remover : function(id){
        TaskModel.remove({_id : id, user: this.userId});
    }
});