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

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    setInterval(RoomsView.refreshRoom, 333);
  },

  fetch: function(callback = ()=>{}) {

    Parse.readAll((data) => {
      var roomsPresent = data.results.filter(user => user.roomname);
      var rooms = _.uniq(_.pluck(roomsPresent, 'roomname'));
      console.log(data.results);
      console.log(data.results[0].createdAt > data.results[1].createdAt);
      _.each(rooms, room => $('#rooms select').append(Rooms.render({roomname: room})));

      callback();
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
