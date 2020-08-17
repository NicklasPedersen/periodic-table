let nobleGasses = {
    "[He]": "1s2",
    "[Ne]": "1s2 2s2 2p6",
    "[Ar]": "1s2 2s2 2p6 3s2 3p6",
    "[Kr]": "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6",
    "[Xe]": "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 5s2 5p6",
    "[Rn]": "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 5s2 5p6 4f14 5d10 6s2 6p6",
};
// function to convert electron notation from <shell><primary/secondary shell><number of electrons> to <number of electrons in this shell>
function reformatElectrons(atom: Atom) {
    let noble = atom.electronicConfiguration.split(" ")[0];
    if (nobleGasses.hasOwnProperty(noble)) {
        atom.electronicConfiguration = atom.electronicConfiguration.replace(noble, nobleGasses[noble]);
    }
    let shellNotations = atom.electronicConfiguration.split(" ");
    let shellAmount = parseInt(shellNotations[shellNotations.length - 1][0]);
    let shells: number[] = new Array(shellAmount).fill(0);

    // populate the shells array with amount of electrons in each shell
    for (let subShell of shellNotations) {
        let shellNumber = parseInt(subShell[0]) - 1;
        shells[shellNumber] += parseInt(subShell.substr(2));
    }
    atom.electronicConfiguration = shells.join(" ");
}

function reformatGroup(atom: Atom) {
    atom.groupBlock = atom.groupBlock.split(" ")[0];
}

export function reformat(atom: Atom) {
    reformatElectrons(atom);
    reformatGroup(atom);
    // The api returns empty string for synthetic elements
    if (!atom.standardState) {
        atom.standardState = "synthetic";
    }
}


export class Atom {
    atomicNumber: number;
    name: string;
    symbol: string;
    atomicMass: string;
    electronicConfiguration: string;
    groupBlock: string;
    standardState: string;
    meltingPoint: number;
    boilingPoint: number;
    bondingType: string;
    density: number;
    electronAffinity: number;
    electronegativity: number;
    ionRadius: string;
    ionizationEnergy: number;
    oxidationStates: string;
    vanDelWaalsRadius: number;
    yearDiscovered: number;
    atomicRadius: number;
}