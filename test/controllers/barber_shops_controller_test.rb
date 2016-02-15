require 'test_helper'

class BarberShopsControllerTest < ActionController::TestCase
  setup do
    @barber_shop = barber_shops(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:barber_shops)
  end

  test "should create barber_shop" do
    assert_difference('BarberShop.count') do
      post :create, barber_shop: { address: @barber_shop.address, description: @barber_shop.description, name: @barber_shop.name, number: @barber_shop.number, picture: @barber_shop.picture, rating: @barber_shop.rating, status: @barber_shop.status }
    end

    assert_response 201
  end

  test "should show barber_shop" do
    get :show, id: @barber_shop
    assert_response :success
  end

  test "should update barber_shop" do
    put :update, id: @barber_shop, barber_shop: { address: @barber_shop.address, description: @barber_shop.description, name: @barber_shop.name, number: @barber_shop.number, picture: @barber_shop.picture, rating: @barber_shop.rating, status: @barber_shop.status }
    assert_response 204
  end

  test "should destroy barber_shop" do
    assert_difference('BarberShop.count', -1) do
      delete :destroy, id: @barber_shop
    end

    assert_response 204
  end
end
