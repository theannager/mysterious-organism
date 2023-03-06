// Returns a random DNA base
const returnRandBase = () => {
const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
const newStrand = [];
for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
}
return newStrand;
};

//Factory function
const pAequorFactory = (specimenNum, dna) => {
return {
    specimenNum,
    dna,

    //changes 1 element in the array to an unlike base
    mutate() {
      const randIndex = Math.floor(Math.random() * this.dna.length);
    let newBase = returnRandBase();
    while (this.dna[randIndex] === newBase) {
        newBase = returnRandBase();
        //will keep looping until this.dna[randIndex] != newBase
    }
    this.dna[randIndex] = newBase;
    return this.dna;
    },

    //compares current dna with passed in dna
    compareDNA(anotherPAequor) {
    let instances = 0;
    for (i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === anotherPAequor.dna[i]) {
        instances += 1;
        } else {
        instances;
        }
    };
      let percentage = ((instances / this.dna.length) * 100).toFixed(2);
    console.log(
        `Specimen ${this.specimenNum} and Speciman ${anotherPAequor.specimenNum} have ${percentage}% DNA in common`
    );
    },

    //checks for 60% C and G bases to survive
    willLikelySurvive() {
    let basesCAndG = 0;
    for (i=0; i<this.dna.length; i++){
        if (this.dna[i]==='C' || this.dna[i]==='G'){
        basesCAndG += 1
        } else basesCAndG;
    };
    if ((basesCAndG/this.dna.length)*100 <= 60){
        return false;
    } else {
        return true;
    };
    },
};
};

  //creates array of 30 specimens likely to survive
const canSurvive = () => {
const survivors = [];
for (let i = 0 /*let is super important here*/; survivors.length <30; i++){
    let specimen = pAequorFactory(i, mockUpStrand());
    if (specimen.willLikelySurvive()){
    survivors.push(specimen);
    } 
} return survivors;
};  

//console.log(canSurvive());

//console.log(pAequorFactory(1, mockUpStrand()));
//const test1 = pAequorFactory(1, mockUpStrand());
//console.log(test1);
//console.log(test1.willLikelySurvive());
//const test2 = test1.mutate();
//console.log(test2);
//const test3 = pAequorFactory(3, mockUpStrand());
//console.log(test3);
//test1.compareDNA(test3);
