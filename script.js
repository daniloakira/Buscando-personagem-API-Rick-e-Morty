const busca =document.querySelector("#busca");


const showData = (result)=>{
  for (const campo in result){
    if(document.querySelector("#"+campo)){
      document.querySelector("#"+campo).value = result[campo]

    }
  }
}

busca.addEventListener("blur", (e)=>{
  let search = busca.value
fetch(`https://rickandmortyapi.com/api/character/${search}`, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    "Content-Type": 'application/json',
  },mode: 'cors',
  cache:'default'
}).then((response) => {
 
    return response.json();
    
  })
  .then((data) => {
   showData(data)
  document.getElementById("image").src = data.image;
    console.log(data)
  }).catch(e => console.log('Deu Erro:' + e,message));
})

