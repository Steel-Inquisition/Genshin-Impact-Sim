// Characters

// Event Listener
document.getElementById('getWanderPulls').addEventListener("click", function(){changeItems(1)});
document.getElementById('getEpitomePulls').addEventListener("click", function(){changeItems(2)});
document.getElementById('getFarewellPulls').addEventListener("click", function(){changeItems(3)});
document.getElementById('getBeginnerPulls').addEventListener("click", function(){changeItems(4)});

let totalPulls = document.getElementById("item-list");

let countPulls = 0;
let innerPulls = 0;

let primoGems = 0;
let money = 0;
let pullGet = 1;

function changeItems(typeOfPull) {

    let x = 0;
    let y = 0;

    pullGet = Math.abs(document.getElementById('pull-get').value);

    let found = false;
    let dictionary = items();

    while (y < pullGet) {

        let find = pullType(typeOfPull);

        while (x < dictionary.length) {
            // console.log(find)
            if (dictionary[x].name == find){
                totalPulls.innerHTML += "<p>" + dictionary[x].name + "</p>"
                found = true;

                if (dictionary[x].status == 1) {
                    console.log("Character!");

                    document.getElementById('rarity-get').innerHTML +=  dictionary[x].rarity;

                    totalPulls.innerHTML += "<em> ||| Rarity: " + dictionary[x].rarity + " ||| </em>";
                    totalPulls.innerHTML += "<em> Vision: " + dictionary[x].vision + " ||| </em>";
                    totalPulls.innerHTML += "<em> Weapon: " + dictionary[x].weapon + " ||| </em>";
                    totalPulls.innerHTML += "<em> base hp: " + dictionary[x].baseHp + " ||| </em>";
                    totalPulls.innerHTML += "<em> base atk: " + dictionary[x].baseAtk + " ||| </em>";
                    totalPulls.innerHTML += "<em> base def: " + dictionary[x].baseDef + " ||| </em>";
                    totalPulls.innerHTML += "<em> final hp: " + dictionary[x].lastHp + " ||| </em>";
                    totalPulls.innerHTML += "<em> final atk: " + dictionary[x].lastAtk + " ||| </em>";
                    totalPulls.innerHTML += "<em> final def: " + dictionary[x].lastDef + " ||| </em>";
                    
                } else if (dictionary[x].status == 2) {
                    console.log("Weapon!");

                    document.getElementById('rarity-get').innerHTML += dictionary[x].rarity;

                    totalPulls.innerHTML += "<em> ||| Rarity: " + dictionary[x].rarity + " ||| </em>";
                    totalPulls.innerHTML += "<em> Type: " + dictionary[x].type + " ||| </em>";
                    totalPulls.innerHTML += "<em> Special Type: " + dictionary[x].specialType + " ||| </em>";
                    totalPulls.innerHTML += "<em> Series: " + dictionary[x].series + " ||| </em>";
                    totalPulls.innerHTML += "<em> base atk: " + dictionary[x].baseAtk + " ||| </em>";
                    totalPulls.innerHTML += "<em> base special rate: " + dictionary[x].specialRate + " ||| </em>";
                    totalPulls.innerHTML += "<em> final atk: " + dictionary[x].lastAtk + " ||| </em>";
                    totalPulls.innerHTML += "<em> last special: " + dictionary[x].lastSpecial + " ||| </em>";

                    // {status: 2, name: "Wolf’s Gravestone", rarity: 5, type: "Claymore", series: "N/A", baseAtk: 46, specialType: "atk", specialRate: 8, lastAtk: 122, lastSpecial: 19.1},

                }

                primoGems += 160;
                money += 2;

            }

            x++;
        }
    
    
        if (found == false) {
            alert("THIS OBJECT IS MISSING FROM THE DICTIONARY: " + find)
        }
    
        countPulls++;

        if (innerPulls < 9) {
            innerPulls++;
        } else {
            innerPulls = 0;
        }

        console.log(innerPulls)
    
        document.getElementById('pull-count').innerHTML = countPulls;
        document.getElementById('gem-count').innerHTML = primoGems;
        document.getElementById('money-count').innerHTML = money;


        x = 0;
        y++;
    }



}

