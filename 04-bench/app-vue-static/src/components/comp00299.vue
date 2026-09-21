<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01352B, calcu00833A, calcu01462A, calcu00004A } from '../lib/index.js';

const seed = 13;
const total = computed(() => calcu01352B(seed) - calcu00833A(seed) + calcu01462A(seed) - calcu00004A(seed));
</script>

<template>
  <div class="blk">comp00299: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(318 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(138 50% 50%);
  display: inline-block;
}
</style>
