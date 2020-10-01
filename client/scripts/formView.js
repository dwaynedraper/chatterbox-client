var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    //add real code here to send message to messageView/
    // var text = FormView.$form.find('input[type=text]').val();
    var message = {
      username: App.username,
      text: $('#message').val(),
      roomname: $('#rooms select').val()
    };
    Parse.create(message);
    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};