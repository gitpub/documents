<!--
title: Configuration
-->

## .gitpub.yml
サイト全体の動作を制御する設定ファイルで、[yaml形式](http://ja.wikipedia.org/wiki/YAML)で記述します。

```
title: サイト全体のタイトル
disqus_shortname: [Disqus](http://disqus.com/)のshortnameです。設定しておくことで記事に自動的にDisqusのフォームが挿入されます。
```

## Web Hookを使った自動更新
GitPubは
```
/username/repository/~/pull
```
にアクセスすることでGitHubから最新バージョンをPullしてきます。このURLをGitHubのWebHook登録しておけば、GitHubにpushするだけで自動的にブログを更新することができます。
