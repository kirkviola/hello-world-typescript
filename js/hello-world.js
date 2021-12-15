"use strict";
{
    var hw_1 = "Hello Typescript world!";
    var name_1 = "Matt";
    console.log(name_1, hw_1);
    var loaded = function () {
        var hww = document.getElementById("hww");
        if (hww !== null) {
            hww.innerText = name_1 + " " + hw_1;
        }
    };
}
