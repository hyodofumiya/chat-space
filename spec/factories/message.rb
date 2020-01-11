FactoryBot.define do
  
  factory :message do
    tweet {Faker::Coffee.blend_name}
    image {File.open("#{Rails.root}/public/images/猫画像１.jpeg")}
    user_id
    group_id
  end
end