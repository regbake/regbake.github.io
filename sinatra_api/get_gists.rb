# see https://jhawthorn.github.io/curl-to-ruby/


def get_gists
  # https://notepad.onghu.com/2020/ruby-tricks-001-environment_variables/
  # https://urgetopunt.com/2009/09/12/yaml-config-with-erb.html
  config = YAML.load(ERB.new(File.read('./config.yml')).result)

  uri = URI.parse("https://api.github.com/gists")
  request = Net::HTTP::Get.new(uri)
  request["Accept"] = "application/vnd.github+json"
  request["Authorization"] = "Bearer #{config['GIT_AUTH_KEY']}"
  request["X-Github-Api-Version"] = "2022-11-28"

  req_options = {
    use_ssl: uri.scheme == "https",
  }

  response = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
    http.request(request)
  end

  return "Error with response" unless response
  return response.code unless response.code == "200"

  response.body
end

def fake_get_gists
  return 'error' unless get_mock_response

  get_mock_response
end


