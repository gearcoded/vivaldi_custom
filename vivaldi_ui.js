function reorder_extensions(){
	var parent = document.querySelector(".UrlBar")
	var extensions = document.querySelector(".toolbar-extensions");
	if (!parent || !extensions) {
		setTimeout(reorder_extensions, 1000);
		return;
	} 
	parent.insertBefore(extensions, extensions.previousSibling);
	
}

setTimeout(reorder_extensions, 1000);




add_pinned_tabs()

function add_pinned_tabs(){
	var pinned_tabs_root = document.createElement("div");
	pinned_tabs_root.style.zIndex = 999999;
	pinned_tabs_root.className = "pinned_tabs_root";

	setInterval(function(){
		var resize = document.querySelector(".resize");

		if (resize && resize.firstChild && resize.firstChild.className != "pinned_tabs_root"){
			resize.insertBefore(pinned_tabs_root, resize.firstChild)
		}

		var normal_tabs = document.querySelector(".tab-strip");
		var pinned_tabs = normal_tabs.querySelectorAll(".tab.pinned");
		for (var i = 0; i < pinned_tabs.length; i++){
			var pinned_tab = pinned_tabs[i].childNodes[0]
			if (pinned_tab) {
				pinned_tab.style.visibility = 'hidden';
				pinned_tabs_root.appendChild(pinned_tabs[i].parentNode.parentNode);
			}
		}
	}, 3000)
}




// always scroll to active tab
var active_tab_position = 0;
setInterval(function(){
	var resize = document.querySelector(".resize")
	var active_tab = resize.querySelector(".active");
	var resize_width = resize.getBoundingClientRect().width;
	var new_active_tab_position = parseInt(active_tab.getBoundingClientRect().x);
	
	if (active_tab_position != new_active_tab_position){
		active_tab_position = new_active_tab_position
		document.querySelector(".tab-strip").scrollTo(active_tab_position,0)
	}
},400)




/*custom new tab button, the approach didn't work
//setTimeout(add_custom_new_tab, 3000);
function add_custom_new_tab(){
	var new_tab = document.querySelector(".newtab");
	var trash = document.querySelector(".sync-and-trash-container");
	
	var custom_new_tab = document.createElement("div");
	custom_new_tab.innerHTML = `<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 5C6.34314 5 5 6.34314 5 8V18C5 19.6569 6.34314 21 8 21H18C19.6569 21 21 19.6569 21 18V8C21 6.34314 19.6569 5 18 5H8ZM8 14H12V18H14V14H18V12H14V8H12V12H8V14Z"></path>
</svg>`;

	custom_new_tab.style.webkitAppRegion = "no-drag";
	custom_new_tab.onclick = function(){
		window.open("", '_blank');
		window.focus();
		console.log(32167)
	}
	
	trash.insertBefore(custom_new_tab, trash.firstChild);

}
*/
