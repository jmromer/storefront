# frozen_string_literal: true

require "rails_helper"

RSpec.describe "HomeController", type: :request do
  describe "GET #index" do
    it "renders the index template, includes product listing" do
      get root_url
      expect(response).to have_http_status(:ok)
      expect(response).to render_template(:index)
    end
  end
end
