<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00625A, calcu01432B, calcu01475B, calcu00341B } from '../lib/index.js';

const seed = 36;
const total = computed(() => calcu00625A(seed) - calcu01432B(seed) + calcu01475B(seed) - calcu00341B(seed));
</script>

<template>
  <div class="blk">comp01152: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(252 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(72 50% 50%);
  display: inline-block;
}
</style>
