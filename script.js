'use strict'

            //★★★DOM HTMLの要素からとってくる★★★
//DOM:HTMLタグID=textInputに紐づける変数宣言
// （値化は関数内で実施予定）。
const textInputElement = document.getElementById("textInput");
//同様にID=checkButtonに紐づける変数宣言
const checkButton = document.getElementById("checkButton");


            //★★★表記リストの配列を作る★★★
//もっとスマートに作りたかったのですが混乱してしまったためただの配列にしました。
const rulesBox = ["めざす","めざし","めざせ", "嬉しい","嬉しく", "嬉し","お客様","おきゃくさま","致します", "色々","行なう", "及び","気づく","よい",  "よく", "活かす", "活かし", "頂く", "頂き", "がんば", "完成車", "ボディー", "ボディ"];


            //★★★実行する関数をつくる★★
//変数inputTextが配列rulesBox（定義済み）にマッチする（＝間違っている可能性のある）単語だけを赤文字して全文を返す関数highlightIncrrTextを作る
function highlightIncrrText(inputText, rulesBox) {
    // 結果箱に墨文字全テキストを一旦入れる(初期化とする)
    let highlightedText = inputText;
    // 変数rulesBoxの配列単語を１つずつ参照
    for (const eachWord of rulesBox) {
    // もし墨文字全文highlightedTextが配列の単語を含んでいたら
      if (highlightedText.includes(eachWord)) {
    //その単語(eachWord)を全文内(highlightedText)で赤色にする
    // (一部だけ赤にする方法が↓どうしてもわからずチートしました)
highlightedText = highlightedText.replace(new RegExp(eachWord, 'g'), "<span style='color:red;'>" + eachWord + "</span>");
      }
    return highlightedText;
}
}

            //★★★参考情報を出す関数を作る★★★
//まず冒頭で宣言した配列rulesBoxの全ての要素にキーバリューをセットするオブジェクトを作る
const rulesDetails = {
  めざす: "／正：目指す" ,
  めざし: "／正：目指し" ,
  めざせ: "／正：目指せ" ,
  嬉しい: "／正：うれしい",
  嬉しく: "／正：うれしく",
  嬉しさ: "／正：うれしさ",
  嬉し: "／正：うれし(い)",
  お客様: "／正：お客さま",
  おきゃくさま:"／正：お客さま",
  致します:"／正：いたします",
  色々:"いろいろ",
  行なう:"／正：行う",
  及び:"／正：および",
  気づく:"／正：きづく",
  よい:"／正：良い",
  よく:"／正：良く",
  活かす:"／正：生かす",
  活かし:"／正：生かし",
  頂く:"／正：いただく",
  頂き:"／正：いただき",
  がんば:"／正：頑張",
  完成車:"／正：完成車両",
  ボディー:"／正：ボデー",
  ボディ:"／正：ボデー"
}


function extractDetails(rulesDetails,inputText) {
  let result = [];
  for (const key in rulesDetails) {
    if (inputText.includes(key)) {
      result.push(rulesDetails[key]);
    }
  }
  return result;
}

///////////////////////////////////////////////////////
            //★★★以下はクリックイベント３つ★★★
checkButton.addEventListener("click", function () {
  //文字カウントの無名関数を実行して払いだす
  const inputText = textInputElement.value;
  const countText = inputText.length; 
  document.getElementById("countText").innerHTML = countText + "文字"; 

  //表記チェック関数highlightIncrrTextを実行して払いだす
  const highlightedText = highlightIncrrText(inputText, rulesBox);
  document.getElementById("outputText").innerHTML = highlightedText;

  //参照情報関数extractDetailsを実行して払いだす
  const result = extractDetails(rulesDetails,inputText) ;
  document.getElementById("outputRules").innerHTML = result;
  });


