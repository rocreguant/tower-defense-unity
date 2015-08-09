private var otherTag : String = "enemy";
private var otherTag2 : String = "flyenemy";

function OnDrawGizmos(){
	Gizmos.color = Color.green;
	Gizmos.DrawWireCube(transform.position, Vector3 (1,8,5));
}

function OnTriggerEnter(collision : Collider) {
	if (collision.gameObject.tag == otherTag || collision.gameObject.tag == otherTag2) {
		var canon = GameObject.FindWithTag("player");
		canon.GetComponent("Pause").pause = true;
		canon.SendMessage("Die");
	}
}
