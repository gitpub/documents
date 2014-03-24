---
title: Getting started
---

## Let's Post!

### gitリポジトリを作る
```sh
$ mkdir your-blog
$ cd your-blog
$ git init
```

### 設定ファイルを作る
```sh
$ echo 'title: Your Blog Title' > .gitpub.yml'
```

### 記事を書く
```sh
$ echo "This is my first post" > first.md
```

### Githubにリモートリポジトリを作る
https://github.com/new


### リモートリポジトリを設定する
```sh
$ git remote add origin git@github.com:[username]/[repository].git
```

### Githubに記事をpushする
```sh
$ git add -A
$ git commit -m "first commit"
$ git push -u origin master'
```

### Git Pubにブログを展開する
```sh
$ wget -q -O - http://git-pub.com/[username]/[repository]/~/pull
{"state":"success"}
```

### ブログをみる
http://git-pub.com/[username]/[repository]/

### Webhookを使って自動的に更新されるようにする
https://git.com/[username]/[repository]/settings/hooks/new]

このURLを登録するべ。

```
http://git-pub.com/[username]/[repository]/~/pull
```

## Structure

Path | 使い道
---- | -----
.gitpub.yml | サイト全体の設定を記述する
.resource   | このディレクトリに入れたファイルは/~/resource/path/to/resourceで読み込むことができる
.template   | テンプレートを記述したファイルを入れる
