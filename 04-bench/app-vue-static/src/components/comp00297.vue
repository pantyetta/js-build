<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00473B, calcu01319B, calcu01033B, calcu00059A } from '../lib/index.js';

const seed = 19;
const total = computed(() => calcu00473B(seed) - calcu01319B(seed) + calcu01033B(seed) - calcu00059A(seed));
</script>

<template>
  <div class="blk">comp00297: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(174 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(354 50% 50%);
  display: inline-block;
}
</style>
