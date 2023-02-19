    /*  
    this method will accept array of words Ex\
    dataArr=["abc", "def", ....];
    spliChar= is the character that will be splilting the array based on
    Ex: to get all words in "dataArr"
    spliChar=" "; which will return array of words separated by space
    Ex: spliChar=""
    which will return array of single charcaters in it
    that is unique
    */

    /* facts
    First- there is  6235 Aya 
   Second - possible of word with redundant =82,482
   remove duplicate from array 
   1-using Set . uniqArray= [... new Set(redundArr)]; result :17,630
   2- using reduce  result = 17,636
   3- using 
   4- busing forloop find result : 17742
    */


    /*

        //method 1 using set super 1000 time fast comparing to other methods it  take 4 while other take ~= 2,000
   // let t1 = performance.now();
    // const quranWordArr1 = [...new Set(resultArr)];
   // return quranWordArr1; // End of the function

        // method 2 using  reduce
        t1 = performance.now();
        const quranWordArr2 = quranWordArr.reduce((unique, item) => {
          return unique.includes(item) ? unique : [...unique, item];
        });
    
        // method 3 using  filter   
        t1 = performance.now();
        const quranWordArr3 = quranWordArr.filter((item, index) => quranWordArr.indexOf(item) != index)
    
        //method 4 using find 
        t1 = performance.now();
        let quranWordArr4 = [""];
        for (let item of quranWordArr) {
          if (!quranWordArr4.find(d => d === item)) {
            quranWordArr4.push(item);
          }
        }
    */