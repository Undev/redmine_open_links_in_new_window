document.observe('dom:loaded', function()
{
	// redmine uses prototype so use it.

	var links = $$('div.wiki a, div.attachments a, div.journal ul.details a a.external');
	for (var i = 0; i < links.length; i++)
	{
		links[i].target = '_blank';
	}
});

