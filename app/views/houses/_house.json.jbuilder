json.extract! house, :id, :title, :description, :image_url, :price, :location, :availability, :created_at, :updated_at
json.url house_url(house, format: :json)
