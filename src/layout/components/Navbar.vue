<script setup name="Navbar">
import { mobileDevice } from '@/utils'
const router =  useRouter()
const navList = [
  {
    name: '首頁',
    routeName: 'Index',
  },
  {
    name: 'todoList',
    routeName: 'TodoList',
  },
  {
    name: 'pinia',
    routeName: 'Pinia',
  },
  {
    name: '鑲套路由',
    routeName: 'NestedRoutesParent',
  },
  {
    name: '新聞',
    routeName: 'News',
  },
  {
    name: '組件',
    routeName: 'Components',
  },
  {
    name: 'remock',
    routeName: 'Remock',
  },
]

const showMenu = ref(mobileDevice ? false : true)

const toggleMenu = () => {
  showMenu.value = !showMenu.value
}

const backHome = () => {
  showMenu.value = false
  router.push('/')
}

const handleRoute = (routeName) => {
  showMenu.value = false
  router.push({
    name: routeName
  })
}
</script>

<template>
  <header class="header">
    <div class="header__wrapper">
      <div
        @click="backHome"
        class="logo-box"
      >LOGO</div>
      <nav
        v-show="showMenu"
        class="navbar"
      >
        <div>
          <a
            v-for="routeItem in navList"
            :key="routeItem.routeName"
            :class="{ 'active': routeItem.routeName === $route.name }"
            @click="handleRoute(routeItem.routeName)"
          >{{ routeItem.name }}</a>
        </div>
      </nav>
      <div
        @click="toggleMenu"
        class="mobile-hamburger"
      >
        <Icon name="cil:hamburger-menu" size="25" />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: lightblue;
    z-index: 999;
    @include flex;
    &__wrapper {
      width: 80%;
      height: 60px;
      margin: auto;
      @include flex($justify-content: space-between);
      .navbar {
        padding: 10px 0;
        @include flex;
        flex-wrap: wrap;
        >div {
          >a {
            padding: 10px;
            &.active {
              color: red;
              font-weight: bold;
            }
            @include RWD($lg) {
              width: 100%;
            }
          }
        }
        @include RWD($lg) {
          position: absolute;
          top: 60px;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100vh !important;
          background: lightseagreen;
          >div {
            height: 80vh;
            >a {
              @include flex;
            }
          }
        }
      }
      .mobile-hamburger {
        display: none;
        @include RWD($lg) {
          display: block;
          cursor: pointer;
        }
      }
      @include RWD($lg) {
        width: 90%;
      }
    }
  }
</style>