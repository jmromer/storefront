# frozen_string_literal: true

class CreateCarts < ActiveRecord::Migration[6.0]
  def change
    create_table :carts, id: :uuid do |t|
      t.string :visitor_id

      t.index :visitor_id

      t.timestamps
    end
  end
end
