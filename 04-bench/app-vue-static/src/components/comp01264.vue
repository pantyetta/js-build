<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00734A, calcu00172A, calcu01041B, calcu01593B, calcu01042A } from '../lib/index.js';

const seed = 13;
const total = computed(() => calcu00734A(seed) - calcu00172A(seed) + calcu01041B(seed) - calcu01593B(seed) + calcu01042A(seed));
</script>

<template>
  <div class="blk">comp01264: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(125 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(305 50% 50%);
  display: inline-block;
}
</style>
