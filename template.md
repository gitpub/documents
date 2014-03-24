---
title: Template
---

## About
テンプレートは`.template`ディレクトリ内に作成する。


## Twig
[Twig](http://twig.sensiolabs.org/)を使用している。使い方は[ドキュメント](http://twig.sensiolabs.org/documentation)を参照のこと。
Sandboxモードで動作するため使える機能は制限される。

### Tags
* [block](http://twig.sensiolabs.org/doc/tags/block.html)
* [if](http://twig.sensiolabs.org/doc/tags/if.html)
* [for](http://twig.sensiolabs.org/doc/tags/for.html)
* [set](http://twig.sensiolabs.org/doc/tags/set.html)
* [import](http://twig.sensiolabs.org/doc/tags/import.html)

### Filters
* [raw](http://twig.sensiolabs.org/doc/filters/raw.html)
* [escape](http://twig.sensiolabs.org/doc/filters/escape.html)
* [date](http://twig.sensiolabs.org/doc/filters/date.html)
* md


## Configuration
`.template/config.yml`によってテンプレート用のconfigが記述可能。  
configの内容はテンプレートによって異なるが一部はシステムが使用する。

config | 使い道
------ | ------
routes | [Routing](#routing)に使用する



## Routing
パスによって動作させるtwigファイルを切り替えることが出来る。

```
routes:
  {year}/{month}: list.twig
```

`{}`によってキャプチャされた内容はテンプレート内の`params`によって参照が可能。

```
{{ params.year }}
```


### Alias
ルーティングには予め用意されたAliasを使用することができる。

Alias | 使い道
----- | ------
:index    | インデックスページ `(/)`
:md       | 単一のmarkdownファイル `(/path/to/markdown.md)`
:notfound | リクエストされたパスに対してマッチするルートが無かった場合に使用される
:error    | なんらかの理由でエラーが発生した場合に使用される

```
routes:
  :index: index.twig
  :md: page.twig
  :notfound: notfound.twig
  :error: error.twig
```
