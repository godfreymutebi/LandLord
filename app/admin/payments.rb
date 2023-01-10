ActiveAdmin.register Payment do
  permit_params :first_name, :last_name, :phone_number, :address, :money_paid, :nin_number, :home_id, :date, :user_id, :payment_id
  actions :all, except: [:update, :edit, :show]

  member_action :approve, method: :put  do
    @payment = Payment.find permitted_params[:id]
    @payment.update(status: 'Approved')
    redirect_to admin_payment_path, notice: "Payment successfully Approved!"
  end
  
  member_action :reject, method: :put  do
    @payment = Payment.find permitted_params[:id]
    @payment.update(status: 'Rejected')

    redirect_to admin_payment_path, alert: "Payment rejected!"
  end

  index do
    column :first_name
    column :last_name
    column :phone_number
    column :money_paid, :sortable => :money_paid do |payment|
        div :class => "money_paid" do
         number_to_currency payment.money_paid 
        end
    end
    column :user_id
    column :home_id
    column :date
    column :status do |payment|
       if payment.status == "pending"
            status_tag("pending", class: 'orange')
         elsif payment.status == "Approved"
            status_tag("Approved", class: 'green')
         else
            status_tag("Rejected", class: 'red')
        end
    end

    column "Change Status" do |payment|
        span link_to "Approve", approve_admin_payment_path(payment.id) , method: :put ,class: 'member_link'
        span link_to "Reject",  reject_admin_payment_path(payment.id) , method: :put ,class: 'member_link'
    end
    actions  
  end

  filter :user
  filter :home
  filter :status
end
