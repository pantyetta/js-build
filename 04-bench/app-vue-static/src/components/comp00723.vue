<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01086A, calcu00293A, calcu00027A } from '../lib/index.js';

const seed = 46;
const total = computed(() => calcu01086A(seed) - calcu00293A(seed) + calcu00027A(seed));
</script>

<template>
  <div class="blk">comp00723: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(102 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(282 50% 50%);
  display: inline-block;
}
</style>
