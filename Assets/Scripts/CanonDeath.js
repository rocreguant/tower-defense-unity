private var carrega : boolean = false;
var gameOverScale = 1.5;
var gameOverShadowScale = 1.5;

function Die() {
	print("GAMEOVER");
	//FINS QUE NO FES CLICK1 NO EXECUTIS AGAIN
	carrega = true;
}

function Update() {
	if (carrega && Input.GetButtonDown("Fire1")) {
		Application.LoadLevel(2);
	}
}
