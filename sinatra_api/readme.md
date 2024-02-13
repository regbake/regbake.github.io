## Development
* ruby app.rb

## Prod
* RACK_ENV=production ruby app.rb
* path on droplet /srv/sinatra_api/regbake.github.io/sinatra_api

## Setup/gems
gem install sinatra
gem install puma

create personal access token via https://github.com/settings/tokens/new?scopes=repo

Store auth token as GIT_AUTH_KEY inside bash_profile


