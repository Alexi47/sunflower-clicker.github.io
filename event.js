let sunflowerCount = 1;
let sunflower = 0;
let upgradeCost = 10;
let sunflowerPerSec = 0;
let upgradeCostPerSec = 100;

document.getElementById("counter").textContent = sunflowerCount;
document.getElementById("farming").textContent = "Sunflower : " + sunflower;
upgradeCost = document.getElementById("upgradeCost").textContent = upgradeCost;
upgradeCostPerSec = document.getElementById("upgradeCost2").innerHTML = upgradeCostPerSec;



function farmer() {
    sunflower = sunflower + sunflowerCount;
    document.getElementById("farming").textContent = "Sunflower : " + sunflower;
}


function upgrade() {
    if (sunflower >= upgradeCost) {
        sunflower -= upgradeCost;
        sunflowerCount++;
        upgradeCost = Math.ceil(upgradeCost * 1.5);
        document.getElementById("counter").textContent = sunflowerCount;
        upgradeCost = document.getElementById("upgradeCost").innerHTML = upgradeCost;
    }
}

function upgrade2(){
    if (sunflower >= upgradeCostPerSec) {
        sunflower -= upgradeCostPerSec;
        sunflowerPerSec++;
        upgradeCostPerSec = Math.ceil(upgradeCostPerSec * 1.5);
        document.getElementById("counterSec").innerHTML = sunflowerPerSec;
        upgradeCostPerSec = document.getElementById("upgradeCost2").innerHTML = upgradeCostPerSec;

}
}

function auto(){
    sunflower = sunflower + sunflowerPerSec;
    document.getElementById("farming").textContent = "Sunflower : " + sunflower;

}

setInterval(auto, 1000);


