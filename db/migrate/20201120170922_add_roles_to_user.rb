class AddRolesToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :roles, :integer, default: 1
    add_column :users, :engagement_level, :integer, default: 0 
  end
end
