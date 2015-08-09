private var rotacio : float = 0.0; 	// Mostra la rotacio actual del cano
private var compt : float = 0.0;

function Start() {
	// Evita que es mostri el ratoli
	Screen.showCursor = false;

}

function Update() {
	// Obtenir la vel de moviment del ratoli des del frame anterior
	var mov : float = Input.GetAxis("Mouse X");
	// Com que es moura antihorari hem de negar el sentit
	mov = -mov;
	// Moviment del mouse en 25 unitats
	var rot : float = mov * 180.0/25.0;
	
	if (rotacio + rot < -30) rot = -30-rotacio;
	else if (rotacio + rot > 30) rot = 30-rotacio;
	
	// Aplicar rotacio que depen del temps
	compt += Time.deltaTime;
	if (compt > 0.0) {
		compt = 0.0;
		transform.Rotate(0.0, 0.0, rot);
		rotacio += rot;
	}
}