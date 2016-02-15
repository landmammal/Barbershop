json.array!(@barber_shops) do |barber_shop|
  json.extract! barber_shop, :id, :name, :address, :number, :picture, :description, :status, :rating
  json.url barber_shop_url(barber_shop, format: :json)
end
