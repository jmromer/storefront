# frozen_string_literal: true

require "rspec/expectations"

RSpec::Matchers.define :have_keys do |expected|
  match do |actual|
    expected.all? { |key| actual.key?(key) }
  end

  match_when_negated do |actual|
    expected.none? { |key| actual.key?(key) }
  end

  failure_message do |actual|
    "expected #{actual} to have keys #{expected - actual.keys}"
  end

  failure_message_when_negated do |actual|
    "expected #{actual} to not have keys #{expected & actual.keys}"
  end
end
