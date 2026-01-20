<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const loadRedoc = () => {
    window.Redoc.init(
      'https://raion-battlepass-2026-production.up.railway.app/openapi.json',
      {
         scrollYOffset: 64,
        theme: {
          colors: {
            primary: { main: '#7c3aed' } // purple vibe
          }
        }
      },
      document.getElementById('redoc-container')
    )
  }

  if (!window.Redoc) {
    const script = document.createElement('script')
    script.src = 'https://cdn.redoc.ly/redoc/latest/bundles/redoc.standalone.js'
    script.onload = loadRedoc
    document.body.appendChild(script)
  } else {
    loadRedoc()
  }
})
</script>

<template>
  <div id="redoc-container" style="min-height: 100%; background: #ffff;"></div>
</template>
