<template>
    <div id="cards-list">
        <ul>
            <li v-for="card in cards">
                <img class="img-responsive" v-bind:src="card.imgsrc" v-bind:alt="card.imgalt" width="768">
                <div class="asi-card-body">
                  <h3 class="asi-display-3 text-uppercase text-left asi-black">{{ card.cardtitle }}</h3>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  props: {
    cards: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
    }
  }
}
</script>
<style scoped>
#cards-list{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding:0;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    margin: 10px;
}
li:hover{
  box-shadow: 0 10px 20px rgba(0,0,0,0.10), 0 6px 6px rgba(0,0,0,0.15);
  cursor:pointer;
}
.asi-card-body{
  padding:15px;
}
h3{ 
  margin:0;
  padding:0;
  font-family:"Knockout-HTF29-JuniorLiteweight", "ProximaNova-Semibold", sans-serif;
  line-height:1;
  font-size:200%;
}
</style>