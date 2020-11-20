class CreateConversations < ActiveRecord::Migration[6.0]
  def change
    create_table :conversations do |t|
      t.integer :engagement_level, default: 0
      t.text :body

      t.timestamps
    end

    add_reference :conversations, :user, index: true
    add_reference :conversations, :offline_worker, index: true

    add_foreign_key :conversations, :users #, column: :recruited_by_id
    add_foreign_key :conversations, :offline_workers #, column: :recruited_by_id
  end
end
