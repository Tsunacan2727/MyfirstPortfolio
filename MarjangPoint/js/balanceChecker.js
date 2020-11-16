'use strict'

{
  let points = new Vue({
    el: '#point_forms',
    data: {
      kamicha: 25000,
      toimen: 25000,
      zicha: 25000,
      shimocha: 25000,
    },

    computed: {
      sum: function () {
         return parseInt(this.kamicha,10) + parseInt(this.toimen,10) + parseInt(this.zicha,10) + parseInt(this.shimocha,10);
        },

      isCorrect: function () {
        const difference = this.sum - 100000;
        if (difference == 0) {
          return '点数は開始時と同じです';
        } else if (difference > 0) {
          return `点数が開始時から${difference}点増えています。`;
        } else {
          return `点数が開始時から${-difference}点減っています。`;
        }
      },
    }
  });

  let results = new Vue({
    el: '#results',
    methods: {
      resultCulc: function (point) {
        const result = (parseInt(point,10) - 30000) / 1000;
        console.log(result.toFixed(1));
        return  result.toFixed(1);
      } 
    }
  });

  function ranking (array) { //順位を判別して順位点を加算するメソッド（引数はオブジェクト）
    let pairArray = Object.entries(array); //key,valueをペアで配列として格納する配列を定義 
    pairArray.sort((a,b) => { //valueに従い、降順にソート
      const valueOfA = a[1];
      const valueOfB = b[1];
      return valueOfB - valueOfA;
    });
    const topPlayer = pairArray[0]; //降順なので、index０がトップのプレイヤー
    const topKey = topPlayer[0];
    const player1 = pairArray[1]; //player1，2，3はトップ以外のプレーヤーの値にアクセスするための定数
    const player2 = pairArray[2];
    const player3 = pairArray[3];
    let topPoint = parseInt(topPlayer[1],10);
    topPoint = parseInt(topPoint,10) - (parseInt(player1[1],10) + parseInt(player2[1],10) + parseInt(player3[1],10)); //トップに順位点を加算
    const updatedPoint = [topKey,topPoint.toFixed(1)]; //加工したトップの値を[key,value]の形に戻す
    pairArray.splice(0,1,updatedPoint); //pairArrayの0番目（トップの人）を更新
    const updatedArray = Object.fromEntries(pairArray);
    return updatedArray;
  }

  const kamicha_result_html = document.getElementById('kamicha_result_html');
  const zicha_result_html = document.getElementById('zicha_result_html');
  const shimocha_result_html = document.getElementById('shimocha_result_html');
  const toimen_result_html = document.getElementById('toimen_result_html'); 
  document.getElementById('OK').addEventListener('click',() => { //OKボタンを押したとき、下の表に記録する
    let kamicha_result = results.resultCulc(points.kamicha); //この4行はresultCulcメソッドにより、得点を清算後の値に変換するもの
    let toimen_result = results.resultCulc(points.toimen);
    let zicha_result = results.resultCulc(points.zicha);
    let shimocha_result = results.resultCulc(points.shimocha);

    let resultArray = { 
      kamicha_final: parseInt(kamicha_result,10).toFixed(1),
      toimen_final: parseInt(toimen_result,10).toFixed(1),
      zicha_final: parseInt(zicha_result,10).toFixed(1),
      shimocha_final: parseInt(shimocha_result,10).toFixed(1),
    }
    const finalResult = new ranking(resultArray); //トップに順位点を加算する
    kamicha_result_html.textContent = finalResult.kamicha_final; //結果表示
    toimen_result_html.textContent = finalResult.toimen_final;
    zicha_result_html.textContent = finalResult.zicha_final;
    shimocha_result_html.textContent = finalResult.shimocha_final;

    if (finalResult.kamicha_final < 0) {
      kamicha_result_html.classList.add('underzero');
    }
    if (finalResult.shimocha_final < 0) {
      shimocha_result_html.classList.add('underzero');
    }
    if (finalResult.zicha_final < 0) {
      zicha_result_html.classList.add('underzero');
    }
    if(finalResult.toimen_final < 0) {
      toimen_result_html.classList.add('underzero');
    }
  });

  document.getElementById('resetButton').addEventListener('click',() => {
    points.kamicha = 25000;
    points.zicha = 25000;
    points.shimocha = 25000;
    points.toimen = 25000;
    kamicha_result_html.textContent = "-";
    shimocha_result_html.textContent = "-";
    zicha_result_html.textContent = "-";
    toimen_result_html.textContent = "-";
    if (kamicha_result_html.classList.contains('underzero') == true) {
      kamicha_result_html.classList.remove('underzero');
    }
    if (shimocha_result_html.classList.contains('underzero') == true) {
      shimocha_result_html.classList.remove('underzero');
    }
    if (zicha_result_html.classList.contains('underzero') == true) {
      zicha_result_html.classList.remove('underzero');
    }
    if (toimen_result_html.classList.contains('underzero') == true) {
      toimen_result_html.classList.remove('underzero');
    }
  });
}