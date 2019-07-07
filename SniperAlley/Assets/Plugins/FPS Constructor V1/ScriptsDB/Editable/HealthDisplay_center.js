/*
 FPS Constructor - Weapons
 Copyright© Dastardly Banana Productions 2011-2012
 This script, and all others contained within the Dastardly Banana Weapons Package are licensed under the terms of the
 Unity Asset Store End User License Agreement at http://download.unity3d.com/assetstore/customer-eula.pdf 
 
 For additional information contact us info@dastardlybanana.com.
*/

// Example script display effects when a pickupable weapon is highlighted. 
// It implements the HighlightOn() and HighlightOff() functions which are called when the systems sends those 


private var selected : boolean = false;
var objectName : String;
var description : String;

function HighlightOn () {
	selected = true;
}

function HighlightOff () {
	selected = false;
}

function OnGUI () {
	GUI.skin.box.wordWrap = true;
	if(selected){
		var s : String = "(Tab) to Use";

		var pos : Vector2 = Camera.main.WorldToScreenPoint(transform.position);
		GUI.Box(Rect(pos.x-77.5, Screen.height-pos.y-(Screen.height/4)-52.5,155, 105), objectName + "\n \n" + description + "\n" + s);
	}
}