var CustomForm = {
	init : function() {
		var f = document.forms[0];
		var val = tinyMCEPopup.getWindowArg('val');
		$.each(val, function (key, value) {
			$("#formID").append($("<option></option>").attr("value", value.value).text(value.title));
       });
	},	

	insert : function() {
		var f = document.forms[0];
		tinyMCEPopup.editor.execCommand('mceInsertContent', false,  '<div>[%customform data-formID="' + f.formID.value + '" data-recipient="' + f.email.value + '" /%]</div>');
		tinyMCEPopup.close();
	}
};

tinyMCEPopup.onInit.add(CustomForm.init, CustomForm);
