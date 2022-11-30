class AddTenantToPayment < ActiveRecord::Migration[6.1]
  def change
    add_reference :payments, :tenant, null: false, foreign_key: true
  end
end
