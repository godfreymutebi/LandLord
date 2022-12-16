class RemoveTenantFromPayments < ActiveRecord::Migration[6.1]
  def change
    remove_column :payments, :tenant, :integer
  end
end
