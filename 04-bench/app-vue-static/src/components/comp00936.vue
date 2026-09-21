<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01226B, calcu00285B, calcu00777A, calcu00242A } from '../lib/index.js';

const seed = 45;
const total = computed(() => calcu01226B(seed) - calcu00285B(seed) + calcu00777A(seed) - calcu00242A(seed));
</script>

<template>
  <div class="blk">comp00936: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(335 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(155 50% 50%);
  display: inline-block;
}
</style>
