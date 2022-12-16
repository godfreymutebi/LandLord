class AddUserRefToPayments < ActiveRecord::Migration[6.1]
  def change
    add_reference :payments, :user, foreign_key: true
  end
end
