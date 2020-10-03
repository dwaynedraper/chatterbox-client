var MessageView = {

  render: _.template(`

      <div class="chat">
        <div data-hover="Add friend" data-text="Add friend" class="username <%- username %>"> <%- username %> </div>
        <div class="text"> <%- text %> </div>
      </div>

    `)
/* <div class="rsoomname"> <%= roomname %> </div> */
};


