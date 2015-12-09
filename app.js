function toTitleCase(str) {
    return str.replace(/[\wÀÈÌÒÙàèìòùÁÉÍÓÚÝáéíóúýÂÊÎÔÛâêîôûÃÑÕãñõÄËÏÖÜŸäëïöüŸ¡¿çÇŒœßØøÅåÆæÞþÐð]+/g, function(txt){
        console.log(txt);
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

function toLower() {
    var val = document.getElementById('input_text').value;
    document.getElementById('result').innerHTML = toTitleCase(val);
}

function appLoad() {
    document.getElementById('input_text').onchange = toLower;
}

window.onload = appLoad;
