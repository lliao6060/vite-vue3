<script setup name='LightboxModal'>
  const props = defineProps({
    imageUrl: {
      type: String,
      default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJmgUtjCaC_ERCNLK13-GE0wivk_03KxsB6Qb6tR8Uoe8XYT0Drp-wEQWEQrekp_qqQ5M&usqp=CAU',
    }
  })

  const imageUrl = computed(() => {
    return props.imageUrl
  })

</script>

<template>
<h4 class="fw-bold">title</h4>
<div class="lightbox">
  <figure>
    <img
      :src="imageUrl"
      alt="lightbox-images"
    />
  </figure>
</div>
</template>

<style lang='scss' scoped>
.lightbox {
  figure {
    width: 100%;
    height: 100%;
    padding: 25px 15px 15px;
    >img {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 5px;
      object-fit: cover;
    }
    @include RWD($sm-md) {
      padding: 25px 10px 10px;
    }
  }
}
</style>