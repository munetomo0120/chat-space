require 'rails_helper'

RSpec.describe Message, type: :model do
  describe "#create" do
    context "saveできる" do
      it "contentがあれば有効saveできる" do
        expect(build(:message, image: nil)).to be_valid
      end
      it "imageがあれば有効saveできる" do
        expect(build(:message, content: nil)).to be_valid
      end
      it "contentとimageがあれば有効saveできる" do
        expect(build(:message)).to be_valid
      end
    end
    context "saveできない" do
      it "contentとimageがなかったら有効じゃないsaveできない" do
        message = build(:message, content: nil, image: nil)
        message.valid?
        expect(message.errors[:content]).to include("を入力してください")
      end
      it "group_idがなかったら有効じゃないsaveできない" do
        message = build(:message, group_id: nil)
        message.valid?
        expect(message.errors[:group]).to include("を入力してください")
      end
      it "user_idがなかったら有効じゃないsaveできない" do
        message = build(:message, user_id: nil)
        message.valid?
        expect(message.errors[:user]).to include("を入力してください")
      end
    end
  end
  

end