function pullType(typeOfPull) {
    if (typeOfPull == 1) { // Wanderlust

        let fiveStar = ["Keqing", "Qiqi", "Jean", "Skyward Harp", "Skyward Atlas", "Skyward Spine", "Skyward Pride", "Aquila Favonia", "Mona", "Diluc", "Amos' Bow", "Lost Prayer to the Sacred Winds", "Wolf’s Gravestone", "Skyward Blade"]


        let fourStar = ["Kujiou Sara", "Yanfei", "Xinyan", "Diona", "Noelle", "Fischl", "Xingqiu", "Xiangling", "Razor", "Barbara", "Rust", "The Stringless", "Eyes of Perception", "The Widsith", "Favonius Lance", "Rainslasher", "The Bell", "Lion’s Roar", "The Flute", "Sayu", "Rosaria", "Sucrose", "Chongyun", "Bennett", "Ningguang", "Beidou", "Amber", "Kaeya", "Lisa", "Sacrificial Bow", "Favonius Warbow", "Sacrificial Fragments", "Favonius Codex", "Dragon’s Bane", "Sacrificial Greatsword", "Favonius Greatsword", "Sacrificial Sword", "Favonius Sword"]
    
    
        let threeStar = ["Slingshot", "Raven Bow", "Thrilling Tales of Dragon Slayers", 
        "Black Tassel", "Blood Tainted Greatsword", "Skyrider Sword", "Cool Steel", "Sharpshooter’s Oath", "Emerald Orb", "Magic Guide", "Debate Club", "Ferrous Shadow", "Harbinger of Death"]

        return find = pull(0.006, 0.051, 1, fiveStar, fourStar, threeStar)

    } else if (typeOfPull == 2) { // Epitome

        let fiveStar = ["Polar Star", "Amos’ bow", "Lost Prayer to the Sacred Winds", "Wolf’s Gravestone", "Skyward Blade", "Memory of Dust", "Skyward Harp", "Skyward Atlus", "Skyward Spine", "Skyward Pride", "Aquila Favonia"]


        let fourStar = ["Rust", "Favonius Lance", "Favonius Sword", "Sayu", "Rosaria", "Sucrose", "Chongyun", "Bennett", "Ningguang", "Beidou", "Razor", "Sacrificial bow", "Favonius Warbow", "The Widsith", "Dragon’s Bane", "Sacrificial Greatsword", "Favonius Greatsword", "Sacrificial Sword"]
    
    
        let threeStar = ["Slingshot", "Raven Bow", "Thrilling Tales of Dragon Slayers", "Black Tassel", "Blood Tainted Greatsword", "Skyrider Sword", "Cool Steel", "Sharpshooter’s Oath", "Emerald Orb", "Magic Guide", "Debate Club", "Ferrous Shadow", "Harbinger of Death"]

        return find = pull(0.007, 0.06, 1, fiveStar, fourStar, threeStar)

    } else if (typeOfPull == 3) { // Farewell of Snezhnaya

        let fiveStar = ["Tartaglia", "Mona", "Diluc", "Keqing", "Qiqi", "Jean"]


        let fourStar = ["Yanfei", "Ninguang", "Sayu", "Xinyan", "Diona", "Bennett", "Xingqiu", "Xiangling", "Barbara", "Sacrificial Bow", "Favonius Warbow", "Sacrificial Fragments", "Favonious Codex", "Dragon’s Bane", "Sacrificial Greatsword", "Favonius Greatsword", "Sacrificial Sword", "Favonius Sword", "Chongyun", "Kujou Sara", "Rosaria", "Sucrose", "Noelle", "Fischi", "Beidou", "Razor", "Rust", "The Stringless", "Eye of Perception", "The wIdsith", "Favonius Lance", "Rainslasher", "The Bell", "Lion’s Roar", "The Flute"]
    
    
        let threeStar = ["Slingshot", "Raven Bow", "Thrilling Tales of Dragon Slayers", "Black Tassel", "Blood Tainted Greatsword", "Skyrider Sword", "Cool Steel", "Sharpshooter’s Oath", "Emerald Orb", "Magic Guide", "Debate Club", "Ferrous Shadow", "Harbinger of Death"]

        return find = pull(0.006, 0.051, 1, fiveStar, fourStar, threeStar)

    } else if (typeOfPull == 4) { // Beginner’s Wish

        let fiveStar = ["Keqing", "Qiqi", "Jean", "Mona", "Diluc"]


        let fourStar = ["Sucrose", "Bennett", "Ningguang", "Beidou", "Razor", "Chongyun", "Fischi", "Xingqiu", "Xiangling",
        "Barbara"]
    
    
        let threeStar = ["Slingshot", "Raven Bow", "Thrilling Tales of Dragon Slayers", "Black Tassel", "Blood Tainted Greatsword", "Skyrider Sword", "Cool Steel", "Sharpshooter’s Oath", "Emerald Orb", "Magic Guide", "Debate Club", "Ferrous Shadow", "Harbinger of Death"]

        return find = pull(0.006, 0.051, 1, fiveStar, fourStar, threeStar)

    }
}

