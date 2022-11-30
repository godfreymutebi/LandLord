json.extract! payment, :id, :first_name, :last_name, :phone_number, :address, :money_paid, :period, :nin_number, :created_at, :updated_at
json.url payment_url(payment, format: :json)
