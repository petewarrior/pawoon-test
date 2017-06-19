@extends('layouts.app')

@section('content')
<!-- Button trigger modal -->
<button id="btnAddProduct" type="button" class="btn btn-primary">
  Add Product
</button>
{!! $grid !!}

<!-- Modal -->
<div class="modal fade" id="createModal" tabindex="-1" role="dialog" aria-labelledby="createModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="createModalLabel">Create</h4>
      </div>
      <form id="createProduct" method="POST">
        <div class="modal-body">
            <input type="hidden" id="createProductId" name="id" value="" />
            <img src="" id="createProductImagePreview" />
            <div class="form-group">
                <label for="createProductImage">Picture</label>
                <input type="file" class="form-control" id="createProductImage" name="image" placeholder="" />
            </div>
            <div class="form-group">
                <label for="createProductName">Name</label>
                <input type="text" required class="form-control" id="createProductName" name="name" placeholder="" />
            </div>
            <div class="form-group">
                <label for="createProductPrice">Price</label>
                <input type="number" required class="form-control" id="createProductPrice" placeholder="" step=".01" name="price" />
            </div>
        </div>
        <div class="modal-footer">
            <button class="btn btn-primary" type="submit">Save</button>
            <button class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </form>
    </div>
  </div>
</div>

<!-- Modal -->
<div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="deleteModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="deleteModalLabel">Delete</h4>
      </div>
        <div class="modal-body">
            Yakin mau menghapus?
        </div>
        <div class="modal-footer">
            <button id="confirmDelete" class="btn btn-primary">Delete</button>
            <button class="btn btn-default" data-dismiss="modal">Cancel</button>
        </div>
    </div>
  </div>
</div>
@endsection