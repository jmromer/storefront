# frozen_string_literal: true

Cart.destroy_all
CartItem.destroy_all
Product.destroy_all

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

(1..10).each do |n|
  product_attrs.each do |product_attr|
    filename = product_attr[:filename]
    name = product_attr[:name] + " #{n.to_s.rjust(2)}"
    attrs = product_attr.merge(name: name).except(:filename)
    product = Product.create(attrs)

    product.image.attach(
      io: File.open(Rails.root.join("app/assets/images/#{filename}")),
      filename: filename,
      content_type: "application/png",
    )
  end
end
