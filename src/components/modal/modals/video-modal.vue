<script setup name='VideoModal'>
  const props = defineProps({
    videoId: {
      type: String,
      default: '50rbMsFJCbM',
    },
  })

  const player = ref(null)
  const videoId = ref(null)
  let done = ref(false);

  const customvideoId = computed(() => {
    return `${props.videoId}?autoplay=1&mute=0`
  })

  function createTag() {
    let tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  function onYouTubeIframeAPIReady() {
    player.value = new YT.Player('player', {
      height: '560',
      width: '315',
      videoId: videoId.value,
      playerVars: {
        'autoplay': 1,
        'mute': 0
      },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }

  function onPlayerReady(event) {
    event.target.playVideo();
    event.target.setVolume(50);
  }

  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done.value) {
      done.value = true;
    }
  }

  function initVideo() {
    createTag()
    const video_Id = document.getElementById('player').getAttribute('data-videoId')
    videoId.value = video_Id

    onYouTubeIframeAPIReady()
  }

  onMounted(() => {
    initVideo()
  })
</script>

<template>
<div
  id="player"
  :data-videoId="customvideoId"
></div>
</template>

<style lang='scss' scoped>
</style>