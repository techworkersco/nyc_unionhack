class Conversation < ApplicationRecord
  belongs_to :user
  belongs_to :offline_worker

  validates :engagement_level, inclusion: (0..5)
end
