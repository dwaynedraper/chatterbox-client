var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    this.$button.on('click', this.renderRoom);

  },

  renderRoom: function(roomName) {
    //display messages for current room
    this.$select.append('<div>' + roomName + '</div>');
  },

  addRoom: function () {

  }
};
