class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  enum roles: %i[admin organizer]
  validates :engagement_level, inclusion: 0..5

  has_many :offline_workers, foreign_key: :recruited_by_id
  has_many :conversations
end
