class ChangePeriodTypeToDate < ActiveRecord::Migration[6.1]
  def change
    change_column :payments, :period, :datetime
  end
end
