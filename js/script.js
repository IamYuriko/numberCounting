//DOM要素を取得
const numbers = document.querySelector('#numbers'); //テキストの色を赤くする際はnumbersをDOMから取得して行う
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const reset = document.querySelector('#reset');

//初期値を設定
let counterValue = 0; //ここで数字を保管

//数字を表示
const counterDisplay = () => {
    numbers.textContent = counterValue; //counterValueを表示させる

    if (counterValue !== 0 && counterValue !== 100 && counterValue % 10 === 0) { //条件：0と100は10の倍数として扱わないかつ数字が10の倍数のとき
        numbers.style.color = 'red'; //テキストを赤くする //スタイルを変更する際はDOM要素
    } else {
        numbers.style.color = ''; //それ以外は元の色
    }
}

//プラスボタンを押して数字を追加
plus.addEventListener('click', () => {
    if (counterValue < 100) {
        counterValue++; //1足す //100未満ならカウントを1増やす
    } /* else {
        counterValue = 100; //それ以外は100 //100以上になったら100にリセット
    } */
    counterDisplay(); //画面に表示、色変更も行う
    // 出力された数字が10の倍数か判断してテキストが赤くなる
});

//マイナスボタンを押して数字を減少
minus.addEventListener('click', () => {
    counterValue--; //1引く
    if (counterValue <= 0) { //0以下を入力した際
        counterValue = 0; //0と表示
    }
    counterDisplay(); //画面に表示
});

//リセットボタンを押したら数字をリセット
reset.addEventListener('click', () => {
    counterValue = 0; //数字を0に戻すので、＝で０を代入
    counterDisplay(); //画面に表示
}
);
counterDisplay(); //毎回リロードしたら初期値の0が表示される

/* テキストのカラーはDOM要素から変更すること */