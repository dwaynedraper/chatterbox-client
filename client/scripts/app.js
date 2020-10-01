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
    setInterval(App.fetch, 100);
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      var html = '';
      var compiled = MessageView.render;
      for (let i = 0; i < data.results.length; i++) {
        if (data.results[i].username && data.results[i].text) {
          html += compiled(data.results[i]);
        }
      }
      $('#chats').html('');
      $('#chats').append(html);
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
