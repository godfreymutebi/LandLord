class Api::V1::PaymentsController < ApplicationController
    before_action :authenticate_user!
    before_action :set_payment, only: %i[ show edit update destroy ]
    # GET /payments or /payments.json
    def index
     if user_signed_in?
        @payments = current_user.payments.order(created_at: :desc)
          render json: @payments.to_json(include: [:home, :user])
         else
            render json: {}, status: 401
        end
    end
  
    # GET /payments/1 or /payments/1.json
    def show
        @payment = current_user.payments.find_by(id: params[:id])
        render json: @payment.to_json(include: [:home, :user])
    end
    # GET /payments/new
    def new
      @home = Home.find(params[:home_id]) 
      @payment =Payment.new
    end
  
    # GET /payments/1/edit
    def edit
    end

    # POST /payments
    def create 
        @home = Home.find(params[:home_id])
        @payment = @home.payments.create(payment_params) do |p|
          p.user = current_user # if user_signed_in?
        end
        if @payment.save
          render json: @payment.to_json(include: [:home, :user])
        else
          render json: @payment.errors, status: :unprocessable_entity
        end
    end

    # PATCH/PUT /payments/1 or /payments/1.json
    def update
        @home = Home.find(params[:home_id])
        @payment = @home.payments.find(params[:id])
      if @payment.update
        render json: {notice: "Payment was successfully updated." },
         status: :ok
      else
        render json: { error: 'Unable to update payment' },
         status: :unprocessable_entity
      end
    end
  
    # DELETE /payments/1 or /payments/1.json

    def destroy
        @home = Home.find(params[:home_id])
        @payment = @home.payments.find(params[:id])
        @payment.destroy
        render json: {notice: 'Payment succefully removed'}
    end
  
  private
    # Use callbacks to share common setup or constraints between actions
    def set_payment
      @payment = Payment.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def payment_params
      params.require(:payment).permit(:first_name, :last_name, :phone_number, :address, :money_paid, :date, :nin_number, :user_id, :home_id)
    end
end
