class Message < ApplicationRecord
  belong_to: user
  belong_to: group

  mount_uploader :image, ImageUploader
  validates :tweet, presence: true, unless: :image?
end
