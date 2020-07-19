# frozen_string_literal: true

class HomeController < ApplicationController
  def index
    @products_json = Product.all.to_json(only: %i[id name image price_cents rating])
  end
end
