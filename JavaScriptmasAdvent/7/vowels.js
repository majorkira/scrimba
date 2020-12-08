function countVowelConsonant(str) {
  let regVowels = new RegExp(/[aeiou]/,'gi');
  let regCons = new RegExp(/[bcdfghjklmnpqrstvwxyz]+/, 'gi');
  let arrVowels = str.split('').filter(a => {
      return a.match(regVowels);
  })
    let arrCons = str.split('').filter(a => {
      return a.match(regCons);
  })
  console.log('arrCons ',arrCons);
  console.log('arrVowels ',arrVowels);
  return arrVowels.length + (arrCons.length)*2;
}
