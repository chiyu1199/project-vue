<template>
  <div>
    <router-view></router-view>
    <footbar></footbar>
  </div>
</template>

<script>
import footbar from "./components/footbar";


export default {
  components:{footbar}      
}
</script>
