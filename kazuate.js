// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);
// 入力回数（予想回数）
let kaisu = 0;
let n=0;
// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let a=document.querySelector('#print');
a.addEventListener('click',hantei);

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let i=document.querySelector('input[name="suuji"]');
  let yoso=Number(i.value);

  kaisu=kaisu+1;
  
  
  // 課題3-1: 正解判定する
    let c=document.querySelector('span#kaisu');
    c.textContent=(kaisu+'回目の予想:');
    let d=document.querySelector('span#answer');
    d.textContent=(yoso);
    let f=document.querySelector('p#result');
    if(1<n){
      f.textContent=('答えは'+kotae+'でした.すでにゲームは終わっています');
    }
    else if(kaisu===3){
      if(kotae===yoso){
        f.textContent=('正解です.おめでとう！');
      }
      else{
        f.textContent=('まちがい.残念でした答えは'+kotae+'です');
      }
    }
    else{
      if(kotae===yoso){
        f.textContent=('正解です.おめでとう！');
        n=n+4;
      }
      else{
        if(kotae<yoso){
          f.textContent=('まちがい.答えはもっとちいさいです.');
        }
        else{
          f.textContent=('まちがい.答えはもっと大きいです.');
        }
      }
      
    }
    
    


    
  // kotae と yoso が一致するかどうか調べて結果を出力
  
  // 課題3-1における出力先はコンソール
}
