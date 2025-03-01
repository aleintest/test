function calcularDano() {
    let atk = parseFloat(document.getElementById("atk").value);
    let cdmg = parseFloat(document.getElementById("cdmg").value);
    let srdLrd = parseFloat(document.getElementById("srdLrd").value);
    let pmpierce = parseFloat(document.getElementById("pmpierce").value);
    let stability = parseFloat(document.getElementById("stability").value);
    let dte = parseFloat(document.getElementById("dte").value);
    let element = parseFloat(document.getElementById("element").value) || 0;
    let fUnsheate = parseFloat(document.getElementById("fUnsheate").value);
    let unsheate = parseFloat(document.getElementById("unsheate").value);
    let lvlpj = parseFloat(document.getElementById("lvlpj").value);
    let mobdef = parseFloat(document.getElementById("mobdef").value);
    let mobresist = parseFloat(document.getElementById("mobresist").value);
    let lvlmob = parseFloat(document.getElementById("lvlmob").value);
    let skillConstant = parseFloat(document.getElementById("skillConstant").value);
    let skillMultiplier = parseFloat(document.getElementById("skillMultiplier").value);
    let skillModifier = parseFloat(document.getElementById("skillModifier").value);
    let proration = parseFloat(document.getElementById("proration").value);
    let comboTag = document.getElementById("comboTag").value;

    let smite = 50;
    let atkCrit = atk * 50 / 100 + atk;
    let dmgBase = (atkCrit + lvlpj - lvlmob) * (100 - mobresist) / 100;
    let tdef = mobdef * (1 - pmpierce / 100);
    let dmgFinal1, dmgFinal2, dmgFinal3, dmgFinal4, dmgFinal5, dmgFinal6, dmgFinal7, dmgFinal8, dmgFinal9, dmgFinal;

    let dteTotal = dte / 100;
    if (element > 0) {
        dteTotal += element / 100;
    }

    if (unsheate >= 1) {
        dmgFinal1 = dmgBase - tdef;
        dmgFinal2 = dmgFinal1 + skillConstant;
        dmgFinal3 = dmgFinal2 + fUnsheate;
        dmgFinal4 = dmgFinal3 * (cdmg / 100);
        dmgFinal5 = dmgFinal4 * dteTotal + dmgFinal4;
        dmgFinal6 = dmgFinal5 * skillMultiplier;
        dmgFinal7 = dmgFinal6 * (1 + unsheate / 100) + dmgFinal6;
        dmgFinal8 = dmgFinal7 * (stability / 100);
        dmgFinal9 = dmgFinal8 * (1 + proration / 100);
        if (comboTag === "smite") {
            dmgFinal = dmgFinal9 * (1 + skillModifier / 100) * (1 + srdLrd / 100) * (1 + smite / 100);
            document.getElementById("resultado").innerText = "Daño total: " + dmgFinal.toFixed(1);
        } else {
            dmgFinal = dmgFinal9 * (1 + skillModifier / 100) * (1 + srdLrd / 100) * 1;
            document.getElementById("resultado").innerText = "Daño final: " + dmgFinal.toFixed(1);
        }
    } else {
        dmgFinal1 = dmgBase - tdef;
        dmgFinal2 = dmgFinal1 + skillConstant;
        dmgFinal3 = dmgFinal2 * (cdmg / 100);
        dmgFinal4 = dmgFinal3 * dteTotal + dmgFinal3;
        dmgFinal5 = dmgFinal4 * skillMultiplier;
        dmgFinal6 = dmgFinal5 * (stability / 100);
        dmgFinal7 = dmgFinal6 * (1 + proration / 100);
        if (comboTag === "smite") {
            dmgFinal = dmgFinal7 * (1 + skillModifier / 100) * (1 + srdLrd / 100) * (1 + smite / 100);
            document.getElementById("resultado").innerText = "Daño total: " + dmgFinal.toFixed(1);
        } else {
            dmgFinal = dmgFinal7 * (1 + skillModifier / 100) * (1 + srdLrd / 100) * 1;
            document.getElementById("resultado").innerText = "Daño final: " + dmgFinal.toFixed(1);
        }
    }
}