(function()
{
	/**
	 * Helper function on DOM-Nodes to check for a class
	 * name easily
	 *
	 * @param  {String}  className - the className to look for
	 *
	 * @return {Boolean} returns true if the classname is set on the
	 *                   DOM Node
	 */
	HTMLElement.prototype.hasClass = function(className){
		return this.className.indexOf(className) !== -1;
	}

	/**
	 * Need to be binded to anchor on call
	 */
	var handleAnchor = function()
	{
		var pass = true;

		// Requirements
		if (this.hasClass('wiki-anchor')) pass = false;
		if (this.hasClass('wiki-page')) pass = false;

		//Some elements have to be excluded based on their parent nodes
		var curNode = this;
		while(!curNode.hasClass('wiki') && typeof curNode !== 'undefined')
		{
			if(curNode.hasClass('toc') || curNode.hasClass('contextual'))
			{
				pass = false;
				break;
			}

			curNode = curNode.parentNode;
		}

		if (pass)
		{
			this.target = '_blank';
		}
	};

	if (document.observe)
	{

		// redmine uses prototype so use it.

		document.observe('dom:loaded', function()
		{
			var links = $$('div.wiki a, div.attachments a, div.journal ul.details a, a.external');
			for (var i = 0; i < links.length; i++)
			{
				handleAnchor.call(links[i]);
			}
		});
	}
	else if (window.jQuery)
	{

		// redmine uses jQuery so use it.

		jQuery(document).ready(function()
		{
			jQuery('div.wiki a, div.attachments a, div.journal ul.details a, a.external').each(handleAnchor);
		});
	}
	else
	{
		console.error('(redmine_open_links_in_new_window) JS-framework is unknown!');
	}
})();