# SyosinMC-ChatRank


## 仕様書
`[Owner][VIP] kaito02020424:チャット`
## 完成品
`[Owner][VIP] <kaito02020424> チャット内容 `

のように表示したい。
player-roleと関連付けてロールを管理する。
色付けなどはconfig.jsonなどで定義できるとよい。


### ロール一覧:
- Member(デフォルト。ロールが存在しない場合はこれ扱い。)
- VIP
  - VIP+のような拡張もするかもしれない。
- OP
- Owner

を、config.jsonで管理したい。
```
[
  "Owner",
  "OP",
  "Developer",
  "VIP",
  "Member"
]
```

のように、順位及び種類を指定する予定。 
