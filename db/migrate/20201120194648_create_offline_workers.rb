class CreateOfflineWorkers < ActiveRecord::Migration[6.0]
  def change
    create_table :offline_workers do |t|
      t.string :first_name
      t.string :last_name

      t.timestamps
    end

    add_reference :offline_workers, :recruited_by, references: :users, index: true
    add_foreign_key :offline_workers, :users, column: :recruited_by_id
  end
end
