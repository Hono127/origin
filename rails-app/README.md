# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

---


# 知らん単語

- scaffoldジェネレーター
- RESTアーキテクチャ
- rails new

- rails Bundler
  - bundlerとはgemを管理するためのツールで、bundler自体もgemの一種です。bundlerを使うことで、複数のgemの依存関係を保ちながらgemの管理ができます。

- rails Gemfile
  - このアプリケーションに必要なGemの定義ファイル

- rails Gem
  - Rubyのパッケージ（ライブラリともいいます）としてのgemです

- Router(ルーター) 
  - ルーターはコントローラとブラウザの間に配置され、ブラウザからのリクエストをコントローラに振り分ける (=ルーティング) 役割を果たします

- ASCII文字
  - https://ja.wikipedia.org/wiki/ASCII


---

# エラー
### ① [このページにて](https://railstutorial.jp/chapters/toy_app?version=6.0#sec-demo_users_resource)下記コマンドを実行後エラー発生
```
$ rails generate scaffold User name:string email:string


Rails is not currently installed on this system. To get the latest version, simply type:

    $ sudo gem install rails

You can then rerun your "rails" command.
```

- システムにrailsがないと言われているため、
指示通りにrailsをインストールするものの最後にエラー
```
$ sudo gem install rails


Password:
Sorry, try again.
Password:
Fetching i18n-1.10.0.gem
Fetching tzinfo-2.0.4.gem
Fetching concurrent-ruby-1.1.10.gem
Fetching activesupport-7.0.2.4.gem
Fetching rack-2.2.3.gem
Fetching rack-test-1.1.0.gem
Fetching crass-1.0.6.gem
Fetching racc-1.6.0.gem
Fetching nokogiri-1.13.4-x86_64-darwin.gem
Fetching loofah-2.17.0.gem
Fetching rails-html-sanitizer-1.4.2.gem
Fetching rails-dom-testing-2.0.3.gem
Fetching builder-3.2.4.gem
Fetching erubi-1.10.0.gem
Fetching actionview-7.0.2.4.gem
Fetching actionpack-7.0.2.4.gem
Fetching activemodel-7.0.2.4.gem
Fetching activerecord-7.0.2.4.gem
Fetching globalid-1.0.0.gem
Fetching activejob-7.0.2.4.gem
Fetching mini_mime-1.1.2.gem
Fetching mail-2.7.1.gem
Fetching digest-3.1.0.gem
Fetching timeout-0.2.0.gem
Fetching net-protocol-0.1.3.gem
Fetching net-imap-0.2.3.gem
Fetching net-pop-0.1.1.gem
Fetching net-smtp-0.3.1.gem
Fetching actionmailer-7.0.2.4.gem
Fetching nio4r-2.5.8.gem
Fetching websocket-extensions-0.1.5.gem
Fetching websocket-driver-0.7.5.gem
Fetching actioncable-7.0.2.4.gem
Fetching marcel-1.0.2.gem
Fetching activestorage-7.0.2.4.gem
Fetching actionmailbox-7.0.2.4.gem
Fetching actiontext-7.0.2.4.gem
Fetching thor-1.2.1.gem
Fetching method_source-1.0.0.gem
Fetching zeitwerk-2.5.4.gem
Fetching railties-7.0.2.4.gem
Fetching rails-7.0.2.4.gem
Successfully installed concurrent-ruby-1.1.10
Successfully installed i18n-1.10.0
Successfully installed tzinfo-2.0.4
ERROR:  Error installing rails:
	There are no versions of activesupport (= 7.0.2.4) compatible with your Ruby & RubyGems. Maybe try installing an older version of the gem you're looking for?
	activesupport requires Ruby version >= 2.7.0. The current ruby version is 2.6.2.47.

```
みてみると
> activesupport requires Ruby version >= 2.7.0.

と記載されいるので、バージョンを2.7.0にしなければならない。
rubyのバージョン管理はebnevで行っているため、下記コマンドで新しいバージョンをインストール
```
rbenv install 2.7.0

Downloading openssl-1.1.1n.tar.gz...
-> https://dqw8nmjcqpjn7.cloudfront.net/40dceb51a4f6a5275bde0e6bf20ef4b91bfc32ed57c0552e2e8e15463372b17a
Installing openssl-1.1.1n...
Installed openssl-1.1.1n to /Users/onohiroshisei/.rbenv/versions/2.7.0

Downloading ruby-2.7.0.tar.bz2...
-> https://cache.ruby-lang.org/pub/ruby/2.7/ruby-2.7.0.tar.bz2
Installing ruby-2.7.0...
ruby-build: using readline from homebrew
Installed ruby-2.7.0 to /Users/onohiroshisei/.rbenv/versions/2.7.0
```
- ```/.ruby-version``` 内の記述を$2.7.0$に変更

```.ruby-version
$ ruby -v
ruby 2.7.0p0 (2019-12-25 revision 647ee6f091) [x86_64-darwin21]
```
- rubyGemsのアプデ対応で下記コマンドを実行(成功)
```
gem update --system
```
- 再度```sudo gem install rails```を実行(成功)
- 再度```rails generate scaffold User name:string email:string```を実行するも同じエラー
```
Rails is not currently installed on this system. To get the latest version, simply type:

    $ sudo gem install rails

You can then rerun your "rails" command.
```