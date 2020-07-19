# frozen_string_literal: true

class ProductDecorator < ApplicationDecorator
  delegate_all

  def price
    return if price_cents.blank?

    h.number_to_currency price_cents.div(100.0).round(2)
  end

  def image_url
    return unless image.attached?

    h.url_for(image)
  end
end
