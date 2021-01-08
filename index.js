const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];



function titleCased(){
  //1. map the sentence tutorial and give it a variable call words
  return tutorials.map(tutorial => {
      let words = tutorial.split(" ")
    // 2. split the sentence in strings  
      let capWords = words.map(word => {
        //3. give another variable to of capitalized words and map words(strings) into a each word
        return word[0].toUpperCase() + word.slice(1)
        // 3. returned each word and give it an index of 0 so is the first word and slicing the word from the first word to the rest
        
      })
      return capWords.join(" ")
      // 4. lastly putting back together the divided strings into one 
    })
  
 };