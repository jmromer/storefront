# frozen_string_literal: true

class HomeController < ApplicationController
  def index
    @products = Product.all.decorate.as_json(
      only: %i[id name rating],
      methods: %i[price image_url star_url],
    )
  end
end
