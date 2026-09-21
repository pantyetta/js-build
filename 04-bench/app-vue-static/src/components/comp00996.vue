<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01305A, calcu00256B, calcu01117B, calcu00777A } from '../lib/index.js';

const seed = 22;
const total = computed(() => calcu01305A(seed) - calcu00256B(seed) + calcu01117B(seed) - calcu00777A(seed));
</script>

<template>
  <div class="blk">comp00996: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(7 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(187 50% 50%);
  display: inline-block;
}
</style>
