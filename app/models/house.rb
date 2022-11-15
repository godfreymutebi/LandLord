class House < ApplicationRecord
    validates :title, :description, :image_url, :price, :location, availability, presence: true
end
