class TweetsController < ApplicationController
  before_action :set_group

  def index
    @message = message.new
    @messages = @group.messages.includes(:user)
  end

  def create
    @message = @group.message.new(tweet_params)
    if @message.save
      redirect_to group_tweets_path(@message), notice: 'メッセージが送信されました'
  end
  
  private
    def set_group
     @group = Group.find(params [:group_id])
    end

    def message_params
      params.require(:message).permit(:tweet, :image).merge( user_id: current_user_id)
    end
  end
end
