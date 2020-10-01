var Rooms = {
  //route to selector
  rooms: [],
  $rooms: $('#rooms'),

  initialize: function() {
    // this.$rooms.on('click', button, this.addRoom);
  },

  render: _.template(`<option> <%- roomname %> </option>`),

  addRoom: function() {
    $('#roomName').on('click', 'button', function() {
      let roomname = $('#roomNameText').val();
      // console.log(roomname)
      $('#rooms select').append("<option>" + roomname + "</option>");
    });
  }

};