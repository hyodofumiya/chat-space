FactoryBot.define do
  
  factory :message do
    tweet {Faker::Coffee.blend_name}
    image {File.open("#{Rails.root}/public/images/test_image.jpeg")}
    user
    group
  end
end