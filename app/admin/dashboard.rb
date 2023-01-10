# frozen_string_literal: true
ActiveAdmin.register_page "Dashboard" do
    menu priority: 1, label: proc { I18n.t("active_admin.dashboard") }
    content title: proc { I18n.t("active_admin.dashboard") } do
        # section "Recent Payments" do
        #     table_for Payment.order(created_at: :desc).limit(10) do
        #         column :first_name
        #         column :last_name
        #         column :phone_number
        #         column :money_paid, :sortable => :money_paid do |payment|
        #             div :class => "money_paid" do
        #              number_to_currency payment.money_paid 
        #             end
        #         end
        #         column :user_id
        #         column :home_id
        #         column :date
        #         column :address
        #         column :nin_number
        #         column :status
        #     end
        # end

    end
end
