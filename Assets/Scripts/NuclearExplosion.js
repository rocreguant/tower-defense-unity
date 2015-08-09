public var destroyOnCollisionNuclear : boolean = true;
private var llista : Object[];

function OnCollisionEnter() {
	if (destroyOnCollisionNuclear) {
		// Destrueix bomba
		Destroy(gameObject);
		
		// Llista de gameobjects de l'scene
		llista = Resources.FindObjectsOfTypeAll(typeof(GameObject));
		var i : int;
		for (i = 0; i < llista.length; ++i) {
			//Destrueix enemics
			var enemy = GameObject.FindWithTag("enemy");
			var flyenemy = GameObject.FindWithTag("flyenemy");
			Destroy(enemy, 0.5);
			Destroy(flyenemy, 0.5);
		}
	}
}