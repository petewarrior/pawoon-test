
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

$(document).ready(function() {
    $('a[title=Modify]').click(function(event) {
        event.preventDefault();
        console.log('modify');
        let hash = event.currentTarget.getAttribute('href');
        let parts = hash.substr(2).split('=');
        let action = parts[0];
        let id = parts[1];

        modifyProduct(id);
    });

    $('a[title=Delete]').click(function(event) {
        event.preventDefault();
        let hash = event.currentTarget.getAttribute('href');
        let parts = hash.substr(2).split('=');
        let action = parts[0];
        let id = parts[1];

        deleteProduct(id);
    });

    $('#btnAddProduct').click(function(event) {
        modifyProduct();
    });

    var modifyProduct = function(id) {
        if(id && id.length > 0) {
            axios.get('/api/product/'+id)
            .then((result) => {
                console.log(result);
                $('#createProductId').val(result.data.id);
                $('#createProductName').val(result.data.name);
                $('#createProductPrice').val(result.data.price);
                
                if(result.data.image && result.data.image.length > 0) {
                    $('#createProductImagePreview').attr('src', result.data.image).show();
                } else {
                    $('#createProductImagePreview').hide();
                }
            }, (error) => {
                console.error('ERROR: ' + error.message);
            });
        } else {
            $('#createProductId').val('');
            $('#createProductName').val('');
            $('#createProductPrice').val('');
            $('#createProductImage').val('');
            $('#createProductImagePreview').hide();
            
        }
        $('#createModal').modal('show');
    };

    var deleteProduct = function(id) {
        $('#deleteModal').modal('show');

        $('#confirmDelete').click(function() {
            if(id.length > 0) {
                axios.delete('/api/product/'+id)
                .then((result) => {
                    window.location.reload();
                }, (error) => {
                    console.error('ERROR: ' + error.message);
                });
            } else {
            }
        });
    };

    $('#createProduct').on('submit', function(event) {
        event.preventDefault();

        let data = new FormData(document.getElementById('createProduct'));
        
        axios.post('/api/product', data)
        .then((result) => {
            window.location.reload();
        }, (error) => {
            console.error('ERROR: ' + error.message);
        });
    });
});
