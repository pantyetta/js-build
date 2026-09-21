<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00608B, calcu00763A, calcu00871A, calcu01166B, calcu00777B } from '../lib/index.js';

const seed = 15;
const total = computed(() => calcu00608B(seed) - calcu00763A(seed) + calcu00871A(seed) - calcu01166B(seed) + calcu00777B(seed));
</script>

<template>
  <div class="blk">comp00521: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(243 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(63 50% 50%);
  display: inline-block;
}
</style>
