// Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }

    function pedir_ayuda(): void {
        console.log('Auxilio!!!');
    }

    //Parametros opcionales en funciones
    var devuelveNombre = (nombre: string, apellido?: string): string => {
        return `${nombre} ${apellido || ' apellido desconocido.'}`;
    }

    console.log(devuelveNombre("Angel"));