<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00644A, calcu00447B, calcu00399A, calcu01076A } from '../lib/index.js';

const seed = 47;
const total = computed(() => calcu00644A(seed) - calcu00447B(seed) + calcu00399A(seed) - calcu01076A(seed));
</script>

<template>
  <div class="blk">comp00263: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(141 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(321 50% 50%);
  display: inline-block;
}
</style>
