# frozen_string_literal: true

product_attrs = [
  {
    name: "Blue Flower",
    price_cents: 80_00,
    rating: 4,
    filename: "blue-flower.png",
  },
  {
    name: "Orange Flower",
    price_cents: 17_60,
    rating: 3,
    filename: "orange-flower.png",
  },
  {
    name: "Pink Flower",
    price_cents: 40_00,
    rating: 3,
    filename: "pink-flower.png",
  },
]

3.times do
  product_attrs.each do |attrs|
    product = Product.create(attrs.except(:filename))
    filename = attrs[:filename]

    product.image.attach(
      io: File.open(Rails.root.join("app/assets/images/#{filename}")),
      filename: filename,
      content_type: "application/png",
    )
  end
end
