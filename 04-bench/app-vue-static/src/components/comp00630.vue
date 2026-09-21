<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00861B, calcu00205B, calcu01278A } from '../lib/index.js';

const seed = 32;
const total = computed(() => calcu00861B(seed) - calcu00205B(seed) + calcu01278A(seed));
</script>

<template>
  <div class="blk">comp00630: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(330 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(150 50% 50%);
  display: inline-block;
}
</style>
