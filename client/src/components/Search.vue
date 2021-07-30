<template>
  <section class="search">
    <h2>Search Player Stats</h2>
    <form v-on:submit.prevent="onSubmit">
      <div class="form-group">
        <label for="platform">Search Type</label>
        <select name="platform" id="platform" v-model="platform">
          <option value="characters">Character</option>
          <option value="alliances">Alliance</option>
          <option value="regions">Region</option>          
        </select>
      </div>
      <div class="form-group">
        <label for="playerid">Player ID</label>
        <input type="text" name="text" id="playerid" v-model="playerID" />
      </div>
      <div class="form-group">
        <input type="submit" value="Submit" class="btn">
      </div>
    </form>
  </section>
</template>

<script>
  export default {
    name: "Search",
    data() {
      return{
        platform: "",
        playerID: ""
      }
    }
  }
</script>

<style scoped>

</style>