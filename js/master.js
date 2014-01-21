kitten = {};

kitten.helpers = {
	setTheme: function(){
		//add class to body w/selected theme option value
		var selectedTheme = $('select option:selected').val();
		$('body').removeAttr('class');
		$('body').addClass(selectedTheme);
	},

	setThemeChange: function(){
		$('select').change(function(){
			kitten.helpers.setTheme();
		});
	},

	init: function(){
		kitten.helpers.setTheme();
		kitten.helpers.setThemeChange();
	}
};

$(document).ready(function(){
	kitten.helpers.init();
});
