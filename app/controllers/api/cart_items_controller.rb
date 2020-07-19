# frozen_string_literal: true

module Api
  class CartItemsController < ApiController
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
      @cart_item = CartItem.find_by(id: params[:id])

      if @cart_item&.destroy
        render partial: "api/carts/cart",
               format: :json,
               status: :ok,
               locals: { cart: @cart_item&.cart }
      else
        errors =
          if @cart_item.blank?
            ["Cart item not found."]
          else
            @cart_item.errors.full_messages
          end

        render json: { errors: errors }, status: :unprocessable_entity
      end
    end

    private

    def cart_item_params
      params
        .require(:cart_item)
        .permit(:cart_id, :quantity, :product_id)
    end
  end
end
