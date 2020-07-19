Storefront
==========

Installation
------------

This app uses ASDF for version management. To install dependencies using ASDF,
issue `asdf install` from the project root. Install library dependencies with
`bin/setup`. The database can be seeded with `bin/rails db:seed`.

Dependencies
------------

- Ruby
- Rails
- RSpec
- PostgreSQL
- Webpacker
- React.js
- Material UI

Versions in `.tool-versions`.

Features
--------

- Add new products to the inventory via a bare-bones UI: `/products/new`
- Add/remove products to cart from the product index
- Indicate which products are currently in cart
