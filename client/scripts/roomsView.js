var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$select.change(RoomsView.selectRoom);
  },

  selectRoom: function() {
    Parse.readAll(data => RoomsView.renderRoom(RoomsView.$select.val(), data));
  },

  renderRoom: function(roomName, data) {
    //display messages for current room
    let messagesForRoom = data.results.filter(
      message => message.hasOwnProperty('roomname') &&
    message.hasOwnProperty('username') &&
    message.roomname === roomName);

    $('#chats').html('');

    _.each(messagesForRoom, message => MessagesView.renderMessage(message));
  }
};
