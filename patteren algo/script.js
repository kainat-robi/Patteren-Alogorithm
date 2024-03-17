 function validPattern(input) {
      let openCount = 0;
      for (let i = 0; i < input.length; i++) {
        const bracket = input[i];

        if (bracket === '(' || bracket === '[' || bracket === '{') {
          openCount++;
        } else if (bracket === ')' || bracket === ']' || bracket === '}') {
          openCount--;

          if (openCount < 0) {
            return false; 
          }
        }
      }

      return openCount === 0; 
    }
    function checkPattern() {
      const input = document.getElementById('inputPattern').value;
      const resultElement = document.getElementById('result');
      const isValid = validPattern(input);
      resultElement.textContent = isValid ? 'Valid pattern' : 'Invalid pattern';
    }