<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01015A, calcu00038B, calcu00875A, calcu00159A } from '../lib/index.js';

const seed = 4;
const total = computed(() => calcu01015A(seed) - calcu00038B(seed) + calcu00875A(seed) - calcu00159A(seed));
</script>

<template>
  <div class="blk">comp01614: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(247 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(67 50% 50%);
  display: inline-block;
}
</style>
