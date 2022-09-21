const loopyLighthouse = function(range, multiple, words) {
  let variable = range[0];
  while (variable <= range[1]) {
    if ((variable % multiple[0] === 0) & (variable % multiple[1] === 0)) {
      console.log(`${words[0]}${words[1]}`);
    } else if (variable % multiple[0] === 0) {
      console.log(`${words[0]}`);
    } else if (variable % multiple[1] === 0) {
      console.log(`${words[1]}`);
    } else {
      console.log(variable);
    }
    variable++;
  }
};
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
