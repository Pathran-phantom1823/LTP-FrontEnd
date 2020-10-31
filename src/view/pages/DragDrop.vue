<template>
<div class = "uploader mt-20"
@dragenter="OnDragEnter"
@dragleave = "OnDragLeave"
@dragover.prevent
@drop = "onDrop"
:class=" {dragging:isDragging }"
>

  <i class ="fa fa-cloud-upload"></i>
  <p>Drag your images here</p>
  <div>OR</div>
  <div class ="file-input">
    <label for ="file"> Select a file</label>
    <input type = "file" id="file" @change="onInputChange" multiple>
  </div>
</div>
</template>

<script>

export default {
  data:() =>({ 
    isDragging:false,
    dragCount:0,
    files:[],
  }),
 methods: {

   OnDragEnter(e){
      e.preventDefault();
      this.dragCount++;
      this.isDragging = true;
   },
   OnDragLeave(e){
     this.dragCount -- ;
      e.preventDefault();
    if(this.dragCount <= 0)  
      this.isDragging = false;
   },
   onInputChange(e){ 
     console.log(e);
   },
   onDrop(e){
     e.preventDefault();
     e.stopPropagation();


     this.isDragging=false;
     const files = e.dataTransfer.files;
     console.log(files);
   },
 }
}
</script>
<style lang="scss" scoped>
.uploader{
  width:100%;
  background:rgb(51, 188, 247);
  color:white;
  padding:40px 15px;
  text-align:center;
  border-radius:10px;
  border:3px dashed white;
  font-size:20px;
  position:relative;
}

i{
  font-size :85px;
}
#file{
  color:rgb(51, 188, 247);
  background:white;
}

.file-input{
  width:200px;
  margin:auto;
  height:68px;
  position:relative;
}
</style>