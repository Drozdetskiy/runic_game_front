<template>
    <div class="home" id="home">
    <LeftSideBar :side_cards_power="side_cards_power" :side_cards_number="side_cards_number"/>
    <GameTable :table_cards="table_cards" />
    <RightSideBar :side_cards_power="side_cards_power" :side_cards_number="side_cards_number"/>
    </div>

</template>

<script>
// @ is an alias to /src
import LeftSideBar from '@/components/LeftSideBar.vue'
import GameTable from '@/components/GameTable.vue'
import RightSideBar from '@/components/RightSideBar.vue'

export default {
  name: 'home',
  props: {
    hash_url: {
      type: String,
      default: 'def'
    }
  },
  components: {
    LeftSideBar,
    GameTable,
    RightSideBar
  },
  data () {
    return {
      side_cards_number: [0, 1, 2, 3, 4],
      side_cards_power: [ [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4] ],
      table_cards: [
        [0, 0, 0, 0, 0],
        [1, 6, 7, 8, 9],
        [1, 3, 5, 6, 7],
        [1, 3, 5, 6, 7],
        [2, 3, 5, 6, 7],
        [0, 0, 0, 0, 0],
        [2, 3, 5, 6, 7],
        [1, 3, 5, 6, 7],
        [0, 0, 0, 0, 0]
      ],
      hash_url_data: [...this.hash_url].join('')
    }
  },
  sockets: {
    connect () {
      this.$socket.emit(
        'message', [...this.hash_url].join('')
      )
    },
    message (val) {
      console.log(val)
    }
  },
  methods: {
    clickButton (val) {
      // this.$socket is `socket.io-client` instance
      this.$socket.emit('emit_method', val)
    }
  }

}
</script>

<style>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

#home {
    height: 100vh;
    display: flex;
}

body {
  background-color: rgba(207, 204, 204, 0.5);
  background-image: linear-gradient( 45deg,#ddd 25%, transparent 25%, transparent 74%, #ddd 75%, #ddd), linear-gradient( 45deg,#ddd 25%, transparent 25%, transparent 74%, #ddd 75%, #ddd);
  background-size:20px 20px;
  background-position: 0 0, 10px 10px;
}
</style>
