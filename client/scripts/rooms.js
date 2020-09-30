var Rooms = {
  //route to selector
  rooms: [],
  $rooms: $('#rooms'),

  initialize: function() {
    this.$rooms.on('click', 'button', this.add);
  },

  add: function (event) {
    let roomName = event.currentTarget.innerText;
    console.log('roomName: ', roomName);
  }

};