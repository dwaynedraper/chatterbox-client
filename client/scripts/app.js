var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();
    Friends.initialize();
    Rooms.initialize();
    Rooms.addRoom();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    setInterval(RoomsView.selectRoom, 100);
  },

  fetch: function(callback = ()=>{}) {
    //I don't know if you'll see this before we code tonight, but we need to set the room to lobby here, and generate all the other rooms into select options. This should be rewritten. The idea is right on generating things, but we need to only display things from a given room, not every room all at once.


    Parse.readAll((data) => {
    //This should get unique room names.
    //Uniq only takes an array as an argument, and pluck gives us an array of the roomnames it finds at each roomname key
      var rooms = _.uniq(_.pluck(data.results, 'roomname'));
      // Then for each unique piece in rooms, we generate a room. If you can rewrite this to use the _.template thing, that would be sweet. You seem to understand _.template better than me.
      _.each(rooms, room => $('#rooms select').append('<option>' + room + '</option>'));

      //This is going to need to change a little. We need to use our select room function, probably just using lobby since we prefer that as a default. SelectRoom should lead immediately into renderRoom.

      // var toHtml = '';
      // var compiled = MessageView.render;
      // for (let i = 0; i < data.results.length; i++) {
      //   if (data.results[i].username && data.results[i].text) {
      //     toHtml += compiled(data.results[i]);
      //   }
      // }
      // $('#chats').html('');
      // $('#chats').append(toHtml);
      // callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  },

};
