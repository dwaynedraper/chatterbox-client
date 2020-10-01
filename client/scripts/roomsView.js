var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  //var rooms = _.uniq(_.pluck(data.results, 'roomname'))

  initialize: function() {
    RoomsView.$select.change(RoomsView.selectRoom);
    // this.$button.on('click', RoomsView.renderRoom);

  },

  selectRoom: function() {
    Parse.readAll(data => RoomsView.renderRoom(RoomsView.$select.val(), data));
  },
  //make a call to Parse.readAll()

  renderRoom: function(roomName, data) {
    //display messages for current room
    let messagesForRoom = data.results.filter(message => message.hasOwnProperty('roomname') &&
    message.roomname === roomName);

    $('#chats').html('');

    _.each(messagesForRoom, message => MessagesView.renderMessage(message));
    // RoomsView.$select.append('<div>' + roomName + '</div>');
  }
};
