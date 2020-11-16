# 麻雀の点数計算,結果表示アプリ
初めてGithubにてアップロードした麻雀の点数計算アプリとなります。
使用した言語はHTML、CSS、JavaScript、Vue.jsです。

## index.htmlについて  
麻雀では点数計算が少々煩雑です。まず、あがった時の役から翻数を数えます。その後、符という得点をあがり方によって計算します。（この計算方法の説明は省略します）つまり、翻数と符の数の2つによって最終的な得点が決定するのです。麻雀をする際にはこれを覚える必要があるのですが、これがなかなか面倒です。そこで、このアプリでは翻数と符を入力すれば得点が表示されるようにしました。

## income.htmlについて  
麻雀の勝ち負けは終了時の持ち点で決まりますが、順位が決定した後、清算という作業を行う必要があります。麻雀は25000点を持った状態から開始しますが、清算の際には30000点を引いた数を使用します。
例）持ち点が18000点のとき、30000点を引いたー12000点を利用します。
この引いた後の値を1000で割った値がその人の得点です。つまり、上記の例ではー12.0が清算後の得点となるのです。また、1位の人には2,3,4位のマイナス分を＋するボーナス点が与えられます。
この清算の作業は毎回基本的に手で行うのですが、これもまた時間がかかります。そこで、このアプリでは最終的な持ち点を入力すると清算後の得点が表示されるようにしました。
