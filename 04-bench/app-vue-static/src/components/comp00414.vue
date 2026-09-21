<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01176A, calcu00256A, calcu00838A, calcu00442B, calcu00967B } from '../lib/index.js';

const seed = 11;
const total = computed(() => calcu01176A(seed) - calcu00256A(seed) + calcu00838A(seed) - calcu00442B(seed) + calcu00967B(seed));
</script>

<template>
  <div class="blk">comp00414: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(278 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(98 50% 50%);
  display: inline-block;
}
</style>
