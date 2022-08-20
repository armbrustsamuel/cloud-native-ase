
export default (developers) => {

  return Promise.resolve(developers)
    .then(async function(developers) {
      let final = "";
      for (let i = 0; i < developers.length; i++) {
        try {
          final += await developers[i].code();
          if (i < developers.length-1) {
            final += "\n"
          }
        } catch(e) {
          final += e.message
        }

      }
      return final
    }).catch(function(error){
      console.log(error);
    });
}
