# frozen_string_literal: true

require "rails_helper"

RSpec.describe "HomeController", type: :request do
  describe "GET #index" do
    it "returns http success" do
      get root_url
      expect(response).to have_http_status(:ok)
    end
  end
end
