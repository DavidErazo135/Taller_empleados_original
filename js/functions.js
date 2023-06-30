
class empresa{

	constructor(){
		this.e = new empleado;
	}

	darEmpleado(){
		return this.e;
	}

	modificarsalario(modifSala){
		this.e.modSalario(modifSala);
	}
}

class empleado{
	constructor(){
	    this.nombre;
	    this.apellido;
	    this.sexo;
	    this.fecha_nacimiento = 1111;
	    this.fecha_ingreso = 0;
		this.salario_basico = 0;
		this.calcular_edad = 0;
		this.calcular_antiguedad = 0;
		this.calcular_prestaciones = 0;
    }

	
	darNombre(){
		return this.nombre;
	}

	darApellido(){
		return this.apellido;
	}

	darSexo(){
		return this.sexo;
	}

    darFecha_nacimiento(){
    	return this.fecha_nacimiento;
    }

    darFecha_ingreso(){
    	return this.fecha_ingreso;
    }

    darSalario_basico(){
    	return this.salario_basico;
    }

    darCalcular_edad(){
        return this.calcular_edad;
    }

    darCalcular_antiguedad(){
        return this.calcular_antiguedad;
    }

    darCalcular_prestaciones(){
        return this.calcular_prestaciones;
    }	

    modSalario(){
    	this.salario_basico=modifSala;
    }
}

let emp = new empresa;
let m,calEd,calfeIn;

function modificarSalario(){
	m = 1500000;
	modificar = prompt("Ingrese el nuevo salario: ");

	m = parseFloat(modificar);
	document.getElementById('txt_sala').innerHTML = 'Nuevo Salario: $'+ m;
}

function calcularEdad (){
	ed = parseInt(document.getElementById("fech_nac").value);
	calEd=2022 - ed;
	document.getElementById('cal_edad').innerHTML = 'tiene '+ calEd + ' años';
	//alert (calEd);
}

function calcularAntiguedad(){
	feIn = parseInt(document.getElementById("fech_ing").value);
	calfeIn=2022 - feIn;
	document.getElementById('cale_antig').innerHTML = 'lleva '+ calfeIn + ' años trabajando aquí';
}

function calcularPrestaciones(){
	prestaciones = (calfeIn*m)/12;

	document.getElementById('cale_pres').innerHTML = 'Las prestaciones son: '+ prestaciones;
}

function visualizarinfo(){
	 no = document.getElementById("txt_nombre").value;
	 ap = document.getElementById("txt_apellido").value;
	 //se = document.getElementById("flexRadioDefault1").value;
	 fn = document.getElementById("fech_nac").value;
	 fi = document.getElementById("fech_ing").value;

	//document.getElementById('nombre').innerHTML = 'Nombre: ' + no;

	alert(
			"Nombre: "+ no +
			"\nApellido: " + ap +
			//"\nsexo: " + se +
			"\nFecha de nacimiento: " + fn +
			"\nFecha de ingreso: " + fi
		);
}
function pagosTotales(){
	calculo = m*12;

	total= calculo*calfeIn;
	
	alert("hasta la fecha actual, usted ha recibido: $" + total);
}

