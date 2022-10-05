// regex to find dates
const regex = {
    'dd/mm/yyyy': /(\d{1,2})\/(\d{1,2})\/(\d{4})/,
    'dd-mm-yyyy': /(\d{1,2})-(\d{1,2})-(\d{4})/,
    'dd.mm.yyyy': /(\d{1,2})\.(\d{1,2})\.(\d{4})/,
    'dd mm yyyy': /(\d{1,2})\s(\d{1,2})\s(\d{4})/,
    'ddmmyyyy': /(\d{1,2})(\d{1,2})(\d{4})/,
    'ddmmyy': /(\d{1,2})(\d{1,2})(\d{2})/,
    'yyyy/mm/dd': /(\d{4})\/(\d{1,2})\/(\d{1,2})/,
    'yyyy-mm-dd': /(\d{4})-(\d{1,2})-(\d{1,2})/,
    'yyyy.mm.dd': /(\d{4})\.(\d{1,2})\.(\d{1,2})/,
    'yyyy mm dd': /(\d{4})\s(\d{1,2})\s(\d{1,2})/,
    'yyyymmdd': /(\d{4})(\d{1,2})(\d{1,2})/,
    'dd-mon-yyyy': /(\d{1,2})-(\w{3})-(\d{4})/,
}

// Function to find all dates in a string
const findDates = (str) => {
    let dates = [];
    for (let key in regex) {
        let date = str.match(regex[key]);
        if (date) {
            dates.push({
                date: date[0],
                format: key
            });
        }
    }
    console.log(dates);
    return dates;
}

findDates('I was born on 12/12/1990 and my friend was born on 12-12-1990 and my other friend was born on 12.12.1990 and my other friend was born on 12 12 1990 and my other friend was born on 12121990 and my other friend was born on 121290 and my other friend was born on 1990/12/12 and my other friend was born on 1990-12-12 and my other friend was born on 1990.12.12 and my other friend was born on 1990 12 12 and my other friend was born on 19901212 and my other friend was born on 12-Dec-1990');
// Example output
/*
[
    { date: '12/12/1990', format: 'dd/mm/yyyy' },
    { date: '12-12-1990', format: 'dd-mm-yyyy' },
    { date: '12.12.1990', format: 'dd.mm.yyyy' },
    { date: '12 12 1990', format: 'dd mm yyyy' },
    { date: '12121990', format: 'ddmmyyyy' },
    { date: '1990', format: 'ddmmyy' },
    { date: '1990/12/12', format: 'yyyy/mm/dd' },
    { date: '1990-12-12', format: 'yyyy-mm-dd' },
    { date: '1990.12.12', format: 'yyyy.mm.dd' },
    { date: '1990 12 12', format: 'yyyy mm dd' },
    { date: '12121990', format: 'yyyymmdd' },
    { date: '12-Dec-1990', format: 'dd-mon-yyyy' }
  ]
*/