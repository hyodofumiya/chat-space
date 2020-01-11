FactoryBot.define do
  
  factory :user do
    password = Faker::Internet.password(min_length:8)
    name = Faker::Name.name
    email = Faker::Internet.free_email
    password {password}
    password_comfirmation {password}
  end
end