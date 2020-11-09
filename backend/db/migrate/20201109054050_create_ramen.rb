class CreateRamen < ActiveRecord::Migration[6.0]
  def change
    create_table :ramen do |t|
      t.text :taste

      t.timestamps
    end
  end
end
