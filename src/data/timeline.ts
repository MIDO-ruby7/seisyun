import { Timelines } from "../type/Timelines";

export const timelineData: Timelines = {
  start: [
    {type: 'setBackground', x: 400, y: 300, key: 'street'},
    {type: 'dialog', text: '・・・・・・ ▼'},
    {type: 'dialog', text: 'あっつ・・・セミ黙れ・・・ ▼'},
    {type: 'dialog', text: '・・・ ▼'},
    {type: 'dialog', text: '・・・ん？! ▼'},
    {type: 'addForeground', x: 400, y: 300, key: 'gomi'},
    {type: 'dialog', text: 'もしかして・・・ ▼'},
    {type: 'dialog', text: 'あれは・・・！ ▼'},
    {type: 'addForeground', x: 400, y: 300, key: 'erobook'},
    {type: 'dialog', text: 'はぐれエロ本！！ ▼'},
    {type: 'dialog', text: 'あのなぜかゴミ置き場や公園や畑や河川敷に落ちているというはぐれエロ本・・・！実在したのか・・・！ ▼'},
    {type: 'dialog', text: 'ゴクリ・・・ ▼'},
    {type: 'timelineTransition', timelineID: 'choice01'}
  ],
  choice01: [
    {type: 'setBackground', x: 400, y: 300, key: 'street'},
    {type: 'addForeground', x: 400, y: 300, key: 'erobook'},
    {type: 'dialog', text: 'どうする？ ▼', actorName: 'エロいBOOKがこちらを見ている'},
    {type: 'choice', choices: [
      {text: '拾う', timelineID: 'choice01_a01'},
      {text: '周りを確認する', timelineID: 'choice01_a02'},
      {text: '素通りする', timelineID: 'choice01_a03'}
    ]}
  ],
  choice01_a01: [
    {type: 'addForeground', x: 400, y: 300, key: 'erobook'},
    {type: 'dialog', text: ' ▼'},
    {type: 'dialog', text: 'そっと本を手に取った ▼'},
    {type: 'dialog', text: 'うわぁ・・・すげぇ・・・ ▼'},
    {type: 'dialog', text: '何してるの？ ▼', actorName: '???'},
    {type: 'addForeground', x: 400, y: 300, key: 'zyosi'},
    {type: 'dialog', text: '！！！！！！！！い、い、委員長！！！ ▼'},
    {type: 'dialog', text: '？ ▼', actorName: '委員長'},
    {type: 'dialog', text: '（やっば、どうしよう） ▼'},
    {type: 'timelineTransition', timelineID: 'choice02'}
  ],
  choice01_a02: [
    {type: 'dialog', text: '・・・・・・(よし、大丈夫そうだ) ▼'},
    {type: 'dialog', text: 'そっと本を手に取った ▼'},
    {type: 'setBackground', x: 400, y: 300, key: 'street'},
    {type: 'addForeground', x: 400, y: 300, key: 'zyosi'},
    {type: 'dialog', text: '・・・？！？！？ ▼'},
    {type: 'dialog', text: '・・・・・・ ▼', actorName: '委員長'},
    {type: 'dialog', text: '・・・・・・・・・・ ▼', actorName: '委員長'},
    {type: 'dialog', text: '・・・・・・ ・・・(頼む、何か言ってくれ！)▼'},
    {type: 'dialog', text: '・・・・・・ ・・・ ▼', actorName: '委員長'},
    {type: 'dialog', text: '無表情でしばらくこちらを見ていた委員長は、そのまま何もいわすに去っていった'},
    {type: 'dialog', text: 'その後、委員長の笑顔を見ることは二度とできなかった・・・'},
    {type: 'sceneTransition', key: 'badending'}
  ],
  choice01_a03: [
    {type: 'setBackground', x: 400, y: 300, key: 'street'},
    {type: 'addForeground', x: 400, y: 300, key: 'boku'},
    {type: 'dialog', text: '・・・・・・ ▼', actorName: 'ACT-42'},
    {type: 'dialog', text: '？！？！？！？！？！？！？！？！？ ▼'},
    {type: 'clearForeground'},
    {type: 'dialog', text: '・・・・・・ ▼', actorName: 'ACT-42'},
    {type: 'dialog', text: 'この後俺は謎の組織に捕まり色々されてしまうのだった・・・ ▼'},
    {type: 'sceneTransition', key: 'badending'}
  ],
  choice02: [
    {type: 'setBackground', x: 400, y: 300, key: 'street'},
    {type: 'addForeground', x: 400, y: 300, key: 'zyosi'},
    {type: 'dialog', text: 'どうする？ ▼', actorName: '委員長がこちらを見ている'},
    {type: 'choice', choices: [
      {text: 'ごまかす', timelineID: 'choice02_a01'},
      {text: '逃げる', timelineID: 'choice02_a02'},
      {text: '一緒に見る', timelineID: 'choice02_a03'}
    ]}
  ],
  choice02_a01: [
    {type: 'setBackground', x: 400, y: 300, key: 'street'},
    {type: 'addForeground', x: 400, y: 300, key: 'zyosi'},
    {type: 'dialog', text: 'あっ、あの、えっとこれは！ ▼'},
    {type: 'dialog', text: '・・・・・・ ▼', actorName: '委員長'},
    {type: 'dialog', text: 'かっ、風で飛んできたみたいで！！ ▼'},
    {type: 'dialog', text: '・・・・・・・・・・ ▼', actorName: '委員長'},
    {type: 'dialog', text: '決して！！見ようとしてた訳じゃ！！ ▼'},
    {type: 'dialog', text: '・・・・・・・・・・・・・・・・ ▼', actorName: '委員長'},
    {type: 'dialog', text: '・・・・・・ ・・・(頼む、何か言ってくれ！)▼'},
    {type: 'dialog', text: '・・・・・・ ・・・ ▼', actorName: '委員長'},
    {type: 'dialog', text: '無表情でしばらくこちらを見ていた委員長は、そのまま何もいわすに去っていった'},
    {type: 'dialog', text: 'その後、委員長の笑顔を見ることは二度とできなかった・・・'},
    {type: 'sceneTransition', key: 'badending'}
  ],
  choice02_a02: [
    {type: 'setBackground', x: 400, y: 300, key: 'street'},
    {type: 'addForeground', x: 400, y: 300, key: 'zyosi'},
    {type: 'dialog', text: 'ご、ごめん！！！！急いでるから！！！！！ ▼'},
    {type: 'dialog', text: '？ あ、うんまた明日・・・ ▼', actorName: '委員長'},
    {type: 'dialog', text: '僕は走って逃げた ▼'},
    {type: 'dialog', text: '・・・・・・・・ ▼'},
    {type: 'clearForeground'},
    {type: 'dialog', text: 'そして、次の日・・・ ▼'},
    {type: 'dialog', text: '？！？！？ま、まだある・・・・ ▼'},
    {type: 'timelineTransition', timelineID: 'choice01'}
  ],
  choice02_a03: [
    {type: 'setBackground', x: 400, y: 300, key: 'street'},
    {type: 'addForeground', x: 400, y: 300, key: 'zyosi'},
    {type: 'dialog', text: 'あっ、あの、えっと...一緒に、見る...? ▼'},
    {type: 'dialog', text: '・・・・・・ ▼', actorName: '委員長'},
    {type: 'dialog', text: '(見る訳ねえだろおおおお、俺何言ってんだ) ▼'},
    {type: 'dialog', text: '・・・・・・・ ▼', actorName: '委員長'},
    {type: 'dialog', text: 'な、なーんちゃって！！はは・・・ ▼'},
    {type: 'dialog', text: '・・・・・・・・・・・・ ▼', actorName: '委員長'},
    {type: 'dialog', text: '・・・・・・ ・・・(頼む、何か言ってくれ！)▼'},
    {type: 'dialog', text: '・・・・・・ 見る ▼', actorName: '委員長'},
    {type: 'dialog', text: 'ふぁ・・・・・・・ ▼'},
    {type: 'dialog', text: '(マジかよおおおお？！？！) ▼'},
    {type: 'dialog', text: 'その後、委員長と一緒にエロ本を見ることになった ▼'},
    {type: 'dialog', text: 'この夏の行方を僕たちはまだ知らない・・・・'},
    {type: 'sceneTransition', key: 'ending'}
  ],
}