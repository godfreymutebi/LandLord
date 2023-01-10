ActiveAdmin.register User do
  permit_params :email, :encrypted_password, :reset_password_token, :reset_password_sent_at, :remember_created_at

  index do
    selectable_column
    id_column
    column :email
    column :created_at
    column :updated_at
    actions
  end
end
