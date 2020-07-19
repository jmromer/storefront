# frozen_string_literal: true

class CreateCarts < ActiveRecord::Migration[6.0]
  def change
    create_table :carts, id: :uuid do |t|
      t.integer :cart_items_count, null: false, default: 0
      t.timestamps
    end
  end
end
