<template>
  <div class="yit-tab style-2 mt-40">
    <ul class="nav nav-tabs white-color-bg img-shadow" id="myTab" role="tablist">
      <li class="nav-item">
        <a
          class="nav-link active"
          id="seven-tab"
          data-toggle="tab"
          href="#seven"
          role="tab"
          aria-controls="seven"
          aria-selected="true"
        >File</a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          id="eight-tab"
          data-toggle="tab"
          href="#eight"
          role="tab"
          aria-controls="eight"
          aria-selected="false"
        >Url</a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          id="nine-tab"
          data-toggle="tab"
          href="#nine"
          role="tab"
          aria-controls="nine"
          aria-selected="false"
        >Text</a>
      </li>
    </ul>
    <div class="tab-content img-shadow last-p-none" id="myTabContent">
      <div class="tab-pane fade show active" id="seven" role="tabpanel" aria-labelledby="seven-tab">
        <input type="file" class="form-control" />
        <button
          class="btn btn-primary-outline mt-20 mb-10"
        >Done</button>
      </div>
      <div class="tab-pane fade" id="eight" role="tabpanel" aria-labelledby="eight-tab">
        <input type="text" class="form-control" />
        <button
          class="btn btn-primary-outline mt-10"
        >Done</button>
      </div>
      <div class="tab-pane fade" id="nine" role="tabpanel" aria-labelledby="nine-tab">
        <input type="text" class="form-control" />
        <button
          class="btn btn-primary-outline mt-10"
        >Done</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
input{
    height: 100px;
}
button{
    width: 100px;
    color: black;
    background-color: white;
    border-radius: 10px;
    box-shadow: 2px 2px 3px #999;
    float: right;

}
button:hover{
    width: 100px;
    color: white;
    background-color: rgb(17, 58, 240);
    border-radius: 10px;
    box-shadow: 2px 2px 3px #999;
}
</style>