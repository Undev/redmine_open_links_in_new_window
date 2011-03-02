document.observe('dom:loaded', function()
{
	// redmine uses prototype so use it.

	var links = $$('div.issue.details div.wiki a, div.issue.details div.attachments a');
	for (var i = 0; i < links.length; i++)
	{
		var link = links[i];
		link.target = '_blank';
	}
});
