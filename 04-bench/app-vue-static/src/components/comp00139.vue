<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01148B, calcu00438B, calcu01497A, calcu00642A } from '../lib/index.js';

const seed = 44;
const total = computed(() => calcu01148B(seed) - calcu00438B(seed) + calcu01497A(seed) - calcu00642A(seed));
</script>

<template>
  <div class="blk">comp00139: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(93 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(273 50% 50%);
  display: inline-block;
}
</style>
