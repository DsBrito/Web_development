<template>
  <div class="home">
    <v-form>
      <v-file-input
        label="Selecione as legendas"
        prepend-icon="mdi-message-text"
        append-icon="mdi-send"
        outlined
        multiple
        v-model="files"
        @click:append="processSubtitles"
      >
      </v-file-input>
    </v-form>

    <div class="pills">
      <PillComponent v-for="item in groupedWords" :key="item.word" :word="item.word" :amount="item.amount" />
    </div>
  </div>
</template>

<script>
import PillComponent from "./PillComponent"
import { ipcRenderer } from "electron"

export default {
  components: {
    PillComponent,
  },
  data: () => ({
    files: [],
    groupedWords: [],
  }),
  methods: {
    processSubtitles() {
      console.log(this.files)

      //envio de arquivos
      let paths = this.files.map(file => file.path)
      ipcRenderer.send("process-subtitles", paths)

      //resposta do backend para o frontend
      ipcRenderer.on("process-subtitles", (event, resp) => {
        //atualiza a lista de palavras
        this.groupedWords = resp
      })
    },
  },
}
</script>

<style>
.pills {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  justify-content: center;
}

.home {
  margin: 20px;
}
</style>
