set :deploy_config_path, 'cap/deploy.rb'
set :stage_config_path, 'cap/deploy'

require 'capistrano/setup'
require 'capistrano/deploy'

Dir.glob('cap/tasks/*.rake').each { |r| import r }
