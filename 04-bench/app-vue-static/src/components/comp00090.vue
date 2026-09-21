<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01130A, calcu01330A, calcu01309B, calcu01271A, calcu00769B } from '../lib/index.js';

const seed = 38;
const total = computed(() => calcu01130A(seed) - calcu01330A(seed) + calcu01309B(seed) - calcu01271A(seed) + calcu00769B(seed));
</script>

<template>
  <div class="blk">comp00090: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(242 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(62 50% 50%);
  display: inline-block;
}
</style>
