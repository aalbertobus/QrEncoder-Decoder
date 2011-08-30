bplist00�_WebMainResource�	
_WebResourceFrameName^WebResourceURL_WebResourceData_WebResourceMIMEType_WebResourceTextEncodingNameP_+http://www.tag.cx/qr-codes/tag-cx-qrcode.jsOQ<html><head></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">function JSONscriptRequest(fullUrl) {
    this.fullUrl = fullUrl; 
    this.noCacheIE = '&amp;noCacheIE=' + (new Date()).getTime();
    this.headLoc = document.getElementsByTagName("head").item(0);
    this.scriptId = 'YJscriptId' + JSONscriptRequest.scriptCounter++;
}
JSONscriptRequest.scriptCounter = 1;
JSONscriptRequest.prototype.buildScriptTag = function () {
    this.scriptObj = document.createElement("script");    
    this.scriptObj.setAttribute("type", "text/javascript");
    this.scriptObj.setAttribute("src", this.fullUrl + this.noCacheIE);
    this.scriptObj.setAttribute("id", this.scriptId);
}
JSONscriptRequest.prototype.removeScriptTag = function () {
    this.headLoc.removeChild(this.scriptObj);  
}

JSONscriptRequest.prototype.addScriptTag = function () {
    this.headLoc.appendChild(this.scriptObj);
}
function generateQRCODE(iitag,iisize,url) {	
	if (url) {
		var thistext = url;
	} else {
		var thistext = location.href;
	}
	var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ";
	var string_length = 8;
	var randomstring = '';
	for (var i=0; i&lt;string_length; i++) {
		var rnum = Math.floor(Math.random() * chars.length);
		randomstring += chars.substring(rnum,rnum+1);
	}	
	document.write("&lt;div id='tagcx_"+randomstring+"'&gt;&lt;/div&gt;");
	request = 'http://www.tag.cx/qr-codes/ajax-qrcode.php?tag='+iitag+'&amp;isize='+iisize+'&amp;t='+randomstring+'&amp;url='+url+'&amp;str='+escape(thistext)+'&amp;callback=getBM';
	aObj = new JSONscriptRequest(request);
	aObj.buildScriptTag();
	aObj.addScriptTag();
}

function getBM(jData) {
	if (jData == null) {
		alert("There was a problem parsing search results.");
		return;
	}
	var myval = jData.ResultSet;
	var mydiv = jData.xxMyDiv;
	document.getElementById(mydiv).innerHTML =  myval;
}
</pre></body></html>_application/x-javascriptUUTF-8    ( ? N ` v � � �3                           9