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

# chatspace DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|text|null: false, unique: true|
|password|string|null: false|
### Asociation
- has_many :users_groups
- has_many :groups, through: :users_groups
- has_many :tweets

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
### Asociation
- has_many :users_groups
- has_many :users, through: :users_groups
- has_many :tweets

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|tweet|text||
|image|string||
|user_id|integer||null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Asociation
- belong_to :group
- belong_to :user

## users_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Asociation
- belong_to :user
- belong_to :group
