// htmlを読み込んだ後に処理をする
$(function () {
  // id #
  // クラス .
  $('#js-click-btn').on('click', function () {
    // classList.add
    // classList.remove
    // classList.toggle
    $(this).addClass('large-btn');
  });

  $('#js-hover-btn').on('mouseover', function () {
    $(this).addClass('opacity');
  }).on('mouseleave', function () {
    $(this).removeClass('opacity');
  });

  $('#js-hide-btn').on('click', function () {
    // 1秒をミリ秒に換算すると1000
    $('#js-target-element').fadeOut(1000);
  });
  $('#js-show-btn').on('click', function () {
    // 1秒をミリ秒に換算すると1000
    $('#js-target-element').fadeIn(1000);
  });

  //要素の追加
  // 要素の前後(外)に追加
  $("#js-add-btn").on("click", function () {
    // 前に追加
    $(this).before('<li class="btn">ここに追加</li>');
    // $(this).after('<li class="btn">ここに追加</li>');

    // クラスと文字列を格納した要素を作る
    // let beforeBtn = $('<li>').addClass('btn').text('ボタンの前');
    // 後ほど作った要素を追加
    // $(this).before(beforeBtn);
  });

  $("#js-add-btn2").on("click", function () {
    $(this).prepend("前");
    $(this).append("後");
  });

  $(".js-toggle").on("click", function () {
    // thisの兄弟がスライドダウンしていなかったらスライドダウン
    $(this).toggleClass("on");
    $(this)
      .siblings()
      .slideToggle();
  });

  //ハンバーガーメニュー
  $(".js-hamburger").on("click", function () {
    $(this).toggleClass("on");
  });

  //スムーススクロール
  $(".js-scroll").on("click", function () {
    $("body, html").animate(
      { scrollTop: 0, paddingLeft: '1000px' }, 10000);
    // height
    // width
  });
});
