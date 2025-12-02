import fs from "node:fs";

try {
  const data = fs.readFileSync("../input.txt", "utf8").toString().split(",");
  let result = 0;

  for( let line of data){
    const range = line.split("-");

    for(let i = parseInt(range[0]); i <= parseInt(range[1]); i++){
        let check = i.toString();
        if((check + check).slice(1, -1).includes(check)){
            result += i;
        }
    }
  }
  
  console.log(result);

}catch(err){
    console.log(err);
}