require 'rails_helper'

RSpec.describe User, type: :model do

  it { is_expected.to have_many(:posts).dependent(:destroy) }

  context "Validations" do
    describe "Username" do
      subject { FactoryBot.build(:user) }
      it { is_expected.to validate_presence_of(:username) }
      it { should validate_uniqueness_of(:username).case_insensitive }
    end
    describe "Email" do
      subject { FactoryBot.build(:user) }
      it { is_expected.to validate_presence_of(:email) }
      it { should validate_uniqueness_of(:email).case_insensitive }
    end
    describe "Password" do
      subject { FactoryBot.build(:user) }
      it { is_expected.to validate_presence_of(:password) }
    end
  end
end
