var Friends = {

  friendList: [],
  $chats: $('#chats'),

  initialize: function() {
    $('#chats').on('click', '.username', this.toggleStatus);
  },

  toggleStatus: function(event) {
    $('.username').css({'cursor': 'pointer'});
    let userName = event.currentTarget.innerText;
    console.log('userName: ', userName);
    //this.friendList.push(username);
    // this.$('#chats .username').html();
  }

};