var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    this.$button.on('click', RoomsView.renderRoom);

  },

  renderRoom: function(roomName) {
    //display messages for current room
    console.log('this:', this);
    RoomsView.$select.append('<div>' + roomName + '</div>');
  },


};
