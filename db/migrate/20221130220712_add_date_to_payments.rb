class AddDateToPayments < ActiveRecord::Migration[6.1]
  def change
    add_column :payments, :date, :date
  end
end
