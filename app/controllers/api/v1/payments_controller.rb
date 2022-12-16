class Api::V1::PaymentsController < ApplicationController
    before_action :set_payment, only: %i[ show edit update destroy ]
    before_action :authenticate_user!
    # GET /payments or /payments.json
    def index
     if user_signed_in?
        @payments = current_user.payments.order(created_at: :desc)
            render json: @payments
         else
            render json: {}, status: 401
        end
    end

    # GET /payments/1 or /payments/1.json
    def show
        if @payment
          render json: @payment
        else
          render json:@payment.errors  
      end
    end
   
    # GET /payments/new
    def new
      @payment = current_user.payments.build
    end
  
    # GET /payments/1/edit
    def edit
    end
  
    # POST /payments or /payments.json
    def create 
        home = Home.find(params[:home_id])
        if user_signed_in? 
            if payment = current_user.payments.create(payment_params, home)
             render json: payment, status: :created 
             else 
                render json: payment.errors, status: 400
            end
        else 
            render json: {}, status: 401
        end
    end
    # PATCH/PUT /payments/1 or /payments/1.json
    def update
      if @payment.update(payment_params)
        render json: {notice: "Payment was successfully updated." }
      else
        render json: { error: 'Unable to update payment' }
      end
    end
  
    # DELETE /payments/1 or /payments/1.json
    def destroy
      @payment.destroy
        render json: {notice: 'Payment succefully removed'}
    end
  
  private
    # Use callbacks to share common setup or constraints between actions.
    def set_payment
      @payment = Payment.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def payment_params
      params.require(:payment).permit(:first_name, :last_name, :phone_number, :address, :money_paid, :date, :nin_number, :user_id, :home_id)
    end
end
