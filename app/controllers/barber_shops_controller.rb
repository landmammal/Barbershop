class BarberShopsController < ApplicationController
  before_action :set_barber_shop, only: [:show, :update, :destroy]

  # GET /barber_shops
  # GET /barber_shops.json
  def index
    @barber_shops = BarberShop.all

    render json: @barber_shops
  end

  # GET /barber_shops/1
  # GET /barber_shops/1.json
  def show
    render json: @barber_shop
  end

  # POST /barber_shops
  # POST /barber_shops.json
  def create
    @barber_shop = BarberShop.new(barber_shop_params)

    if @barber_shop.save
      render json: @barber_shop, status: :created, location: @barber_shop
    else
      render json: @barber_shop.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /barber_shops/1
  # PATCH/PUT /barber_shops/1.json
  def update
    @barber_shop = BarberShop.find(params[:id])

    if @barber_shop.update(barber_shop_params)
      head :no_content
    else
      render json: @barber_shop.errors, status: :unprocessable_entity
    end
  end

  # DELETE /barber_shops/1
  # DELETE /barber_shops/1.json
  def destroy
    @barber_shop.destroy

    head :no_content
  end


#curl -H "Content-Type:application/json; charset=utf-8" -d '{"todo":{"title":"something to do","order":1,"completed":false}}'
###ht@p://localhost:3000/todos
# BarberShop name:string address:string number:integer picture:string description:string status:boolean rating:integer


  private

    def set_barber_shop
      @barber_shop = BarberShop.find(params[:id])
    end

    def barber_shop_params
      params.require(:barber_shop).permit(:name, :address, :number, :picture, :description, :status, :rating)
    end
end
