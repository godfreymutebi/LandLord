class RemovePeriodFromPayments < ActiveRecord::Migration[6.1]
  def change
    remove_column :payments, :period, :datetime
  end
end
