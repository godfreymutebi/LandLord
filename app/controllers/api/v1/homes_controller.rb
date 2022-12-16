class Api::V1::HomesController < ApplicationController
    skip_before_action :verify_authenticity_token
    before_action :set_home, only: %i[ show edit update destroy ]
  # GET /homes or /homes.json
  def index
    @homes = Home.all.order(created_at: :desc)
    render json: @homes
  end

  # GET /homes/1 or /homes/1.json
  def show
    if @home
      render json: @home
      else
        render json:@home.errors
  end

  # GET /homes/new
  def new
    @home = Home.new
  end

  # GET /homes/1/edit
  def edit
  end

  # POST /homes or /homes.json
  def create
    @home = Home.new(home_params)

      if @home.save
        render json: @home
      else
        render json: @home.errors
      end
    end
  end

  # PATCH/PUT /homes/1 or /homes/1.json
  def update
  end

  # DELETE /homes/1 or /homes/1.json
  def destroy
    @home.destroy

    render json: { notice: 'Home successfully removed'}
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_home
      @home = Home.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def home_params
      params.require(:home).permit(:title, :description, :image_url, :price, :availability)
    end
end
