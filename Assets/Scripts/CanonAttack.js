public var destroyOnCollision : boolean = true;

function OnCollisionEnter(collision : Collision) {
	
	if (destroyOnCollision) Destroy(gameObject);
	
	var canon = GameObject.FindWithTag("player");
	
	if (collision.gameObject.tag == "enemy") {
		canon.GetComponent("Status").punts += 5;
		Destroy(collision.gameObject);
	}
	if (collision.gameObject.tag == "flyenemy") {
		canon.GetComponent("Status").punts += 10;
		Destroy(collision.gameObject);
	}
}

