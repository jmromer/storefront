# frozen_string_literal: true

Rails.application.config.generators do |g|
  g.factory_bot nil
  g.helper nil
  g.javascripts nil
  g.stylesheets nil
  g.test_framework :rspec, view_specs: false, routing_specs: false
  g.template_engine nil
  g.system_tests = nil
  g.orm :active_record, primary_key_type: :uuid
end
