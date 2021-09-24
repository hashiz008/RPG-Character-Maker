let male =
    {
    mage:"https://recursionist.io/img/dashboard/lessons/quickstart/male-mage.png",
    warrior:"https://recursionist.io/img/dashboard/lessons/quickstart/male-warrior.png",
    hero:"https://recursionist.io/img/dashboard/lessons/quickstart/male-hero.png"
   }
let female =
    {
    mage:"https://recursionist.io/img/dashboard/lessons/quickstart/female-mage.png",
    warrior:"https://recursionist.io/img/dashboard/lessons/quickstart/female-warrior.png",
    hero:"https://recursionist.io/img/dashboard/lessons/quickstart/female-hero.png"
   }

    let app = new Vue({
        el:"#game",
        data: {
            name:"",
            sex:"male",
            profession:"Hero",
            traits:"Everyman",
        },
        computed:{
            image() {
                if (this.sex == "male" && this.profession == "Hero") {
                    return male["hero"]
                } else if (this.sex == "male" && this.profession == "Warrior")  {
                    return male["warrior"]
                } else if (this.sex == "male" && this.profession == "Mage")  {
                    return male["mage"]
                } else if (this.sex == "female" && this.profession == "Hero")  {
                    return female["hero"]
                } else if (this.sex == "female" && this.profession == "Warrior")  {
                    return female["warrior"]
                } else if (this.sex == "female" && this.profession == "Mage")  {
                    return female["mage"]
                }
            },
            strength() {
                if (this.traits == "Brave" && this.profession == "Hero") return 10 + 1;
                else if (this.sex == "female" && this.traits == "Tomboy") return 10 + 1;
                else return 10;
            },
            agility() {
                console.log(this.traits == "Bat out of hell");
                if (this.traits == "Bat out of hell") return 10 + 4;
                else if (this.traits == "Brave" && this.profession == "Hero") return 10 + 1;
                else if (this.sex == "female" && this.traits == "Tomboy") return 10 + 1;
                else return 10;
            },
            luck() {
                if (this.traits == "Brave" && this.profession == "Hero") return 10 + 2;
                else if (this.sex == "male" && this.traits == "Lucky devil") return 10 + 5;
                else return 10
            }
        }
   })