require 'sinatra'
require 'net/http'
require 'uri'
require 'json'
require 'yaml'
require_relative 'get_gists'
require_relative 'mock_gist_response'

get '/' do
  'hello world'
end

get '/gists' do
  get_gists
end

get '/test-gists' do
  fake_get_gists
end
