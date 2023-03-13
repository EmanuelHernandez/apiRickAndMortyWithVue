
export const characters = {
  async getAllCharacters (){
    let data
    try{
      const resp = await fetch(`https://rickandmortyapi.com/api/character`)
      if (resp.status === 404) {
        data = false
      }
      else if (resp.status === 200 ) {
        data = await resp.json();
        data = data.results
      }
    }
    catch (error) {
      data = false;
    }
    return data
  },

  async search(value, type){
    let data
    let filter = type ? `?${type}=` : ''
    try{
      const resp = await fetch(`https://rickandmortyapi.com/api/character/${filter}${value}`)
      if (resp.status === 404) {
        data = false
      }
      else if (resp.status === 200 ) {
        data = await resp.json();
      }
      // if(data.info.pages > 1){        
      //   for (let i = 2; i < data.info.pages + 1; i++) {
      //     let filterPage = `&page=${i}`
      //     const resp = await fetch(`https://rickandmortyapi.com/api/character/${filter}${value}${filterPage}`)
      //     if (resp.status === 200 ) {
      //       let dataForPage = await resp.json();
      //       data.results = data.results.concat(dataForPage.results)
      //     }
      //   }
      // }
      data = {results: data.results, pages: data.info.pages}
    }
    catch (error) {
      data = false;
    }
    return data
  }
}