<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00108B, calcu00391B, calcu01520A } from '../lib/index.js';

const seed = 27;
const total = computed(() => calcu00108B(seed) - calcu00391B(seed) + calcu01520A(seed));
</script>

<template>
  <div class="blk">comp01948: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(358 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(178 50% 50%);
  display: inline-block;
}
</style>
