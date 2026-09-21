<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00580B, calcu00053B, calcu00531A, calcu00732B, calcu01457B } from '../lib/index.js';

const seed = 37;
const total = computed(() => calcu00580B(seed) - calcu00053B(seed) + calcu00531A(seed) - calcu00732B(seed) + calcu01457B(seed));
</script>

<template>
  <div class="blk">comp00261: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(224 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(44 50% 50%);
  display: inline-block;
}
</style>
