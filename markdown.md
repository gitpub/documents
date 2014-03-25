<!--
title: Markdown
-->

## Syntax
Git PubはMarkdownによって記述されたファイルをHTMLにパースします。[GitHub Flavored Markdown](https://help.github.com/articles/github-flavored-markdown)な記述が可能です。


## Meta
Markdownにはメタ情報を含めることができます。メタ情報はHTMLコメント内にYAML形式で記述します。

```
<!--
title: ページのタイトル
date: ページの作成日など
description: ページの概要
categories: [category1, category2, ...]
-->
以降にMakrdown書式のドキュメントを記述。
```

メタ情報は必ずファイルの先頭から記述する必要があります。先頭以外に記述した場合、単にMarkdownドキュメントとして処理されます。


## 特別なMeta
メタ情報は全てOptionalです。ただし、いくつかのMeta情報はシステムで参照します。

Meta  | 使い道
----- | ------
date       | 投稿日として扱い、年・月毎の検索や、投稿数の統計を算出するために使用されます
categories | カテゴリー毎の検索や、投稿数の統計を算出するために使用されます

## デフォルトのテンプレートが使用するMeta
デフォルトのテンプレートでは、レンダリングの際にいくつかのMeta情報を参照します。

Meta  | 使い道
----- | ------
title       | ドキュメントのタイトルとして扱います
description | ドキュメントの概要として扱います (`<meta name="description" />`に使用します）

現在のところ、`title`はMarkdownのheadingによって代用できます。ただし、今後デフォルトのテンプレートの(例えば、「最近の投稿」をリストするような)機能を追加する際に使用する可能性があります。必須ではありませんが、指定しておくのがベターです。