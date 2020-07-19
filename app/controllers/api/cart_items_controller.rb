# frozen_string_literal: true

module Api
  class CartItemsController < ApiController
    before_action :set_cart_item, only: %i[destroy]

    def create
      @cart_item = CartItem.new(cart_item_params)

      if @cart_item.save
        render partial: "api/carts/cart",
               format: :json,
               status: :created,
               locals: { cart: @cart_item.cart }
      else
        render json: { errors: @cart_item.errors.full_messages },
               status: :unprocessable_entity
      end
    end

    def destroy
      @cart_item.destroy
      head :ok
    end

    private

    def set_cart_item
      @cart_item = CartItem.find(params[:id])
    end

    def cart_item_params
      params
        .require(:cart_item)
        .permit(:cart_id, :quantity, :product_id)
    end
  end
end
