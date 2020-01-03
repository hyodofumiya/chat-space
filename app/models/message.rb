class Message < ApplicationRecord
  
  belongs_to :user
  belongs_to :group

  mount_uploader :image, ImageUploader
  validates :tweet, presence: true, unless: :image?
end
