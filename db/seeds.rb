# frozen_string_literal: true

products = {
  blue: {
    name: "Blue Flower",
    price_cents: 80_00,
    rating: 4,
  },
  orange: {
    name: "Orange Flower",
    price_cents: 17_60,
    rating: 3,
  },
  pink: {
    name: "Pink Flower",
    price_cents: 40_00,
    rating: 3,
  },
}.map { |prod, attrs| [prod, Product.create(attrs)] }.to_h

# attach images
products[:blue].image.attach(
  io: File.open(Rails.root.join("app/assets/images/blue-flower.png")),
  filename: "blue-flower.png",
  content_type: "application/png",
)

products[:orange].image.attach(
  io: File.open(Rails.root.join("app/assets/images/orange-flower.png")),
  filename: "orange-flower.png",
  content_type: "application/png",
)

products[:pink].image.attach(
  io: File.open(Rails.root.join("app/assets/images/pink-flower.png")),
  filename: "pink-flower.png",
  content_type: "application/png",
)
