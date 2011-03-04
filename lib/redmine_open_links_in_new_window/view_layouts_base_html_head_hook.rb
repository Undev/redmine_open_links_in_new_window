module RedmineOpenLinksInNewWindow
  class ViewLayoutsBaseHtmlHeadHook < Redmine::Hook::ViewListener
    def view_layouts_base_html_head(context = {})
      javascript_include_tag('redmine_open_links_in_new_window.js', :plugin => :redmine_open_links_in_new_window)
    end
  end
end
