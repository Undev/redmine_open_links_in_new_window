module RedmineOpenLinksInNewWindow
  class ViewLayoutsBaseHtmlHeadHook < Redmine::Hook::ViewListener
    def view_layouts_base_html_head(context = {})
      javascript_include_tag('open_links_in_new_window.js', :plugin => :open_links_in_new_window)
    end
  end
end
