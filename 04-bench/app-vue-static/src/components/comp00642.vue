<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00024A, calcu01215A, calcu00107A, calcu00894B, calcu01078A } from '../lib/index.js';

const seed = 44;
const total = computed(() => calcu00024A(seed) - calcu01215A(seed) + calcu00107A(seed) - calcu00894B(seed) + calcu01078A(seed));
</script>

<template>
  <div class="blk">comp00642: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(48 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(228 50% 50%);
  display: inline-block;
}
</style>
