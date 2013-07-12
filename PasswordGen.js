function KPassGenerator_get(id) {
    return document.getElementById(id);
}
function KPassGenerator_clicked() {
    var pass = "";
    var size = Number(KPassGenerator_get("KPassGenerator-selLength").value);
    switch (Number(KPassGenerator_get("KPassGenerator-selType").value)) {
        case 0:
            pass = KPassGenerator_getPassword(size, true, false, false, false, false);
            break;
        case 1:
            pass = KPassGenerator_getPassword(size, false, true, false, false, false);
            break;
        case 2:
            pass = KPassGenerator_getPassword(size, false, true, true, false, false);
            break;
        case 3:
            pass = KPassGenerator_getPassword(size, true, true, false, false, false);
            break;
        case 4:
            pass = KPassGenerator_getPassword(size, true, true, true, false, false);
            break;
        case 5:
            pass = KPassGenerator_getPassword(size, true, true, false, true, false);
            break;
        case 6:
            pass = KPassGenerator_getPassword(size, true, true, true, true, false);
            break;
        case 7:
            pass = KPassGenerator_getPassword(size, true, true, true, false, true);
            break;
        case 8:
            pass = KPassGenerator_getPassword(size, true, true, true, true, true);
            break;
    }
    KPassGenerator_get("KPassGenerator-pass").value = pass;
    if (KPassGenerator_focused) KPassGenerator_focused.value = pass;
}
function KPassGenerator_getRandomNum(lbound, ubound) {
    return (Math.floor(Math.random() * (ubound - lbound)) + lbound);
}
function KPassGenerator_getRandomChar(number, lower, upper, other, space) {
    var numberChars = "0123456789";
    var lowerChars = "abcdefghijklmnopqrstuvwxyz";
    var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var otherChars = "`~!@#$^&*()-_=+[{]}\\|;:'\",<.>/?";
    var spaceChars = " " + " " + " " + " " + " " + " ";
    var charSet = "";
    if (number == true) charSet += numberChars;
    if (lower == true) charSet += lowerChars;
    if (upper == true) charSet += upperChars;
    if (other == true) charSet += otherChars;
    if (space == true) charSet += spaceChars;
    return charSet.charAt(KPassGenerator_getRandomNum(0, charSet.length));
}
function KPassGenerator_getPassword(length, Number, Lower, Upper, Other, Spaces) {
    var rc = "";
    for (var idx = 0; idx < length; ++idx) {
        rc = rc + KPassGenerator_getRandomChar(Number, Lower, Upper, Other, Spaces);
    }
    return rc;
}
function KPassGenerator_close() {
    if (KPassGenerator_get("KPassGenerator-div")) {
        document.body.removeChild(KPassGenerator_get("KPassGenerator-div"));
        return true;
    } else {
        return false;
    }
}
function addFocus() {
    var e, i = 0;
    while (e = document.getElementsByTagName('INPUT')[i++]) {
        if (e.type == 'text' || e.type == 'password') e.onfocus = function () {
            KPassGenerator_focused = this
        }
    }
    i = 0;
    while (e = document.getElementsByTagName('TEXTAREA')[i++]) {
        e.onfocus = function () {
            KPassGenerator_focused = this
        }
    }
}
if (!KPassGenerator_close()) {
    KPassGenerator_focused = false;
    addFocus();
    var div = document.createElement("div");
    div.setAttribute("id", "KPassGenerator-div");
    div.innerHTML = "<style> #KPassGenerator-div, #KPassGenerator-div *{border: none 0px black;background-color: gray; background-image:none !important;text-decoration:none !important; font-family:Georgia, \"Courier New\", \"New Roman\", Verdana, Serif !important;font-size: 11px !important; color: #000 !important;text-align:center !important; padding: 0;margin: 0; height: 20px;font-weight:normal !important; text-transform:none !important;vertical-align:baseline !important; z-index: 9999 !important;}#KPassGenerator-div{ position:absolute;position: fixed; right:10px;top:10px; width:530px;height:32px; background:rgba(000,000,000, 0.8);border: rgba(200,200,200,0.5) 3px solid; -moz-border-radius: 5px;-webkit-border-radius: 5px; padding: 0 3px;}#KPassGenerator-div #KPassGenerator-pass{border: solid 1px #111;background: rgba(255,255,255, 0.5); width: 300px;padding: 1px; height: 17px;}#KPassGenerator-div #KPassGenerator-selType, #KPassGenerator-div #KPassGenerator-selLength{border: 2px gray inset;width: 50px; margin-left: 5px;height: 20px; position:relative;top: 1px;}#KPassGenerator-div #KPassGenerator-generate, #KPassGenerator-div #KPassGenerator-close{border: 2px gray outset;margin-left:5px; width: 94px;margin-top: 4px; position:relative;top: 2px;}#KPassGenerator-div #KPassGenerator-generate:active, #KPassGenerator-div #KPassGenerator-close:active{border-style: inset;top: 1px;}</style><input type=\"text\" id=\"KPassGenerator-pass\" /><select id=\"KPassGenerator-selType\"><option value=\"0\">9</option><option value=\"1\">a</option><option value=\"2\">aA</option><option value=\"3\">a9</option><option value=\"4\" selected=\"selected\">aA9</option><option value=\"5\">a9#</option><option value=\"6\">aA9#</option><option value=\"7\">aA9_</option><option value=\"8\">aA9#_</option></select><select id=\"KPassGenerator-selLength\"></select><input type=\"button\" onclick=\"KPassGenerator_clicked()\" id=\"KPassGenerator-generate\" value=\"Generer\" />";
    document.body.appendChild(div);
    for (var i = 3; i < 46; i++) {
        var opt = document.createElement("option");
        opt.setAttribute("value", i);
        opt.innerHTML = i;
        KPassGenerator_get("KPassGenerator-selLength").appendChild(opt);
    }
    KPassGenerator_get("KPassGenerator-selLength").childNodes[9].setAttribute("selected", "selected");
}
