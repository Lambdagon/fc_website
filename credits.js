var FcDevTeam = [
    // format is: credit(name, image url, role, socials, custom font if any)
    credit("Vvis", "assets/credits/vvis.png", "Project Lead", "", "futurot"),
    credit("SaintSoftware", "assets/credits/saintsoftware.jpg", "Project Co-Lead", "", "Frak"),
    credit("Average_Medal_Enjoyer", "assets/credits/medal.jpg", "Project Co-Lead, Lead Mapper", "", "ComicSans"),
    credit("ArgGuard", "assets/credits/argguard.jpg", "Programmer", "", ""),
    credit("Gordon Freakman", "assets/credits/freakman.jpg", "Programmer, Modeller", "", ""),
    credit("YOW", "assets/credits/yow.gif", "Programmer, Mapper", "", "yow"),
    credit("Tyro (Xerin)", "assets/credits/xerin.jpg", "Mapper", "", ""),
    credit("Zeldaboy14", "assets/credits/zelda.jpg", "Programmer", "", ""),
    credit("Crowbar", "assets/credits/crowbar.jpg", "Artist", "", "AndyBold"),
    credit("DudeTheNinja", "assets/credits/dudetheninja.jpg", "Modeller", "", ""),
    credit("Spyguy26", "assets/credits/spyguy.jpg", "Programmer, Modeller", "", ""),
    credit("Hotpockette", "assets/credits/hotpockette.jpg", "Animator", "", ""),
    credit("Fyzure", "assets/credits/fyzure.jpg", "Animator", "", "")
];

var Contributors = [
	credit("ShiroDkxtro2", "assets/credits/shiro.jpg", "LUX, Shaders", "", ""),
];

// append dev team
for (var dev = 0; dev < FcDevTeam.length; dev++) {
    document.getElementById("fcdevs").appendChild(FcDevTeam[dev]);
}

// append contributors
for (var dev = 0; dev < Contributors.length; dev++) {
    document.getElementById("contributors").appendChild(Contributors[dev]);
}