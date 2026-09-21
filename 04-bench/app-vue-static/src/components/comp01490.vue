<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01103A, calcu00286B, calcu00330B, calcu00108A } from '../lib/index.js';

const seed = 48;
const total = computed(() => calcu01103A(seed) - calcu00286B(seed) + calcu00330B(seed) - calcu00108A(seed));
</script>

<template>
  <div class="blk">comp01490: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(60 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(240 50% 50%);
  display: inline-block;
}
</style>
