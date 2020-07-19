# frozen_string_literal: true

module Api
  class CartsController < ApiController
    def show
      @cart = Cart.find_by(id: params[:id])
      if @cart.present?
        render :show, format: :json
      else
        render json: { errors: ["Not found"] }, status: :not_found
      end
    end

    def create
      @cart = Cart.new

      if @cart.save
        render :show, format: :json, status: :created
      else
        render json: { errors: @cart.errors.full_messages },
               status: :unprocessable_entity
      end
    end
  end
end
