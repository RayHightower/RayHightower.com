require 'rubygems'
require 'bundler'
Bundler.setup

require 'rack/jekyll'

run Rack::Jekyll.new
