FactoryBot.define do
  
  factory :message do
    tweet {Faker::Coffee.blend_name}
    image {File.open("#{Rails.root}/public/images/猫画像１.jpeg")}
    user_id {1}
    group_id {1}
  end
end