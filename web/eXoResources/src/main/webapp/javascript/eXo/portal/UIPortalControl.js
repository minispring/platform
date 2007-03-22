function UIPortalControl() {
  
};

UIPortalControl.prototype.init = function(objectId) {  
  var uiPageDesktop = document.getElementById("UIPageDesktop");
  if(!uiPageDesktop) {
  	var uiWindow = document.getElementById(objectId);
  	var maxIcon = eXo.core.DOMUtil.findFirstDescendantByClass(uiWindow, "div", "MaximizedIcon");
		maxIcon.onclick = eXo.portal.UIPortalControl.maximizeWindow;
  	var miniIcon = eXo.core.DOMUtil.findFirstDescendantByClass(uiWindow, "div", "MinimizedIcon");
		miniIcon.onclick = eXo.portal.UIPortalControl.minimizeWindow;
  }
};

UIPortalControl.prototype.maximizeWindow = function() {
  var uiWindows = eXo.core.DOMUtil.findAncestorByClass(this, "UIWindow");
  var params = [{name: "portletId", value: uiWindows.id}] ;
	ajaxGet(eXo.env.server.createPortalURL("UIPortal", "Maximize", params,  true)) ;
};

UIPortalControl.prototype.minimizeWindow = function() {
	ajaxGet(eXo.env.server.createPortalURL("UIPortal", "Minimize",   true)) ;
};

/* Create Funtion by Duy Tu */
UIPortalControl.prototype.showHiddenContent = function(selectedElement) {
	var DOMUtil = eXo.core.DOMUtil ;
	var ancestorClass = DOMUtil.findAncestorByClass(selectedElement, "UILogged");
	var parentByclass = DOMUtil.findFirstDescendantByClass(ancestorClass, "div", "ImageContent");
	var userContent = DOMUtil.findFirstDescendantByClass(ancestorClass, "div", "UserContent");
	var notificationContent;
	
	if(parentByclass != null){
		parentByclass.className = "ImageContents";
		userContent.style.display = "none";
		notificationContent = DOMUtil.findNextElementByTagName(userContent, "div");
		notificationContent.style.display = "block";
	} else {
		parentByclass = DOMUtil.findFirstDescendantByClass(ancestorClass, "div", "ImageContents");
		parentByclass.className = "ImageContent";
		notificationContent = DOMUtil.findFirstDescendantByClass(ancestorClass, "div", "NotificationContent");
		notificationContent.style.display = "none";
		userContent.style.display = "block";
	}
	
}

eXo.portal.UIPortalControl = new UIPortalControl();
