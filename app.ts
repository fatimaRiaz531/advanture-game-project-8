import chalk from "chalk";
import inquirer from "inquirer";
class Player{
    name:string;
    fuel:number =100;
    constructor(name: string){
        this.name = name;
    }
    fuelDecrease(){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
    fuelIncrease(){
        this.fuel = 100
    }

}
class Opponent{
    name:string
    fuel:number =100
    constructor(name: string){
        this.name = name
    }

}
// players name
let player = await inquirer.prompt({
    type:"input",
    name:"name",
    message:"Please Enter Your Name:"
})
let playerOpponent = await inquirer.prompt({
    type:"list",
    name:"select",
    message:"Select your opponent",
    choices:["Skeleton","Assassin","Zombie"]
})
//  gather data
let p1 = new Player(player.name)
let o1 = new Opponent(playerOpponent.select)

// skeleton
do{
    if(playerOpponent.select ==="Skeleton"){
        let ask = await inquirer.prompt({
        type:"list",
        name:"opt",
        message:"Select your opponent",
        choices:["Attack","Drink Portion","Run for your life.."],
    });

    if(ask.opt == "Attack"){
        let num = (Math.random() * 2 )
        if (num > 0) {
            p1.fuelDecrease()
            console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
            console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
            if (p1.fuel <= 0){
            console.log(chalk.red.bold.italic("You loose , better luck next time"))
            process.exit()


            }
        }
        if (num <=0) {
            p1.fuelDecrease()
            console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`))
            console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))
            if (p1.fuel <= 0){
                console.log(chalk.green.bold.italic("You win"))
                process.exit()
            
        }
    }
    if(ask.opt == "Drink Portion"){
        p1.fuelIncrease()
        console.log(chalk.bold.italic.green(`you drink health portion your fuel is ${p1.fuel}`))
         }

    if(ask.opt == "Run for your life.."){
    console.log(chalk.red.bold.italic("You loose , better luck next time"))
    process.exit()
    }
}

// assasin
    }
    if(playerOpponent.select === "Assassin"){
        let ask = await inquirer.prompt({
        type:"list",
        name:"opt",
        message:"Select your opponent",
        choices:["Attack","Drink Portion","Run for your life.."],
    });

    if(ask.opt == "Attack"){
        let num = (Math.random() * 2 )
        if (num > 0) {
            p1.fuelDecrease()
            console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
            console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
            if (p1.fuel <= 0){
            console.log(chalk.red.bold.italic("You loose , better luck next time"))
            process.exit()


            }
        }
        if (num <=0) {
            p1.fuelDecrease()
            console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`))
            console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))
            if (p1.fuel <= 0){
                console.log(chalk.green.bold.italic("You win"))
                process.exit()
            
        }
    }
    if(ask.opt == "Drink Portion"){
        p1.fuelIncrease()
        console.log(chalk.bold.italic.green(`you drink health portion your fuel is ${p1.fuel}`))
         }

    if(ask.opt == "Run for your life.."){
    console.log(chalk.red.bold.italic("You loose , better luck next time"))
    process.exit()
    }
}

// zombie
    }
    if(playerOpponent.select === "Zombie"){
        let ask = await inquirer.prompt({
        type:"list",
        name:"opt",
        message:"Select your opponent",
        choices:["Attack","Drink Portion","Run for your life.."],
    });

    if(ask.opt == "Attack"){
        let num = (Math.random() * 2 )
        if (num > 0) {
            p1.fuelDecrease()
            console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
            console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
            if (p1.fuel <= 0){
            console.log(chalk.red.bold.italic("You loose , better luck next time"))
            process.exit()


            }
        }
        if (num <=0) {
            p1.fuelDecrease()
            console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`))
            console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))
            if (p1.fuel <= 0){
                console.log(chalk.green.bold.italic("You win"))
                process.exit()
            
        }
    }
    if(ask.opt == "Drink Portion"){
        p1.fuelIncrease()
        console.log(chalk.bold.italic.green(`you drink health portion your fuel is ${p1.fuel}`))
         }

    if(ask.opt == "Run for your life.."){
    console.log(chalk.red.bold.italic("You loose , better luck next time"))
    process.exit()
    }
}
    }
}
while(true)
