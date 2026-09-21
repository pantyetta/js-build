<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00234B, calcu00783A, calcu00043B, calcu00501A } from '../lib/index.js';

const seed = 20;
const total = computed(() => calcu00234B(seed) - calcu00783A(seed) + calcu00043B(seed) - calcu00501A(seed));
</script>

<template>
  <div class="blk">comp00320: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(93 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(273 50% 50%);
  display: inline-block;
}
</style>
