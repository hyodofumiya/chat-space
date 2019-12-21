class Tweet < ApplicationRecord
  belong_to: user
  belong_to: group

  validates :tweet, presence: true, unless: :image?
end
