private var compt : float = 0.0;
private var velIni : float = 0.01;

function Update () {
	compt += Time.deltaTime;
	if (compt > 0.01){
		var canon = GameObject.FindWithTag("player");
		transform.position.x += (velIni + canon.GetComponent("Status").aux);
		//print (transform.position.x );
		compt = 0.0;
	}
}