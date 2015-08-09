public var enemy : Rigidbody;
private var tick : float = 0;
public var speed : float = 5.0f;
public var speedMax : float = 5.0f;
public var pas : float = 2.5f;
public var OffZ : float = 5.0f;
public var OffY : float = 1.0f;

function Start() {
	Status.punts = 0.0; // By the face
}

function OnDrawGizmos(){
	Gizmos.color = Color.red;
	Gizmos.DrawWireCube(transform.position, Vector3 (1,OffY,OffZ));
}

function Update () {
	tick+= Time.deltaTime;
	speed = Random.Range(0.0f, speedMax);
	offsetY = 0.5;

	
	if (tick >= pas){
		var canon = GameObject.FindWithTag("player");
		if (canon.GetComponent("Status").aux < 0.02) pas = Random.Range(4.0f, 8.0f); 
		else if (canon.GetComponent("Status").aux < 0.05) pas = Random.Range(3.5f, 4.0f);
		else pas = Random.Range(0.5f, 1.0f);
		tick = 0;
		var position : Vector3 =new Vector3(transform.position.x, transform.position.y+offsetY, transform.position.z);
		var instantiatedProjectile : Rigidbody = Instantiate(enemy, position, transform.rotation);
		instantiatedProjectile.velocity = transform.TransformDirection(Vector3(0, -speed, 0));
		
	}
}