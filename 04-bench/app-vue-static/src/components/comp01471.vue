<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01524A, calcu00887A, calcu00828B, calcu00250B, calcu00491B } from '../lib/index.js';

const seed = 42;
const total = computed(() => calcu01524A(seed) - calcu00887A(seed) + calcu00828B(seed) - calcu00250B(seed) + calcu00491B(seed));
</script>

<template>
  <div class="blk">comp01471: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(88 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(268 50% 50%);
  display: inline-block;
}
</style>
