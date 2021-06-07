const request = document.getElementById( "number_box" );
const print_button = document.getElementById( "button" );
print_button.addEventListener( "click", printResult );
const result = document.getElementById( "print_result" );
const atm_repository_printed = document.getElementById( "ATM_repository_p" );
const repository_info = document.getElementById( "bad_news" );

var atm_repository = [];
var bucks_given = [];

bucksMaker( 50, 3 );
bucksMaker( 20, 4 );
bucksMaker( 10, 5 );
bucksMaker( 5, 4 );
bucksMaker( 100, 3 );

home();
orderByvalue();