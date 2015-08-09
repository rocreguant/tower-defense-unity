public var bala : Rigidbody;
public var nuclear : Rigidbody;
public var velocitat : float = 5;
private var maxVel : float = 15;
private var minVel : float = 5;
private var compt : float = 0.0;
private var comptVel : float = 0.0;

function Update () {
	compt += Time.deltaTime;
	// Disparar amb click1 cada segon aproxç
	comptVel += Time.deltaTime;
	if(Input.GetButton("Fire1") && comptVel >= 0.25 && velocitat < maxVel){
		velocitat++;
		comptVel=0.0;
	}
	//Deixar anar el click
	if (Input.GetButtonUp("Fire1") && compt >= 1.0 && Time.timeScale != 0.0) {
		compt = 0.0;
		
		var bullet : Rigidbody = Instantiate(bala, transform.position, transform.rotation);
		bullet.velocity = transform.up * velocitat;
		Debug.DrawRay(transform.position, bullet.velocity, Color.white);
		Physics.IgnoreCollision(bullet.collider, transform.parent.collider);
		Destroy(bullet.gameObject, 10);
		velocitat = minVel;
	}
	//Bomba nuclear
	if (Input.GetKey(KeyCode.Space) && compt >= 1.0 && Status.bombes > 0) {
		compt = 0.0;
		--Status.bombes;
		
		//Instancia bombes al escenari
		var bomba : Rigidbody = Instantiate(nuclear, Vector3(0,10,0), transform.rotation);
		//Physics.IgnoreCollision(bomba.collider, transform.collider);
	}
}