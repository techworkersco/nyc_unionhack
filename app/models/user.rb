class User < ApplicationRecord
  has_many :conversations
  enum roles: [:admin, :organizer]
end
