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
    Parse.readAll((data) => {
      var toHtml = '';
      var compiled = MessageView.render;
      for (let i = 0; i < data.results.length; i++) {
        if (data.results[i].username && data.results[i].text) {
          toHtml += compiled(data.results[i]);
        }
      }
      $('#chats').html('');
      $('#chats').append(toHtml);
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
