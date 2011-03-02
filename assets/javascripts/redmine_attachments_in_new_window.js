document.observe('dom:loaded', function()
{
	// redmine uses prototype so use it.

	var links = $$('a.icon-attachment');
	for (var i = 0; i < links.length; i++)
	{
		var link = links[i];
		link.target = '_blank';
	}
});
