<template>
    <div class="row" style="border: 1.5px solid 	rgb(233, 230, 230); padding: 2% 0; ">
      <div class="komentar">
        <div style="font-size: 16px;" class="header-two">
            {{comm.email}}  <br>
        </div>
        <div style="font-size: 16px; margin-left: 10%;" class="header-one">
            {{comm.komentar}}  
        </div>
      </div>
    </div>
</template>

<script>
import moment from 'moment'
export default {
  props: [ 'comm'],
  
  computed: {
    timeAgo () {
      return moment(this.comm.posted_at).fromNow()
    }
  },
  
}
</script>

<style>

</style>