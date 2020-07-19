# frozen_string_literal: true

class ProductsController < ApplicationController
  def index
    @products = Product.all
  end

  def new; end

  def create
    @product = Product.new(product_params)

    if @product.save
      flash.now[:notice] = "Created: #{@product.name}"
    else
      flash.now[:alert] = @product.errors.full_messages.to_sentence
    end

    render :new
  end

  private

  def product_params
    attrs = params.require(:product).permit(:name, :rating, :price_cents, :image)
    attrs.merge(price_cents: attrs[:price_cents].to_f * 100)
  end
end
