'use strict'

{
  
  const ul = document.querySelector('ul');
  
  
  function Result (text) {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
  }
  
  function childTsumo (childPay,parentPay) {
    const sum = (childPay * 2) + parentPay;

    if (sum < 8000) {
      Result(`子${childPay}\t親${parentPay}`);
    } else if (sum == 8000) {
      Result(`子${childPay}\t親${parentPay}\t満貫です`);
    } else if (sum == 12000) {
      Result(`子${childPay}\t親${parentPay}\t跳満です`);
    } else if (sum == 16000) {
      Result(`子${childPay}\t親${parentPay}\t倍満です`);
    } else if (sum == 24000) {
      Result(`子${childPay}\t親${parentPay}\t三倍満です`);
    } else if (sum == 32000) {
      Result(`子${childPay}\t親${parentPay}\t役満です！！`);
    }
  }

  function parentTsumo (childrenPay) {
    const sum = (childrenPay * 3);

    if (sum < 12000) {
      Result(`${childrenPay}オール`);
    } else if (sum == 12000) {
      Result(`${childrenPay}オール\t満貫です`);
    } else if (sum == 18000) {
      Result(`${childrenPay}オール\t跳満です`);
    } else if (sum == 24000) {
      Result(`${childrenPay}オール\t倍満です`);
    } else if (sum == 36000) {
      Result(`${childrenPay}オール\t三倍満です`);
    } else if (sum == 48000) {
      Result(`${childrenPay}オール\t役満です！！`);
  }
}

function childRon (point) {
  if (point < 8000) {
    Result(`${point}点です`);
  } else if (point == 8000) {
    Result(`${point}点\t満貫です`);
  } else if (point == 12000) {
    Result(`${point}点\t跳満です`);
  } else if (point == 16000) {
    Result(`${point}点\t倍満です`);
  } else if (point == 24000) {
    Result(`${point}点\t三倍満です`);
  } else if (point == 32000){
    Result(`${point}点\t役満です！！`);
  }
}

function parentRon (point) {
    if (point < 12000) {
      Result(`${point}点です`);
    } else if (point == 12000) {
      Result(`${point}点\t満貫です`);
    } else if (point == 18000) {
      Result(`${point}点\t跳満です`);
    } else if (point == 24000) {
      Result(`${point}点\t倍満です`);
    } else if (point == 36000) {
      Result(`${point}点\t三倍満です`);
    } else if (point == 48000) {
      Result(`${point}点\t役満です！！`);
    }
}
    
function Hora (han,hu) { //ツモかロンか + 親か子かによって処理をif文で分岐
  const tsumo = document.getElementById('tsumo');
  const parent = document.getElementById('parent');

  if (han < 0) {
    Result("エラーです");
  } else {

    if (tsumo.checked == true && parent.checked == false) { //子のツモの処理
      console.log(1);
      switch (han) {
        case 1: {
        switch (hu) {
          case 20: Result("1翻20符の和了は存在しません"); break;
          case 30: childTsumo(300,500); break;
          case 40: childTsumo(400,700); break;
          case 50: childTsumo(400,800); break;
          case 60: childTsumo(500,1000); break;
          case 70: childTsumo(600,1200); break;
          }
        } break;
    
        case 2: {
        switch(hu) {
          case 20: childTsumo(400,700); break;
          case 30: childTsumo(500,1000); break;
          case 40: childTsumo(700,1300); break;
          case 50: childTsumo(800,1600); break;
          case 60: childTsumo(1000,2000); break;
          case 70: childTsumo(1200,2300); break;
          }
        } break;
    
        case 3: {
        switch(hu) {
          case 20: childTsumo(700,1300); break; 
          case 30: childTsumo(1000,2000); break;
          case 40: childTsumo(1300,2600); break;
          case 50: childTsumo(1600,3200); break;
          case 60: childTsumo(2000,3900); break;
          case 70:  childTsumo(2000,4000); break;
          }
        } break;
    
        case 4: {
        switch(hu) {
          case 20: childTsumo(1300,2600); break;
          case 30: childTsumo(2000,3900);break;
          }
      
          if (hu > 30) {childTsumo(2000,4000)};
        } break;
    
        case 5: childTsumo(2000,4000); break;
        case 6:
        case 7: childTsumo(3000,6000); break;
        case 8: 
        case 9:
        case 10: childTsumo(4000,8000); break;
        case 11:
        case 12: childTsumo(6000,12000); break;
      }
      if (han >= 13) {
        childTsumo(8000,16000);
      }

      } else if (tsumo.checked == true && parent.checked == true) { //親のツモの処理
      console.log(2);
        switch (han) {
          case 1: 
          switch (hu) {
            case 20: Result("1翻20符の和了は存在しません"); break;
      
            case 30: 
              parentTsumo(500); break;
      
            case 40: 
              parentTsumo(700); break;
      
            case 50: parentTsumo(800); break;
      
            case 60: parentTsumo(1000); break;
      
            case 70: parentTsumo(1200); break;
          } break;
          
          case 2: 
          switch (hu) {
            case 20: parentTsumo(700); break;      
            case 30: parentTsumo(1000); break;
            case 40: parentTsumo(1300); break;
            case 50: parentTsumo(1600); break;
            case 60: parentTsumo(2000); break;
            case 70: parentTsumo(2300); break;
          } break;

          case 3:
            switch (hu) {
              case 20: parentTsumo(1300); break;
            case 30: parentTsumo(2000); break;
            case 40: parentTsumo(2600); break;
            case 50: parentTsumo(3200); break;
            case 60: parentTsumo(3900); break;
            case 70: parentTsumo(4000); break;
            } break;

          case 4:
            switch (hu) {
            case 20: parentTsumo(2600); break;
            case 30: parentTsumo(3900); break;
            } 

            if (hu >= 40)  {
              parentTsumo(4000);
            } break;

          case 5: parentTsumo(4000); break;
          case 6: 
          case 7: parentTsumo(6000); break;
          case 8: 
          case 9:
          case 10: parentTsumo(8000); break;
          case 11:
          case 12: parentTsumo(12000); break;
          case 13: parentTsumo(16000); break;
        }
          if (han >= 14) {
            parentTsumo(16000);
          }
      }
        else if (tsumo.checked == false && parent.checked == false) { //子のロンの処理
          console.log(4);
          switch (han) {
            case 1:
            switch (hu) {
              case 20: Result("1翻20符の和了は存在しません"); break;
              case 30: childRon(1000); break;
              case 40: childRon(1300); break;
              case 50: childRon(1600); break;
              case 60: childRon(2000); break;
              case 70: childRon(2600); break;
            }
            break;

            case 2:
            switch (hu) {
              case 20: childRon(1300); break;
              case 30: childRon(2000); break;
              case 40: childRon(2600); break;
              case 50: childRon(3200); break;
              case 60: childRon(3900); break;
              case 70: childRon(4500); break;
            }
            break;

            case 3:
            switch (hu) {
              case 20: childRon(2600); break;
              case 30: childRon(3900); break;
              case 40: childRon(5200); break;
              case 50: childRon(6400); break;
              case 60: childRon(7700); break;
              case 70: childRon(8000); break;
            }
            break;

            case 4:
            switch (hu) {
              case 20: childRon(5200); break;
              case 30: childRon(7700); break;
            }
            if (hu >= 40) {
              childRon(8000); break;
            }

            case 5: childRon(8000); break;
            case 6: 
            case 7: childRon(12000); break;
            case 8:
            case 9:
            case 10: childRon(16000); break;
            case 11: 
            case 12: childRon(24000); break;
          }
          if (han >= 13) {
            childRon(32000);
          }
        }
        else if (tsumo.checked == false && parent.checked == true) { //親のロンの処理
          console.log(4);
          switch (han) {
            case 1: 
            switch (hu) {
              case 20: Result("1翻20符の和了は存在しません"); break;
              case 30: parentRon(1500); break;
              case 40: parentRon(2000); break;
              case 50: parentRon(2400); break;
              case 60: parentRon(2900); break;
              case 70: parentRon(3400); break;
            }
            break;

            case 2: 
            switch (hu) {
              case 20: parentRon(2000); break;
              case 30: parentRon(2900); break;
              case 40: parentRon(3900); break;
              case 50: parentRon(4800); break;
              case 60: parentRon(5800); break;
              case 70: parentRon(6800); break;
            }
            break;

            case 3: 
            switch (hu) {
              case 20: parentRon(3900); break;
              case 30: parentRon(5800); break;
              case 40: parentRon(7700); break;
              case 50: parentRon(9600); break;
              case 60: parentRon(11600); break;
              case 70: parentRon(12000); break;
            }
            break;

            case 4: 
            switch(hu) {
              case 20: parentRon(7700); break;
              case 30: parentRon(11600); break;
            }
            if (hu >= 40) {
              parentRon(12000); break;
            } else if (hu == false) {
              Result("符の値を指定してください");
            }

            case 5: parentRon(12000); break;
            case 6:
            case 7: parentRon(18000); break;
            case 8:
            case 9:
            case 10: parentRon(24000); break;
            case 11:
            case 12: parentRon(36000); break;
          }
          if (han >= 13) {
            parentRon(48000);
          }
        }
      }
    }

    let count = 0;
    const showBtn = document.getElementById('showBtn');
    showBtn.addEventListener('click', () => {
      count++
      if (count > 5) {
        showBtn.classList.add("disable");
        return;
      }
      let hanValue = document.getElementById('han').value;
      let huValue = document.getElementById('hu').value; //入力された翻と符の値を取得
      hanValue = parseInt(hanValue,10);
      huValue = parseInt(huValue,10); //数字として扱う

      if (huValue > 20 && huValue < 30) { //符を切り上げするためのif文
        huValue = 30;
      } else if (huValue > 30 && huValue < 40) {
        huValue = 40;
      } else if (huValue > 40 && huValue < 50) {
        huValue = 50;
      } else if (huValue > 50 && huValue < 60) {
        huValue = 60;
      } else if (huValue > 60 && huValue < 70) {
        huValue = 70;
      } else if (huValue < 20) {
        Result("符が20以下の場合はありません");
      }

      Hora(hanValue,huValue); //結果表示
    });

    const clearButton = document.getElementById('clearBtn');
    clearButton.addEventListener('click', ()=> {
      count = 0;
      ul.innerHTML = '';
      const isDisable = showBtn.classList.contains('disable');
      if (isDisable == true) {
        showBtn.classList.remove('disable');
      }
    })
  }

