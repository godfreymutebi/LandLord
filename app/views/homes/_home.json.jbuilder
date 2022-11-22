json.extract! home, :id, :title, :description, :image_url, :price, :availability, :location, :created_at, :updated_at
json.url home_url(home, format: :json)
