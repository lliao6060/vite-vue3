<script setup name="CountDown">
  import { ref, watch } from 'vue'
  import { useGlobalStore } from '@/store/main.js'
  import { storeToRefs } from 'pinia'
  const globalStore = useGlobalStore()
  const { updateCounting } = globalStore
  const { endDate } = storeToRefs(globalStore)

  //timer
  const now = new Date();
  const time =  endDate.value - now;
  
  //格式化時間
  const transformSlotProps = (props) => {
    const formattedProps = {};

    Object.entries(props).forEach(([key, value]) => {
      formattedProps[key] = value < 10 ? `0${value}` : String(value);
    });

    return formattedProps;
  }

  const onCountdownEnd = () => {
    updateCounting(true)
  }
  
</script>

<template>
  <vue-countdown 
    :time="time" 
    :transform="transformSlotProps"
    v-slot="{ days, hours, minutes, seconds }"
    @end="onCountdownEnd"
  >
    ({{ days }}天{{ hours }}:{{ minutes }}:{{ seconds }})
  </vue-countdown>
</template>

<style>

</style>