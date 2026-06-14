var FcDevTeam = [
    // format is: credit(name, image url, role, socials, custom font if any)
    credit("guy with longg name", "assets/test.jpg", "Web Developer", "", "Quake"),
    credit("guy with longg name", "assets/test.jpg", "tester", "", "Frak"),
    credit("guy with longg name", "assets/test.jpg", "tester", "", "AndyBold"),
    credit("guy with longg name", "assets/test.jpg", "tester", "", "ComicSans"),
    credit("guy with longg name", "assets/test.jpg", "tester", "")
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