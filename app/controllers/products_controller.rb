# frozen_string_literal: true

class ProductsController < ApplicationController
  def index
    @products = Product.all
  end

  def new
    @product = Product.new
  end

  def create
    @product = Product.new(product_params)

    if @product.save
      flash[:notice] = "Created: #{@product.name}"
    else
      flash[:alert] = @product.errors.full_messages.to_sentence
    end

    render :new
  end

  private

  def product_params
    product = params.require(:product).permit(:name, :rating, :price, :image)
    product.merge(price: to_cents(product[:price]))
  end

  CURRENCY_VALUE = /[[:digit:]]+.?[[:digit:]]*/.freeze

  def to_cents(dollar_amount)
    value = dollar_amount[CURRENCY_VALUE].to_s
    return value.to_i unless value.match?(/\./)

    (value.to_f * 100).to_i
  end
end
