function UnSelectAll() {
			var items = document.getElementsByName('rd');
			for (var i = 0; i < items.length; i++) {
					if (items[i].type == 'checkbox')
							items[i].checked = false;
}
}
