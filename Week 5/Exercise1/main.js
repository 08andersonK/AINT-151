var weaponsArray = [
	'Broadsword',
	'Crossbow',
	'Magic staff'
];


function OnLoad()
{
	for (var i = 0; i < weaponsArray.length; i++) {
		var tag = "<option value='" + i + "'>" + weaponsArray[i] + "</option>";
		document.forms[0]["weapons"].innerHTML += tag;
	}
}


function SelectWeapon()
{
	var index = document.forms[0]["weapons"].value;
	document.getElementById('currentWeapon').innerHTML = weaponsArray[index];
}
