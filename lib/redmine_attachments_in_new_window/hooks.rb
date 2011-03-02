module RedmineAttachmentsInNewWindow
  class Hooks < Redmine::Hook::ViewListener
    render_on :view_issues_form_details_bottom, :partial => 'issues/attachments_in_new_window'
  end
end
