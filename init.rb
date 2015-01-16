require 'redmine'

require_dependency 'redmine_open_links_in_new_window/view_layouts_base_html_head_hook'

Redmine::Plugin.register :redmine_open_links_in_new_window do
  name 'Redmine Plugin for Opening Links in New Tabs'
  author 'Undev'
  description 'This plugin opens links in a new browser tab instead of the current tab.'
  version '0.0.3'
  url 'http://github.com/Undev/redmine_open_links_in_new_window'
  author_url 'http://github.com/Undev'
end

