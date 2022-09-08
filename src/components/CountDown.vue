<script setup name="CountDown">
  import { useAppStore } from '@/store/app.js'
  const appStore = useAppStore()
  const { updateCounting } = appStore
  const { endDate } = storeToRefs(appStore)

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