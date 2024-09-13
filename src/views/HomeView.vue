<script setup>
import Card from 'primevue/card'
import Button from 'primevue/button'

import InputText from 'primevue/inputtext'

import Password from 'primevue/password'
import { ref } from 'vue'

const usernm = ref(null)
const pass = ref(null)
</script>

<template>
  <div class="flex items-center justify-center min-h-screen">
    <Card class="w-96 overflow-hidden">
      <template #header>
        <img alt="user header" src="https://img.lovepik.com/element/45007/0204.png_860.png" />
      </template>
      <template #title>sing in</template>
      <!-- <template #subtitle>sing in</template> -->
      <template #content>
        <div class="card flex justify-center">
          <div class="flex flex-col gap-2">
            <label for="username">Username</label>
            <InputText id="username" v-model="usernm" aria-describedby="username-help" />
          </div>
        </div>
        <br />

        <div class="card flex justify-center">
          <div class="flex flex-col gap-2">
            <label for="pass">Password</label>
            <Password id="pass" v-model="pass" />
          </div>
        </div>
      </template>
      <template #footer>
        <div class="flex gap-4 mt-1">
          <Button label="sing in" class="w-full" />
        </div>
      </template>
    </Card>
  </div>
</template>
