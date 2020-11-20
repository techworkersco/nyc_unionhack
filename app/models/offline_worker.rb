class OfflineWorker < ApplicationRecord
  belongs_to :recruited_by, class_name: :User, foreign_key: :recruited_by_id

  def engagement_level
    self.conversations.last&.engagement_level
  end

  def name
    [first_name, ' ', last_name].join
  end
end
