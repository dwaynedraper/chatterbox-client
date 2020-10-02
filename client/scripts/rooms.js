var Rooms = {
  //route to selector
  rooms: [],
  $rooms: $('#rooms'),

  initialize: function() {
    $('#roomName').on('submit', Rooms.addRoom);
  },

  render: _.template(`<option> <%- roomname %> </option>`),

  addRoom: function(event) {
    event.preventDefault();
    let roomname = $('#roomNameText').val();
    $('#rooms select').append(Rooms.render({roomname: roomname}));
    $('#roomName input').val('');
  }

};