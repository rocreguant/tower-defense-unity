static public var punts : float = 0;
static public var bombes : int = 2;
public var aux : float = 0.0;

function Start() {

}

function Update() {
	if (aux < 0.01) aux = punts/10000;
	else if (aux < 0.05) aux = punts / 5000;
	else if (aux < 0.1) aux = punts / 1000;
}

function OnGUI() {
	GUI.Box(Rect(800, 5, 140, 25), "Bombes Nuclears: "+bombes);
}
