$(function() {
  function buildHTML(message) {
    if (message.image) {
      let html = `<div class="message-box" data-message-id=${message.id}>
                    <div class="name-box">
                      <div class="name-box__name">
                        ${message.user_name}
                      </div>
                      <div class="name-box__date">
                        ${message.created_at}
                      </div>
                    </div>
                    <div class="message-content-box">
                      <p class="inputted-message">
                        ${message.content}
                      </p>
                      <img class="Message__image" src="${message.image}">
                    </div>
                  </div>`
      return html;
    } else {
      let html = `<div class="message-box" data-message-id=${message.id}>
                    <div class="name-box">
                      <div class="name-box__name">
                        ${message.user_name}
                      </div>
                      <div class="name-box__date">
                        ${message.created_at}
                      </div>
                    </div>
                    <div class="message-content-box">
                      <p class="inputted-message">
                        ${message.content}
                      </p>
                    </div>
                  </div>`
      return html;
    };
  }

  $('.text-box').on('submit', function(e) {
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data) {
      let html = buildHTML(data);
      $('.MessageField').append(html);
      $('form')[0].reset();
      $('.Chat-main__message-list').animate({ scrollTop: $('.Chat-main__message-list')[0].scrollHeight });
      $('.submit-btn').prop('disabled', false);
    })
    .fail(function() {
      alert('メッセージ送信に失敗しました');
      $('.submit-btn').prop('disabled', false);
    });
  });
});