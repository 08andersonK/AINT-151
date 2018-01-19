// This is where most of the game happens.



var Warrior;
var Rouge;
var Cleric;
var Mage;

Warrior = 0;
Rouge = 0;
Cleric = 0;
Mage = 0;

var Torch;
var Rope;
var Parchment;
var HealthPotion;
var Shield;

Torch = 0;
Rope = 0;
Parchment = 0;
HealthPotion = 0;
Shield = 0;

var Ring;

Ring = 0;

var RuneNotes

RuneNotes = 0;

function Companions()
{

/* Selects Companion 1 */
  var selectedValue1 = document.getElementById('Companion1').value;

  console.log(selectedValue1);

  if(selectedValue1 == 1){
    alert("Warrior!");
    Warrior = 1
  }
  if(selectedValue1 != 1){
    Warrior = 0
  }

  if(selectedValue1 == 2){
    alert("Rouge!");
    Rouge = 1
  }
  if(selectedValue1 != 2){
    Rouge = 0
  }

  if(selectedValue1 == 3){
    alert("Cleric!");
    Cleric = 1
  }
  if(selectedValue1 != 3){
    Cleric = 0
  }

  if(selectedValue1 == 4){
    alert("Mage!");
    Mage = 1
  }
  if(selectedValue1 != 4){
    Mage = 0
  }

/* Selects Companion 2 */
  var selectedValue2 = document.getElementById('Companion2').value;
  console.log(selectedValue2);

  if(selectedValue2 == 1){
    alert("Warrior!");
    Warrior = 1
  }
  if(selectedValue2 != 1){
    Warrior = 0
  }

  if(selectedValue2 == 2){
    alert("Rouge!");
    Rouge = 1
  }
  if(selectedValue2 != 2){
    Rouge = 0
  }

  if(selectedValue2 == 3){
    alert("Cleric!");
    Cleric = 1
  }
  if(selectedValue2 != 3){
    Cleric = 0
  }

  if(selectedValue2 == 4){
    alert("Mage!");
    Mage = 1
  }
  if(selectedValue2 != 4){
    Mage = 0
  }

  localStorage.setItem("Companion1",selectedValue1);
  localStorage.setItem("Companion2",selectedValue2);

/* Other Stuff!!!!
localStorage.setItem("Companion1","Companion");
localStorage.setItem("Companion2","Companion");
console.log("Console is active");
alert("You have been Alerted");
*/

}

/* Select your starting item */
function Item()
{
  var selectedValue3 = document.getElementById('Item').value;
  console.log(selectedValue3);

  if(selectedValue3 == 1){
    alert("Torch!");
    Torch = 1
  }
  if(selectedValue3 != 1){
    Torch = 0
  }

  if(selectedValue3 == 2){
    alert("Rope!");
    Rope = 1
  }
  if(selectedValue3 != 2){
    Rope = 0
  }

  if(selectedValue3 == 3){
    alert("Parchment!");
    Parchment = 1
  }
  if(selectedValue3 != 3){
    Parchment = 0
  }

  if(selectedValue3 == 4){
    alert("Health Potion!");
    HealthPotion = 1
  }
  if(selectedValue3 != 4){
    HealthPotion = 0
  }

  if(selectedValue3 == 5){
    alert("Shield!");
    Shield = 1
  }
  if(selectedValue3 != 5){
    Shield = 0
  }

  localStorage.setItem("Item",selectedValue3);
}

/* Companion 1's Opinion in the Forest! */
function GetCompanion1Opinion1()
{
  var index = localStorage.getItem("Companion1");
  if(index == 1){
    return "The old warrior shares his opinion; Better to get there later, than risk not getting there at all...";
  }
  if(index == 2){
    return "We wanna get there quickly, else someone might beat us to all that loot! The energetic Rouge tells you...";
  }
  if(index == 3){
    return "The White Lizard speaks; I can only heal the living... Remember that when you go walking into danger...";
  }
  if(index == 4){
    return "Lets hurry up and reach our destination... Sleeping outside is not suitable for a mage of my talent and standing...";
  }
}

