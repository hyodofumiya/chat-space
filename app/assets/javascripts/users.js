$(function(){
  function addUser(user) {
    let html =`
              <div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${user.name}</p>
                  <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
                </div>
              `;
    $("#user-search-result").append(html);
  }

  function addNoUser() {
    let html =`
            <div class="chat-group-user clearfix">
              <p class="chat-group-user__name">ユーザーが見つかりません</p>
            </div>
            `;
            $("#user-search-result").append(html);
  }

  function addDeleteUser(id, name) {
    let html =`
              <div class="chat-group-user clearfix" id="${id}">
                <p class="chat-group-user__name">${name}</p>
                <div class="user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn" data-user-id="${id}" data-user-name="${name}">削除</div>
              </div>`;
    $(".js-add-user").append(html);
  }

  function addMember(userId) {
    let html =`<input value="${userId}" name="group[user_ids][]" type="hidden" id="group_user_ids_${userId}" />`;
    $(`#${userId}`).append(html);
  }

  $('.chat-group-form__input').on("keyup", function() {
    let input = $("#user-search_field").val();
    $.ajax({
      type: 'GET',
      url: "/users",
      dataType: 'json',
      data: { keyword: input }
    })
      .done(function(users) {
        $("#user-search-result").empty();
        
        if (users.length !==0) {
          users.forEach(function(user) {
            addUser(user);
          });
        } else if (input.length == 0) {
          return false;
        } else {
          addNoUser();
        }
      })
      .fail(function() {
        alert("ユーザー検索に失敗しました");
      });
  });

  $('#user-search-result').on("click",'.user-search-add', function() {
    const userId = $(this).attr('data-user-id');
    const userName = $(this).attr('data-user-name');
    $(this).parent().remove();
    addDeleteUser(userId, userName);
    addMember(userId);
    });

  $(document).on("click", '.js-remove-btn', function() {
    $(this).parent().remove();
  });
});