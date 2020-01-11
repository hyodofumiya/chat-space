require 'rails_helper'

describe MessagesController, type: :controller do
  let(:group) {create(:group)}
  let(:user) {create(:user)}
  describe 'GET #index' do
    context 'log in' do 
      before do
        login user
        get :index, params: { group_id: group.id}
      end

      it 'assigns @message' do
        expect(assigns(:message)).to be_a_new(Message)
      end

      it 'assigns @group' do
        expect(assigns(:group)).to eq group
      end

    end
  end
end