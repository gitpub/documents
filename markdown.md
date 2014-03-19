---
title: Markdown
---

## Syntax
Git PubはMarkdownによって記述されたファイルをページとして描画する。  
Markdownパーサーは[Parsedown](http://parsedown.org/)を利用している。[GitHub Flavored Markdown](https://help.github.com/articles/github-flavored-markdown)な記述が可能。

## Meta
Markdownにはメタ情報を含めることができる。

```
---
title: ページのタイトル
date: ページの作成日など
description: ページの概要
categories: [category1, category2, ...]
---
以降にMakrdown書式のドキュメントを記述。
```

メタ情報はOptionalだけど一部はシステムで使うから書いておいたほうがいい。システムで使うものは以下のもの。

メタ情報 | 使い道
------- | ------
date       | 日付に基づくソート、find
categories | カテゴリーに基づくfind
