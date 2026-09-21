<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00804B, calcu01440A, calcu00490B } from '../lib/index.js';

const seed = 48;
const total = computed(() => calcu00804B(seed) - calcu01440A(seed) + calcu00490B(seed));
</script>

<template>
  <div class="blk">comp01970: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(117 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(297 50% 50%);
  display: inline-block;
}
</style>
