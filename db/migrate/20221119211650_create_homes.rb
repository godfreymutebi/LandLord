class CreateHomes < ActiveRecord::Migration[6.1]
  def change
    create_table :homes do |t|
      t.string :title
      t.text :description
      t.string :image_url
      t.decimal :price,  precision: 8, scale: 2
      t.string :availability, default: "Available", null: false
      t.string :location, null:false

      t.timestamps
    end
  end
end
