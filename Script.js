var Momentum = document.getElementById("WriteMomentum");
var MuonEnergy = document.getElementById("WriteMuonEnergy");
var ShardsEnergy = document.getElementById("WriteShardsEnergy");
var Angle = document.getElementById("WriteAngle");


function CalculateTotalEnergy() {
    return Number(MuonEnergy.value) + Number(ShardsEnergy.value);
}

function CalculateConservation() {
    totalEnergy = CalculateTotalEnergy();
    ConservationResult = totalEnergy - Number(Momentum.value);


    if (ConservationResult < 100) {
        result = "Os valores de energia e momento são aproximadamente compatíveis. Isso indica que as leis de conservação são respeitadas. A pequena diferença ocorre porque nem todas as partículas produzidas na colisão são detectadas ou analisadas.";
    } 
    else {
        result = "Há uma diferença significativa entre energia e momento. Isso pode ocorrer porque parte da energia foi transportada por partículas não detectadas ou não consideradas na analysis.";
    }
    document.getElementById("ConservationResults").innerHTML = result;
}

function DegreeAnalises(Angle) {
    if (Angle.value < 10) {
        result = "Pequeno desvio. O múon permaneceu quase na mesma direção do neutrino.";
    }
    else {
        result = "Grande desvio. O múon sofreu um desvio maior durante a colisão.";
    }
    document.getElementById("DeflectionResult").innerHTML = result;
}


function shardsAnalysis(ShardsEnergy) {
    if (ShardsEnergy.value < 300) {
        result = "Poucos estilhaços. Pouca energia foi transferida ao núcleo.";
    }
    else {
        result = "Muitos estilhaços. Grande parte da energia foi transferida ao núcleo.";
    }
    document.getElementById("ShardsResult").innerHTML = result;
}

function conclusion() {
    if (Number(MuonEnergy.value) > Number(ShardsEnergy.value)) {
        result = "Provável interação de um neutrino do múon (νμ). A maior parte da energia permaneceu com o múon.";
    }
    else {
        result = "Provável interação de um neutrino do múon (νμ) com maior transferência de energia para o núcleo.";
    }
    document.getElementById("conclusionResult").innerHTML = result;
}

function PrintResults() {

    document.getElementById("result-value-momentum").textContent = Momentum.value;
    document.getElementById("result-value-total-energy").textContent = CalculateTotalEnergy();
    document.getElementById("result-value-estilhaços").textContent = ShardsEnergy.value;
    document.getElementById("result-value-angle").textContent = Angle.value;
    changeresponsebars();
    CalculateConservation();
    DegreeAnalises(Angle);
    shardsAnalysis(ShardsEnergy);
    conclusion();


}


function changeresponsebars() {
    document.getElementById("response-bar1").style.width = "100%";
    document.getElementById("response-bar2").style.width = "100%";
    document.getElementById("response-bar3").style.width = "100%";
    document.getElementById("response-bar4").style.width = "100%";


}


function CheckInputs() {

    if (
        Momentum.value !== "" &&
        MuonEnergy.value !== "" &&
        ShardsEnergy.value !== "" &&
        Angle.value !== ""
    ) {
        PrintResults();
    }

}

function ChangeBar() {

    if (
        Momentum.value !== "" 
    ) {
        document.getElementById("bar1").style.width = "100%";
    } else {
        document.getElementById("bar1").style.width = "0%";
    }

     if (
        MuonEnergy.value !== "" 
    ) {
        document.getElementById("bar2").style.width = "100%";
    } else {
        document.getElementById("bar2").style.width = "0%";
    }

    if (
        ShardsEnergy.value !== "" 
    ) {
        document.getElementById("bar3").style.width = "100%";
    } else {
        document.getElementById("bar3").style.width = "0%";
    }

    if (
        Angle.value !== "" 
    ) {
        document.getElementById("bar4").style.width = "100%";
    } else {
        document.getElementById("bar4").style.width = "0%";
    }

}


Momentum.addEventListener("input", ChangeBar);
MuonEnergy.addEventListener("input", ChangeBar);
ShardsEnergy.addEventListener("input", ChangeBar);
Angle.addEventListener("input", ChangeBar);
Momentum.addEventListener("input", CheckInputs);
MuonEnergy.addEventListener("input", CheckInputs);
ShardsEnergy.addEventListener("input", CheckInputs);
Angle.addEventListener("input", CheckInputs);