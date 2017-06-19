var modernStack = '"Lato", "HelveticaNeue", "Helvetica", sans-serif';
var readingStack = '"Georgia", "AmericanTypewriter", "Garamond", serif';


function generalCleanup() {
    console.log("cleaning up page");
    removeAsides();
}

function removeAsides() {
    console.log("removing asides");
    var asides = document.getElementsByTagName("aside");
    for (var elem in asides) {
        if (asides.hasOwnProperty(elem)) {
            asides[elem].style.display= "none";
        }
    }
}

function editH1Headings() {
    console.log("editing h1");
    var headings = document.getElementsByTagName("H1");
    for (var elem in headings) {
        if (headings.hasOwnProperty(elem)) {
            headings[elem].style.color = "#000000";
            headings[elem].style.textAlign = "left";
            headings[elem].style.fontSize = "28";
            headings[elem].style.fontWeight = 700;
            headings[elem].style.width = "100%";
            headings[elem].style.margin = "20px 0px";
            headings[elem].style.fontFamily = modernStack;
            // changeAllBackgrounds(headings[elem]);
        }
    }
}

function changeAllBackgrounds(node) {
    while (node.parentNode !== undefined) {
        node.parentNode.style.background = "#FFF";
        node = node.parentNode;
    }
}

function editH2Headings() {
    console.log("editing h2");
    var headings = document.getElementsByTagName("H2");
    for (var elem in headings) {
        if (headings.hasOwnProperty(elem)) {
            headings[elem].style.color = "#111";
            headings[elem].style.textAlign = "left";
            headings[elem].style.fontSize = "24";
            headings[elem].style.fontWeight = 600;
            headings[elem].style.margin = "20px 0px";
            headings[elem].style.width = "100%";
            headings[elem].style.fontFamily = modernStack;
        }
    }
}

function editH3Headings() {
    console.log("editing h3");
    var headings = document.getElementsByTagName("H3");
    for (var elem in headings) {
        if (headings.hasOwnProperty(elem)) {
            headings[elem].style.color = "#222";
            headings[elem].style.textAlign = "left";
            headings[elem].style.fontSize = "21";
            headings[elem].style.fontWeight = 500;
            headings[elem].style.width = "100%";
            headings[elem].style.margin = "10px 0px";
            headings[elem].style.fontFamily = modernStack;
        }
    }
}

function editH4Headings() {
    console.log("editing h4");
    var headings = document.getElementsByTagName("H4");
    for (var elem in headings) {
        if (headings.hasOwnProperty(elem)) {
            headings[elem].style.color = "#333";
            headings[elem].style.textAlign = "left";
            headings[elem].style.width = "100%";
            headings[elem].style.fontWeight = 400;
            headings[elem].style.fontSize = "18";
            headings[elem].style.margin = "10px 0px";
            headings[elem].style.fontFamily = modernStack;
        }
    }
}

function editParagraphs() {
    console.log("editing P");
    var paragraphs = document.getElementsByTagName("P");
    for (var elem in paragraphs) {
        if (paragraphs.hasOwnProperty(elem)) {
            paragraphs[elem].style.color = "#444";
            paragraphs[elem].style.width = "100%";
            paragraphs[elem].style.textAlign = "justify";
            paragraphs[elem].style.fontWeight = 400;
            paragraphs[elem].style.fontSize = "1.1em";
            paragraphs[elem].style.lineHeight= "1.7em";
            paragraphs[elem].style.fontFamily = modernStack;
        }
    }
}

function editImages() {
    console.log("editing Images");
}

function editLists() {
    console.log("editing UL");
    var unorderedLists = document.getElementsByTagName("UL");
    for (var elem in unorderedLists) {
        if (unorderedLists.hasOwnProperty(elem)) {
            unorderedLists[elem].style.listStyleType = "none";
            unorderedLists[elem].style.borderRadius = "6px";
            unorderedLists[elem].style.webkitBorderRadius = "6px";
            unorderedLists[elem].style.padding = "10px";
        }
    }

    var orderedLists = document.getElementsByTagName("OL");
    for (var elem in orderedLists) {
        if (orderedLists.hasOwnProperty(elem)) {
            orderedLists[elem].style.listStyleType = "ne";
            orderedLists[elem].style.borderRadius = "6px";
            orderedLists[elem].style.webkitBorderRadius = "6px";
            orderedLists[elem].style.padding = "10px";
        }
    }

    var listItems = document.getElementsByTagName("LI");
    for (var elem in listItems) {
        if (listItems.hasOwnProperty(elem)) {
            listItems[elem].style.background = "none";
            listItems[elem].style.color = "#444";
        }
    }
}


generalCleanup();
editH1Headings();
editH2Headings();
editH3Headings();
editH4Headings();
editParagraphs();
editImages();
editLists();
