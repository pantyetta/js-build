<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00412B, calcu01272B, calcu01038B } from '../lib/index.js';

const seed = 48;
const total = computed(() => calcu00412B(seed) - calcu01272B(seed) + calcu01038B(seed));
</script>

<template>
  <div class="blk">comp01192: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(31 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(211 50% 50%);
  display: inline-block;
}
</style>
