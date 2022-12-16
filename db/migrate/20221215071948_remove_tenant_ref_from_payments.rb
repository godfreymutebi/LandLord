class RemoveTenantRefFromPayments < ActiveRecord::Migration[6.1]
  def change
    remove_reference :payments, :tenant, null: false, foreign_key: true
  end
end
