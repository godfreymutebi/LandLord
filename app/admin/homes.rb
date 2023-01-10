ActiveAdmin.register Home do
  permit_params :title, :description, :image_url, :price, :availability

  member_action :vaccant, method: :put  do
    @home = Home.find permitted_params[:id]
    @home.update(availability: 'Available')
    redirect_to admin_home_path
  end

    member_action :occupaid, method: :put  do
        @home = Home.find permitted_params[:id]
        @home.update(availability: 'Occupaid')
        redirect_to admin_home_path
  end

  member_action :repair, method: :put  do
    @home = Home.find permitted_params[:id]
    @home.update(availability: 'UnderRepair')
    redirect_to admin_home_path
end

  index do
    id_column
    column :title
    column :price, :sortable => :price do |price|
        div :class => "money_paid" do
         number_to_currency price.price
        end
    end
    column :availability do |s|
        if s.availability == "Available"
            status_tag("Vaccant", class: 'green')
          elsif s.availability == "Occupaid"
            status_tag("Occupaid", class: 'red')
          else
            status_tag("UnderRepair", class: 'orange')
        end
    end
    column "Change Status" do |home|
        div :class => "status" do
            span link_to "Clear",   vaccant_admin_home_path(home.id) , method: :put ,class: 'member_link'
            span link_to "Check_in",occupaid_admin_home_path(home.id) , method: :put ,class: 'member_link'
            span link_to "Block",   repair_admin_home_path(home.id) , method: :put ,class: 'member_link'
        end
    end
    actions
  end
end
