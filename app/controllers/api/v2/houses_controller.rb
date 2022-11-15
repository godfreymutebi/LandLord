class Api::V2::HousesController < ApplicationController
    before_action :set_house, only: %i[ show edit update destroy ]

    # GET /houses or /houses.json
    def index
      @houses = House.all.order(brand: :asc)
      render json: @houses
    end
  
    # GET /houses/1 or /houses/1.json
    def show
      if @house
          render json: @house
        else
          render json: @house.errors
        end
    end
  
    # GET /houses/new
    def new
      @house = House.new
    end
  
    # GET /houses/1/edit
    def edit
    end
  
    # POST /houses or /houses.json
    def create
      @house = House.new(house_params)
  
      respond_to do |format|
        if @house.save
          render json: @house
        else
          render json: @house.errors
        end
      end
    end
  
    # PATCH/PUT /houses/1 or /houses/1.json
    def update
      respond_to do |format|
        if @house.update(house_params)
          format.html { redirect_to house_url(@house), notice: "House was successfully updated." }
          format.json { render :show, status: :ok, location: @house }
        else
          format.html { render :edit, status: :unprocessable_entity }
          format.json { render json: @house.errors, status: :unprocessable_entity }
        end
      end
    end
  
    # DELETE /houses/1 or /houses/1.json
    def destroy
      @house.destroy
      render json: { notice: 'House was successfully removed.' }
    end
  
    private
      # Use callbacks to share common setup or constraints between actions.
      def set_house
        @house = House.find(params[:id])
      end
  
      # Only allow a list of trusted parameters through.
      def house_params
        params.require(:house).permit(:title, :description, :image_url, :price, :location, :availability)
      end
  
end
