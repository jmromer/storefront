# frozen_string_literal: true

def response_json
  @response_json ||=
    JSON.parse(response.body, symbolize_names: true)
end
