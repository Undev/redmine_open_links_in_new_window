if (document.observe)
{

	// redmine uses prototype so use it.

	document.observe('dom:loaded', function()
	{
		var links = $$('div.wiki a, div.attachments a, div.journal ul.details a, a.external');
		for (var i = 0; i < links.length; i++)
		{
			links[i].target = '_blank';
		}
	});
}
else if (window.jQuery)
{

	// redmine uses jQuery so use it.

	$(document).ready(function()
	{
		$$('div.wiki a, div.attachments a, div.journal ul.details a, a.external').each(function()
		{
			this.target = '_blank';
		});
	});
}
else
{
	console.error('(redmine_open_links_in_new_window) JS-framework is unknown!');
}