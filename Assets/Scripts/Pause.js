public var pause : boolean =false;

//var fixed_orig: float;
//var scale_orig:float;

function Start() {
	pause = false;
	Time.timeScale = 1.0;
}

function Update () {
	if (pause) {
		Time.timeScale = 0.0;
		Time.fixedDeltaTime = 0.02*Time.timeScale;
	}
	if (Input.GetKeyDown(KeyCode.P)) {
		if (pause) {
			Time.timeScale = 1.0;
		}
		pause = !pause;
		if (pause) print("PAUSE");
	}
}