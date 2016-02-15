class CreateBarberShops < ActiveRecord::Migration
  def change
    create_table :barber_shops do |t|
      t.string :name
      t.string :address
      t.integer :number, :limit => 8 
      t.string :picture
      t.string :description
      t.boolean :status
      t.integer :rating

      t.timestamps null: false
    end
  end
end
