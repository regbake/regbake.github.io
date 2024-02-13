require 'sinatra'
require 'sinatra/reloader' if development?
require 'net/http'
require 'uri'
require 'json'
require 'yaml'
require_relative 'get_gists'
require_relative 'mock_gist_response'

before do
  response.headers['Access-Control-Allow-Origin'] = 'http://localhost:5678' if development?
  response.headers['Access-Control-Allow-Origin'] = 'http://www.lifeonthereg.com' if production?
end

get '/' do
  'hello world'
end

get '/gists' do
  get_gists
end

get '/test-gists' do
  fake_get_gists
end
