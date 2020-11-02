<template>
  <div>
    <div
      class="uploader mt-20"
      @dragenter="OnDragEnter"
      @dragleave="OnDragLeave"
      @dragover.prevent
      @drop="onDrop"
      :class="{ dragging: isDragging }"
    >
      <div v-if="!useInput">
        <h3 style="color: white">
          <v-icon>mdi-file</v-icon>&nbsp; {{ filName }}
        </h3>
      </div>
      <div v-else>
        <p>Drag your file here</p>
        <div>OR</div>
        <div class="file-input">
          <label for="file"> Select a file</label>
          <v-file-input
            label="Upload"
            filled
            color="deep-blue accent-4"
            prepend-icon="mdi-file-upload"
            @change="getFile"
            outlined
          ></v-file-input>
        </div>
      </div>
    </div>
    <v-btn color="info" @click="upload(primaryId)">Upload File</v-btn>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import ApiService from "@/core/services/api.service";
export default {
  props: ["primaryId"],
  data: () => ({
    isDragging: false,
    dragCount: 0,
    files: [],
    filName: null,
    tempFile: null,
    useInput: true,
    route: null,
  }),
  computed: {
    getRoute() {
      return this.route
    },
  },
  mounted() {
    console.log(this.$route.path);
    this.route = this.route.path;
  },
  methods: {
    OnDragEnter(e) {
      e.preventDefault();
      this.dragCount++;
      this.isDragging = true;
    },
    OnDragLeave(e) {
      this.dragCount--;
      e.preventDefault();
      if (this.dragCount <= 0) this.isDragging = false;
    },
    onInputChange(e) {
      console.log(e);
      this.tempFile = e.target;
    },
    getFile(event) {
      this.useInput = true;
      this.tempFile = event;
    },
    onDrop(e) {
      e.preventDefault();
      e.stopPropagation();
      this.useInput = false;
      this.isDragging = false;
      this.tempFile = e.dataTransfer.files[0];
      this.filName = this.tempFile.name;
      // console.log(this.filName);
    },
    upload(id) {
      console.log(id);
      let formdata = new FormData();
      let job = {
        id: id,
      };
      formdata.append("job", JSON.stringify(job));
      formdata.append("file", this.tempFile);
      if (this.getRoute === "/user/job_board") {
        ApiService.post("finish-file", formdata)
          .then(() => { 
            Swal.fire({
              title: "",
              text: "The Job is successfully posted",
              icon: "success",
              confirmButtonClass: "btn btn-secondary",
            });
          })
          .catch(() => {
            Swal.fire({
              title: "Error",
              text:
                "Upload Failed refresh the page or contact the administrator",
              icon: "erro",
              confirmButtonClass: "btn btn-secondary",
            });
          });
      }else if(this.getRoute === "/agency_member/job_board"){
        console.log("agency")
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.uploader {
  width: 100%;
  background: rgb(51, 188, 247);
  color: white;
  padding: 40px 15px;
  text-align: center;
  border-radius: 10px;
  border: 3px dashed white;
  font-size: 20px;
  position: relative;
}

i {
  font-size: 85px;
}
#file {
  color: rgb(51, 188, 247);
  background: white;
}

.file-input {
  width: 200px;
  margin: auto;
  height: 68px;
  position: relative;
}
</style>