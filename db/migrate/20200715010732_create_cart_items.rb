# frozen_string_literal: true

class CreateCartItems < ActiveRecord::Migration[6.0]
  def change
    create_table :cart_items, id: :uuid do |t|
      t.belongs_to :cart, null: false, type: :uuid, foreign_key: true, index: true
      t.belongs_to :product, null: false, type: :uuid, foreign_key: true, index: true
      t.integer :quantity, null: false

      t.index %i[cart_id product_id], unique: true

      t.timestamps
    end
  end
end
