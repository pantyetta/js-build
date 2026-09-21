<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00002A, calcu00416A, calcu01531A } from '../lib/index.js';

const seed = 17;
const total = computed(() => calcu00002A(seed) - calcu00416A(seed) + calcu01531A(seed));
</script>

<template>
  <div class="blk">comp00873: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(140 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(320 50% 50%);
  display: inline-block;
}
</style>
