const readline = require('readline-sync');
const places = ["Funky Swamp","Sunny Beach","Vice City","Mickey Mouse Land"];
const drinks = ["Bahama Mama","Mucho Mojito","Bloody Mary","Tequila Sunrise"];
const log = console.log;
let exit = "no";
while (exit === "no") {

    let userPlay = readline.question(`\nWelcome to Florida Man's Amazing Journey! \n\nDo you want to come along for the wild ride?\n\n yes || no \n\n`);
    userPlay = userPlay.toLowerCase();

    if (userPlay === 'yes') {
      log("Let's get started!\n");
      index = readline.keyInSelect(places,"Where do you want to go first?\n\n");
      if (index === -1) {
        log(`\nWell, might as well stay home!\n`);
      } else {
      log(`\nAlright! ` + places[index] + ` it is!\n`); }
        } else {
      log('\nOh Well, best head back up North.\n\nGoodbye.\n');
      index = -1;
    }

if (index == [0]) {
    log(`Why in the world would anyone come here?\n\nOh well, let's make the best of it!\n`);
    let swampChoice = readline.question(`Should we take the airboat tour up "Alligator Alley" or bike along "Rattlesnake Road"? \n\nairboat || bike\n\n`);
    swampChoice = swampChoice.toLowerCase();

    if (swampChoice === "airboat") {
        log(`\nAhhh this is much better, the soothing sounds of a giant electrical fan! \n\nLook at the birds and the gators!\n\nWait... something's wrong with the airboat fan!\n`);
        let airboatChoice = readline.question(`Should we try to fix it or wait for help?\n\n fix it || wait\n`);
        airboatChoice = airboatChoice.toLowerCase();
        if (airboatChoice === "fix it") {
            log(`\nAlright, let's try to be quick about this\n\nI think if you just screw this in it will...\n\nAaaaahhhhh a gator just bit off your leg\n\nIt drags you off the boat and eats you alive\n\nYOU LOSE!\n`);
        } else if (airboatChoice === "wait") {
            log(`\nI'm sure someone will be along any minute now...\n\nWhere is that sound coming from?...\n\nAaaaahhhhh a gator just bit off your leg\n\nIt drags you off the boat and eats you alive\n\nYOU LOSE!\n`);
        };

    } else if (swampChoice = "bike") {
        log(`\nWell at least we're not walking...\n\nI wonder why they call it "Rattlesnake Road"?\n\nWhat was that hissing sound? \n\nOH GOD NOOOOOOOOOO\n\nYou were bitten by a rattlesnake and could not make back in time.\n\nYOU LOSE!\n`);
    }


}   else if (index == [1]) {
    log(`\nThis is paradise, I love Floriduh!\n\nIt's getting pretty hot though, let's freshen' up\n`);
    let saltLife = readline.question(`Should we go for a swim in the ocean or have a cold drink and beach bum it?\n\n swim || drink\n\n`);
    saltLife = saltLife.toLowerCase();

    if (saltLife === "swim") {
        log(`\nAhhh what a refreshing sensation, water temperature is just right!\n\n Let's keep swimming up ahead, I think I see a sand bank.\n\n Wait, is that a fin creeping closer? Yes it is!\n\n`);
        let oceanChoice = readline.question(`Do you think it's a dolphin or a shark?\n\n dolphin || shark\n\n`);
        oceanChoice = oceanChoice.toLowerCase();
        if (oceanChoice === "dolphin") {
            log(`\nNo worries then, dolphins are friendly creatures, I'm sure...\n\nWait that's not a dolphin! SHAAAAAARKKKK!!!!!\n\nYou try swimming away but the shark bites your leg off and you never make it to shore\n\nYOU LOSE!\n`);
        } else if (oceanChoice === "shark") {
            log(`\nSHAAAAAARKKKK!!!!!\n\nYou try swimming away but the shark bites your leg off and you never make it to shore\n\nYOU LOSE!\n`); 
        }
    } else if (saltLife === "drink") {
        log(`\n\nAlright! Let's get sauced!\n\n`)
        index2 = readline.keyInSelect(drinks,"What is your drink of choice?\n\n");
        if (index2 === -1) {
            log(`Sober at the Beach?!?\n\nYOU LOSE!\n`);
        } else if ( 3 >= index >= 0) {
        log(`\nAwesome sauce! ` + drinks[index2] + ` at the beach!\n\nYou win at Life!\n\nYOU WON THE GAME!\n`); }
    }

}   else if (index == [2]) {
    log(`Oh yeah, mucho caliente! I love this town!\n\nI want to party like it's 1999!\n`);
    let viceCity = readline.question(`Should we go to Wynwood and checkout the art scene? Or should we just "Go to Space?!?" \n\nwynwood || space\n\n`);
    viceCity = viceCity.toLowerCase();

    if (viceCity === "wynwood") {
        log(`\n
        Wow this place is awesome! Look at all these cool murals!\n\nLet's see what's down this dark alley...\n\nOh NOOO! It's a gang of flesh eating zombies!\n`);
        let wynChoice = readline.question(`Should we feed them a Publix Sub or should we hide out at Wyncode?\n\n feed || hide\n\n`)
        if (wynChoice === "feed") {
            log(`\nWrong move!\n\nYou never feed the flesh eating zombies!\n\nThey finish your chicken tender sub and feast on your flesh!\n\nYOU LOSE!\n`)
        } else if (wynChoice === "hide") {
            log(`\nYou run for your life and get to Wyncode on your last breath...\n\nThe doors are closed! But I think there's someone in there...\n\nERNIE HEEEEELP! OPEN UP!\n\nErnie smiles and sips cold brew whilst the zombies feast on your flesh.\n\nYOU LOSE!\n`)
        }
    } else if (viceCity === "space") {
        log(`\nYou're now in Space kid.\n\nThere's something you should know...\n\nWhat if I told you this adventure is not what it seems?\n`);
        let spaceChoice = readline.question(`Do you want to take the Blue or the Red Pill?\n\nblue || red\n\n`);
        spaceChoice = spaceChoice.toLowerCase();
        if (spaceChoice === "blue") {
            log(`\nYou dance the night away!\n\nEnter a daze and lose track of time...\n\nWake up in a dark alley\n\nYou are now a flesh eating zombie!\n\nYOU LOSE!\n`);
        } else if (spaceChoice === "red") {
            log(`\nYou are living inside a console simulation game...\n\nThe wondrous land of Florida is just a virtual universe...\n\nAlso there's a syntax error in the system!\n\nYOU LOSE\n`);
        }
    }


}   else if (index == [3]) {
    log(`Oh NOOOOO!  It's a Tourist Trap!\n\nYOU LOSE!\n`);


}   else if (index === -1) {
    exit = "yes";
}


    exit = readline.question(`Do you want to exit Flahrider?\n\nyes || no\n\n`)
    exit = exit.toLowerCase();
}


