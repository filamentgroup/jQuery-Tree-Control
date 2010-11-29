$(function(){
	$('#files').tree({
		expanded: 'li:first'
	});
	
	//Scripting to add UI icons and behavior
	$('.tree')
		.addClass('ui-widget ui-widget-content')
	    .bind('expand',function(event){
	        var target = $(event.target) || $(this).find('a[tabindex=0]');
			target.find('span:eq(0)').addClass('ui-icon-folder-open');
			return false;
	    })
	    .bind('collapse',function(event){
	        var target = $(event.target) || $(this).find('a[tabindex=0]');
			target.find('span:eq(0)').removeClass('ui-icon-folder-open');
			return false;
	    })
	    .focus(function(event){
			//deactivate previously active tree node, if one exists
			$(this).find('.ui-state-highlight').removeClass('ui-state-highlight');
			//assign 0 tabindex to focused item
			$(event.target).addClass('ui-state-highlight');
		})
	    .find('a')
		    .addClass('ui-corner-all')
		    .hover(function(){ 
		    	$(this).addClass('ui-state-hover'); 
		    },function(){ 
		    	$(this).removeClass('ui-state-hover'); 
		    })
		    .not('.tree-parent')
		        .prepend('<span class="ui-icon ui-icon-document"></span>')
		    .end()
		    .filter('.tree-parent')
		        .prepend('<span class="ui-icon ui-icon-folder-collapsed"></span>')
		        .not('.tree-parent-collapsed')
		        .find('span:eq(0)').addClass('ui-icon-folder-open');
		        
	
	//add theme switcher tool for demo purposes
	$('<div id="switcher" style="float: right;"></div>').prependTo('body').themeswitcher();        
});