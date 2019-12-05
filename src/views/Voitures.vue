<template>
  <h1>Voitures</h1>

  

</template>


<script>
import db from '@/fb'

export default {
 name: 'Voitures',    

    data() {
        return {
            voitures: [],
            id: '',
        }
    },


created() {
    db.collection("Voitures").onSnapshot(res => {
        const changes = res.docChanges();

        changes.forEach(change => {
             if (change.type === 'added'){
                 this.voitures.push({
                     ...change.doc.data(),
                     id: change.doc.id
                    })
             }
        })
       console.log(this.voitures)
    
    })
}
}
</script>

<style>

</style>
<style scoped>
h1 {color: red;}

</style>>
