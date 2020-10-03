var Friends = {

  friendList: [],
  $chats: $('#chats'),

  initialize: function() {
    $('#chats').on('click', '.username', Friends.addFriend);
  },

  addFriend: function(event) {
    event.preventDefault();
    let username = event.currentTarget.innerText;
    Friends.friendList.unshift(username);

    _.each(Friends.friendList, (username) => {
      $('div.' + username).addClass('friend');
    });
  }

};