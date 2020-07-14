# frozen_string_literal: true

source "https://rubygems.org"

git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "2.7.1"

gem "bootsnap", ">= 1.4.2", require: false
gem "jbuilder", "~> 2.7"
gem "pg", ">= 0.18", "< 2.0"
gem "puma", "~> 4.1"
gem "rails", "~> 6.0.3", ">= 6.0.3.2"
gem "sass-rails", ">= 6"

group :development do
  gem "listen", "~> 3.2"
  gem "rufo"
  gem "spring"
  gem "spring-commands-rspec"
  gem "spring-watcher-listen", "~> 2.0.0"
  gem "web-console", ">= 3.3.0"
end

group :development, :test do
  gem "byebug"
  gem "factory_bot_rails"
  gem "jazz_fingers"
  gem "pry-byebug"
  gem "pry-rails"
  gem "rspec-rails"
  gem "vcr"
  gem "webmock"
end

group :test do
  gem "capybara"
  gem "rails-controller-testing"
  gem "shoulda-matchers"
end
