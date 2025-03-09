// プロローグのPCの文字が１文字ずつ表示させる方法
var classList = ['ruleTitle', 'ruleText', 'ruleText1', 'ruleText2', 'ruleText3', 'ruleText4', 'ruleText5', 'lastText', 'startText']; // 指定するクラス名を全て配列で渡す
var elements = [];
var tx = [];
var txCount = [];
var txSp = 70; // テキストの表示速度（ミリ秒）
var dly = 0; // 次の文章までの待ち時間（ミリ秒）
var count = 0;

window.onload = function() {
  setup();
  countSet();
  itimozi();
}

function setup() {
  for (var i = 0; i < classList.length; i++) {
    var elems = document.getElementsByClassName(classList[i]);
    for (var j = 0; j < elems.length; j++) {
      elements.push(elems[j]);
      tx.push(elems[j].textContent || elems[j].innerText);
      elems[j].textContent = '';
    }
  }
}

function countSet() { // 文字数カウントの初期設定
  for (var n = 0; n < elements.length; n++) {
    txCount[n] = 0;
  }
}

function itimozi() { // 一文字ずつ表示
  if (count < elements.length) {
    elements[count].textContent = tx[count].substr(0, ++txCount[count]); // テキストの指定した数の間の要素を表示
    if (tx[count].length != txCount[count]) { // 文字列が終わっていない場合
      setTimeout(itimozi, txSp); // 次の文字へ進む
    } else { // 文字列が終わった場合
      count++; // 次の段落に進む
      if (count < elements.length) { // 次の段落がある場合
        setTimeout(itimozi, dly); // 次の段落へ進む
      }
    }
  }
}
// ここまでよくわかっていない

// 押されたら色を変更する

// クリックイベントを追加
document.querySelectorAll('.passKey').forEach((element) => {
  let isChanged = false;
  element.addEventListener('click', () => {
    const nextImage = element.nextElementSibling;
    if (!nextImage || !nextImage.classList.contains('afterPass')) return;

    if (!isChanged) {
      // 最初のクリック：変更後の画像を表示
      element.style.display = 'none';
      nextImage.style.display = 'block';
    } else {
      // 2回目のクリック：元の画像に戻す
      element.style.display = 'block';
      nextImage.style.display = 'none';
    }
    isChanged = !isChanged;
  });
});