/* Companion 2's Opinion in the Forest! */
function GetCompanion2Opinion1()
{
  var index = localStorage.getItem("Companion2");
  if(index == 1){
    return "The old warrior shares his opinion; Better to get there later, than risk not getting there at all...";
  }
  if(index == 2){
    return "We wanna get there quickly, else someone might beat us to all that loot! The energetic Rouge tells you...";
  }
  if(index == 3){
    return "The White Lizard speaks; I can only heal the living... Remember that when you go walking into danger...";
  }
  if(index == 4){
    return "Lets hurry up and reach our destination... Sleeping outside is not suitable for a mage of my talent and standing...";
  }
}

// Stand and Fight Warrior Path
function GetCompanion1Fight1Warrior()
{
  var index = localStorage.getItem("Companion1");
  if(index == 1){
    return "";
  }
  if(index == 2){
    return "Ithra slowly approaches one of the goblins, holding both her daggers closely in front of her. Then, before the goblin could even blink, his head was separated from his body in a single, clean strike of her blades.";
  }
  if(index == 3){
    return "Nakira fights off a wolf using her mace and brute strength, all the while chanting prayers to her deities. Eventually the wolf gets too close and she lands a solid hit on its head, crushing it into the ground in a red mist.";
  }
  if(index == 4){
    return "Holding out his hand, Lithion quietly chants some words of power. A flash then erupts from his hand and sends a shot of flames towards the goblin. Bursting into flames, for the few seconds its able to, you are met with the terrified gargling of the goblin before it's become nothing but ashes...";
  }
}

// Stand and Fight Warrior Path
function GetCompanion2Fight1Warrior()
{
  var index = localStorage.getItem("Companion2");
  if(index == 1){
    return "";
  }
  if(index == 2){
    return "Ithra slowly approaches one of the goblins, holding both her daggers closely in front of her. Then, before the goblin could even blink, his head was separated from his body in a single, clean strike of her blades.";
  }
  if(index == 3){
    return "Nakira fights off a wolf using her mace and brute strength, all the while chanting prayers to her deities. Eventually the wolf gets too close and she lands a solid hit on its head, crushing it into the ground in a red mist.";
  }
  if(index == 4){
    return "Holding out his hand, Lithion quietly chants some words of power. A flash then erupts from his hand and sends a shot of flames towards the goblin. Bursting into flames, for the few seconds its able to, you are met with the terrified gargling of the goblin before it's become nothing but ashes...";
  }
}

// Stand and Fight Cleric Path
function GetCompanion1Fight1Cleric()
{
  var index = localStorage.getItem("Companion1");
  if(index == 1){
    return "Albert simply holds his ground against the goblins and wolves, trying to intimidate them and make them keep their focus on him and away from you two.";
  }
  if(index == 2){
    return "Ithra slowly approaches one of the goblins, holding both her daggers closely in front of her. Then, before the goblin could even blink, his head was separated from his body in a single, clean strike of her blades.";
  }
  if(index == 3){
    return "";
  }
  if(index == 4){
    return "Holding out his hand, Lithion quietly chants some words of power. A flash then erupts from his hand and sends a shot of flames towards the goblin. Bursting into flames, for the few seconds its able to, you are met with the terrified gargling of the goblin before it's become nothing but ashes...";
  }
}

// Stand and Fight Cleric Path
function GetCompanion2Fight1Cleric()
{
  var index = localStorage.getItem("Companion2");
  if(index == 1){
    return "Albert simply holds his ground against the goblins and wolves, trying to intimidate them and make them keep their focus on him and away from you two.";
  }
  if(index == 2){
    return "Ithra slowly approaches one of the goblins, holding both her daggers closely in front of her. Then, before the goblin could even blink, his head was separated from his body in a single, clean strike of her blades.";
  }
  if(index == 3){
    return "";
  }
  if(index == 4){
    return "Holding out his hand, Lithion quietly chants some words of power. A flash then erupts from his hand and sends a shot of flames towards the goblin. Bursting into flames, for the few seconds its able to, you are met with the terrified gargling of the goblin before it's become nothing but ashes...";
  }
}

