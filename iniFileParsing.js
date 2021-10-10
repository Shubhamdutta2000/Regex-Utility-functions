function parseINIFile(string) {
    // Start with an object to hold all the top-level fields
    let finalResult = {};
    let section = finalResult;

    // after splitting the string we've to iterate to find the match
    string.split(/\r?\n/).forEach(line => {
      let match;
      if (match = line.match(/^(\w+)=(.*)$/)) {
        section[match[1]] = match[2];
      } else if (match = line.match(/^\[(.*)\]$/)) {
        section = finalResult[match[1]] = {};
      } else if (!/^\s*(;.*)?$/.test(line)) {
        throw new Error("Line '" + line + "' is not valid.");
      }
    });
    return finalResult;
  }
  
  console.log(parseINIFile(`
  name=Snehomoy
  [address]
  city=Kolkata`));