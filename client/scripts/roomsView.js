var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  $mostRecent: "2020-10-02T04:26:31.829Z",

  initialize: function() {
    RoomsView.$select.change(RoomsView.selectRoom);

  },

  selectRoom: function() {

    Parse.readAll((data) => {
      RoomsView.renderRoom(RoomsView.$select.val(), data);
      // var messagesWithDates = data.results.filter(message => message.createdAt);
      var dates = _.pluck(data.results, 'createdAt');
      if (dates[0] > RoomsView.$mostRecent) {
        RoomsView.$mostRecent = dates[0];
        console.log(RoomsView.$mostRecent);
      }
    });
  },
  refreshRoom: function() {
    Parse.readAll((data) => {
      // var dates = data.results.filter(message => message.createdAt);
      var dates = _.pluck(data.results, 'createdAt');
      if (dates[0] > RoomsView.$mostRecent) {
        RoomsView.$mostRecent = dates[0];
        console.log('Updated to: ', RoomsView.$mostRecent);
        RoomsView.renderRoom(RoomsView.$select.val(), data);
      }
    });

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
