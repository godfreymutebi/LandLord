class ChangePaymentHomColumn < ActiveRecord::Migration[6.1]
  def change
    change_column :payments, :home_id, :integer, null: true
  end
end
