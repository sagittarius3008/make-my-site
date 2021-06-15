$("#target").skippr({
  // スライドショーの変化（"fade" or "slide"）
  transition : 'fade',
  // 変化にかかる時間（ミリ秒）
  speed : 500,
  // easingの種類
  easing : 'easeOutQuart',
  // ナビゲーションの形（"block" or "bubble"）
  navType : 'block',
  // 子要素の種類（"div" or "img"）
  childrenElementType : 'div',
  // ナビゲーション矢印の表示（trueで表示）
  arrows : true,
  // スライドショーの自動再生（falseで自動再生なし）
  autoPlay : true,
  // 自動再生時のスライド切替間隔（ミリ秒）
  autoPlayDuration : 3000,
  // キーボードの矢印キーによるスライド送りの設定（trueで有効）
  keyboardOnAlways : true,
  // 1枚目のスライド表示時に戻る矢印を表示するかどうか [false]:矢印を隠さない [true]:矢印を隠す
  hidePrevious : false
});

var countdown = function(due){
  var now = new Date();

  var rest = due.getTime() - now.getTime();
  var sec = Math.floor(rest/1000%60);
  var min = Math.floor(rest/1000/60)%60;
  var hours = Math.floor(rest/1000/60/60)%24;
  var days = Math.floor(rest/1000/60/60/24);
  var count = [days,hours,min,sec];

  return count;
}

var goal = new Date(2021,5,24,13);

var recalc = function(){
  var counter = countdown(goal);
  document.getElementById('day').textContent = counter[0];
  document.getElementById('hour').textContent = counter[1];
  document.getElementById('min').textContent = counter[2];
  document.getElementById('sec').textContent = counter[3];
  refresh();
}

var refresh = function(){
  setTimeout(recalc,1000);
}
recalc();