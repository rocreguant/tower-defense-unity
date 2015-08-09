public var explodingDelay: float = 3;
public var explosion : GameObject;

private var exploding : boolean = false;
private var totalCont : float = 0;

//les variables nomes per les animacions
private var cont : float = 0;
private var currColor : boolean = false;

function OnCollisionEnter( col : Collision) {
	exploding = true;
}

function Update() {
	if (exploding) {	
		totalCont += Time.deltaTime;
		if (totalCont >= explodingDelay) {
			var currExplosion : GameObject = Instantiate(explosion,transform.position,transform.rotation);
			Destroy(currExplosion,0.2);
			Destroy(gameObject);
		}
		//no fa res imprescindible, nomes animacions
		cont += Time.deltaTime;
		if (cont >= explodingDelay/totalCont*0.1) {
			cont = 0;
			currColor = !currColor;
			if (currColor) renderer.material.color = Color(1,0,0);
			else renderer.material.color = Color(0,0,0);
		}
	}
}

//aixo nomes perque no colisioni amb el prota
function Start() {
	var prota : GameObject = GameObject.FindWithTag("player");
	if (prota) Physics.IgnoreCollision(prota.collider, gameObject.collider);
}