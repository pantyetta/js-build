<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00608B, calcu00061B, calcu01268A } from '../lib/index.js';

const seed = 19;
const total = computed(() => calcu00608B(seed) - calcu00061B(seed) + calcu01268A(seed));
</script>

<template>
  <div class="blk">comp01831: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(53 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(233 50% 50%);
  display: inline-block;
}
</style>
