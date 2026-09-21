<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00443A, calcu00765B, calcu00521B, calcu00902A, calcu00402B } from '../lib/index.js';

const seed = 50;
const total = computed(() => calcu00443A(seed) - calcu00765B(seed) + calcu00521B(seed) - calcu00902A(seed) + calcu00402B(seed));
</script>

<template>
  <div class="blk">comp00314: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(238 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(58 50% 50%);
  display: inline-block;
}
</style>
