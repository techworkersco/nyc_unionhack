class CreateConversations < ActiveRecord::Migration[6.0]
  def change
    create_table :conversations do |t|
      t.integer :engagement_level
      t.text :body
      t.references :user, foreign_key: true
      t.references :offline_worker, foreign_key: true

      t.timestamps
    end
  end
end
