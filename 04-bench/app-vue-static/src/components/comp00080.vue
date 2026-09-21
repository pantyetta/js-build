<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01144B, calcu01021B, calcu01526B, calcu00988A } from '../lib/index.js';

const seed = 4;
const total = computed(() => calcu01144B(seed) - calcu01021B(seed) + calcu01526B(seed) - calcu00988A(seed));
</script>

<template>
  <div class="blk">comp00080: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(66 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(246 50% 50%);
  display: inline-block;
}
</style>
