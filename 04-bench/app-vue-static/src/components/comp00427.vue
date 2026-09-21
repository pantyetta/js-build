<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00075B, calcu01159B, calcu00632A } from '../lib/index.js';

const seed = 32;
const total = computed(() => calcu00075B(seed) - calcu01159B(seed) + calcu00632A(seed));
</script>

<template>
  <div class="blk">comp00427: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(43 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(223 50% 50%);
  display: inline-block;
}
</style>
