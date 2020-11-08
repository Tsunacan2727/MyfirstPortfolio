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

  function ranking (array) { //順位を判別して順位点を加算するメソッド（引数は連想配列）
    let pairArray = Object.entries(array); //key,valueをペアで配列として格納する配列を定義
    // console.log(pairArray); 
    pairArray.sort((a,b) => { //値を取得して降順にソート
      const valueOfA = a[1];
      const valueOfB = b[1];
      return valueOfB - valueOfA;
    });
    const topPlayer = pairArray[0];
    const topKey = topPlayer[0]; //topPlayerのkeyを保持
    const player1 = pairArray[1]; //player1，2，3はトップ以外のプレーヤーの値にアクセスするための定数
    const player2 = pairArray[2];
    const player3 = pairArray[3];
    let topPoint = parseInt(topPlayer[1],10);
    topPoint = parseInt(topPoint,10) - (parseInt(player1[1],10) + parseInt(player2[1],10) + parseInt(player3[1],10)); //加工したトップの得点
    const updatedPoint = [topKey,topPoint.toFixed(1)]; //[key,value]の形に戻してからpairArrayに追加
    console.log(updatedPoint);
    pairArray.splice(0,1,updatedPoint);
    const updatedArray = Object.fromEntries(pairArray);
    // console.log(updatedArray);
    return updatedArray;
  }

  document.getElementById('OK').addEventListener('click',() => { //OKボタンを押したとき、下の表に記録する
    let kamicha_result = results.resultCulc(points.kamicha);
    let toimen_result = results.resultCulc(points.toimen);
    let zicha_result = results.resultCulc(points.zicha);
    let shimocha_result = results.resultCulc(points.shimocha);
    let resultArray = {
      kamicha_final: parseInt(kamicha_result,10).toFixed(1),
      toimen_final: parseInt(toimen_result,10).toFixed(1),
      zicha_final: parseInt(zicha_result,10).toFixed(1),
      shimocha_final: parseInt(shimocha_result,10).toFixed(1),
    }
    console.log(Object.values(resultArray));
    const finalResult = new ranking(resultArray);
    document.getElementById('kamicha_result').textContent = finalResult.kamicha_final;
    document.getElementById('toimen_result').textContent = finalResult.toimen_final;
    document.getElementById('zicha_result').textContent = finalResult.zicha_final;
    document.getElementById('shimocha_result').textContent = finalResult.shimocha_final;
  });
}