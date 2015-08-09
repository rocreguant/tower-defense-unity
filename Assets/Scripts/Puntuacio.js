public var punts : float;
//public var canon : GameObject;

function Start() {
	Screen.showCursor = true;
	//var canon = GameObject.FindWithTag("player");
	//Destroy(canon);
}

function OnGUI() {
	GUI.Box(Rect(350, 200, 400, 200), "La teva puntuacio es: "+Status.punts);
	if (GUI.Button(Rect(400, 325, 100, 50), "RETRY")) Application.LoadLevel(1);
	if (GUI.Button(Rect(600, 325, 100, 50), "QUIT")) Application.LoadLevel(0);
}

