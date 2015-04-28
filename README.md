# Redmine Plugin for Opening Links in New Tabs

This plugin opens any link you click in a new browser tab instead of your current tab. This plugin works in Wiki, descriptions and notes for projects, issues, documents, etc.

## Compatibility

This plugin is compatible with Redmine 0.9.6, 1.0.5, 2.x.

## Installation

*These installation instructions are based on Redmine 2.x. For instructions for previous Redmine versions, see [Redmine wiki](http://www.redmine.org/projects/redmine/wiki/Plugins).*

1. To install the plugin
    * Download the .ZIP archive, extract files and copy the plugin directory into *#{REDMINE_ROOT}/plugins*.
    
    Or

    * Change you current directory to your Redmine root directory:  

            cd {REDMINE_ROOT}
 
      Copy the plugin from GitHub using the following command:

            git clone https://github.com/Undev/redmine_open_links_in_new_window.git plugins/redmine_open_links_in_new_window

2. Update the Gemfile.lock file by running the following commands:  

         rm Gemfile.lock  
         bundle install
    
3. Restart Redmine.

Now you should be able to see the plugin in **Administration > Plugins**.

## Usage

This plugin does not require any additional actions or configuration.

## Maintainers

Akzhan Abdulin, [github.com/akzhan](https://github.com/akzhan)

Danil Tashkinov, [github.com/nodecarter](https://github.com/nodecarter)

## License

Copyright (c) 2015 Undev

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
