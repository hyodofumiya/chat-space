$(function(){ 
  function reloadMessages() {
    last_message_id = $('.message:last').data("message-id");
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      if (messages.length !==0 ) {
        var insertHTML ='';
        $.each(messages, function(i, message) {
          insertHTML += buildHTML(message)
        });
        $('.chat-main__tweet-lists').append(insertHTML);
        $('.chat-main__tweet-lists').animate({ scrollTop: $('.chat-main__tweet-lists')[0].scrollHeight});
        $('form')[0].reset();
        $('.new_message__submit-btn').prop('disabled', false);
      }
    })
    .fail(function(){
      console.log("error");
    });
  };

  function buildHTML(message){
    if ( message.image && message.tweet ) {
      var html =
        `<div class="message" data-message-id=${message.id}>
          <div class="message__info">
            <div class="message__info__user-name">
              ${message.user_name}
            </div>
            <div class="message__info__date">
              ${message.created_at}
            </div>
          </div>
          <div class="message__value">
            <p class="message__value__tweet">
              ${message.tweet}
            </p>
            <img src=${message.image} class="message__value__image" >
          </div>
        </div>`
    } else if (message.tweet) {
      var html =
        `<div class="message" data-message-id=${message.id}>
          <div class="message__info">
            <div class="message__info__user-name">
              ${message.user_name}
            </div>
            <div class="message__info__date">
              ${message.created_at}
            </div>
          </div>
          <div class="message__value">
            <p class="message__value__tweet">
              ${message.tweet}
            </p>
          </div>
        </div>`
    } else if (message.image) {
      var html =
        `<div class="message" data-message-id=${message.id}>
          <div class="message__info">
            <div class="message__info__user-name">
              ${message.user_name}
            </div>
            <div class="message__info__date">
              ${message.created_at}
            </div>
          </div>
          <div class="message__value">
          <img src=${message.image} class="message__value__image" >
          </div>
        </div>`
    };
    return html;
  };

$('#new_message').on('submit', function(e){
 e.preventDefault();
 var formData = new FormData(this);
 var url = $(this).attr('action')
 $.ajax({
   url: url,
   type: "POST",
   data: formData,
   dataType: 'json',
   processData: false,
   contentType: false
 })
  .done(function(data){
    var html = buildHTML(data);
    $('.chat-main__tweet-lists').append(html);
    $('.chat-main__tweet-lists').animate({ scrollTop: $('.chat-main__tweet-lists')[0].scrollHeight});
    $('form')[0].reset();
    $('.new_message__submit-btn').prop('disabled', false);
  })
  .fail(function() {
    alert("メッセージの送信に失敗しました");
    $('.new_message__submit-btn').prop('disabled', false);
  });
})
  if (document.location.href.match(/\/groups\/\d+\/messages/)) {
    setInterval(reloadMessages, 7000);
  }
});