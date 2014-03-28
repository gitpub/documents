<!--
title: Markdown
-->

## Syntax
GitPubはMarkdownによって記述されたファイルをHTMLにパースします。[GitHub Flavored Markdown](https://help.github.com/articles/github-flavored-markdown)な記述が可能です。


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


### 特別なMeta
メタ情報は全てOptionalです。ただし、いくつかのMeta情報はGitPubが参照します。

Meta  | 使い道
----- | ------
date       | 投稿日として扱い、年・月毎の検索や、投稿数の統計を算出するために使用されます
categories | カテゴリー毎の検索や、投稿数の統計を算出するために使用されます

### レンダリング用のMeta
レンダリングの際にもいくつかのMeta情報を参照します。

Meta  | 使い道
----- | ------
title       | ドキュメントのタイトルとして扱います
description | ドキュメントの概要として扱います (`<meta name="description" />`に使用します）

`title`はMarkdownのheadingによって代用できるでしょう。ただし、(例えば「最近の投稿」をリストするような）機能を追加する際に使用する可能性があります。必須ではありませんが、指定しておくのがベターです。

## Markdownファイルの配置
Markdownはお使いのリポジトリ内の*どのディレクトリにでも配置することができます*。[GitPub Skeleton](https://github.com/gitpub/skeleton)では```md```ディレクトリに配置するようになっています。

記事の種類や年月でディレクトリを分けたければ、そのようにして下さい。GitPubは全てのディレクトリからMarkdownを探し出し、記事としてレンダリングします。

```
md/markdown.md
```

として配置した場合は

```
/username/repository/md/markdown.md
```

になります。

```
2014/03/markdown.md
```

として配置した場合は

```
/username/repository/2014/03/markdown.md
```

になります。*GitPubは単にMarkdownが配置されたパスをURLとして扱います*。

厳密には*どのディレクトリにでも配置することができる*わけではありません。GitPubではドットで始まるディレクトリとファイルは特別なものとして扱われます。ドットで始まるディレクトリを、Markdownの格納先として使用するべきではありません。使用した場合、格納されたMarkdownは無視されます。もちろん、ドットで始まるファイル名のMarkdownも作るべきではありません。

## 画像、あるいはその他のリソース
可憐な女性プログラマーはランチの写真をアップする画像の格納先が必要になるでしょう。

画像を含むリソース（htmlでsrcやhrefに指定するもの）は```.resource```ディレクトリに配置します。```.resource```ディレクトリに配置したものは

```
/username/repository/~/resource/path/to/resource
```

としてリクエストすることができます。

```
.resource/img/nude.jpg
```

に配置した場合は

```
/username/repository/~/resource/path/img/nude.jpg
```

となります。

```.resource```内ではディレクトリを自由に作成できます。```.resource```以外に配置したファイルをリクエストすることはできません。404になります。
