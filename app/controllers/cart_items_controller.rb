# frozen_string_literal: true

class CartItemsController < ApplicationController
  before_action :set_cart_item, only: %i[update destroy]

  def create
    @cart_item = CartItem.new(cart_item_params)

    if @cart_item.save
      render json: @cart_item, status: :created
    else
      render json: { errors: @cart_item.errors.full_messages },
             status: :unprocessable_entity
    end
  end

  def destroy
    @cart_item.destroy
    head :no_content
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
