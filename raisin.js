const raisinAlarm = function(cookie) {
    let result = [];
    for (let ing of cookie){
        if (ing.includes("🍇")){
            result.push("Raisin alert!");
        } else {
        result.push("All Good");
      }  
    }
    return result;          
  };
  console.log(raisinAlarm([["🍫", "🍫", "🍇", "🍫"]]));
  console.log(raisinAlarm([["🍫", "🍇", "🍫", "🍫", "🍇"]]));
  console.log(raisinAlarm([["🍫", "🍫", "🍫"]]));