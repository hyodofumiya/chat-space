require 'rails_helper'
RSpec.describe "message" do
  describe "#create" do
    it "メッセージがあれば保存できる" do
      expect(build(:message, image: nil)).to be_valid
    end

    it "画像があれば保存できる" do
      expect(build(:message, message: nil)).to be_valid
    end

    it "メッセージと画像があれば保存できる" do
      expect(build(:message)).to be_valid
    end
  end
end