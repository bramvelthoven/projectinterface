// Login waardes check
function login()
	{
		var uname = document.getElementById("email").value;
		var pwd = document.getElementById("pwd").value;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(uname =='')
		{
			alert("Voer een geldige gebruiksernaam in.");
		}
		else if(pwd=='')
		{
        	alert("Voer een geldig wachtwoord in.");
		}
		else if(!filter.test(uname))
		{
			alert("Gebruik een geldige email.");
		}
		else if(pwd.length < 2 || pwd.length > 10)
		{
			alert("Wachtwoord moet tussen de 2 en 10 tekens bevatten.");
		}
		else
		{
	alert('U bent ingelogd!');
  
}
    }
// Pagina opschonen na refresh
	window.onload = function() {
		document.getElementById('input_field').value = '';
		}
	