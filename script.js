function calculateIMC() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('result').innerHTML = "Por favor, insira um peso e altura válidos.";
        return;
    }

    var imc = weight / (height * height);

    var result = "Seu IMC é: " + imc.toFixed(2) + ". ";
    if (imc < 18.5) {
        result += "Você está abaixo do peso.";
    } else if (imc < 25) {
        result += "Você está com peso normal.";
    } else if (imc < 30) {
        result += "Você está com sobrepeso.";
    } else {
        result += "Você está obeso.";
    }

    document.getElementById('result').innerHTML = result;
}