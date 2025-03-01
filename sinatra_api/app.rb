require 'rubygems'
require 'pry-byebug'
require 'sinatra'
require 'sinatra/base'
require 'sinatra/reloader'

require_relative 'models/gists'
require_relative 'mock_gist_response'

class App < Sinatra::Base
  configure :development do
    register Sinatra::Reloader
  end

  before do
    response.headers['Access-Control-Allow-Origin'] = 'http://localhost:5678' if settings.development?
    response.headers['Access-Control-Allow-Origin'] = 'https://www.lifeonthereg.com' if settings.production?
    response.headers['X-Robots-Tag'] = 'noindex'
  end

  get '/' do
    'haha'
  end

  get '/foo' do
    gists = Gists.new
    response = gists.build_response true
    response
  end

  get '/starred-gists' do
    t = Time.new
    today_in_strf = t.strftime("%m-%d-%Y")
    cache_file = File.join "cache", today_in_strf
    # TODO: need some way to delete previous cache files
    if !File.exist? cache_file || ((File.mtime cache_file) < (Time.now - 3600*24))
      gists = Gists.new
      response = gists.build_response true

      File.open cache_file, "w" do |f|
        f << response
      end
    end
    
    data = File.read cache_file
    data
  end

  # TODO: Cache busting endpoint
  get '/bust-a-cache' do
    t = Time.new
    today_in_strf = t.strftime("%m-%d-%Y")
    cache_file = File.join "cache", today_in_strf

    gists = Gists.new
    response = gists.build_response true

    File.open cache_file, "w" do |f|
      f << response
    end

    'busted!'
  end

  get '/test-gists' do
    gists = Gists.new
    gists.fake_get_gists
  end
end