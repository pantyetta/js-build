<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01133B, calcu01134B, calcu01341A } from '../lib/index.js';

const seed = 33;
const total = computed(() => calcu01133B(seed) - calcu01134B(seed) + calcu01341A(seed));
</script>

<template>
  <div class="blk">comp00864: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(273 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(93 50% 50%);
  display: inline-block;
}
</style>
