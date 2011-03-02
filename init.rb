require 'redmine'

require_dependency 'redmine_attachments_in_new_window/hooks'

Redmine::Plugin.register :redmine_attachments_in_new_window do
  name 'Redmine Open Attachments In New Window plugin'
  author 'akzhan.abdulin@gmail.com'
  description 'This is the Open Attachments In New Window plugin for Redmine'
  version '0.0.1'
  url 'http://github.com/Undev/redmine_attachments_in_new_window'
  author_url 'http://github.com/Undev'
end

