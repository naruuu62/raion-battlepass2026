---
layout: page
---

<script setup>
import Redoc from '../.vitepress/components/Redoc.vue'
</script>

<ClientOnly>
  <Redoc />
</ClientOnly>

<style>
/* ===============================
   FULL WIDTH PAGE
   =============================== */

.api-full .vp-doc {
  max-width: 100%;
  padding-top: 64px;
}

body {
  overflow: hidden;
}

.redoc-wrap {
  width: 100%;
  max-width: 100%;
}

.redoc-wrap .menu-content {
  height: calc(100vh - 64px);
  overflow-y: auto;
}

.redoc-wrap .api-content {
  height: calc(100vh - 64px);
  overflow-y: auto;
}

</style>