/* Companion 1's Camp Site in the Entrance! */
function GetCompanion1Opinion2()
{
  var index = localStorage.getItem("Companion1");
  if(index == 1){
    return "Looking towards the location of your now defunct campfire, you spy the old warrior, who took the first (and only) night watch. he currently resides on a large stone you used to stop the wind from putting out the fire and while you expected him to be a tired mess, you are pleasently suprised to find him almost unaffected by the sleepless night... Most likly due to him having grown accustomed to them over his many years...";
  }
  if(index == 2){
    return "Unlike yourself, the young rougish woman has chosen to reside on the branch of a nearby tree. Apparently a habbit she piked up from some wood elfs she used to travel with. You cant for the life of you ever think about sleeping somwhere so uncomfortable and uncivalised... This tent and rollup bed are pushing what you could stand, but sacrifices must be made in the name of progess.";
  }
  if(index == 3){
    return "While you have only just awoke, you notice that the white lizzard has already packed the rags she called a bed and appears to be enacting some prayers. While the language of the woman is unknown to you, some words are very similar to ancient elvish, which you attempt to piece together... You decide to keep the result to yourself, as your sure a life cleric wouldn't possibly be wishing to crush her enemies and soak her mace in thier blood... Right?";
  }
  if(index == 4){
    return "While the land arround you might be filled to the brim with both monsters and animals, and the sleeping arangments might be inadiquate for a person of your liniage, at least you can take solace that you are with at least one other person who understands the civilised life. Lithion the mage has begun begrugingly taking down his living arangments which are not too disimilar to your own, with a large tent made from fine matterial and an actual bed... It's at this moment you realise that he is PLACING his bed inside a small pouch... Then the tent... then the lamps... Perhaps you should ask him how to obtain a magic pouch later...";
  }
}

/* Companion 2's Camp Site in the Entrance! */
function GetCompanion2Opinion2()
{
  var index = localStorage.getItem("Companion2");
  if(index == 1){
    return "Looking towards the location of your now defunct campfire, you spy the old warrior, who took the first (and only) night watch. he currently resides on a large stone you used to stop the wind from putting out the fire and while you expected him to be a tired mess, you are pleasently suprised to find him almost unaffected by the sleepless night... Most likly due to him having grown accustomed to them over his many years...";
  }
  if(index == 2){
    return "Unlike yourself, the young rougish woman has chosen to reside on the branch of a nearby tree. Apparently a habbit she piked up from some wood elfs she used to travel with. You cant for the life of you ever think about sleeping somwhere so uncomfortable and uncivalised... This tent and rollup bed are pushing what you could stand, but sacrifices must be made in the name of progess.";
  }
  if(index == 3){
    return "While you have only just awoke, you notice that the white lizzard has already packed the rags she called a bed and appears to be enacting some prayers. While the language of the woman is unknown to you, some words are very similar to ancient elvish, which you attempt to piece together... You decide to keep the result to yourself, as your sure a life cleric wouldn't possibly be wishing to crush her enemies and soak her mace in thier blood... Right?";
  }
  if(index == 4){
    return "While the land arround you might be filled to the brim with both monsters and animals, and the sleeping arangments might be inadiquate for a person of your liniage, at least you can take solace that you are with at least one other person who understands the civilised life. Lithion the mage has begun begrugingly taking down his living arangments which are not too disimilar to your own, with a large tent made from fine matterial and an actual bed... It's at this moment you realise that he is PLACING his bed inside a small pouch... Then the tent... then the lamps... Perhaps you should ask him how to obtain a magic pouch later...";
  }
}

// Reccords Runes on Parchment
function GetRecordRunes1()
{
  var index = localStorage.getItem("Item");
    if(index == 3){
      return "Whatever the case you begin copying them into your parchment, perhaps you might find a way to read them further inside?";
    }
    else{
      return "";
    }
}

// Pick Up tHe Ring
function GetRing()
{

  var selectedValue4 = document.getElementById('gotRing').value;



  localStorage.setItem("Ring",selectedValue4);

}

// Reccords Runes on Parchment
function UseHealthPotion1()
{
  var index = localStorage.getItem("Item");
    if(index == 4){
      return "Quickly use your health potion!";
    }
    else{
      return "";
    }
}

// Call Cleric to heal at Darts
function CallCleric()
{
  var c1 = localStorage.getItem("Companion1");
  var c2 = localStorage.getItem("Companion2");
  
    if(c1 == 3 || c2 == 3){
      return "Call for the Cleric's aid!";
    }
    else{
      return "";
    }
  }
