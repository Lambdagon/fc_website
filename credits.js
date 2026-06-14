var FcDevTeam = [
    // format is: credit(name, image url, role, socials, custom font if any)
    credit("Vvis", "assets/credits/vvis.png", "Lead", "", "Quake"),
    credit("SaintSoftware", "assets/credits/saintsoftware.jpg", "Co-Lead", "", "Frak"),
    credit("Average_Medal_Enjoyer", "assets/credits/medal.jpg", "Co-Lead, Lead Mapper", "", "ComicSans"),
    credit("ArgGuard", "assets/credits/argguard.jpg", "Programmer", "", "AndyBold"),
    credit("Gordon Freakman", "assets/credits/freakman.jpg", "Programmer, Modeller", "", "Quake"),
    credit("YOW", "assets/credits/yow.gif", "Programmer, Mapper", "", "Frak"),
    credit("Tyro (Xerin)", "assets/credits/xerin.jpg", "Mapper", "", "Quake"),
    credit("ShiroDkxtro2", "assets/credits/shiro.jpg", "LUX, Shaders", "", "AndyBold"),
    credit("Zeldaboy14", "assets/credits/zelda.jpg", "Programmer", "", "Quake"),
    credit("Crowbar", "assets/credits/crowbar.jpg", "Artist", "", "Frak"),
    credit("DudeTheNinja", "assets/credits/dudetheninja.jpg", "Modeller", "", "AndyBold"),
    credit("Spyguy26", "assets/credits/spyguy.jpg", "Programmer, Modeller", "", "Quake"),
    credit("Hotpockette", "assets/credits/hotpockette.jpg", "Animator", "", "Frak"),
    credit("Fyzure", "assets/credits/fyzure.jpg", "Animator", "", "Quake")
];

var Contributors = [

];

// append dev team
for (var dev = 0; dev < FcDevTeam.length; dev++) {
    document.getElementById("fcdevs").appendChild(FcDevTeam[dev]);
}

// append contributors
for (var dev = 0; dev < Contributors.length; dev++) {
    document.getElementById("contributors").appendChild(Contributors[dev]);
}