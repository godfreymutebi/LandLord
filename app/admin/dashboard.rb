# frozen_string_literal: true
ActiveAdmin.register_page "Dashboard" do
    menu priority: 1, label: proc { I18n.t("active_admin.dashboard") }
    content title: proc { I18n.t("active_admin.dashboard") } do
        section "Recent Payments" do
            table_for Payment.order(created_at: :desc).limit(10) do
                column :first_name
                column :last_name
                column :phone_number
                column "Amount_in_Dollors", :money_paid, :sortable => :money_paid do |payment|
                    div :class => "money_paid" do
                     number_to_currency payment.money_paid 
                    end
                end
                column "Customer Email", :user
                column "Room_Id", :home_id
                column "Paid On", :date
                column "Previous Address",:address
                column :nin_number
                column :status do |payment|
                    if payment.status == "pending"
                         status_tag("pending", class: 'orange')
                      elsif payment.status == "Approved"
                         status_tag("Approved", class: 'green')
                      else
                         status_tag("Rejected", class: 'red')
                    end
                end
            end
        end

        section "Home" do
            table_for Home.order(created_at: :desc).limit(10)   do
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
            end
        end
    end
    
end
