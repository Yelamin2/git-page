

(function(){

  
    // fetch('http://example.com/movies.json')
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
    
    function generateHTML(data){
        var source = document.querySelector("#git-template").innerHTML;
        var template = Handlebars.compile(source);
    
        const html = template({repos: data});
        console.log(html);
        document.querySelector('.repositories').insertAdjacentHTML('afterbegin', html);
    }
    
    
    
    fetch(`https://api.github.com/users/Yelamin2/repos`)
    .then(function(response){
        //console.log('response',response) 
        if(!response.ok){
            throw new Error(`Network response was not OK Returned status ${response.status}.`);
        }
        return response.json();
      })
      .then(function(json){
        console.log(json);
        generateHTML(json);
      })
      .catch(function(error){
        console.error('Error:',error);
      })
      .finally (function(){
        console.log('Will always fire!!!')
    
      });
    
    
    
    })();