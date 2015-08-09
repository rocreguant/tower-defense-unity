private var comptX : float = 0.0;
private var comptY : float = 0.0;
public var up : boolean = true;
private var comptador : int = 0;
public var inc : Vector2;
private var velIni : float = 0.01;

function Start(){
	inc[0]=-11.66;
	inc[1] =	5.20;
}

function Update () {
	comptX += Time.deltaTime;
	if (comptX > 0.01){
		transform.position.x+= Time.deltaTime;
		comptX = 0.0;
		//transform.position.x += 0.001;
		var canon = GameObject.FindWithTag("player");
		transform.position.x += (velIni + canon.GetComponent("Status").aux/2);
		
		comptY += Time.deltaTime;
		if (comptY > 0.01) {
			if (/*inc[1]*/transform.position.y < 3) /*inc[1]*/transform.position.y  += 0.01;
			else if (/*inc[1]*/transform.position.y > 8) /*inc[1]*/ transform.position.y -= 0.01;
			else if (comptador > 20) {
				if(5 < Random.Range(0.0f, 10.0f)) /*inc[1]*/ transform.position.y += 0.01;
				else  /*inc[1]*/transform.position.y -=0.01;
				comptador = 0;
			}
			comptY = 0.0;
			++comptador;
			//transform.position = inc;
		}
	}
}