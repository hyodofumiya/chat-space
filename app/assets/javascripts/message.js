$(function(){ 
  function buildHTML(message){
   if ( message.image ) {
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
         <div class="messge__value">
           <p class="message__value__tweet">
             ${message.tweet}
           </p>
         </div>
         <img src=${message.image} >
       </div>`
     return html;
   } else {
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
     return html;
   };
 }
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
});