class RemoveLocationNameFromHomes < ActiveRecord::Migration[6.1]
  def change
    remove_column :homes, :location, :string
  end
end
