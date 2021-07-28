const name = ("ValentineOSINT")
const version = ("0.0.1a");
const build = ("21.0728");
const channel = ("Alpha")
const fetch = require('node-fetch');
var fun = ["@ValentineOsint on Twitter", "Private data is...public", "Hurry up!", "Beep, Beep, Beep, Boop", "Call from...Anonymous", "GitBug, GitHub, GitBad, GitLab"];
var readline = require('readline');

console.clear();
console.log("_____________________________________________________________________________")
console.log("")
console.log("__      __   _            _   _             ____   _____ _____ _   _ _______");
console.log("\\ \\    / /  | | ", version, " | | (_) ", build, " / __ \\ / ____|_   _| \\ | |__   __|");
console.log(" \\ \\  / /_ _| | ___ _ __ | |_ _ _ __   ___| |  | | (___   | | |  \\| |  | |");
console.log("  \\ \\/ / _` | |/ _ \\ '_ \\| __| | '_ \\ / _ \\ |  | |\\___ \\  | | | . ` |  | |");
console.log("   \\  / (_| | |  __/ | | | |_| | | | |  __/ |__| |____) |_| |_| |\\  |  | |");
console.log("    \\/ \\__,_|_|\\___|_| |_|\\__|_|_| |_|\\___|\\____/|_____/|_____|_| \\_|  |_|");
console.log("                                          ", fun[parseInt(Math.random() * fun.length)]);
console.log("_____________________________________________________________________________")
console.log("")
console.log("[ 1] - Lookup                [ 2] - ")
console.log("[ 3] - About                 [ 4] - Exit")

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("You would: ", function (answer) {
  if (answer === "1") {
    console.log("")
    console.log("_____________________________________________________________________________")
    console.log("")
    console.log("[11] - Phone number                         [12] - IP checker")
    rl.question("Your choice: ", function (answer) {
      if (answer === "11") {
        console.log("")
        console.log("_____________________________________________________________________________")
        console.log("")
        console.log("Tips: Enter the number with the country code.")
        rl.question("Number is: ", function (answer) {
          fetch('https://www.infos-numero.com/ajax/NumberInfo?num=' + answer)
            .then(res => res.json())
            .then(console.clear())
            .then(console.log(""))
            .then(console.log("_____________________________________________________________________________"))
            .then(console.log(""))
            .then(console.log("Resume of the number: " + answer))
            .then(json => {
              console.log("Type:          " + json.info.type)
              console.log("Carrier:       " + json.info.carrier)
              console.log("Country:       " + json.info.ville)
              console.log("National:      " + json.info.national_1)
              console.log("International: " + json.info.e164)
            });
          rl.close();
        })
      } else if (answer === "12") {
        console.log("")
        console.log("_____________________________________________________________________________")
        console.log("")
        console.log("Tips: Enter the IPv4 number")
        rl.question("IP is: ", function (answer) {
          console.time()
          fetch('https://rest.db.ripe.net/search.json?query-string=' + answer + '&flags=no-referenced&flags=no-irt&flags=no-filtering&flags=resource')
            .then(res => res.json())
            .then(console.clear())
            .then(console.log(""))
            .then(console.log("_____________________________________________________________________________"))
            .then(console.log(""))
            .then(console.log("Resume of the IP: " + answer))
            .then(json => {
              console.table(json.objects.object[0].attributes.attribute)
              if (json.objects.object[1] !== undefined) {
                console.table(json.objects.object[1].attributes.attribute)
              }
              if (json.objects.object[0].attributes.attribute[3].name === 'org') {
                fetch('https://rest.db.ripe.net/ripe-grs/organisation/' + json.objects.object[0].attributes.attribute[3].value + '.json')
                  .then(res => res.json())
                  .then(json => {
                    console.table(json.objects.object[0].attributes.attribute)
                  })
              }
              console.timeEnd()
            });
          // fetch('https://extreme-ip-lookup.com/json/' + answer)
          //   .then(res => res.json())
          //   .then(json => {
          //     console.log("IP name:          " + json.ipName)
          //     console.log("IP type:          " + json.ipType)
          //     console.log("Service provider: " + json.isp)
          //     console.log("Organization:     " + json.org)
          //     console.log("Business name:    " + json.businessName)
          //     console.log("Business website: " + json.businessWebsite)
          //     console.log("Country:          " + json.country + " (" + json.countryCode + ")")
          //     console.log("Region:           " + json.region)
          //     console.log("City:             " + json.city)
          //     console.log("Latitude:         " + json.lat)
          //     console.log("Longitude:        " + json.lon)
          //   });
          rl.close();
        })
      }
    })
  } else if (answer === "2") {
    console.clear()
    console.log("")
    console.log("_____________________________________________________________________________")
    console.log("")
    console.log("More features coming soon...")
    rl.close();
  } else if (answer === "3") {
    var dt = new Date();
    console.clear()
    console.log("")
    console.log("_____________________________________________________________________________")
    console.log("")
    console.log("             ......................              " + " Time:              " + dt.toString())
    console.log("              :\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/::               " + " Name:              " + name)
    console.log(".              :\/\/\/\/\/\/\/\/\/\/\/\/:::::              . " + " Version:           " + version)
    console.log("\/.              :\/\/\/\/\/\/\/:::::::-              .: " + " Build:             " + build)
    console.log("\/\/.              :\/\/::::::::::-              .:: " + " Channel:           " + channel)
    console.log("\/\/\/.              :::::::::::-              `::: " + " Type:              Open-source")
    console.log("\/\/\/\/.              -::::::::-              `:::: " + " Repository:        https://github.com/ValentineOSINT")
    console.log("\/\/\/\/\/.              -::::::-              `::::: " + " Twitter:           @ValentineOsint")
    console.log("\/\/\/\/::.              -::::-              `:::::: " + " -------------------")
    console.log(":::::::.              -::-              `::::::: " + " Special thank for: Node-fetch")
    console.log("::::::::.              --              `::::-:-- " + "                    infos-numero.com (Phone lookup)")
    console.log(":::::::::.                            `:-------- " + "                    RIPE (IP lookup)")
    console.log("::::::::::.                          `---------- " + " -------------------")
    console.log(":::::::::::.                        `----------- " + " Build whith ❤ by:  Valentine")
    console.log("::::::::::::`                      `------------ ")
    console.log(":::::::::::::`                    `------------- ")
    console.log("::::::::::::::`                  `-------------- ")
    console.log(":::::::::::::::`                `--------------- ")
    console.log("::::::::::::----`              `---------------- ")
    console.log("::::::::-:-------`            `----------------- ")
    console.log("::::--------------`          `------------------ ")
    console.log("-------------------`        `------------------- ")
    console.log("--------------------`      `-------------------. ")
    console.log("---------------------`    `--------------....... ")
    console.log("-----------```````````    `````````````````````` ")
    rl.close();
  } else if (answer === "4") {
    console.clear()
    console.log("")
    console.log("_____________________________________________________________________________")
    console.log("")
    console.log("See you later :)")
    rl.close();
  } else {
    console.log("Error -> " + answer);
    rl.close();
  }
});