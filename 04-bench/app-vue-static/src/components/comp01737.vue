<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00199B, calcu00272B, calcu01114A } from '../lib/index.js';

const seed = 47;
const total = computed(() => calcu00199B(seed) - calcu00272B(seed) + calcu01114A(seed));
</script>

<template>
  <div class="blk">comp01737: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(352 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(172 50% 50%);
  display: inline-block;
}
</style>
