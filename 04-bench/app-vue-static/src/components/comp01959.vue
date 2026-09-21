<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01250B, calcu00164A, calcu00333B, calcu00142B } from '../lib/index.js';

const seed = 49;
const total = computed(() => calcu01250B(seed) - calcu00164A(seed) + calcu00333B(seed) - calcu00142B(seed));
</script>

<template>
  <div class="blk">comp01959: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(259 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(79 50% 50%);
  display: inline-block;
}
</style>
