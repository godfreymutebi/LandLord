class Home < ApplicationRecord
    validates :title, :description, :image_url, :price, :location, :availability, presence: true
    validates :price, numericality: { greater_than_or_equal_to: 0.01 }
   

    validates :image_url, allow_blank: true, format: {
        with:
        %r{\.(gif|jpg|png|jpeg)\z}i,
        message: 'must be a URL for GIF, JPG, JPEG or PNG image.'
    }
    
    # has_one :payment, through: :tenant
end