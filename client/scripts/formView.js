var FormView = {

  $form: $('#send'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    var message = {
      username: _.unescape(App.username),
      text: $('#message').val(),
      roomname: $('#rooms select').val()
    };
    console.log(message.username);
    if (message.text) {
      Parse.create(message);
      $('#message').val('');
    }
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  },

};