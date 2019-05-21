<template>
  <div>
    <div class=main-navbar>
    <p class="header-title">Recent Games</p>
  </div>
  <div class="recent-games__container">
    <div class="recent-games">
      <ul class="recent-games-list">
        <li class="recent-games-list__item">First game</li>
        <li class="recent-games-list__item">Second game</li>
        <li class="recent-games-list__item">Third game</li>
        <li class="recent-games-list__item">Forth game</li>
      </ul>
    </div>
  </div>
  </div>
</template>

// body {
//   background-color: rgba(207, 204, 204, 0.5);
//   background-image: linear-gradient( 45deg,#ddd 25%, transparent 25%, transparent 74%, #ddd 75%, #ddd), linear-gradient( 45deg,#ddd 25%, transparent 25%, transparent 74%, #ddd 75%, #ddd);
//   background-size:20px 20px;
//   background-position: 0 0, 10px 10px;
//   height: 100%;
//   margin: 0;
// }

<style scoped>

.recent-games__container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.recent-games {
  width: 40%;
}

.recent-games-list {
  list-style-type: none;
  /* box-shadow: 1px 1px 20px 8px rgba(0,0,0,0.5); */
  padding: 0;
}

.recent-games-list__item {
    background: #ffffff;
    padding: 5%;
    box-shadow: 6px 6px 8px 1px rgba(0, 0, 0, 0.42);
    color: #797979;
  }


  .main-navbar {
    background-color: #ffffff;
    height: 60px;
    width: 100%;
    position: fixed;
    box-shadow: 1px 1px 10px rgba(0,0,0,0.5);
  }

  .header-title {
    margin: 0;
    padding: 20px;
    color: #797979;
    font-size: 23px;
  }
  
</style>
