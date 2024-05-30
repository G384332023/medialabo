// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);
let x=1;
// 入力回数（予想回数）
let kaisu = 4;
// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
hantei();
hantei();
hantei();
hantei();
let an=document.querySelector('span#answer');
let p2=document.createElement('p');
p2.textContent=('答えは'+kotae+'でした.すでにゲームは終わっています');
p2.insertAdjacentElement('afterend',p);
// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let yoso = 4;
  
  // 課題3-1: 正解判定する
    let kazu=document.querySelector('span#kaisu');
    let p=document.createElement('p');
    p.textContent=(x+'回目の予想:'+yoso);

    if(kotae===yoso){
      console.log("正解です.おめでとう！");
    }  
    else{
      if(yoso>kotae){
          console.log("まちがい.答えはもっと小さいですよ");
      }
      else{
          console.log("まちがい.答えはもっと大きいですよ");
      }
      if(x===4){
          console.log("答えは"+kotae+"でした.すでにゲームは終わっています");
      }
    }
  x=x+1;
  // kotae と yoso が一致するかどうか調べて結果を出力
  
  // 課題3-1における出力先はコンソール
}

let b1=document.querySelector('h1')