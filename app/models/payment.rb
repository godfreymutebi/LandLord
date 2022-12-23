class Payment < ApplicationRecord
    validates :first_name, :last_name, :phone_number, :address, :money_paid, :date, :nin_number, :user_id, presence: true
    belongs_to :user, optional: true 
    belongs_to :home, optional: true 
end
