<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01232A, calcu00974B, calcu00556B } from '../lib/index.js';

const seed = 25;
const total = computed(() => calcu01232A(seed) - calcu00974B(seed) + calcu00556B(seed));
</script>

<template>
  <div class="blk">comp00443: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(121 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(301 50% 50%);
  display: inline-block;
}
</style>
