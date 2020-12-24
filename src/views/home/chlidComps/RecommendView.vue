<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.link" class="item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    recommends:Array,
    default() {
      return []
    }
  },
  components:{

  }
}
</script>

<style>
.recommend {
  width: 100%;
  display: flex;
  text-align: center;
  padding: 15px 10px;
  border-bottom: 8px solid #eee;
  text-decoration: none;
}
.recommend .item {
  flex: 1;
}
.recommend  a {
  text-decoration: none;
}
.recommend img {
  width: 70px;
  height: 70px;
  /* border-radius: 50%; */
  /* vertical-align: middle; */
  margin-bottom: 4px;
}
.recommend p {
  font-size: 12px;
  color: #666;
}
</style>