class Buck {
    constructor ( v, q ) {
        this.value = v;
        this.quantity = q;
    }
}

function bucksMaker( v, q ) {
    atm_repository.push( new Buck( v, q ) );
}

function home() {
    let value = 0;

    atm_repository.forEach( function ( bucksy ) {
        value += bucksy.value * bucksy.quantity;
    } )
    atm_repository_printed.innerHTML = value;
    return value;
}

function orderAtmRepositoryByvalue() {

    atm_repository.sort( function ( a, b ) {
        return b.value - a.value;
    } );
}

function printResult() {

    bucks_given = [];
    repository_info.innerHTML = "";

    if ( request.value <= parseInt( home() ) && request.value > 0 ) {

        let wish = request.value;
        let number_condition = 0;

        for ( let bukys of atm_repository ) {

            let bucks_result_quantity = Math.floor( wish / bukys.value );

            if ( bucks_result_quantity > bukys.quantity ) {
                bucks_result_quantity = bukys.quantity;
            }
            wish -= bucks_result_quantity * bukys.value;
            number_condition += bucks_result_quantity * bukys.value;
        }

        wish = request.value;

        if ( request.value == number_condition ) {

            for ( let bukys of atm_repository ) {

                let bucks_result_quantity = Math.floor( wish / bukys.value );

                if ( bucks_result_quantity > bukys.quantity ) {
                    bucks_result_quantity = bukys.quantity;
                }

                bucks_given.push( new Buck( bukys.value, bucks_result_quantity ) );
                bukys.quantity -= bucks_result_quantity;
                wish -= bucks_result_quantity * bukys.value;

                if ( bucks_result_quantity > 1 ) {
                    result.innerHTML += bucks_result_quantity + " Bucks of " + bukys.value + "<br />";
                }
                else if ( bucks_result_quantity == 1 ) {
                    result.innerHTML += bucks_result_quantity + " Buck of " + bukys.value + "<br />";
                }
            }
        }
        else {
            repository_info.innerHTML = "I can't give you what you want, please try it again";
        }
    }
    else if ( parseInt( home() ) == 0 ) {
        repository_info.innerHTML = "I've been reached my limit, you'll have to wait until someone filled me again, see you soon";
    }
    else {
        repository_info.innerHTML = "I can't give you what you want, please try it again";
    }

    home();
}