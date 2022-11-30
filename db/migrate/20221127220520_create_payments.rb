class CreatePayments < ActiveRecord::Migration[6.1]
  def change
    create_table :payments do |t|
      t.string :first_name
      t.string :last_name
      t.string :phone_number
      t.text :address
      t.decimal :money_paid
      t.string :period,  precision: 8, scale: 2
      t.string :nin_number

      t.timestamps
    end
  end
end
