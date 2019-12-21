class Message < ApplicationRecord
  belong_to: user
  belong_to: group

  mount_uploader :image, ImageUploader
  validates :message, presence: true, unless: :image?
end
