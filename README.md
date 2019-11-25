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

* 
## userテーブル
|Column|Type|Options|
|------|----|-------|
|name|text|null: false|
|email|text|null: false, unique: true|
|password|string|null: false|

### Asociation
-belong_to :Group, through: :user_group
-has_many :tweet

## groupテーブル
|Column|Type|Options|
|------|----|-------|
|name|text|null: false|

### Asociation
-has_many :user, through: :user_group
-has_many :tweet, dependent: :destroy

## tweetテーブル
|Column|Type|Options|
|------|----|-------|
|tweet|text||
|image|string||
|user_id|integer||null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Asociation
-belong_to :group
-belong_to :user

## user_groupテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
