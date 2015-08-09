function Start() {
	Screen.showCursor = true;;
}

function OnGUI() {
	GUI.Box(Rect(350, 200, 300, 150), "Bomb Castle Deffense");
	
	if (GUI.Button(Rect(450, 275, 100, 50), "PLAY")) {
		Application.LoadLevel(1);
	}
}