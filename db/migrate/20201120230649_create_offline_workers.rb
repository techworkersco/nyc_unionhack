class CreateOfflineWorkers < ActiveRecord::Migration[6.0]
  def change
    create_table :offline_workers do |t|
      t.string :name

      t.timestamps
    end
  end
end