function pull(random5num, random4num, random3num, fiveStar, fourStar, threeStar) {

    let random = Math.random();

    if (innerPulls == 9) {

        console.log("THIS WORKS!!!")

        if (random < 0.06) {
            let randomFiveStar = Math.floor(Math.random() * fiveStar.length)

            console.log("fivestar: " + randomFiveStar)
    
            return fiveStar[randomFiveStar]
        } else if (random < 1) {
            let randomFourStar = Math.floor(Math.random() * fourStar.length)

            console.log("fourstar: " + randomFourStar)
    
            return fourStar[randomFourStar]
        }

    } else {

        if (random < random5num) {
            let randomFiveStar = Math.floor(Math.random() * fiveStar.length)
    
            console.log("fivestar: " + randomFiveStar)
    
            return fiveStar[randomFiveStar]
    
        } else if (random < random4num) {
    
            let randomFourStar = Math.floor(Math.random() * fourStar.length)
    
            console.log("fourstar: " + randomFourStar)
    
            return fourStar[randomFourStar]
    
        } else if (random < random3num) {
    
            let randomThreeStar = Math.floor(Math.random() * (threeStar.length))
    
            console.log("threestar: " + randomThreeStar)
    
            return threeStar[randomThreeStar]
        }
    }

}

function items(){
    return CharacterArray = [
        {status: 1, name: "Keqing", rarity: 5, vision: "Electro", weapon: "Sword", baseHp: 1020, baseAtk: 25, baseDef: 62, lastHp: 2646, lastAtk: 65, lastDef: 161},
        {status: 1, name: "Qiqi", rarity: 5, vision: "Cryo", weapon: "Sword", baseHp: 963, baseAtk: 22, baseDef: 72, lastHp: 2498, lastAtk: 58, lastDef: 186},
        {status: 1, name: "Jean", rarity: 5, vision: "Anemo", weapon: "Sword", baseHp: 1144, baseAtk: 19, baseDef: 60, lastHp: 2967, lastAtk: 48, lastDef: 155},
        {status: 1, name: "Mona", rarity: 5, vision: "Hydro", weapon: "Catalyst", baseHp: 810, baseAtk: 22, baseDef: 51, lastHp: 2102, lastAtk: 58, lastDef: 132},
        {status: 1, name: "Diluc", rarity: 5, vision: "Pyro", weapon: "Claymore", baseHp: 1011, baseAtk: 26, baseDef: 61, lastHp: 2621, lastAtk: 68, lastDef: 158},
        {status: 1, name: "Kujiou Sara", rarity: 4, vision: "Electro", weapon: "Bow", baseHp: 802, baseAtk: 16, baseDef: 53, lastHp: 2061, lastAtk: 42, lastDef: 135},
        {status: 1, name: "Sayu", rarity: 4, vision: "Anemo", weapon: "Claymore", baseHp: 994, baseAtk: 20, baseDef: 62, lastHp: 2553, lastAtk: 53, lastDef: 160},
        {status: 1, name: "Yanfei", rarity: 4, vision: "Catalyst", weapon: "Pyro", baseHp: 784, baseAtk: 20, baseDef: 49, lastHp: 2014, lastAtk: 52, lastDef: 126},
        {status: 1, name: "Sayu", rarity: 4, vision: "Anemo", weapon: "Claymore", baseHp: 994, baseAtk: 20, baseDef: 62, lastHp: 2553, lastAtk: 53, lastDef: 160},
        {status: 1, name: "Rosaria", rarity: 4, vision: "Cryo", weapon: "Polearm", baseHp: 1030, baseAtk: 20, baseDef: 60, lastHp: 2647, lastAtk: 52, lastDef: 153},
        {status: 1, name: "Xinyan", rarity: 4, vision: "Pyro", weapon: "Claymore", baseHp: 939, baseAtk: 21, baseDef: 67, lastHp: 2413, lastAtk: 54, lastDef: 172},
        {status: 1, name: "Sucrose", rarity: 4, vision: "Anemo", weapon: "Catalyst", baseHp: 775, baseAtk: 17, baseDef: 59, lastHp: 1991, lastAtk: 37, lastDef: 151},
        {status: 1, name: "Diona", rarity: 4, vision: "Cryo", weapon: "Bow", baseHp: 802, baseAtk: 18, baseDef: 50, lastHp: 2061, lastAtk: 46, lastDef: 129},
        {status: 1, name: "Chongyun", rarity: 4, vision: "Cryo", weapon: "Claymore", baseHp: 1003, baseAtk: 19, baseDef: 54, lastHp: 2366, lastAtk: 48, lastDef: 140},
        {status: 1, name: "Noelle", rarity: 4, vision: "Geo", weapon: "Claymore", baseHp: 1012, baseAtk: 16, baseDef: 67, lastHp: 2600, lastAtk: 41, lastDef: 172},
        {status: 1, name: "Bennett", rarity: 4, vision: "Pyro", weapon: "Sword", baseHp: 1039, baseAtk: 16, baseDef: 65, lastHp: 2670, lastAtk: 41, lastDef: 166},
        {status: 1, name: "Fischl", rarity: 4, vision: "Electro", weapon: "Bow", baseHp: 770, baseAtk: 20, baseDef: 50, lastHp: 1979, lastAtk: 53, lastDef: 128},
        {status: 1, name: "Ningguang", rarity: 4, vision: "Geo", weapon: "Catalyst", baseHp: 821, baseAtk: 18, baseDef: 48, lastHp: 2108, lastAtk: 46, lastDef: 123},
        {status: 1, name: "Xingqiu", rarity: 4, vision: "Hydro", weapon: "Sword", baseHp: 857, baseAtk: 17, baseDef: 64, lastHp: 2202, lastAtk: 43, lastDef: 163},
        {status: 1, name: "Beidou", rarity: 4, vision: "Electro", weapon: "Claymore", baseHp: 1094, baseAtk: 19, baseDef: 54, lastHp: 2811, lastAtk: 48, lastDef: 140},
        {status: 1, name: "Xiangling", rarity: 4, vision: "Pyro", weapon: "Polearm", baseHp: 912, baseAtk: 19, baseDef: 56, lastHp: 2342, lastAtk: 48, lastDef: 144},
        {status: 1, name: "Amber", rarity: 4, vision: "Pyro", weapon: "Bow", baseHp: 793, baseAtk: 19, baseDef: 50, lastHp: 2038, lastAtk: 48, lastDef: 129},
        {status: 1, name: "Razor", rarity: 4, vision: "Electro", weapon: "Claymore", baseHp: 1003, baseAtk: 20, baseDef: 63, lastHp: 2577, lastAtk: 50, lastDef: 162},
        {status: 1, name: "Kaeya", rarity: 4, vision: "Cryo", weapon: "Sword", baseHp: 976, baseAtk: 19, baseDef: 66, lastHp: 2506, lastAtk: 48, lastDef: 171},
        {status: 1, name: "Barbara", rarity: 4, vision: "Hydro", weapon: "Catalyst", baseHp: 821, baseAtk: 13, baseDef: 56, lastHp: 2108, lastAtk: 34, lastDef: 144},
        {status: 1, name: "Lisa", rarity: 4, vision: "Electro", weapon: "Catalyst", baseHp: 802, baseAtk: 19, baseDef: 48, lastHp: 2061, lastAtk: 50, lastDef: 123},
        {status: 1, name: "Tartaglia", rarity: 5, vision: "Hydro", weapon: "Bow", baseHp: 1020, baseAtk: 23, baseDef: 63, lastHp: 2646, lastAtk: 61, lastDef: 165},
        {status: 2, name: "Skyward Harp", rarity: 5, type: "Bow", series: "Mondstadt Series", baseAtk: 48, specialType: "crit", specialRate: 4.8, lastAtk: 133, lastSpecial: 8.5},
        {status: 2, name: "Lost Prayer to the Sacred Winds", rarity: 5, type: "Catalyst", series: "N/A", baseAtk: 46, specialType: "crit", specialRate: 7.2, lastAtk: 122, lastSpecial: 12.7},
        {status: 2, name: "Skyward Atlas", rarity: 5, type: "Catalyst", series: "Mondstadt Series", baseAtk: 48, specialType: "atk", specialRate: 7.2, lastAtk: 133, lastSpecial: 12.7},
        {status: 2, name: "Primordial Jade", rarity: 5, type: "Polearm", series: "Primordial Jade Series", baseAtk: 48, specialType: "crit", specialRate: 4.8, lastAtk: 133, lastSpecial: 8.5},
        {status: 2, name: "Skyward Jade", rarity: 5, type: "Polearm", series: "Mondstadt Series", baseAtk: 48, specialType: "energy recharge", specialRate: 8, lastAtk: 133, lastSpecial: 14.1},
        {status: 2, name: "Wolf’s Gravestone", rarity: 5, type: "Claymore", series: "N/A", baseAtk: 46, specialType: "atk", specialRate: 8, lastAtk: 122, lastSpecial: 19.1},
        {status: 2, name: "Skyward Pride", rarity: 5, type: "Claymore", series: "Mondstadt Series", baseAtk: 48, specialType: "energy recharge", specialRate: 8, lastAtk: 133, lastSpecial: 14.1},
        {status: 2, name: "Skyward Blade", rarity: 5, type: "Sword", series: "Mondstadt Series", baseAtk: 46, specialType: "energy recharge", specialRate: 12, lastAtk: 122, lastSpecial: 21.2},
        {status: 2, name: "Rust", rarity: 4, type: "Bow", series: "Mondstadt Series", baseAtk: 42, specialType: "atk", specialRate: 9, lastAtk: 109, lastSpecial: 15.9},
        {status: 2, name: "Amos' Bow", rarity: 5, type: "Bow", series: "Mondstadt Series", baseAtk: 46, specialType: "atk", specialRate: 10.8, lastAtk: 122, lastSpecial: 19.1},
        {status: 2, name: "Sacrificial Bow", rarity: 4, type: "Bow", series: "Sacrificial Series", baseAtk: 44, specialType: "energy recharge", specialRate: 6.7, lastAtk: 119, lastSpecial: 11.8},
        {status: 2, name: "The Stringless", rarity: 4, type: "Bow", series: "Wanderer's Troupe Series", baseAtk: 42, specialType: "elemental mastery", specialRate: 36, lastAtk: 109, lastSpecial: 64},
        {status: 2, name: "Favonius Warbow", rarity: 4, type: "Bow", series: "Favonius Series", baseAtk: 41, specialType: "energy recharge", specialRate: 13.3, lastAtk: 99, lastSpecial: 23.6},
        {status: 2, name: "Eyes of Perception", rarity: 4, type: "Catalyst", series: "N/A", baseAtk: 41, specialType: "atk", specialRate: 12, lastAtk: 99, lastSpecial: 21.2},
        {status: 2, name: "Sacrificial Fragments", rarity: 4, type: "Catalyst", series: "Sacrificial Series", baseAtk: 41, specialType: "elemental mastery", specialRate: 48, lastAtk: 99, lastSpecial: 85},
        {status: 2, name: "The Widsith", rarity: 4, type: "Catalyst", series: "Wanderer's Troupe Series", baseAtk: 42, specialType: "crit", specialRate: 12, lastAtk: 109, lastSpecial: 21.2},
        {status: 2, name: "Favonius Codex", rarity: 4, type: "Catalyst", series: "Favonius Series", baseAtk: 42, specialType: "energy recharge", specialRate: 10, lastAtk: 109, lastSpecial: 17.7},
        {status: 2, name: "Dragon’s Bane", rarity: 4, type: "Polearm", series: "Kunwu Series", baseAtk: 41, specialType: "elemental mastery", specialRate: 48, lastAtk: 99, lastSpecial: 85},
        {status: 2, name: "Rainslasher", rarity: 4, type: "Claymore", series: "Bane Series", baseAtk: 42, specialType: "elemental mastery", specialRate: 36, lastAtk: 109, lastSpecial: 64},
        {status: 2, name: "Sacrificial Greatsword", rarity: 4, type: "Claymore", series: "Sacrificial Series", baseAtk: 44, specialType: "energy recharge", specialRate: 6.7, lastAtk: 119, lastSpecial: 11.8},
        {status: 2, name: "The Bell", rarity: 4, type: "Claymore", series: "Wanderer's Troupe Series", baseAtk: 42, specialType: "hp", specialRate: 9, lastAtk: 109, lastSpecial: 15.9},
        {status: 2, name: "Favonius Greatsword", rarity: 4, type: "Claymore", series: "Favonius Series", baseAtk: 41, specialType: "energy recharge", specialRate: 13.3, lastAtk: 99, lastSpecial: 23.6},
        {status: 2, name: "Lion’s Roar", rarity: 4, type: "Sword", series: "Kunwu Series", baseAtk: 42, specialType: "atk", specialRate: 9, lastAtk: 109, lastSpecial: 15.9},
        {status: 2, name: "Sacrificial Sword", rarity: 4, type: "Sword", series: "Sacrificial Series", baseAtk: 41, specialType: "energy recharge", specialRate: 13.3, lastAtk: 99, lastSpecial: 23.6},
        {status: 2, name: "The Flute", rarity: 4, type: "Sword", series: "Wanderer's Troupe Series", baseAtk: 42, specialType: "atk", specialRate: 9, lastAtk: 109, lastSpecial: 15.9},
        {status: 2, name: "Favonius Sword", rarity: 4, type: "Sword", series: "Favonius Series", baseAtk: 41, specialType: "energy recharge", specialRate: 13.3, lastAtk: 99, lastSpecial: 23.6},
        {status: 2, name: "Slingshot", rarity: 3, type: "Bow", series: "N/A", baseAtk: 38, specialType: "crit", specialRate: 6.8, lastAtk: 86, lastSpecial: 12},
        {status: 2, name: "Sharpshooter’s Oath", rarity: 3, type: "Bow", series: "N/A", baseAtk: 39, specialType: "crit", specialRate: 10.2, lastAtk: 94, lastSpecial: 18},
        {status: 2, name: "Raven Bow", rarity: 3, type: "Bow", series: "Bane Series", baseAtk: 40, specialType: "elemental mastery", specialRate: 20, lastAtk: 102, lastSpecial: 36},
        {status: 2, name: "Thrilling Tales of Dragon Slayers", rarity: 3, type: "Catalyst", series: "N/A", baseAtk: 39, specialType: "hp", specialRate: 7.7, lastAtk: 94, lastSpecial: 13.5},
        {status: 2, name: "Magic Guide", rarity: 3, type: "Catalyst", series: "Bane Series", baseAtk: 38, specialType: "elemental mastery", specialRate: 41, lastAtk: 86, lastSpecial: 72},
        {status: 2, name: "Black Tassel", rarity: 3, type: "Polearm", series: "Bane Series", baseAtk: 38, specialType: "hp", specialRate: 10.2, lastAtk: 86, lastSpecial: 18},
        {status: 2, name: "Debate Club", rarity: 3, type: "Claymore", series: "N/A", baseAtk: 39, specialType: "atk", specialRate: 7.7, lastAtk: 94, lastSpecial: 13.5},
        {status: 2, name: "Blood Tainted Greatsword", rarity: 3, type: "Claymore", series: "Bane Series", baseAtk: 38, specialType: "elemental mastery", specialRate: 41, lastAtk: 86, lastSpecial: 72},
        {status: 2, name: "Ferrous Shadow", rarity: 3, type: "Claymore", series: "N/A", baseAtk: 39, specialType: "hp", specialRate: 7.7, lastAtk: 94, lastSpecial: 13.5},
        {status: 2, name: "Skyrider Sword", rarity: 3, type: "Sword", series: "N/A", baseAtk: 38, specialType: "energy recharge", specialRate: 11.3, lastAtk: 86, lastSpecial: 20},
        {status: 2, name: "Harbinger of Death", rarity: 3, type: "Sword", series: "N/A", baseAtk: 39, specialType: "crit", specialRate: 10.2, lastAtk: 94, lastSpecial: 18},
        {status: 2, name: "Cool Steel", rarity: 3, type: "Sword", series: "Bane Series", baseAtk: 39, specialType: "crit", specialRate: 7.7, lastAtk: 94, lastSpecial: 13.5},
        {status: 2, name: "Emerald Orb", rarity: 3, type: "Catalyst", series: "N/A", baseAtk: 40, specialType: "elemental mastery", specialRate: 20, lastAtk: 102, lastSpecial: 36},
        {status: 2, name: "Aquila Favonia", rarity: 5, type: "Sword", series: "N/A", baseAtk: 48, specialType: "atk", specialRate: 9, lastAtk: 133, lastSpecial: 15.9},
        {status: 2, name: "Polar Star", rarity: 5, type: "Bow", series: "N/A", baseAtk: 46, specialType: "crit", specialRate: 7.2, lastAtk: 122, lastSpecial: 12.7},
        {status: 2, name: "Memory of Dust", rarity: 5, type: "Catalyst", series: "Liyue Series", baseAtk: 46, specialType: "atk", specialRate: 10.8, lastAtk: 122, lastSpecial: 19.1},
        {status: 2, name: "Favonius Lance", rarity: 4, type: "Polearm", series: "Favonius Series", baseAtk: 44, specialType: "energy recharge", specialRate: 6.7, lastAtk: 119, lastSpecial: 11.8}


    ];
}