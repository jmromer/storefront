# frozen_string_literal: true

def cart_schema
  @cart_schema ||=
    %i[id products cart_items url update_url]
end
