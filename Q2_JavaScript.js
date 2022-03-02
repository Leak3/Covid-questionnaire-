const QzQuestions = [

    {
      question: "1. What does COVID-19 stand for?",
      options: {
        a: "Coronavirus Disease 2019",
        b: "Coronavirus Diet 2019",
        c: "Coronavictum Due 2019",
        d: "Coronollary Due 2019"
      },
      correctAnswer: "a"
    },

    {
      question: "2. COVID-19 affects which individuals?",
      options: {
        a: "Elderly",
        b: "Everyone",
        c: "No One",
        d: "Some Individuals"
      },
      correctAnswer: "b"
    },

    {
      question: "3. The incubation period of COVID-19 is?",
      options: {
        a: "5 - 6 days",
        b: "1 - 2 days",
        c: "50 - 70 days",
        d: "20 - 30 days"
      },
      correctAnswer: "a"
    },

    {
      question: "4. In what year did the WHO declare COVID-19 a pandemic?",
      options: {
        a: "2019",
        b: "2020",
        c: "2017",
        d: "2015"
      },
      correctAnswer: "b"
    },

    {
      question: "5. COVID-19 belongs to what family of viruses?",
      options: {
        a: "Severe Acute Respiratory Syndrome Coronavirus 2 (SARS-Cov-2)",
        b: "Asymptomatic Virus",
        c: "Venous Thromboembolism",
        d: "Computed Tomography (CT) virus"
      },
      correctAnswer: "a"
    }
    
  ];
  
  var qContainter = document.getElementById('quiz');
  var resultsC = document.getElementById('result');
  var sBtn = document.getElementById('submit');
  
  createQz(QzQuestions, qContainter, resultsC, sBtn);
  
  function createQz(Qstions, qContainter, resultsC, sBtn) {
  
    function showQuestions(Qstions, qContainter) {
      var outpt = [];
      var options;
  
      for (var i = 0; i < Qstions.length; i++) {
  
        options = [];
  
        for (letter in Qstions[i].options) {
  
          options.push(
            '<label>'
            + '<input type="radio" name="question' + i + '" value="' + letter + '">'
            + Qstions[i].options[letter]
            + '</label> <p>'
          );
        }
  
        outpt.push(
          '<div class="question">' + Qstions[i].question + '</div>'
          + '<div class="answer">' + options.join('') + '</div>'
        );
      }
  
      qContainter.innerHTML = outpt.join('');
    }
  
  
    function showResults(Qstions, qContainter, resultsC) {
  
      var aContainers = qContainter.querySelectorAll('.answer');
      var uAnswers = '';
      var AmntRight = 0;

      for (var y = 0; y < Qstions.length; y++) {
  
        userAnsr = (aContainers[y].querySelector('input[name=question' + y + ']:checked') || {}).value;
  
        if (userAnsr === Qstions[y].correctAnswer) {
          AmntRight++;
        }
      }
  
      qContainter.innerHTML = '';
      resultsC.innerHTML = 'You answered ' + AmntRight + '/' + Qstions.length + ' questions correctly';
    }
  
    showQuestions(Qstions, qContainter);
  
	  sBtn.onclick = function () {
      showResults(Qstions, qContainter, resultsC);
      sBtn.innerHTML = 'Reload';
      sBtn.onclick = function () {
        window.location.reload();
      }
    }
  
  } 